"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { heroShowcaseCards, type HeroShowcaseCard } from "@/data/hero-showcase";
import { FeatureScreen } from "./hero-feature-screens";

const COLS = 5;
const COL_WIDTH = 340;
const CARD_WIDTH = 324;
const CARD_GAP = 14;
const REST_SCALE = 1.2;
const TRAVEL_SCALE = 1.07;
const HOLD_MS = 5600;
const TILE_X = 3;
const TILE_Y = 3;
const ROWS = 7;
const HEIGHTS = [301, 346, 316, 369, 331, 283, 361, 311, 339, 291, 270, 354];

type PlacedCard = HeroShowcaseCard & {
  x: number;
  y: number;
  width: number;
  height: number;
  index: number;
};

function buildBaseTile() {
  const items = Array.from({ length: COLS * ROWS }, (_, index) => ({
    ...heroShowcaseCards[index % heroShowcaseCards.length],
    index,
  }));
  const colY = Array.from({ length: COLS }, () => 0);
  const cards = items.map((item, index) => {
    const col = index % COLS;
    const height = HEIGHTS[index % HEIGHTS.length]!;
    const x = col * COL_WIDTH;
    const y = colY[col]!;
    colY[col] = y + height + CARD_GAP;
    return {
      ...item,
      id: `${item.id}-${index}`,
      x,
      y,
      width: CARD_WIDTH,
      height,
      index,
    };
  });

  return {
    cards,
    width: COLS * COL_WIDTH,
    height: Math.max(...colY),
  };
}

function placeInfiniteWall() {
  const base = buildBaseTile();
  const cards: PlacedCard[] = [];

  for (let ty = 0; ty < TILE_Y; ty += 1) {
    for (let tx = 0; tx < TILE_X; tx += 1) {
      for (const card of base.cards) {
        cards.push({
          ...card,
          id: `${card.id}-t${tx}-${ty}`,
          x: card.x + tx * base.width,
          y: card.y + ty * base.height,
          index: cards.length,
        });
      }
    }
  }

  return {
    cards,
    width: base.width * TILE_X,
    height: base.height * TILE_Y,
    baseCount: base.cards.length,
  };
}

export function HeroCardWall() {
  const wallRef = useRef<HTMLDivElement>(null);
  const viewportRef = useRef<HTMLDivElement>(null);
  const frameRef = useRef(0);
  const focusedRef = useRef(0);
  const scaleTargetRef = useRef(REST_SCALE);
  const pos = useRef({ x: 0, y: 0, tx: 0, ty: 0, scale: REST_SCALE });
  const [focused, setFocused] = useState(0);
  const [ready, setReady] = useState(false);
  const reduce = useReducedMotion();
  const layout = useMemo(() => placeInfiniteWall(), []);

  // Tour the true center tile so top/bottom/left/right stay packed with neighbors.
  const tourIndexes = useMemo(() => {
    const centerTx = Math.floor(TILE_X / 2);
    const centerTy = Math.floor(TILE_Y / 2);
    const start = (centerTy * TILE_X + centerTx) * layout.baseCount;
    const end = start + layout.baseCount;
    const centerCards = layout.cards.slice(start, end);

    return centerCards
      .map((card, local) => ({ card, local, global: start + local }))
      .filter(({ local }) => {
        const col = local % COLS;
        const row = Math.floor(local / COLS);
        // Keep off the outer rows so cards remain above and below the frame.
        return col >= 1 && col <= 3 && row >= 1 && row <= ROWS - 3;
      })
      .filter((_, step) => step % 2 === 0)
      .slice(0, 12)
      .map(({ global }) => global);
  }, [layout.baseCount, layout.cards]);

  useEffect(() => {
    const wall = wallRef.current;
    const viewport = viewportRef.current;
    if (!wall || !viewport) return;

    const prefersReduced =
      reduce ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const frameCard = (index: number, scale: number) => {
      const card = layout.cards[index];
      if (!card) return;
      // Sit cards near the seam; keep vertical room so the bottom stays filled.
      const vx = viewport.clientWidth * 0.02;
      const spare = viewport.clientHeight - card.height * scale;
      const cardTop = spare > 40 ? Math.min(spare * 0.22, spare - 120) : 0;
      pos.current.tx = vx - card.x * scale;
      pos.current.ty = cardTop - card.y * scale;
      scaleTargetRef.current = scale;
    };

    const startIndex = tourIndexes[0] ?? 0;
    focusedRef.current = startIndex;
    setFocused(startIndex);
    frameCard(startIndex, prefersReduced ? 1.05 : REST_SCALE);
    pos.current.x = pos.current.tx;
    pos.current.y = pos.current.ty;
    wall.style.transform = `translate3d(${pos.current.x}px, ${pos.current.y}px, 0) scale(${pos.current.scale})`;
    setReady(true);

    if (prefersReduced) return;

    const tick = () => {
      pos.current.scale += (scaleTargetRef.current - pos.current.scale) / 24;
      pos.current.x += (pos.current.tx - pos.current.x) / 30;
      pos.current.y += (pos.current.ty - pos.current.y) / 30;
      wall.style.transform = `translate3d(${pos.current.x}px, ${pos.current.y}px, 0) scale(${pos.current.scale})`;
      frameRef.current = requestAnimationFrame(tick);
    };

    let step = 0;
    const cycle = () => {
      step = (step + 1) % tourIndexes.length;
      const next = tourIndexes[step]!;
      focusedRef.current = next;
      setFocused(next);
      frameCard(next, TRAVEL_SCALE);
      window.setTimeout(() => {
        if (focusedRef.current === next) frameCard(next, REST_SCALE);
      }, 1100);
    };

    const onResize = () => frameCard(focusedRef.current, REST_SCALE);

    frameRef.current = requestAnimationFrame(tick);
    const interval = window.setInterval(cycle, HOLD_MS);
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(frameRef.current);
      window.clearInterval(interval);
      window.removeEventListener("resize", onResize);
    };
  }, [layout.cards, tourIndexes, reduce]);

  return (
    <motion.div
      ref={viewportRef}
      data-hero-wall="true"
      className="hero-card-wall relative h-[420px] w-full overflow-hidden sm:h-[520px] lg:absolute lg:inset-y-0 lg:left-[40%] lg:right-0 lg:z-10 lg:h-full lg:w-auto"
      initial={reduce ? false : { opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
      aria-label="Product feature previews"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 z-20 h-8 bg-linear-to-b from-canvas/90 to-transparent"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 z-20 h-8 bg-linear-to-t from-canvas/90 to-transparent"
      />

      <div
        ref={wallRef}
        className="absolute top-0 left-0 origin-top-left transform-gpu will-change-transform"
        style={{ width: layout.width, height: layout.height }}
      >
        {layout.cards.map((card, i) => {
          const isFocused = card.index === focused;
          // Stagger appear relative to distance from the first tour card.
          const appearDelay = reduce
            ? 0
            : 0.15 + Math.min(0.55, (i % layout.baseCount) * 0.02);

          return (
            <motion.a
              key={card.id}
              href={card.href}
              className="hero-card-chrome absolute flex flex-col gap-1.5 overflow-hidden rounded-xl p-1.5"
              style={{
                left: card.x,
                top: card.y,
                width: card.width,
                height: card.height,
              }}
              initial={
                reduce
                  ? false
                  : { opacity: 0, scale: 0.9 }
              }
              animate={
                ready
                  ? {
                      opacity: isFocused ? 1 : 0.88,
                      scale: 1,
                    }
                  : { opacity: 0, scale: 0.9 }
              }
              transition={{
                opacity: {
                  duration: ready ? 0.45 : 0.55,
                  delay: ready ? 0 : appearDelay,
                  ease: [0.22, 1, 0.36, 1],
                },
                scale: {
                  duration: 0.55,
                  delay: ready ? 0 : appearDelay,
                  ease: [0.22, 1, 0.36, 1],
                },
              }}
            >
              <span className="flex shrink-0 items-center px-1.5 pt-1 font-sans text-xs font-medium text-muted">
                {card.category}
              </span>
              <span className="hero-card-screen relative min-h-0 flex-1 overflow-hidden rounded-lg">
                <FeatureScreen card={card} active={isFocused} />
              </span>
            </motion.a>
          );
        })}
      </div>
    </motion.div>
  );
}
