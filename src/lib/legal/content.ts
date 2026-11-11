/** Editable legal policy copy for 411Predict. */

import { SUPPORT_CONTACT } from "@/lib/support/contact";

export const LEGAL_META = {
  brand: "411Predict",
  legalEntity: "411 Predict Tech Systems S.R.L.",
  registeredOffice: "Avenida Central, Barrio Amón, San José, Costa Rica 10101",
  website: "https://411predict.com",
  supportDiscordUrl: SUPPORT_CONTACT.discordUrl,
  supportDiscordLabel: SUPPORT_CONTACT.discordLabel,
  governingJurisdiction: "the Republic of Costa Rica",
  effectiveDate: "6 September 2026",
  lastUpdated: "3 November 2026",
} as const;

export type LegalTable = {
  headers: string[];
  rows: string[][];
};

export type LegalSection = {
  id: string;
  title: string;
  paragraphs: string[];
  bullets?: string[];
  table?: LegalTable;
};

export type LegalDocument = {
  slug: "terms" | "privacy" | "cookies";
  title: string;
  shortTitle: string;
  description: string;
  href: string;
  sections: LegalSection[];
};

export const LEGAL_NAV = [
  { href: "/legal/terms", label: "Terms of Service" },
  { href: "/legal/privacy", label: "Privacy Policy" },
  { href: "/legal/cookies", label: "Cookie Policy" },
] as const;

const DISCLAIMER = "This page is general information, not legal advice.";

const SUPPORT_PARAGRAPH = `Support is on Discord: ${LEGAL_META.supportDiscordUrl} (${LEGAL_META.supportDiscordLabel}). When you write, include your account email and, if relevant, the deposit ID / transaction hash, withdrawal ID, or prediction ID.`;

export const termsOfService: LegalDocument = {
  slug: "terms",
  title: "Terms and Conditions",
  shortTitle: "Terms",
  description:
    "Rules for using 411Predict, the prediction marketplace operated by 411 Predict Tech Systems S.R.L.",
  href: "/legal/terms",
  sections: [
    {
      id: "agreement",
      title: "1. Agreement to these Terms",
      paragraphs: [
        `These Terms and Conditions (“Terms”) govern your access to and use of ${LEGAL_META.brand} at ${LEGAL_META.website}, operated by ${LEGAL_META.legalEntity} (“we”, “us”, “Operator”, or “411Predict”).`,
        "By creating an account, accessing 411predict.com, or using any 411Predict feature, you agree to these Terms and to our Privacy Policy and Cookie Policy. If you do not agree, do not use 411Predict.",
        "These Terms are product rules for using the service. They are not a substitute for legal advice. We may update them; continued use after the Last updated date means you accept the updated Terms.",
      ],
    },
    {
      id: "who-we-are",
      title: "2. Who we are",
      paragraphs: [
        `${LEGAL_META.brand} is a prediction marketplace operated by ${LEGAL_META.legalEntity}. Registered office: ${LEGAL_META.registeredOffice}.`,
        "The service lets you open an account and hold an in-app USDT wallet; deposit and withdraw USDT subject to these Terms; browse predictions by category and join open predictions by locking a stake; and receive a payout, a loss of that locked stake, or a refund when a prediction is settled or cancelled.",
        "You do not create predictions. Only the Operator and authorised staff publish them.",
      ],
    },
    {
      id: "definitions",
      title: "3. Definitions",
      paragraphs: [],
      table: {
        headers: ["Term", "Meaning"],
        rows: [
          ["Account", "Your registered 411Predict user account"],
          [
            "Available",
            "USDT you may use to join a prediction or request a withdrawal",
          ],
          [
            "Locked",
            "USDT held for an open prediction or a withdrawal still under review",
          ],
          [
            "Prediction / Prediction",
            "A staff-published market with options, timing, and a stake rule",
          ],
          ["Stake", "The USDT you lock when you join"],
          [
            "Settlement",
            "Paying winners and applying losses/fees after a winner is declared",
          ],
          [
            "Refund",
            "Returning a locked stake to Available when a prediction is cancelled or cannot be settled fairly",
          ],
          ["USDT", "The unit of your real in-app wallet in Live mode"],
          [
            "Live mode",
            "Using 411Predict with real USDT for deposits, joins, and withdrawals",
          ],
          [
            "Practice mode",
            "An optional mode for joining published predictions with Practice USDT",
          ],
          [
            "Practice USDT",
            "Practice balance (P-USDT). It is not real money and cannot be withdrawn",
          ],
          [
            "Referral",
            "The invite link that links a new account to one referrer at registration",
          ],
          [
            "Network",
            "The blockchain used for deposit/withdrawal (for example TRON TRC-20), when enabled",
          ],
        ],
      },
    },
    {
      id: "eligibility",
      title: "4. Eligibility",
      paragraphs: [
        "4.1 You must be at least 18 years old, or the age of majority where you live if that is higher, and able to enter a binding contract.",
        "4.2 You must use 411Predict only where it is lawful for you to do so. You are responsible for knowing the laws that apply to you.",
        "4.3 We may refuse, suspend, or close an account that is incomplete, misleading, under-age, or used in breach of these Terms.",
        "4.4 One person, one account. Extra accounts to dodge limits, bans, or rules are forbidden.",
      ],
    },
    {
      id: "accounts",
      title: "5. Accounts and security",
      paragraphs: [
        "5.1 You may register with email, name, and password (OTP verification) and/or Google, as the product allows. Google does not automatically attach to an existing email account; you must link it, and the Google email must match your 411Predict email.",
        "5.2 You must keep login details secret and tell us promptly if you think your account was used without permission.",
        "5.3 You are responsible for all activity under your account.",
        "5.4 The platform may allow one active session at a time. Signing in on another device can sign the first device out.",
        "5.5 Password reset or password change may end other sessions.",
        "5.6 We may send OTPs and security notices to your registered email. You must keep that email working.",
      ],
    },
    {
      id: "service",
      title: "6. The service — what 411Predict is and is not",
      paragraphs: [
        "6.1 411Predict is a prediction marketplace. Market prices, scores, news, and similar data are for information only.",
        "6.2 We do not give investment, financial, legal, tax, or prediction advice.",
        "6.3 Joining a prediction means you accept that you may lose the entire stake.",
        "6.4 We do not guarantee uninterrupted service, instant settlement, or that every prediction will resolve the way you expect.",
        "6.5 Practice mode is optional. It uses Practice USDT, not your real USDT wallet. Section 15 explains it. The referral program is explained in Section 16.",
      ],
    },
    {
      id: "predictions",
      title: "7. Predictions",
      paragraphs: [
        "7.1 Staff publish predictions. Users cannot create, edit, or publish predictions.",
        "7.2 Categories may include News, Sports, Entertainment, Politics, and Market Forecast. Category is for browsing. It does not change these Terms.",
        "7.3 Each prediction shows (as applicable): the question, options, category, minimum or fixed stake, join window, result time, and status.",
        "7.4 You may join only while the prediction is Open and the join window is running.",
        "7.5 One join per user per prediction. You cannot join twice, leave, or change your option after you join.",
        "7.6 Stake must be at least the prediction minimum and the platform minimum. On a fixed prediction everyone stakes the set amount. On a variable prediction you may stake that amount or more, up to your Available balance.",
        "7.7 When you join, that USDT moves from Available to Locked. Locked funds cannot be used to join another prediction or to withdraw.",
        "7.8 Join is refused if the prediction is full, closed, you already joined, or you do not have enough Available balance.",
        "7.9 A fairness or unbalanced warning does not stop you joining while the prediction is open. It means a later payout may be blocked and refunded if a winner would receive less than they staked (see Fairness protection).",
      ],
    },
    {
      id: "results",
      title: "8. Results and settlement",
      paragraphs: [
        "8.1 A winner is not declared before the result time shown on the prediction.",
        "8.2 An authorised administrator declares the winning option after that time. You agree that a good-faith declaration under these rules is binding for settlement.",
        "8.3 The winning option must have real stake. An empty option cannot be declared the winner.",
        "8.4 If you win, your lock is cleared and you are paid once. History may show Prediction Won.",
        "8.5 If you lose, you lose the stake you locked at join. Available is not debited a second time. The join may later show Lost.",
        "8.6 Payout is stake-weighted from the prize prediction after platform commission. A larger winning stake receives a larger share.",
        "8.7 Fee previews on screen are estimates. The settlement record is final.",
        "8.8 Settlement is applied once. A retry does not pay you twice.",
        "8.9 Staff-published predictions do not take a user creator cut. A platform commission may still be taken from the prediction at settlement, at the rate stored on that prediction.",
        "8.10 If a prediction stays waiting after the event, the winner has not been declared yet or the prediction is in review. That is not a promise of a payout.",
      ],
    },
    {
      id: "fairness",
      title: "9. Fairness protection",
      paragraphs: [
        "9.1 If any winner would receive less than they staked, settlement is blocked and every active joiner is refunded. This can run automatically.",
        "9.2 A prediction with too little volume, too few participants, or only one side funded may go to review and be cancelled and refunded instead of settled as a win.",
        "9.3 You have no right to a win payout where these rules require a refund.",
      ],
    },
    {
      id: "cancellation",
      title: "10. Cancellation and refunds",
      paragraphs: [
        "10.1 A prediction may be cancelled because of low volume, too few joiners, a one-sided book, fairness protection, staff decision, error, abuse, or legal/compliance reasons.",
        "10.2 If you had joined and were still active, your full stake returns to Available. History may show Prediction Refund.",
        "10.3 A platform refund is a wallet credit, not a blockchain withdrawal.",
        "10.4 A settled prediction is not cancelled. Money already paid or lost under settlement stays as settled.",
        "10.5 Refunds are applied once.",
      ],
    },
    {
      id: "wallet",
      title: "11. Wallet",
      paragraphs: [
        "11.1 Your wallet shows Available, Locked, and total (Available + Locked).",
        "11.2 Wallet History shows spendable-balance moves (deposits, joins, wins, refunds, withdrawals). My Predictions shows joined / won / lost / refunded.",
        "11.3 Saved wallet addresses (preferences) are for your convenience. You must still confirm any address before it is used.",
        "11.4 The same USDT cannot be locked twice. Funds locked on a withdrawal cannot be staked, and funds locked on a prediction cannot be withdrawn until they return to Available.",
        "11.5 Practice mode uses a separate Practice USDT balance. It is not part of your real Available or Locked USDT.",
      ],
    },
    {
      id: "deposits",
      title: "12. Deposits",
      paragraphs: [
        "12.1 Deposits are USDT on the network we show in the app (for example TRON TRC-20), when that network is enabled.",
        "12.2 Send only to the deposit address 411Predict shows for that deposit, on the same network. Wrong address or wrong network can mean permanent loss. We are not responsible for that.",
        "12.3 If we ask you to register a sending wallet, send from that wallet only. A different sender may be rejected and not credited.",
        "12.4 411Predict charges no deposit fee. Your external wallet still pays the blockchain network fee.",
        "12.5 Available increases only when the deposit is Credited, after required confirmations and checks.",
        "12.6 The same on-chain transfer is credited once. Re-submitting the same transaction does not add money again.",
        "12.7 Expired, failed, or rejected deposits do not credit your wallet.",
        "12.8 We may delay, refuse, or reverse a credit that looks fraudulent, duplicated, erroneous, or non-compliant.",
        "12.9 The practice deposit screens use sample details and can add Practice USDT. That flow does not send or receive real crypto and does not credit your real USDT wallet.",
      ],
    },
    {
      id: "withdrawals",
      title: "13. Withdrawals",
      paragraphs: [
        "13.1 You may request a withdrawal only from Available balance, to a valid destination on the enabled network.",
        "13.2 When you submit, the amount is Locked and the request is Under Review. Nothing is sent on-chain at that moment.",
        "13.3 Staff review the request. After approval, it moves to processing and then Completed when the network confirms. After rejection, the lock returns to Available once.",
        "13.4 Processing is typically 24–48 hours, but can take longer because of review, network congestion, or compliance.",
        "13.5 A network fee (for example TRC-20) may be calculated when the withdrawal is processed and taken from the withdrawal amount. You will not be charged a second surprise debit after you confirmed the request. If the real network cost is higher than reserved, the Operator may cover the gap.",
        "13.6 You are solely responsible for the destination address and network. Blockchain transfers are irreversible. Funds sent to a wrong or incompatible address may not be recoverable.",
        "13.7 We may refuse, delay, or reject a withdrawal for insufficient Available balance, invalid address, failed checks, suspected abuse, or legal reasons.",
        "13.8 A Completed withdrawal cannot be reversed in the app.",
        "13.9 One withdrawal is sent once. Duplicate approval does not create a second send.",
        "13.10 Practice USDT cannot be withdrawn, transferred out, or exchanged for real USDT.",
      ],
    },
    {
      id: "fees",
      title: "14. Fees",
      paragraphs: [
        "Displayed fees are estimates until settlement or withdrawal processing is complete.",
      ],
      table: {
        headers: ["Item", "Rule"],
        rows: [
          [
            "Creating a prediction",
            "Users cannot create. Staff predictions have no user creation fee.",
          ],
          ["Joining", "No extra join fee. You only lock the stake."],
          [
            "Deposit",
            "No platform deposit fee. You pay the chain fee from your external wallet.",
          ],
          [
            "Withdrawal",
            "Network fee may be taken when the withdrawal is processed.",
          ],
          [
            "Settlement",
            "Platform commission may be taken from the prediction. Staff creator commission is 0%.",
          ],
          [
            "Referral commission",
            "Paid only on real settled predictions, into the referrer’s real USDT wallet. A win and a loss can both create a commission. A cancelled or refunded prediction does not. Practice activity pays no commission. The rate shown in the app can change.",
          ],
        ],
      },
    },
    {
      id: "practice",
      title: "15. Practice mode",
      paragraphs: [
        "15.1 Practice mode is optional and separate from Live mode. You may enter it and leave it. Leaving Practice mode does not change your real USDT balance.",
        "15.2 In Practice mode you may join published predictions using Practice USDT (P-USDT). The stake is not taken from your real USDT wallet.",
        "15.3 Practice USDT is not real money. It cannot be withdrawn, transferred out, or exchanged for real USDT.",
        "15.4 We may give you a starting Practice USDT balance. The practice deposit screens use sample details and can add more Practice USDT. That flow does not send or receive real crypto.",
        "15.5 A practice win, loss, or refund changes only the Practice USDT balance.",
        "15.6 Real deposits, real withdrawals, and real-money joins stay in Live mode.",
        "15.7 Practice results do not earn referral commission.",
      ],
    },
    {
      id: "referrals",
      title: "16. Referral commission",
      paragraphs: [
        "16.1 You may share one invite link. If someone registers with that link, they are linked to you. The link is applied only at registration and cannot be changed later. You cannot refer yourself.",
        "16.2 Commission is paid only from real, settled predictions in Live mode. Practice activity does not earn commission.",
        "16.3 A win and a loss can both create a commission. A cancelled or refunded prediction does not.",
        "16.4 The referral share rate and any waiting period are shown in the app. We may change them. A commission already created keeps the rate that applied when it was created.",
        "16.5 Commission is credited to the referrer’s real USDT wallet. It may show as pending, under review, paid, or not eligible. We may delay or refuse a commission for abuse, ineligibility, or program rules.",
        "16.6 Staff accounts may share an invite link. They do not earn referral commission.",
        "16.7 We may pause the program. New commissions then stop. Commissions already paid stay paid.",
      ],
    },
    {
      id: "admin",
      title: "17. Administrator rights",
      paragraphs: [
        "17.1 Authorised staff may create, monitor, resolve, settle, cancel, or archive predictions; review deposits and withdrawals; change platform settings for future predictions; run Practice mode and the referral program; and act to protect users, integrity, or the service.",
        "17.2 Those actions, when taken in good faith under these Terms, are binding for wallet and settlement purposes.",
      ],
    },
    {
      id: "prohibited",
      title: "18. Prohibited use",
      paragraphs: ["You agree not to:"],
      bullets: [
        "Manipulate predictions, outcomes, or data, or collude to influence results",
        "Open multiple accounts to evade limits, sanctions, or bans, or to earn referral commission",
        "Refer yourself, or use a false invite, to earn referral commission",
        "Use another person’s account or try to access other users’ data or wallets",
        "Use 411Predict for fraud, money laundering, or any illegal activity",
        "Interfere with settlement, refunds, deposits, withdrawals, or wallet records",
        "Submit false deposit hashes, spoof senders, or abuse recovery paths",
        "Scrape, reverse engineer, or overload the service except as allowed by law",
        "Abuse support channels or harass users or staff",
      ],
    },
    {
      id: "ip",
      title: "19. Intellectual property",
      paragraphs: [
        "19.1 411Predict name, branding, software, and site content belong to the Operator or its licensors. You receive a limited, non-exclusive, non-transferable right to use the service for its intended purpose.",
        "19.2 You keep rights in content you submit (if any). You grant us a licence to host, display, and process it to operate the service.",
      ],
    },
    {
      id: "privacy",
      title: "20. Privacy",
      paragraphs: [
        "We process personal data as described in our Privacy Policy (account, security, wallet metadata, prediction activity, device/usage data, and support messages). See the Privacy Policy and Cookie Policy on 411predict.com.",
      ],
    },
    {
      id: "disclaimers",
      title: "21. Disclaimers",
      paragraphs: [
        "THE SERVICE IS PROVIDED “AS IS” AND “AS AVAILABLE.” TO THE MAXIMUM EXTENT PERMITTED BY LAW, WE DISCLAIM WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.",
        "We do not warrant uninterrupted or error-free operation, continuous third-party data, or that every prediction will resolve as you expect. Blockchain networks, third-party wallets, and market data are outside our full control.",
      ],
    },
    {
      id: "liability",
      title: "22. Limitation of liability",
      paragraphs: [
        "22.1 To the maximum extent permitted by law, the Operator and its officers, affiliates, and staff are not liable for indirect, incidental, special, consequential, or punitive damages, or for lost profits, lost data, or lost opportunity.",
        "22.2 We are not liable for loss from: a wrong deposit or withdrawal address or network you supplied; chain congestion or third-party wallet failure; a result or refund made under these Terms; or unavailability of the site.",
        "22.3 Our aggregate liability for claims relating to the service is limited to the greater of (a) the platform commissions we actually retained from predictions you settled in the three months before the claim, or (b) one hundred US dollars (USDT equivalent), except where liability cannot be limited by law.",
      ],
    },
    {
      id: "indemnity",
      title: "23. Indemnity",
      paragraphs: [
        "You will indemnify and hold harmless the Operator and its staff from claims, losses, and reasonable legal fees arising from your misuse of 411Predict, your breach of these Terms, or your infringement of others’ rights.",
      ],
    },
    {
      id: "termination",
      title: "24. Suspension and closure",
      paragraphs: [
        "24.1 We may suspend or terminate access if you breach these Terms, create risk for the platform or other users, or if required by law.",
        "24.2 You may stop using the service at any time.",
        "24.3 Accrued fees, limits of liability, indemnity, and dispute terms survive. Wallet balances remain subject to withdrawal and compliance rules.",
      ],
    },
    {
      id: "changes",
      title: "25. Changes",
      paragraphs: [
        "We may update these Terms. The new version is posted on 411predict.com with a new Last updated date. Continued use after that date means you accept the updated Terms. If you do not agree, stop using the service.",
      ],
    },
    {
      id: "law",
      title: "26. Governing law",
      paragraphs: [
        `These Terms are governed by the laws of ${LEGAL_META.governingJurisdiction}, without regard to conflict-of-law rules.`,
        "Courts in San José, Costa Rica have exclusive venue, except where mandatory consumer law requires otherwise.",
      ],
    },
    {
      id: "contact",
      title: "27. Contact and support",
      paragraphs: [
        `Operator: ${LEGAL_META.legalEntity}, ${LEGAL_META.registeredOffice}. Website: ${LEGAL_META.website}.`,
        SUPPORT_PARAGRAPH,
        "These Terms, plus the Privacy Policy and Cookie Policy, are the entire agreement for use of 411Predict. If a court strikes one part, the rest still applies.",
        DISCLAIMER,
      ],
    },
  ],
};

export const privacyPolicy: LegalDocument = {
  slug: "privacy",
  title: "Privacy Policy",
  shortTitle: "Privacy",
  description:
    "How 411 Predict Tech Systems S.R.L. collects, uses, and protects personal data on 411Predict.",
  href: "/legal/privacy",
  sections: [
    {
      id: "intro",
      title: "1. Who we are and scope",
      paragraphs: [
        `${LEGAL_META.legalEntity}, with registered office at ${LEGAL_META.registeredOffice}, is the controller of personal data processed through ${LEGAL_META.brand} at ${LEGAL_META.website}.`,
        "This Policy applies to visitors, registered users, suspended or former users, and anyone who contacts us. It covers the website, in-app wallet, predictions, notifications, and support.",
        "A third-party site, wallet, Discord, Google, or blockchain explorer has its own privacy practices.",
        "411Predict is a prediction marketplace. Staff publish predictions. Users join, deposit, and withdraw USDT. We do not give investment, financial, legal, or tax advice.",
        DISCLAIMER,
      ],
      table: {
        headers: ["Topic", "Summary"],
        rows: [
          [
            "Who controls your data?",
            "411 Predict Tech Systems S.R.L., San José, Costa Rica.",
          ],
          [
            "What do we collect?",
            "Account, login/security, wallet and USDT metadata, prediction activity, Practice mode activity, referral relationships, device/usage data, and support messages.",
          ],
          [
            "Why?",
            "To run your account and wallet, let you join predictions, settle or refund stakes, review deposits and withdrawals, keep the platform secure, and meet legal duties.",
          ],
          [
            "Blockchain",
            "USDT transfers on a public chain (for example TRON / TRC-20) are public and usually permanent. We cannot delete those chain records.",
          ],
          ["Support", `Discord: ${LEGAL_META.supportDiscordUrl}`],
        ],
      },
    },
    {
      id: "collect",
      title: "2. Information we collect",
      paragraphs: [
        "2.1 Information you give us: first name, last name, email; password (hashed); Google identifier if you use Google; saved wallet addresses you confirm; deposit details (expected sender, transaction hash); withdrawal destination, amount, and network; and support messages.",
        "We do not ask for payment-card numbers. The in-app wallet is USDT. If we later ask for extra checks, we will tell you what we need and why.",
        "2.2 Account and security: registration and OTP events; login history and session cookies; password-reset events; account status; security and abuse signals. The Platform may allow one active session at a time.",
        "2.3 Wallet: Available and Locked balances; deposit and withdrawal status, amounts, addresses, hashes, and fees; locks/unlocks; settlement amounts; staff review notes that relate to your transactions. Practice mode uses a separate Practice USDT balance, which is not real money.",
        "2.4 Predictions: predictions you view or join, option, stake, result (won/lost/refunded/cancelled), and related notifications. You cannot create predictions. We store the administrator’s declared winner and the settlement or refund record. Practice mode joins are stored separately from your real USDT activity.",
        "2.5 Device and usage: IP address, browser, device/OS, language, time zone, diagnostic logs, and theme preference stored locally.",
        "2.6 Blockchain: addresses, transaction hashes, amounts, timestamps, and confirmations for enabled networks (for example TRON / TRC-20). We do not control or erase public-chain records.",
        "2.7 We do not currently run advertising pixels or non-essential analytics cookies. We do not sell your personal data.",
        "2.8 Referrals: the invite code used at registration, the one referrer linked to an account, and commission amounts and statuses. A referrer can see the people they invited. We do not show those people’s email addresses to the referrer.",
      ],
    },
    {
      id: "how-collected",
      title: "3. How we collect it",
      paragraphs: ["We collect information:"],
      bullets: [
        "From you — registration (including an invite code in the signup link), login, wallet preferences, deposit/withdraw forms, support",
        "Automatically — the app/website, essential cookies, and server logs",
        "From Google — if you use Continue with Google or link Google",
        "From the blockchain — to verify deposits and confirm withdrawals",
        "From staff actions — approve/reject withdrawal, declare a result, cancel/refund, account review",
        "From email/OTP providers — delivery of verification codes and security mail",
      ],
    },
    {
      id: "use",
      title: "4. Why we use it",
      paragraphs: [
        "Where a law requires consent (for example a non-essential cookie we add later), we will ask separately.",
      ],
      table: {
        headers: ["Purpose", "Typical basis"],
        rows: [
          [
            "Provide the service (account, join, settle or refund, history)",
            "Contract (Terms)",
          ],
          [
            "Deposits and withdrawals (credit once; staff review; send or reject)",
            "Contract; legitimate interests; legal duties where they apply",
          ],
          [
            "Security (OTP, sessions, stop double-credit or double-send)",
            "Legitimate interests; contract",
          ],
          [
            "Platform rules and audit of money moves",
            "Contract; legitimate interests",
          ],
          [
            "Service communications (OTP, deposit/withdrawal/prediction notices)",
            "Contract; legitimate interests",
          ],
          [
            "Legal records and lawful requests",
            "Legal obligation; legitimate interests",
          ],
          [
            "Practice mode balances and practice joins",
            "Contract (Terms)",
          ],
          [
            "Referral links, the referrer relationship, and commission records",
            "Contract (Terms); legitimate interests",
          ],
        ],
      },
    },
    {
      id: "automated",
      title: "5. Automated checks",
      paragraphs: [
        "5.1 We use system rules to check balances, duplicate transactions, address format, deposit sender match, withdrawal state, and session validity.",
        "5.2 Those checks may delay, refuse, or flag a deposit or withdrawal for human staff review.",
        "5.3 Risk or fairness flags on a prediction are about the prediction, not a credit score of you.",
      ],
    },
    {
      id: "sharing",
      title: "6. When we share information",
      paragraphs: [
        "We do not sell your personal data. We share only what is needed with:",
      ],
      bullets: [
        "Infrastructure and hosting that run 411predict.com, the database, and background jobs",
        "Email / OTP providers for verification and security messages",
        "Google if you choose Google login or linking",
        "Public blockchain networks when you deposit or we send a withdrawal",
        "Staff and authorised administrators who operate predictions, wallets, referrals, and support",
        "Your referrer — only the limited details shown on their referral screens, not your email address",
        "Professional advisers under confidentiality",
        "Authorities or courts when the law requires, or to protect users, funds, or the Platform",
        `Discord (${LEGAL_META.supportDiscordUrl}) if you contact support there — also subject to Discord’s own policy`,
      ],
    },
    {
      id: "transfers",
      title: "7. International transfers",
      paragraphs: [
        "7.1 The Operator is established in Costa Rica.",
        "7.2 Your data may be processed in Costa Rica and in other countries where our hosting, email, or Google services operate.",
        "7.3 Public blockchain records may be visible worldwide.",
        "7.4 Where a transfer law requires safeguards, we use appropriate contracts or other lawful tools with our providers.",
      ],
    },
    {
      id: "retention",
      title: "8. Retention",
      paragraphs: [
        "We keep information only as long as needed to run the Platform, finish deposits/withdrawals, settle or refund predictions, handle disputes, meet accounting/legal duties, and enforce the Terms.",
      ],
      table: {
        headers: ["Record", "How long (typical)"],
        rows: [
          [
            "Account and login security",
            "While the account is open, then as long as needed for security and legal claims",
          ],
          [
            "Wallet, deposit, withdrawal, and settlement records",
            "For the life of the account and a further audit/tax/dispute period. Completed money records are not deleted just because you close the app",
          ],
          ["Prediction joins and results", "Same as wallet/settlement records"],
          [
            "Practice mode activity",
            "While the account is open, and as long as needed for support and disputes",
          ],
          [
            "Referral relationship and commission records",
            "Same as wallet and settlement records",
          ],
          ["Support messages", "As long as needed to resolve the request"],
          ["OTP and short-lived session data", "Until used or expired"],
          [
            "Browser theme / local storage",
            "Until you clear it on your device",
          ],
          [
            "Public blockchain records",
            "Permanent on the chain — not controlled by us",
          ],
        ],
      },
    },
    {
      id: "security",
      title: "9. Security",
      paragraphs: [
        "We use measures appropriate to a money-moving platform, including encryption in transit (HTTPS), hashed passwords, session tokens and refresh-cookie controls, role-based staff access, unique references so a deposit, settlement, or refund is applied once, and logging of security and wallet events.",
        "No system is completely secure. Protect your email, password, device, and external wallet. Tell us quickly if you think your account was used without permission.",
      ],
    },
    {
      id: "rights",
      title: "10. Your rights",
      paragraphs: [
        "Depending on the law that applies to you (including Costa Rica data-protection rules, where they apply), you may ask us to confirm and access personal data; correct it; delete it where no wallet, security, or legal reason requires retention; restrict or object to certain processing; withdraw consent; or receive a copy of data you provided where portability applies.",
        SUPPORT_PARAGRAPH,
        "These rights are not absolute. We may refuse deletion of completed deposits, withdrawals, joins, settlements, and refunds. Closing your account does not unwind a completed on-chain withdrawal or a public blockchain record.",
      ],
    },
    {
      id: "cookies",
      title: "11. Cookies and similar technologies",
      paragraphs: [
        "We use essential cookies and similar storage to keep you signed in, protect the session, and run the Platform. We may store preferences locally (for example theme). An invite code travels in the signup link. We do not set an advertising cookie for referrals. We do not currently use non-essential advertising or third-party analytics cookies. Details are in the Cookie Policy.",
      ],
    },
    {
      id: "communications",
      title: "12. Notifications",
      paragraphs: [
        "We send service messages: OTP, security alerts, deposit credited/failed, withdrawal under review / completed / rejected, and prediction settled or refunded.",
        "We do not use your data for third-party advertising lists. Opting out of optional marketing (if we add it later) does not stop security, wallet, or Terms-required messages.",
      ],
    },
    {
      id: "children",
      title: "13. Children",
      paragraphs: [
        "411Predict is not for anyone under 18, or the higher age of majority where you live. We do not knowingly collect personal data from children. If you think a minor created an account, contact support on Discord.",
      ],
    },
    {
      id: "blockchain",
      title: "14. Public blockchain",
      paragraphs: [
        "A USDT deposit or withdrawal on TRON (or another enabled network) is recorded on a public ledger. Anyone may see addresses, hashes, amounts, and times.",
        "An address may not show your name, but it can be linked to you through 411Predict records, an exchange, or public sources. Those records usually cannot be corrected or erased.",
      ],
    },
    {
      id: "complaints",
      title: "15. Complaints and changes",
      paragraphs: [
        "First contact us on Discord. You may also have the right to complain to the competent data-protection authority in Costa Rica, or in your country of residence where that right applies.",
        "We may update this Policy. The new version is posted on 411predict.com with a new Last updated date. Continued use after that date means you accept the updated Policy.",
        `Controller: ${LEGAL_META.legalEntity}, ${LEGAL_META.registeredOffice}. ${SUPPORT_PARAGRAPH}`,
        DISCLAIMER,
      ],
    },
  ],
};

export const cookiePolicy: LegalDocument = {
  slug: "cookies",
  title: "Cookie Policy",
  shortTitle: "Cookies",
  description:
    "How 411Predict uses cookies and similar storage to run login, security, wallet, and predictions.",
  href: "/legal/cookies",
  sections: [
    {
      id: "intro",
      title: "1. What this Policy covers",
      paragraphs: [
        `This Cookie Policy explains how ${LEGAL_META.legalEntity} uses cookies and similar storage when you use ${LEGAL_META.brand} at ${LEGAL_META.website}.`,
        "Read it with our Terms and Conditions and Privacy Policy. If you do not agree, do not use 411Predict.",
        "It covers cookies, local storage, session storage, and cookies that our hosting or login partners may set. A third-party site (Google, Discord, a blockchain explorer, your wallet) has its own cookie practices.",
        DISCLAIMER,
      ],
    },
    {
      id: "what",
      title: "2. What cookies are",
      paragraphs: [
        "A cookie is a small text file stored on your device by the website. It can remember a session, a device, or a short security step.",
        "Local storage and session storage are similar. They sit in your browser. Local storage stays until you clear it. Session storage is usually cleared when you close the tab.",
        "We disclose local and session storage here even though they are not always called cookies.",
      ],
    },
    {
      id: "how",
      title: "3. How 411Predict uses them",
      paragraphs: [
        "We use cookies and storage that are necessary to run the Platform securely and to remember a few preferences (for example light/dark theme).",
        "A referral invite code is carried in the signup address (for example ?ref=). It is sent when you register and then kept on the account. We do not set a cookie or use it for advertising.",
        "We do not currently use non-essential advertising, marketing, or third-party analytics cookies.",
        "If that changes, we will update this Policy and, where the law requires, ask for consent before setting those cookies.",
      ],
    },
    {
      id: "essential",
      title: "4. Essential / strictly necessary",
      paragraphs: [
        "These are required for login, security, wallet, and predictions. If you block them, you may not be able to sign in, stay signed in, deposit, withdraw, or join a prediction. These cookies are HttpOnly where we set them. In production they are marked Secure (HTTPS only).",
      ],
      table: {
        headers: ["Name / type", "What it does", "Typical life"],
        rows: [
          [
            "refreshToken (HttpOnly cookie)",
            "Keeps you signed in after the short-lived access token expires. Rotated on refresh. Cleared on logout.",
            "About 7 days, or until you sign out",
          ],
          [
            "deviceId (HttpOnly cookie)",
            "Recognises this browser for security and session handling",
            "About 1 year",
          ],
          [
            "googleOverrideEmail (HttpOnly cookie)",
            "Short step when Google login must confirm you are already signed in on another device",
            "About 5 minutes",
          ],
          [
            "Google link cookie (HttpOnly)",
            "Used only while you link Google to an existing account",
            "Until the link step finishes or expires",
          ],
          [
            "Hosting / security cookies",
            "Set by infrastructure (for example load balancing or HTTPS) if the host uses them",
            "Set by the provider",
          ],
        ],
      },
    },
    {
      id: "storage",
      title: "5. Local storage and session storage",
      paragraphs: [
        "These are stored in your browser, not as HttpOnly cookies. Clearing them may sign you out or reset theme and timezone. It does not delete your 411Predict account, wallet, or prediction history on our servers.",
      ],
      table: {
        headers: ["Storage", "What it does"],
        rows: [
          [
            "Access token",
            "Lets the app call your account, wallet, and predictions after you sign in",
          ],
          ["Theme", "Remembers light / dark / system appearance"],
          ["Timezone", "Remembers how dates and countdowns are shown"],
          [
            "OAuth return path (session storage)",
            "Remembers which page to open after Google login",
          ],
          [
            "First-open prediction flag",
            "Remembers that you already opened a prediction card (display only)",
          ],
          [
            "Referral invite code",
            "Not stored as a cookie. It stays in the signup link until you register, then it is saved on the account",
          ],
        ],
      },
    },
    {
      id: "third-parties",
      title: "6. Third parties",
      paragraphs: [
        "Using Google or Discord is optional. Email + password + OTP does not require Google cookies.",
      ],
      table: {
        headers: ["Party", "When"],
        rows: [
          [
            "Google",
            "Only if you use Continue with Google or link Google. Google may set its own cookies during that flow.",
          ],
          [
            "Discord",
            `Only if you contact support at ${LEGAL_META.supportDiscordUrl}. Discord sets its own cookies on discord.com.`,
          ],
          [
            "Blockchain explorers / wallets",
            "If you open an explorer link or use an external wallet. We do not control those cookies.",
          ],
        ],
      },
    },
    {
      id: "not-used",
      title: "7. What we do not use today",
      paragraphs: [
        "We do not use advertising or retargeting cookies, third-party audience-analytics cookies, or cross-site tracking pixels for marketing.",
        "The public blockchain (for example TRON) is not a cookie. Deposit and withdrawal records on-chain are public and are explained in the Privacy Policy.",
      ],
    },
    {
      id: "basis",
      title: "8. Legal basis",
      paragraphs: [
        "Essential cookies and related storage are used to perform the contract (the Terms): keep you signed in, protect the session, and operate wallet and predictions.",
        "Preference storage (theme, timezone) is used for legitimate interests (a usable site) or, where a law requires consent, we will ask.",
        "Non-essential cookies will be used only if we add them and, where required, only after consent.",
      ],
    },
    {
      id: "manage",
      title: "9. How to manage cookies",
      paragraphs: [
        "You can block, delete, or restrict cookies in your browser settings (Chrome, Safari, Firefox, Edge). Look for Cookies, Site data, or Privacy.",
        "Clear site data for 411predict.com to remove our cookies plus local/session storage. Sign out in 411Predict to clear the refresh session on our side.",
        "Blocking essential cookies will usually stop login, wallet, and joining predictions.",
        "Deleting cookies does not close your account or erase wallet or prediction records we hold, and does not reverse a deposit or withdrawal already written on the blockchain.",
      ],
    },
    {
      id: "children-changes",
      title: "10. Children, changes, and contact",
      paragraphs: [
        "411Predict is for users 18 or older (or the higher age of majority where you live). We do not knowingly set cookies to offer the service to children.",
        "We may update this Cookie Policy when our practices change. The new version is posted on 411predict.com with a new Last updated date.",
        `Operator: ${LEGAL_META.legalEntity}, ${LEGAL_META.registeredOffice}. ${SUPPORT_PARAGRAPH}`,
        DISCLAIMER,
      ],
    },
  ],
};

export const legalDocuments: LegalDocument[] = [
  termsOfService,
  privacyPolicy,
  cookiePolicy,
];

export function getLegalDocument(slug: LegalDocument["slug"]): LegalDocument {
  const doc = legalDocuments.find((item) => item.slug === slug);
  if (!doc) {
    throw new Error(`Unknown legal document: ${slug}`);
  }
  return doc;
}
