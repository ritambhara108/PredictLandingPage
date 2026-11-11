"use client";

import Image from "next/image";
import { useEffect, useState, type ReactNode } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { IconCheck, IconCopy } from "@tabler/icons-react";
import { Hub } from "@lucasmarkes/hairline/react";
import { Scales } from "@/components/ui/scales";
import { BRAND } from "@/lib/brand";
import { cn } from "@/lib/utils";

const ease = [0.22, 1, 0.36, 1] as const;

const insetPanel =
  "overflow-hidden rounded-[14px] border border-hairline/60 bg-canvas shadow-[0_2px_8px_-4px_rgba(0,0,0,0.14)] dark:border-hairline/30 dark:shadow-[0_2px_10px_-4px_rgba(0,0,0,0.45)]";

function GoogleIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden
    >
      <g>
        <path d="M12.2 5.87C12.13 5.87 12.06 5.87 12 5.88V2.00999C12.07 1.99999 12.13 2 12.2 2C14.46 2 16.4 2.69 17.99 3.86C18.49 4.22 18.53 4.95 18.09 5.38L16.7 6.74001C16.36 7.07001 15.84 7.13 15.45 6.86C14.7 6.34 13.63 5.87 12.2 5.87Z" />
        <path d="M21.8 12.2197C21.8 15.2697 20.71 17.8297 18.82 19.5797C17.17 21.1097 14.9 21.9997 12.2 21.9997C12.13 21.9997 12.07 21.9997 12 21.9897V18.1197C12.07 18.1297 12.13 18.1297 12.2 18.1297C13.69 18.1297 14.82 17.7197 15.67 17.1297C17 16.1997 17.6 14.8097 17.71 13.8897H13.2C12.65 13.8897 12.2 13.4397 12.2 12.8897V11.1797C12.2 10.6297 12.65 10.1797 13.2 10.1797H20.75C21.26 10.1797 21.69 10.5597 21.74 11.0697C21.78 11.4197 21.8 11.7897 21.8 12.2197Z" />
        <path
          opacity="0.4"
          d="M6.5002 10.0198C6.3002 10.6398 6.1802 11.3098 6.1802 11.9998C6.1802 12.6898 6.3002 13.3498 6.5102 13.9798C7.2902 16.3298 9.4502 18.0398 12.0002 18.1198V21.9898C8.1802 21.9198 4.8902 19.6998 3.2802 16.4898H3.2702C2.5902 15.1298 2.2002 13.6098 2.2002 11.9998C2.2002 10.3898 2.5902 8.86977 3.2702 7.50977C4.8802 4.29977 8.1702 2.07977 12.0002 2.00977V5.87978C9.6402 5.94978 7.6302 7.40977 6.7102 9.47977C6.6302 9.65977 6.5602 9.83978 6.5002 10.0198Z"
        />
      </g>
    </svg>
  );
}

/** Refer card footer — users + sparkle (filled) */
function ReferBadgeIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden
    >
      <path d="M9.25 1.27002C6.63 1.27002 4.5 3.40002 4.5 6.02002C4.5 8.64002 6.51 10.67 9.13 10.76C9.21 10.75 9.29 10.75 9.35 10.76H9.42C11.98 10.67 13.99 8.59002 14 6.02002C14 3.40002 11.87 1.27002 9.25 1.27002Z" />
      <path d="M20.24 6.61C20.4 8.55 19.02 10.25 17.11 10.48H17.06C17 10.48 16.94 10.48 16.89 10.5C15.92 10.55 15.03 10.24 14.36 9.67C15.39 8.75 15.98 7.37 15.86 5.87C15.79 5.06 15.51 4.32 15.09 3.69C15.47 3.5 15.91 3.38 16.36 3.34C18.32 3.17 20.07 4.63 20.24 6.61Z" />
      <path
        opacity="0.4"
        d="M22.24 15.86C22.16 16.83 21.54 17.67 20.5 18.24C19.5 18.79 18.24 19.05 16.99 19.02C17.71 18.37 18.13 17.5601 18.21 16.7C18.31 15.46 17.72 14.27 16.54 13.32C15.87 12.79 15.09 12.37 14.24 12.06C16.45 11.42 19.23 11.85 20.94 13.23C21.86 13.97 22.33 14.9 22.24 15.86Z"
      />
      <path
        opacity="0.4"
        d="M14.33 13.42C11.54 11.56 6.99002 11.56 4.18002 13.42C2.91002 14.27 2.21002 15.42 2.21002 16.65C2.21002 17.04 2.29002 17.41 2.42002 17.78L2.68002 17.71C3.19002 17.56 3.56002 17.19 3.70002 16.69L3.96002 15.74L4.02002 15.57C4.21002 15.07 4.69002 14.74 5.24002 14.74C5.80002 14.74 6.25002 15.08 6.44002 15.58L6.75002 16.7C6.88002 17.2 7.27002 17.58 7.76002 17.72L8.92002 18.05C9.42002 18.26 9.72002 18.73 9.72002 19.28C9.72002 19.8627 9.3212 20.3565 8.77002 20.53L7.78002 20.8C7.59002 20.85 7.42002 20.95 7.27002 21.06C7.92002 21.18 8.58002 21.27 9.25002 21.27C11.09 21.27 12.93 20.8 14.33 19.86C15.59 19.01 16.29 17.87 16.29 16.63C16.28 15.4 15.59 14.26 14.33 13.42Z"
      />
      <path d="M8.74 19.25C8.74 19.32 8.7 19.48 8.51 19.54L7.53 19.81C6.68 20.04 6.04 20.68 5.81 21.53L5.55 22.49C5.49 22.71 5.32 22.73 5.24 22.73C5.16 22.73 4.99 22.71 4.93 22.49L4.67 21.52C4.44 20.68 3.79 20.04 2.95 19.81L1.98 19.55C1.77 19.49 1.75 19.31 1.75 19.24C1.75 19.16 1.77 18.98 1.98 18.92L2.96 18.66C3.8 18.42 4.44 17.78 4.67 16.94L4.95 15.92C5.02 15.75 5.18 15.72 5.24 15.72C5.3 15.72 5.47 15.74 5.53 15.9L5.81 16.93C6.04 17.77 6.69 18.41 7.53 18.65L8.53 18.93C8.73 19.01 8.74 19.19 8.74 19.25Z" />
    </svg>
  );
}

/** Refer demo header — people group (stroke) */
function ReferPeopleIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      aria-hidden
    >
      <path
        opacity="0.4"
        d="M17.9976 7.16C17.9376 7.15 17.8676 7.15 17.8076 7.16C16.4276 7.11 15.3276 5.98 15.3276 4.58C15.3276 3.15 16.4776 2 17.9076 2C19.3376 2 20.4876 3.16 20.4876 4.58C20.4776 5.98 19.3776 7.11 17.9976 7.16Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        opacity="0.4"
        d="M16.9675 14.4402C18.3375 14.6702 19.8475 14.4302 20.9075 13.7202C22.3175 12.7802 22.3175 11.2402 20.9075 10.3002C19.8375 9.59016 18.3075 9.35016 16.9375 9.59016"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        opacity="0.4"
        d="M5.96754 7.16C6.02754 7.15 6.09754 7.15 6.15754 7.16C7.53754 7.11 8.63754 5.98 8.63754 4.58C8.63754 3.15 7.48754 2 6.05754 2C4.62754 2 3.47754 3.16 3.47754 4.58C3.48754 5.98 4.58754 7.11 5.96754 7.16Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        opacity="0.4"
        d="M6.9975 14.4402C5.6275 14.6702 4.1175 14.4302 3.0575 13.7202C1.6475 12.7802 1.6475 11.2402 3.0575 10.3002C4.1275 9.59016 5.6575 9.35016 7.0275 9.59016"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 14.6297C11.94 14.6197 11.87 14.6197 11.81 14.6297C10.43 14.5797 9.32996 13.4497 9.32996 12.0497C9.32996 10.6197 10.48 9.46973 11.91 9.46973C13.34 9.46973 14.49 10.6297 14.49 12.0497C14.48 13.4497 13.38 14.5897 12 14.6297Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.08997 17.7794C7.67997 18.7194 7.67997 20.2594 9.08997 21.1994C10.69 22.2694 13.31 22.2694 14.91 21.1994C16.32 20.2594 16.32 18.7194 14.91 17.7794C13.32 16.7194 10.69 16.7194 9.08997 17.7794Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/** Wallet card footer — filled wallet */
function WalletBadgeIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden
    >
      <path
        opacity="0.4"
        d="M18.04 13.55C17.62 13.96 17.38 14.55 17.44 15.18C17.53 16.26 18.52 17.05 19.6 17.05H21.5V18.24C21.5 20.31 19.81 22 17.74 22H6.26C4.19 22 2.5 20.31 2.5 18.24V11.51C2.5 9.44001 4.19 7.75 6.26 7.75H17.74C19.81 7.75 21.5 9.44001 21.5 11.51V12.95H19.48C18.92 12.95 18.41 13.17 18.04 13.55Z"
      />
      <path d="M14.85 3.94964V7.74962H6.26C4.19 7.74962 2.5 9.43963 2.5 11.5096V7.83965C2.5 6.64965 3.23 5.58961 4.34 5.16961L12.28 2.16961C13.52 1.70961 14.85 2.61963 14.85 3.94964Z" />
      <path d="M22.5598 13.9702V16.0302C22.5598 16.5802 22.1198 17.0302 21.5598 17.0502H19.5998C18.5198 17.0502 17.5298 16.2602 17.4398 15.1802C17.3798 14.5502 17.6198 13.9602 18.0398 13.5502C18.4098 13.1702 18.9198 12.9502 19.4798 12.9502H21.5598C22.1198 12.9702 22.5598 13.4202 22.5598 13.9702Z" />
      <path d="M14 12.75H7C6.59 12.75 6.25 12.41 6.25 12C6.25 11.59 6.59 11.25 7 11.25H14C14.41 11.25 14.75 11.59 14.75 12C14.75 12.41 14.41 12.75 14 12.75Z" />
    </svg>
  );
}

/** Withdraw demo — verify */
function WithdrawVerifyIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden
    >
      <path
        opacity="0.4"
        d="M10.7499 2.45031C11.4399 1.86031 12.5699 1.86031 13.2699 2.45031L14.8499 3.81031C15.1499 4.07031 15.7099 4.28031 16.1099 4.28031H17.8099C18.8699 4.28031 19.7399 5.15031 19.7399 6.21031V7.91031C19.7399 8.30031 19.9499 8.87031 20.2099 9.17031L21.5699 10.7503C22.1599 11.4403 22.1599 12.5703 21.5699 13.2703L20.2099 14.8503C19.9499 15.1503 19.7399 15.7103 19.7399 16.1103V17.8103C19.7399 18.8703 18.8699 19.7403 17.8099 19.7403H16.1099C15.7199 19.7403 15.1499 19.9503 14.8499 20.2103L13.2699 21.5703C12.5799 22.1603 11.4499 22.1603 10.7499 21.5703L9.16988 20.2103C8.86988 19.9503 8.30988 19.7403 7.90988 19.7403H6.17988C5.11988 19.7403 4.24988 18.8703 4.24988 17.8103V16.1003C4.24988 15.7103 4.03988 15.1503 3.78988 14.8503L2.43988 13.2603C1.85988 12.5703 1.85988 11.4503 2.43988 10.7603L3.78988 9.17031C4.03988 8.87031 4.24988 8.31031 4.24988 7.92031V6.20031C4.24988 5.14031 5.11988 4.27031 6.17988 4.27031H7.90988C8.29988 4.27031 8.86988 4.06031 9.16988 3.80031L10.7499 2.45031Z"
      />
      <path d="M10.7901 15.1693C10.5901 15.1693 10.4001 15.0893 10.2601 14.9493L7.84006 12.5293C7.55006 12.2393 7.55006 11.7593 7.84006 11.4693C8.13006 11.1793 8.61006 11.1793 8.90006 11.4693L10.7901 13.3593L15.0901 9.0593C15.3801 8.7693 15.8601 8.7693 16.1501 9.0593C16.4401 9.3493 16.4401 9.8293 16.1501 10.1193L11.3201 14.9493C11.1801 15.0893 10.9901 15.1693 10.7901 15.1693Z" />
    </svg>
  );
}

/** Withdraw demo — confirm */
function WithdrawConfirmIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden
    >
      <path
        opacity="0.4"
        d="M22 7.77039V9.00039H2V7.54039C2 5.25039 3.86 3.40039 6.15 3.40039H16V5.97039C16 7.24039 16.76 8.00039 18.03 8.00039H20.97C21.37 8.00039 21.71 7.93039 22 7.77039Z"
      />
      <path d="M2 9V16.46C2 18.75 3.86 20.6 6.15 20.6H17.85C20.14 20.6 22 18.75 22 16.46V9H2ZM8 17.25H6C5.59 17.25 5.25 16.91 5.25 16.5C5.25 16.09 5.59 15.75 6 15.75H8C8.41 15.75 8.75 16.09 8.75 16.5C8.75 16.91 8.41 17.25 8 17.25ZM14.5 17.25H10.5C10.09 17.25 9.75 16.91 9.75 16.5C9.75 16.09 10.09 15.75 10.5 15.75H14.5C14.91 15.75 15.25 16.09 15.25 16.5C15.25 16.91 14.91 17.25 14.5 17.25Z" />
      <path d="M20.97 1H18.03C16.76 1 16 1.76 16 3.03V5.97C16 7.24 16.76 8 18.03 8H20.97C22.24 8 23 7.24 23 5.97V3.03C23 1.76 22.24 1 20.97 1ZM21.63 3.45L19.26 6.22C19.17 6.33 19.03 6.4 18.89 6.4C18.88 6.4 18.88 6.4 18.87 6.4C18.73 6.4 18.6 6.35 18.5 6.25L17.4 5.17C17.2 4.97 17.2 4.64 17.4 4.44C17.6 4.24 17.93 4.23 18.13 4.44L18.83 5.13L20.83 2.79C21.02 2.57 21.34 2.55 21.56 2.73C21.79 2.91 21.81 3.24 21.63 3.45Z" />
    </svg>
  );
}

/** Withdraw demo — secure */
function WithdrawSecureIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden
    >
      <path
        opacity="0.4"
        d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81V16.18C2 19.83 4.17 22 7.81 22H16.18C19.82 22 21.99 19.83 21.99 16.19V7.81C22 4.17 19.83 2 16.19 2Z"
      />
      <path d="M15.8902 8.11031C14.4102 6.64031 12.0102 6.64031 10.5402 8.11031C9.51019 9.13031 9.20019 10.6103 9.60019 11.9103L7.25019 14.2603C7.09019 14.4303 6.97019 14.7603 7.01019 15.0003L7.16019 16.0903C7.21019 16.4503 7.55019 16.7903 7.91019 16.8403L9.00019 17.0003C9.24019 17.0303 9.57019 16.9303 9.74019 16.7503L10.1502 16.3403C10.2502 16.2503 10.2502 16.0903 10.1502 15.9903L9.18019 15.0203C9.04019 14.8803 9.04019 14.6403 9.18019 14.4903C9.32019 14.3503 9.56019 14.3503 9.71019 14.4903L10.6802 15.4603C10.7702 15.5503 10.9302 15.5503 11.0302 15.4603L12.0902 14.4103C13.3802 14.8103 14.8602 14.5003 15.8902 13.4803C17.3702 11.9903 17.3702 9.59031 15.8902 8.11031ZM13.2502 12.0003C12.5602 12.0003 12.0002 11.4403 12.0002 10.7503C12.0002 10.0603 12.5602 9.50031 13.2502 9.50031C13.9402 9.50031 14.5002 10.0603 14.5002 10.7503C14.5002 11.4403 13.9402 12.0003 13.2502 12.0003Z" />
    </svg>
  );
}

/** Blockchain demo — verified lock badge */
function ChainVerifiedIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden
    >
      <path
        opacity="0.4"
        d="M12.0001 17.3498C12.9003 17.3498 13.6301 16.6201 13.6301 15.7198C13.6301 14.8196 12.9003 14.0898 12.0001 14.0898C11.0999 14.0898 10.3701 14.8196 10.3701 15.7198C10.3701 16.6201 11.0999 17.3498 12.0001 17.3498Z"
      />
      <path d="M16.65 9.43945H7.35C3.25 9.43945 2 10.6895 2 14.7895V16.6495C2 20.7495 3.25 21.9995 7.35 21.9995H16.65C20.75 21.9995 22 20.7495 22 16.6495V14.7895C22 10.6895 20.75 9.43945 16.65 9.43945ZM12 18.7395C10.33 18.7395 8.98 17.3795 8.98 15.7195C8.98 14.0595 10.33 12.6995 12 12.6995C13.67 12.6995 15.02 14.0595 15.02 15.7195C15.02 17.3795 13.67 18.7395 12 18.7395Z" />
      <path
        opacity="0.4"
        d="M7.12021 9.45V8.28C7.12021 5.35 7.95021 3.4 12.0002 3.4C16.0502 3.4 16.8802 5.35 16.8802 8.28V9.45C17.3902 9.46 17.8502 9.48 18.2802 9.54V8.28C18.2802 5.58 17.6302 2 12.0002 2C6.37021 2 5.72021 5.58 5.72021 8.28V9.53C6.14021 9.48 6.61021 9.45 7.12021 9.45Z"
      />
    </svg>
  );
}

/** Blockchain card footer — shield + keyhole (filled) */
function ChainBadgeIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden
    >
      <path
        opacity="0.4"
        d="M10.9598 2.1094L5.4598 4.1694C4.4098 4.5694 3.5498 5.8094 3.5498 6.9394V15.0394C3.5498 15.8494 4.0798 16.9194 4.7298 17.3994L10.2298 21.5094C11.1998 22.2394 12.7898 22.2394 13.7598 21.5094L19.2598 17.3994C19.9098 16.9094 20.4398 15.8494 20.4398 15.0394V6.9394C20.4398 5.8194 19.5798 4.5694 18.5298 4.1794L13.0298 2.1194C12.4698 1.8994 11.5298 1.8994 10.9598 2.1094Z"
      />
      <path d="M14.5 10.5C14.5 9.12 13.38 8 12 8C10.62 8 9.5 9.12 9.5 10.5C9.5 11.62 10.24 12.55 11.25 12.87V15.5C11.25 15.91 11.59 16.25 12 16.25C12.41 16.25 12.75 15.91 12.75 15.5V12.87C13.76 12.55 14.5 11.62 14.5 10.5Z" />
    </svg>
  );
}

/** Withdraw card footer — lock with dots (filled) */
function WithdrawBadgeIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden
    >
      <path d="M18.75 8V10.1C18.31 10.04 17.81 10.01 17.25 10V8C17.25 4.85 16.36 2.75 12 2.75C7.64 2.75 6.75 4.85 6.75 8V10C6.19 10.01 5.69 10.04 5.25 10.1V8C5.25 5.1 5.95 1.25 12 1.25C18.05 1.25 18.75 5.1 18.75 8Z" />
      <path
        opacity="0.4"
        d="M22 15V17C22 21 21 22 17 22H7C3 22 2 21 2 17V15C2 11.66 2.7 10.41 5.25 10.1C5.69 10.04 6.19 10.01 6.75 10H17.25C17.81 10.01 18.31 10.04 18.75 10.1C21.3 10.41 22 11.66 22 15Z"
      />
      <path d="M8 17.0008C7.87 17.0008 7.74 16.9708 7.62 16.9208C7.49 16.8708 7.39001 16.8008 7.29001 16.7108C7.11001 16.5208 7 16.2608 7 16.0008C7 15.8708 7.02999 15.7408 7.07999 15.6208C7.12999 15.5008 7.20001 15.3908 7.29001 15.2908C7.39001 15.2008 7.49 15.1308 7.62 15.0808C7.99 14.9208 8.42999 15.0108 8.70999 15.2908C8.79999 15.3908 8.87001 15.5008 8.92001 15.6208C8.97001 15.7408 9 15.8708 9 16.0008C9 16.2608 8.88999 16.5208 8.70999 16.7108C8.51999 16.8908 8.26 17.0008 8 17.0008Z" />
      <path d="M12 16.9992C11.73 16.9992 11.48 16.8892 11.29 16.7092C11.2 16.6092 11.13 16.4992 11.08 16.3792C11.03 16.2592 11 16.1292 11 15.9992C11 15.7292 11.11 15.4792 11.29 15.2892C11.66 14.9192 12.33 14.9192 12.71 15.2892C12.89 15.4792 13 15.7292 13 15.9992C13 16.1292 12.97 16.2592 12.92 16.3792C12.87 16.4992 12.8 16.6092 12.71 16.7092C12.52 16.8892 12.26 16.9992 12 16.9992Z" />
      <path d="M16 16.9992C15.74 16.9992 15.48 16.8892 15.29 16.7092C15.11 16.5192 15 16.2692 15 15.9992C15 15.7292 15.11 15.4792 15.29 15.2892C15.67 14.9192 16.34 14.9192 16.71 15.2892C16.75 15.3392 16.79 15.3892 16.83 15.4492C16.87 15.4992 16.9 15.5592 16.92 15.6192C16.95 15.6792 16.97 15.7392 16.98 15.7992C16.99 15.8692 17 15.9392 17 15.9992C17 16.2592 16.89 16.5192 16.71 16.7092C16.52 16.8892 16.26 16.9992 16 16.9992Z" />
    </svg>
  );
}

/** Predict card footer — trophy + sparkle (filled) */
function PredictBadgeIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden
    >
      <path
        opacity="0.4"
        d="M6.91 12H6.44C3.99 12 2 10.01 2 7.55997V5.32997C2 4.71997 2.5 4.21997 3.11 4.21997H6.44V9.77997C6.44 10.57 6.6 11.32 6.91 12Z"
      />
      <path d="M17.34 21.5399C17.14 21.8299 16.8 21.9999 16.44 21.9999H7.56C7.2 21.9999 6.86 21.8299 6.66 21.5399C6.45 21.2499 6.39 20.8799 6.5 20.5399L6.87 19.4299C7.02 18.9699 7.45 18.6699 7.93 18.6699H16.07C16.55 18.6699 16.98 18.9699 17.13 19.4299L17.5 20.5399C17.61 20.8799 17.55 21.2499 17.34 21.5399Z" />
      <path d="M12.75 15.33V18.67H11.25V15.33C11.25 15.33 11.25 15.29 11.26 15.27C11.5 15.31 11.75 15.33 12 15.33C12.25 15.33 12.5 15.31 12.74 15.28C12.75 15.3 12.75 15.31 12.75 15.33Z" />
      <path d="M13.77 14.5C13.2 14.34 12.81 13.84 12.81 13.23C12.81 12.62 13.19 12.12 13.79 11.95L14.75 11.7C15.26 11.55 15.63 11.18 15.77 10.68L16.03 9.73L16.09 9.56C16.28 9.06 16.73 8.75 17.28 8.75C17.38 8.75 17.47 8.77 17.56 8.79V3.11C17.56 2.5 17.06 2 16.44 2H7.56C6.94 2 6.44 2.5 6.44 3.11V9.78C6.44 10.57 6.6 11.32 6.91 12C7.18 12.64 7.58 13.22 8.07 13.71C8.91 14.55 10.02 15.12 11.26 15.27C11.5 15.31 11.75 15.33 12 15.33C12.25 15.33 12.5 15.31 12.74 15.28C13.38 15.2 13.98 14.99 14.53 14.71L13.77 14.5Z" />
      <path
        opacity="0.4"
        d="M20.89 4.21997H17.56V8.78997C17.99 8.87997 18.35 9.15997 18.51 9.56997L18.82 10.69C18.92 11.06 19.16 11.36 19.47 11.55C20.96 10.83 22 9.31997 22 7.55997V5.32997C22 4.71997 21.5 4.21997 20.89 4.21997Z"
      />
      <path d="M20.81 13.25C20.81 13.32 20.77 13.48 20.58 13.54L19.6 13.81C18.75 14.04 18.11 14.68 17.88 15.53L17.62 16.49C17.56 16.71 17.39 16.73 17.31 16.73C17.23 16.73 17.06 16.71 17 16.49L16.74 15.52C16.51 14.68 15.86 14.04 15.02 13.81L14.05 13.55C13.84 13.49 13.82 13.31 13.82 13.24C13.82 13.16 13.84 12.98 14.05 12.92L15.03 12.66C15.87 12.42 16.51 11.78 16.74 10.94L17.02 9.91997C17.09 9.74997 17.25 9.71997 17.31 9.71997C17.37 9.71997 17.54 9.73997 17.6 9.89997L17.88 10.93C18.11 11.77 18.76 12.41 19.6 12.65L20.6 12.93C20.8 13.01 20.81 13.19 20.81 13.25Z" />
    </svg>
  );
}

/** Wallet demo header — secured wallet (stroke) */
function WalletSecuredIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      aria-hidden
    >
      <path
        d="M18.04 13.55C17.62 13.96 17.38 14.55 17.44 15.18C17.53 16.26 18.52 17.05 19.6 17.05H21.5V18.24C21.5 20.31 19.81 22 17.74 22H7.63C7.94 21.74 8.21 21.42 8.42 21.06C8.79 20.46 9 19.75 9 19C9 16.79 7.21 15 5 15C4.06 15 3.19 15.33 2.5 15.88V11.51C2.5 9.44001 4.18999 7.75 6.25999 7.75H17.74C19.81 7.75 21.5 9.44001 21.5 11.51V12.95H19.48C18.92 12.95 18.41 13.17 18.04 13.55Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        opacity="0.4"
        d="M2.5 12.4103V7.84035C2.5 6.65035 3.23 5.5903 4.34 5.1703L12.28 2.1703C13.52 1.7003 14.85 2.62033 14.85 3.95033V7.75032"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M22.5598 13.9702V16.0302C22.5598 16.5802 22.1198 17.0302 21.5598 17.0502H19.5998C18.5198 17.0502 17.5298 16.2602 17.4398 15.1802C17.3798 14.5502 17.6198 13.9602 18.0398 13.5502C18.4098 13.1702 18.9198 12.9502 19.4798 12.9502H21.5598C22.1198 12.9702 22.5598 13.4202 22.5598 13.9702Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        opacity="0.4"
        d="M7 12H14"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9 19C9 19.75 8.79 20.46 8.42 21.06C8.21 21.42 7.94 21.74 7.63 22C6.93 22.63 6.01 23 5 23C3.54 23 2.27 22.22 1.58 21.06C1.21 20.46 1 19.75 1 19C1 17.74 1.58 16.61 2.5 15.88C3.19 15.33 4.06 15 5 15C7.21 15 9 16.79 9 19Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3.43994 18.9995L4.42993 19.9895L6.55994 18.0195"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function LoginDemo() {
  const reduce = useReducedMotion();
  const code = ["4", "1", "1", "8", "0", "2"];
  const [filled, setFilled] = useState(reduce ? code.length : 3);

  useEffect(() => {
    if (reduce) return;
    let n = 0;
    const id = window.setInterval(() => {
      n = n >= code.length ? 0 : n + 1;
      setFilled(n);
    }, 500);
    return () => window.clearInterval(id);
  }, [reduce, code.length]);

  return (
    <div className="relative flex h-full flex-col justify-center overflow-hidden">
      <Scales orientation="diagonal" size={8} />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_45%,var(--canvas)_0%,transparent_72%)]"
      />

      <div className="relative z-10 flex flex-col gap-3 p-3.5 sm:p-4">
        <div className="mb-1 flex flex-col items-center gap-1.5 text-center">
          <span className="relative grid size-14 place-items-center overflow-hidden rounded-2xl bg-surface-soft ring-1 ring-hairline/70 shadow-lg">
            <Image
              src={BRAND.iconSrc}
              alt=""
              width={48}
              height={48}
              className="size-12 object-contain rounded-lg"
            />
          </span>
          <p className="text-[13px] md:text-[16px] font-semibold tracking-[-0.02em] text-ink">
            Welcome to {BRAND.name}
          </p>
          <p className="text-[11px] md:text-[13px] font-medium leading-snug text-muted">
            Sign in with Google or a One Time Password
          </p>
        </div>

        <div className="flex h-10 items-center justify-center gap-2 rounded-xl border border-hairline/70 bg-surface-soft/95 text-[13px] font-medium tracking-[-0.02em] text-ink backdrop-blur-[2px] shadow-sm">
          <GoogleIcon className="size-4 text-ink" />
          Continue with Google
        </div>
        <div className="flex items-center gap-2 text-[11px] font-medium text-muted">
          <span className="h-px flex-1 bg-hairline" />
          OTP
          <span className="h-px flex-1 bg-hairline" />
        </div>
        <div className="flex w-full items-center justify-center gap-2" aria-hidden>
          <div className="flex gap-2">
            {code.slice(0, 3).map((digit, i) => {
              const show = i < filled;
              const active = filled < code.length && filled === i;
              return (
                <span
                  key={i}
                  className={cn(
                    "relative flex size-11 items-center justify-center sm:size-12",
                    "rounded-xl border border-hairline/30 bg-surface-soft",
                    "shadow-[0_1px_3px_rgba(0,0,0,0.14)] dark:border-hairline/30 dark:shadow-[0_1px_4px_rgba(0,0,0,0.55)]",
                    "text-lg font-medium text-ink tabular-nums",
                  )}
                >
                  {show ? (
                    <span className="inline-block animate-[otp-digit-in_120ms_ease-out]">
                      {digit}
                    </span>
                  ) : null}
                  {active ? (
                    <span className="pointer-events-none absolute inset-0 flex items-center justify-center">
                      <span className="h-5 w-px animate-otp-caret-blink bg-ink" />
                    </span>
                  ) : null}
                </span>
              );
            })}
          </div>
          <span className="flex w-3 shrink-0 items-center justify-center text-sm text-muted sm:w-4">
            –
          </span>
          <div className="flex gap-2">
            {code.slice(3).map((digit, i) => {
              const index = i + 3;
              const show = index < filled;
              const active = filled < code.length && filled === index;
              return (
                <span
                  key={index}
                  className={cn(
                    "relative flex size-11 items-center justify-center sm:size-12",
                    "rounded-xl border border-hairline/30 bg-surface-soft",
                    "shadow-[0_1px_3px_rgba(0,0,0,0.14)] dark:border-hairline/30 dark:shadow-[0_1px_4px_rgba(0,0,0,0.55)]",
                    "text-lg font-medium text-ink tabular-nums",
                  )}
                >
                  {show ? (
                    <span className="inline-block animate-[otp-digit-in_120ms_ease-out]">
                      {digit}
                    </span>
                  ) : null}
                  {active ? (
                    <span className="pointer-events-none absolute inset-0 flex items-center justify-center">
                      <span className="h-5 w-px animate-otp-caret-blink bg-ink" />
                    </span>
                  ) : null}
                </span>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

function WalletDemo() {
  const reduce = useReducedMotion();
  const [on, setOn] = useState(true);

  useEffect(() => {
    if (reduce) return;
    const id = window.setInterval(() => setOn((v) => !v), 2400);
    return () => window.clearInterval(id);
  }, [reduce]);

  return (
    <div className="flex h-full flex-col justify-center p-3.5 sm:p-4">
      <div className="flex items-center justify-between gap-2">
        <span className="inline-flex items-center gap-1.5 text-[12px] font-medium text-muted">
          <WalletSecuredIcon className="size-3.5 text-primary" />
          Wallet
        </span>
        <span className="rounded-md bg-success/12 px-1.5 py-0.5 text-[10px] font-semibold text-success">
          Secured
        </span>
      </div>
      <AnimatePresence mode="wait">
        <motion.p
          key={on ? "a" : "b"}
          initial={reduce ? false : { opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -6 }}
          className="mt-2 text-[22px] font-semibold tracking-[-0.04em] text-ink"
        >
          {on ? "+2,450.00" : "12,536.40"}{" "}
          <span className="text-[13px] font-medium text-muted">USDT</span>
        </motion.p>
      </AnimatePresence>
      <div className="mt-2.5 h-1.5 overflow-hidden rounded-full bg-surface-soft">
        <motion.div
          className="h-full rounded-full bg-primary"
          animate={{ width: on ? "40%" : "85%" }}
          transition={{ type: "spring", stiffness: 120, damping: 18 }}
        />
      </div>
    </div>
  );
}

const DEMO_PREDICTIONS = [
  {
    title: "Will Bitcoin stay above $95,000?",
    line: "Short crypto call with clear settlement.",
    image: "/brand/prediction-bitcoin.jpg",
  },
  {
    title: "Will crude oil stay under $78?",
    line: "Energy prediction with a clear result window.",
    image: "/brand/prediction-oil.jpg",
  },
  {
    title: "Will gold finish above $2,650?",
    line: "Commodity outlook with fixed result time.",
    image: "/brand/prediction-gold.jpg",
  },
  {
    title: "Will Ethereum hold above $3,400?",
    line: "Weekly ETH move with transparent fees.",
    image: "/brand/prediction-eth.jpg",
  },
] as const;

function PredictDemo() {
  const reduce = useReducedMotion();
  const [index, setIndex] = useState(0);
  const [yes, setYes] = useState(true);
  const prediction = DEMO_PREDICTIONS[index];

  useEffect(() => {
    if (reduce) return;
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % DEMO_PREDICTIONS.length);
      setYes((v) => !v);
    }, 4200);
    return () => window.clearInterval(id);
  }, [reduce]);

  return (
    <div className="flex h-full flex-col">
      <div className="relative mx-2 mt-2 min-h-[168px] flex-1 overflow-hidden rounded-[12px] bg-surface-soft">
        {/* Crossfade stack — all covers stay mounted for a smooth blend */}
        {DEMO_PREDICTIONS.map((item, i) => (
          <motion.div
            key={item.image}
            className="absolute inset-0"
            initial={false}
            animate={{
              opacity: i === index ? 1 : 0,
              scale: i === index && !reduce ? 1 : 1.04,
            }}
            transition={{
              opacity: { duration: 0.85, ease: [0.22, 1, 0.36, 1] },
              scale: { duration: 4.2, ease: [0.22, 1, 0.36, 1] },
            }}
            style={{ zIndex: i === index ? 1 : 0 }}
          >
            <Image
              src={item.image}
              alt=""
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover object-center"
              priority={i === 0}
            />
          </motion.div>
        ))}

        {/* Bottom mask for prediction copy */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 bottom-0 z-[2] h-[58%] bg-gradient-to-t from-black/80 via-black/45 to-transparent"
        />

        <div className="absolute inset-x-0 bottom-0 z-[3] overflow-hidden px-3.5 pt-10 pb-3.5">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={prediction.title}
              initial={reduce ? false : { opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            >
              <p className="text-[14px] leading-snug font-semibold tracking-[-0.02em] text-white">
                {prediction.title}
              </p>
              <p className="mt-1 text-[12px] leading-relaxed text-white/80">
                {prediction.line}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-2 p-3">
        <span
          className={cn(
            "rounded-xl py-2 text-center text-[12px] font-semibold tracking-[-0.02em] uppercase transition-colors duration-500",
            yes ? "bg-primary text-on-primary" : "bg-surface-soft text-muted",
          )}
        >
          Yes
        </span>
        <span
          className={cn(
            "rounded-xl py-2 text-center text-[12px] font-semibold tracking-[-0.02em] uppercase transition-colors duration-500",
            !yes ? "bg-primary text-on-primary" : "bg-surface-soft text-muted",
          )}
        >
          No
        </span>
      </div>
    </div>
  );
}

function ReferDemo() {
  const reduce = useReducedMotion();
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (reduce) return;
    const id = window.setInterval(() => {
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1000);
    }, 2800);
    return () => window.clearInterval(id);
  }, [reduce]);

  return (
    <div className="flex h-full flex-col justify-center gap-2.5 p-3.5 sm:p-4">
      <div className="flex items-center justify-between rounded-xl bg-surface-soft px-3 py-2.5">
        <span className="inline-flex items-center gap-1.5 text-[12px] font-medium text-muted">
          <ReferPeopleIcon className="size-3.5 text-primary" />
          411-REF8
        </span>
        <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-primary">
          {copied ? (
            <>
              <IconCheck className="size-3.5" stroke={2} /> Copied
            </>
          ) : (
            <>
              <IconCopy className="size-3.5" stroke={1.75} /> Copy
            </>
          )}
        </span>
      </div>
      <div className="grid grid-cols-2 gap-2">
        <div className="rounded-xl bg-surface-soft px-3 py-2">
          <p className="text-caption text-muted">Invited</p>
          <p className="mt-0.5 text-[15px] font-semibold tracking-[-0.02em] text-ink">
            128
          </p>
        </div>
        <div className="rounded-xl bg-surface-soft px-3 py-2">
          <p className="text-caption text-muted">Earned</p>
          <p className="mt-0.5 text-[15px] font-semibold tracking-[-0.02em] text-primary">
            5236 USDT
          </p>
        </div>
      </div>
    </div>
  );
}

const WITHDRAW_STEPS = [
  { label: "Verify", Icon: WithdrawVerifyIcon },
  { label: "Confirm", Icon: WithdrawConfirmIcon },
  { label: "Secure", Icon: WithdrawSecureIcon },
] as const;

function WithdrawDemo() {
  const reduce = useReducedMotion();
  const [step, setStep] = useState(reduce ? WITHDRAW_STEPS.length - 1 : 0);

  useEffect(() => {
    if (reduce) return;
    const id = window.setInterval(() => {
      setStep((s) => (s + 1) % (WITHDRAW_STEPS.length + 1));
    }, 1100);
    return () => window.clearInterval(id);
  }, [reduce]);

  return (
    <div className="flex h-full flex-col justify-center gap-2.5 p-3.5 sm:p-4">
      <div className="rounded-xl bg-surface-soft p-3">
        <div className="flex items-center justify-between gap-3">
          <p className="text-caption text-muted">Withdraw review</p>
          <span className="text-[13px] font-semibold tracking-[-0.02em] text-ink">
            500 USDT
          </span>
        </div>
        <div className="mt-2 space-y-1.5 text-[13px]">
          <div className="flex justify-between gap-3">
            <span className="text-muted">Network fee</span>
            <span className="font-semibold tracking-[-0.02em] text-ink">
              0.80 USDT
            </span>
          </div>
          <div className="flex justify-between gap-3">
            <span className="text-muted">You receive</span>
            <span className="font-semibold tracking-[-0.02em] text-primary">
              499.20 USDT
            </span>
          </div>
        </div>
      </div>
      <div
        className="flex items-center px-1"
        role="list"
        aria-label="Withdraw steps"
      >
        {WITHDRAW_STEPS.map(({ label, Icon }, index) => {
          const done = step > index;
          const active = step === index;
          const upcoming = step < index;

          return (
            <div key={label} className="contents" role="listitem">
              {index > 0 ? (
                <span
                  aria-hidden
                  className="relative mx-2.5 h-px min-w-4 flex-1 overflow-hidden"
                >
                  <span className="absolute inset-0 border-t border-dashed border-primary/25" />
                  <motion.span
                    className="absolute inset-y-0 left-0 border-t border-dashed border-primary"
                    initial={false}
                    animate={{ width: done || active ? "100%" : "0%" }}
                    transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                  />
                </span>
              ) : null}
              <motion.span
                title={label}
                aria-label={label}
                aria-current={active ? "step" : undefined}
                className={cn(
                  "grid shrink-0 place-items-center",
                  upcoming && "text-primary/35",
                  (done || active) && "text-primary",
                )}
                initial={false}
                animate={{
                  scale: active ? 1.12 : 1,
                  opacity: upcoming ? 0.45 : 1,
                }}
                transition={{ type: "spring", stiffness: 280, damping: 22 }}
              >
                <Icon className="size-6" />
              </motion.span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

const DEMO_CHAIN = [
  { title: "Settlement confirmed", hash: "0x7a2f…c91e" },
  { title: "Record anchored", hash: "0x3c91…a04b" },
  { title: "Proof verified", hash: "0x91d4…e2f8" },
] as const;

function ChainDemo() {
  const reduce = useReducedMotion();
  const [index, setIndex] = useState(0);
  const item = DEMO_CHAIN[index];

  useEffect(() => {
    if (reduce) return;
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % DEMO_CHAIN.length);
    }, 4200);
    return () => window.clearInterval(id);
  }, [reduce]);

  return (
    <div className="relative flex min-h-[128px] flex-1 flex-col justify-between overflow-hidden bg-canvas p-3.5 sm:p-4">
      {/* Right visual — hairline Hub (auto-plays, pointer still works) */}
      <div className="absolute top-1/2 -right-1 z-10 w-[68%] max-w-[280px] -translate-y-1/2 sm:right-0 sm:w-[62%]">
        <Hub
          theme="auto"
          intensity={0.7}
          play
          className="w-full"
          label="Blockchain hub"
        />
      </div>

      <span className="relative z-20 inline-flex w-max items-center gap-1.5 rounded-md bg-primary/12 px-2.5 py-1 text-[11px] font-semibold text-primary ring-1 ring-primary/15 shadow-sm">
        <ChainVerifiedIcon className="size-3.5" />
        Verified
      </span>

      <div className="relative z-20 max-w-[55%] overflow-hidden pt-6">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={item.title}
            initial={reduce ? false : { opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="text-[14px] font-semibold tracking-[-0.02em] text-primary">
              {item.title}
            </p>
            <p className="mt-1 font-mono text-[12px] tracking-[-0.02em] text-primary/70">
              {item.hash}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

type CardProps = {
  step: string;
  title: string;
  description: string;
  icon: ReactNode;
  children: ReactNode;
  className?: string;
  delay?: number;
};

function Card({
  step,
  title,
  description,
  icon,
  children,
  className,
  delay = 0,
}: CardProps) {
  const reduce = useReducedMotion();

  return (
    <motion.article
      initial={reduce ? false : { opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.45, delay, ease }}
      className={cn(
        "flex h-full flex-col rounded-2xl border border-hairline/50 bg-surface-soft",
        "shadow-[0_4px_16px_-10px_rgba(0,0,0,0.12)] dark:shadow-[0_4px_16px_-8px_rgba(0,0,0,0.4)]",
        className,
      )}
    >
      <div className="flex min-h-0 flex-1 flex-col px-[2px] pt-[2px]">
        <div className={cn(insetPanel, "flex min-h-0 flex-1 flex-col")}>
          {children}
        </div>
      </div>

      <div className="shrink-0 px-4 pt-3.5 pb-4">
        <div className="mb-2 flex items-center justify-between gap-3">
          <span
            className={cn(
              "grid size-8 place-items-center rounded-md text-primary",
              "bg-primary/12 ring-1 ring-primary/10 ring-offset-2 ring-offset-surface-soft",
            )}
          >
            {icon}
          </span>
          <span className="text-caption font-semibold tracking-[-0.02em] text-muted">
            {step}
          </span>
        </div>
        <h3 className="text-[16px] leading-snug font-semibold tracking-[-0.02em] text-ink">
          {title}
        </h3>
        <p className="mt-1 text-[13px] leading-relaxed text-muted">
          {description}
        </p>
      </div>
    </motion.article>
  );
}

export function HowItWorksBento({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "grid grid-cols-1 gap-3 sm:gap-4 md:grid-cols-6 md:grid-rows-2",
        className,
      )}
    >
      <Card
        className="md:col-span-2 md:row-span-2"
        delay={0}
        step="01"
        title="Register & login"
        description="Sign up with Google or continue securely with OTP."
        icon={<GoogleIcon className="size-5" />}
      >
        <LoginDemo />
      </Card>

      <Card
        className="md:col-span-2"
        delay={0.05}
        step="02"
        title="Deposit to wallet"
        description="Fund your application wallet and join predictions faster."
        icon={<WalletBadgeIcon className="size-5" />}
      >
        <WalletDemo />
      </Card>

      <Card
        className="md:col-span-2 md:row-span-2"
        delay={0.08}
        step="03"
        title="Take a prediction"
        description="Pick a side, win the call, and earn from clear settlements."
        icon={<PredictBadgeIcon className="size-5" />}
      >
        <PredictDemo />
      </Card>

      <Card
        className="md:col-span-2"
        delay={0.1}
        step="04"
        title="Refer & earn"
        description="Invite friends and earn when they join and play."
        icon={<ReferBadgeIcon className="size-5" />}
      >
        <ReferDemo />
      </Card>

      <Card
        className="md:col-span-3"
        delay={0.12}
        step="05"
        title="Withdraw safely"
        description="Cash out with transparent fees and secure settlement."
        icon={<WithdrawBadgeIcon className="size-5" />}
      >
        <WithdrawDemo />
      </Card>

      <Card
        className="md:col-span-3"
        delay={0.14}
        step="06"
        title="Blockchain secured"
        description="Settlements and records with verifiable integrity."
        icon={<ChainBadgeIcon className="size-5" />}
      >
        <ChainDemo />
      </Card>
    </div>
  );
}
