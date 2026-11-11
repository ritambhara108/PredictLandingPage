import { SkeletonBlock, SkeletonLine } from "@/components/ui/skeleton";

function HeaderSkeleton() {
  return (
    <div className="pointer-events-none fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6">
      <div className="mx-auto flex h-[58px] max-w-[960px] items-center justify-between rounded-full border border-hairline bg-canvas/95 px-3 shadow-[0_8px_28px_rgba(0,0,0,0.06)] backdrop-blur-xl dark:shadow-[0_8px_28px_rgba(0,0,0,0.45)]">
        <div className="flex items-center gap-2.5 px-1">
          <SkeletonBlock className="size-9 rounded-full" />
          <SkeletonLine className="hidden h-4 w-24 sm:block" />
        </div>
        <div className="hidden items-center gap-2 md:flex">
          <SkeletonLine className="h-3 w-14" />
          <SkeletonLine className="h-3 w-20" />
          <SkeletonLine className="h-3 w-24" />
          <SkeletonLine className="h-3 w-14" />
        </div>
        <div className="flex items-center gap-2">
          <SkeletonBlock className="size-9 rounded-full" />
          <SkeletonBlock className="hidden h-[45px] w-[120px] rounded-[16px] sm:block" />
          <SkeletonBlock className="size-10 rounded-full md:hidden" />
        </div>
      </div>
    </div>
  );
}

function HeroSkeleton() {
  return (
    <section className="relative w-full overflow-hidden bg-canvas px-4 pb-16 pt-28 sm:px-6 sm:pt-32 lg:flex lg:h-dvh lg:min-h-dvh lg:items-center lg:px-0 lg:pb-0 lg:pt-16">
      <div className="relative z-10 w-full max-w-xl lg:w-[42%] lg:pl-[max(1.5rem,calc((100vw-1280px)/2+1.5rem))] lg:pr-4">
        <SkeletonLine className="h-5 w-48" />
        <SkeletonBlock className="mt-4 h-14 w-[min(100%,280px)] rounded-xl sm:h-16" />
        <div className="mt-5 space-y-2.5">
          <SkeletonLine className="h-4 w-full max-w-md" />
          <SkeletonLine className="h-4 w-[92%] max-w-sm" />
          <SkeletonLine className="h-4 w-[78%] max-w-xs" />
        </div>
        <div className="mt-7 flex flex-wrap gap-3">
          <SkeletonBlock className="h-[45px] w-[132px] rounded-[16px]" />
          <SkeletonBlock className="h-[45px] w-[168px] rounded-[16px]" />
        </div>
      </div>
      <div className="mt-12 hidden flex-1 lg:mt-0 lg:block">
        <div className="grid h-[min(70vh,560px)] grid-cols-2 gap-3 pr-8 xl:grid-cols-3">
          {Array.from({ length: 6 }).map((_, i) => (
            <SkeletonBlock
              key={i}
              className="h-full min-h-[180px] rounded-2xl"
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function AboutSkeleton() {
  return (
    <section className="bg-canvas px-6 py-16 sm:px-8 sm:py-20 lg:px-12">
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-2 lg:gap-14">
        <SkeletonBlock className="mx-auto aspect-[4/5] w-full max-w-md rounded-3xl lg:mx-0" />
        <div className="space-y-4">
          <SkeletonBlock className="h-9 w-72 rounded-lg" />
          <SkeletonLine className="h-4 w-full max-w-md" />
          <SkeletonLine className="h-4 w-[88%] max-w-sm" />
          <div className="flex gap-3 pt-2">
            <SkeletonBlock className="h-[45px] w-[120px] rounded-[16px]" />
            <SkeletonBlock className="h-[45px] w-[130px] rounded-[16px]" />
          </div>
          <div className="space-y-3 pt-6">
            <SkeletonLine className="h-3 w-28" />
            <SkeletonBlock className="h-6 w-64 rounded-md" />
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="flex items-center gap-3 py-1">
                <SkeletonBlock className="size-6 rounded-full" />
                <SkeletonLine className="h-4 flex-1 max-w-sm" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function PredictionsSkeleton() {
  return (
    <section className="bg-canvas px-6 py-16 sm:px-8 sm:py-20 lg:px-12">
      <div className="mx-auto max-w-6xl">
        <SkeletonBlock className="h-8 w-64 rounded-lg" />
        <SkeletonLine className="mt-3 h-4 w-full max-w-lg" />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 3 }).map((_, i) => (
            <div
              key={i}
              className="overflow-hidden rounded-2xl border border-hairline bg-surface-soft p-4"
            >
              <SkeletonBlock className="aspect-[16/10] w-full rounded-xl" />
              <SkeletonLine className="mt-4 h-4 w-20" />
              <SkeletonBlock className="mt-2 h-5 w-4/5 rounded-md" />
              <div className="mt-4 flex gap-2">
                <SkeletonBlock className="h-9 flex-1 rounded-lg" />
                <SkeletonBlock className="h-9 flex-1 rounded-lg" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function HowItWorksSkeleton() {
  return (
    <section className="bg-canvas px-6 py-16 sm:px-8 sm:py-20 lg:px-12">
      <div className="mx-auto max-w-6xl">
        <SkeletonBlock className="h-8 w-80 max-w-full rounded-lg" />
        <SkeletonLine className="mt-3 h-4 w-full max-w-lg" />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 6 }).map((_, i) => (
            <SkeletonBlock key={i} className="h-48 rounded-2xl" />
          ))}
        </div>
      </div>
    </section>
  );
}

function ComparisonSkeleton() {
  return (
    <section className="bg-canvas px-6 py-16 sm:px-8 sm:py-20 lg:px-12">
      <div className="mx-auto max-w-6xl">
        <SkeletonBlock className="h-8 w-72 rounded-lg" />
        <SkeletonLine className="mt-3 h-4 w-full max-w-xl" />
        <div className="mt-10 grid gap-4 lg:grid-cols-2">
          <SkeletonBlock className="h-80 rounded-2xl" />
          <SkeletonBlock className="h-80 rounded-2xl" />
        </div>
      </div>
    </section>
  );
}

function CtaSkeleton() {
  return (
    <section className="bg-canvas px-5 py-20 sm:px-8 sm:py-28 lg:px-12">
      <div className="mx-auto grid max-w-5xl items-center gap-10 sm:grid-cols-2">
        <div className="mx-auto grid w-fit grid-cols-3 gap-2">
          {Array.from({ length: 7 }).map((_, i) => (
            <SkeletonBlock
              key={i}
              className={`size-20 rounded-xl ${i === 3 ? "col-start-2" : ""}`}
            />
          ))}
        </div>
        <div className="space-y-4">
          <SkeletonLine className="h-5 w-56" />
          <SkeletonBlock className="h-12 w-full max-w-md rounded-lg" />
          <SkeletonLine className="h-4 w-full max-w-sm" />
          <SkeletonLine className="h-4 w-[85%] max-w-xs" />
          <div className="flex flex-wrap gap-3 pt-2">
            <SkeletonBlock className="h-[45px] w-48 rounded-[16px]" />
            <SkeletonBlock className="h-[45px] w-40 rounded-[16px]" />
          </div>
        </div>
      </div>
    </section>
  );
}

function FooterSkeleton() {
  return (
    <footer className="border-t border-hairline bg-canvas px-6 py-12 sm:px-8 lg:px-12">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 sm:flex-row sm:justify-between">
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <SkeletonBlock className="size-8 rounded-full" />
            <SkeletonLine className="h-4 w-24" />
          </div>
          <SkeletonLine className="h-3 w-48" />
        </div>
        <div className="flex gap-10">
          <div className="space-y-2">
            <SkeletonLine className="h-3 w-16" />
            <SkeletonLine className="h-3 w-20" />
            <SkeletonLine className="h-3 w-14" />
          </div>
          <div className="space-y-2">
            <SkeletonLine className="h-3 w-16" />
            <SkeletonLine className="h-3 w-20" />
            <SkeletonLine className="h-3 w-14" />
          </div>
        </div>
      </div>
    </footer>
  );
}

/** Full-page landing skeleton — PredEx pulse style, mirrors section layout. */
export function LandingPageSkeleton() {
  return (
    <div className="min-h-dvh bg-canvas" aria-busy aria-live="polite">
      <span className="sr-only">Loading page…</span>
      <HeaderSkeleton />
      <main>
        <HeroSkeleton />
        <AboutSkeleton />
        <PredictionsSkeleton />
        <HowItWorksSkeleton />
        <ComparisonSkeleton />
        <CtaSkeleton />
      </main>
      <FooterSkeleton />
    </div>
  );
}
