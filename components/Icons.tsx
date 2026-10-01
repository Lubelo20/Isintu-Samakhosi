// The site's icon set, in the beadwork style from the brief: triangles, circles and
// diamonds. Every icon is drawn on the same 40-unit grid with an indigo line of one
// weight and a single gold accent; green is kept for land and growth. Each concept has
// its own icon, so one shape never stands for two different ideas.
import type { ReactNode } from "react";

const I = "var(--indigo)";
const G = "var(--gold)";
const N = "var(--green)";

// Small gold diamond, the recurring "bead" accent.
const bead = (x: number, y: number, r: number, fill = G) => (
  <path d={`M${x} ${y - r}l${r} ${r}-${r} ${r}-${r}-${r}z`} fill={fill} stroke="none" />
);

const glyphs = {
  // About: vision and mission
  vision: (
    <>
      <path d="M3 20c6-8 11.5-12 17-12s11 4 17 12c-6 8-11.5 12-17 12S9 28 3 20z" />
      {bead(20, 20, 7)}
      {bead(20, 20, 2.6, I)}
    </>
  ),
  mission: (
    <>
      <path d="M7 34 20 25.5 33 34" />
      <path d="M7 25.5 20 17l13 8.5" />
      <path d="M11 15 20 5l9 10z" fill={G} stroke="none" />
    </>
  ),

  // The Ubuntu Triad
  abantu: (
    <>
      <circle cx="9.5" cy="15" r="3.5" />
      <path d="M3.5 33 9.5 22l6 11z" />
      <circle cx="30.5" cy="15" r="3.5" />
      <path d="M24.5 33 30.5 22l6 11z" />
      <circle cx="20" cy="11" r="4.5" fill={G} stroke="none" />
      <path d="M12 34 20 18.5 28 34z" fill={G} stroke="none" />
    </>
  ),
  ubuntu: (
    <>
      {[0, 45, 90, 135, 180, 225, 270, 315].map((a, i) => {
        const x = 20 + 13 * Math.cos((a * Math.PI) / 180);
        const y = 20 + 13 * Math.sin((a * Math.PI) / 180);
        return i % 2 ? <circle key={a} cx={x} cy={y} r="3" /> : <circle key={a} cx={x} cy={y} r="3.4" fill={G} stroke="none" />;
      })}
      {bead(20, 20, 4.5, I)}
    </>
  ),
  isintu: (
    <>
      <path d="M20 3 37 20 20 37 3 20z" />
      {bead(20, 20, 9)}
      {bead(20, 20, 3.5, I)}
    </>
  ),

  // Governance
  board: (
    <>
      <circle cx="9" cy="10.5" r="3" />
      <path d="M4.5 25 9 16l4.5 9" />
      <circle cx="31" cy="10.5" r="3" />
      <path d="M26.5 25 31 16l4.5 9" />
      <circle cx="20" cy="8.5" r="3.5" fill={G} stroke="none" />
      <path d="M14.5 25 20 14l5.5 11z" fill={G} stroke="none" />
      <path d="M3 28.5h34M9 28.5V35M31 28.5V35" />
    </>
  ),
  nonPartisan: (
    <>
      <circle cx="20" cy="20" r="15" />
      <path d="M20 5v8M20 27v8" />
      {bead(20, 20, 6)}
    </>
  ),
  safeguarding: (
    <>
      <path d="M4 18 20 6l16 12" />
      <path d="M9 14.5V34M31 14.5V34" />
      <circle cx="20" cy="18.5" r="3.5" fill={G} stroke="none" />
      <path d="M14 34l6-11 6 11z" fill={G} stroke="none" />
    </>
  ),
  registered: (
    <>
      <rect x="5" y="6" width="30" height="21" rx="2.5" />
      <path d="M10 12.5h20M10 18h11" />
      <path d="M25.5 30.5 24 37.5l4-2.2 4 2.2-1.5-7" fill={G} stroke="none" />
      <circle cx="28" cy="27" r="5.5" fill={G} stroke="var(--white)" strokeWidth="1.5" />
    </>
  ),

  // Core ethical standards
  integrity: (
    <>
      <path d="M20 4 34 20 20 36 6 20z" />
      <path d="M20 10v20" stroke={G} strokeWidth="3.5" />
    </>
  ),
  dignity: (
    <>
      <path d="M13.5 11.5 16 5l2.5 6.5zM17.5 11.5 20 3.5l2.5 8zM21.5 11.5 24 5l2.5 6.5z" fill={G} stroke="none" />
      <circle cx="20" cy="18.5" r="4.5" />
      <path d="M9.5 36c0-7.5 4.5-11.5 10.5-11.5S30.5 28.5 30.5 36" />
    </>
  ),
  accountability: (
    <>
      <path d="M20 6.5a13.5 13.5 0 1 1-11.4 6.2" />
      <path d="M10.2 7.4 4.4 13.6l7.6 1.6z" fill={G} stroke="none" />
      {bead(20, 20, 4.5)}
    </>
  ),
  impartiality: (
    <>
      <path d="M20 9v24M13 34h14M6 12h28" />
      <path d="M6 12 2 21h8zM34 12l-4 9h8z" fill={G} stroke="none" />
      {bead(20, 7, 3.5)}
    </>
  ),
  confidentiality: (
    <>
      <rect x="4.5" y="9" width="31" height="22" rx="2.5" />
      <path d="M5 10l15 11.5L35 10" />
      {bead(20, 23, 5)}
    </>
  ),
  stewardship: (
    <>
      <path d="M4 34h32" />
      <path d="M9 34c2-5 6.2-7.5 11-7.5s9 2.5 11 7.5z" fill={G} stroke="none" />
      <path d="M20 27V14" stroke={N} />
      <path d="M20 18.5c0-6-4-9.5-10-9.5 0 6 4 9.5 10 9.5zM20 15.5c0-5 3.5-8.5 9-8.5 0 5-3.5 8.5-9 8.5z" fill={N} stroke="none" />
    </>
  ),

  // Traditional leadership and rural development
  land: (
    <>
      <path d="M3 33 14 15.5l7 10.5 5-6.5L37 33z" fill={N} stroke="none" />
      <circle cx="28.5" cy="9" r="4" fill={G} stroke="none" />
      <path d="M3 33.5h34" />
    </>
  ),
  partnerships: (
    <>
      <circle cx="8.5" cy="11" r="3.5" />
      <path d="M3 34 8.5 18 14 34" />
      <circle cx="31.5" cy="11" r="3.5" />
      <path d="M26 34l5.5-16L37 34" />
      <path d="M11.5 24.5h4M28.5 24.5h-4" />
      {bead(20, 24.5, 4.5)}
    </>
  ),
  knowledge: (
    <>
      <path d="M20 11c-4.5-3.2-10-3.6-15.5-1.6v23c5.5-2 11-1.6 15.5 1.6 4.5-3.2 10-3.6 15.5-1.6v-23C30 7.4 24.5 7.8 20 11zM20 11v23" />
      <path d="M25 7.6V18l2.75-2.3L30.5 18V7.2" fill={G} stroke="none" />
    </>
  ),
  policy: (
    <>
      <path d="M4 14 20 5l16 9z" fill={G} stroke="none" />
      <path d="M9 18v12M16 18v12M24 18v12M31 18v12M5 34h30" />
    </>
  ),
  technology: (
    <>
      <rect x="11" y="11" width="18" height="18" rx="3" />
      <path d="M16 5v6M24 5v6M16 29v6M24 29v6M5 16h6M5 24h6M29 16h6M29 24h6" />
      {bead(20, 20, 4.5)}
    </>
  ),
  verified: (
    <>
      <circle cx="20" cy="20" r="15" />
      <circle cx="20" cy="20" r="8.5" />
      {bead(20, 20, 4)}
    </>
  ),
  coops: (
    <>
      <circle cx="14" cy="15" r="8.5" />
      <circle cx="26" cy="15" r="8.5" />
      <circle cx="20" cy="26" r="8.5" />
      {bead(20, 19, 3.5)}
    </>
  ),
  agriculture: (
    <>
      <path d="M3 19h34M3 34 12 19M14 34l3.5-15M26 34l-3.5-15M37 34l-9-15M3 34h34" stroke={N} />
      <path d="M12 19a8 8 0 0 1 16 0z" fill={G} stroke="none" />
    </>
  ),
  marketplace: (
    <>
      <path d="M5 8.5 8.75 15.5 12.5 8.5zM12.5 8.5l3.75 7 3.75-7zM20 8.5l3.75 7 3.75-7zM27.5 8.5l3.75 7L35 8.5z" fill={G} stroke="none" />
      <path d="M4 8.5h32M8 15.5V34M32 15.5V34M8 25h24M4 34h32" />
    </>
  ),
  savings: (
    <>
      <path d="M8 23v6c0 2.5 5.4 4.5 12 4.5s12-2 12-4.5v-6" fill="var(--white)" />
      <ellipse cx="20" cy="23" rx="12" ry="4.5" fill="var(--white)" />
      <path d="M8 13v6c0 2.5 5.4 4.5 12 4.5s12-2 12-4.5v-6" fill={G} stroke="none" />
      <ellipse cx="20" cy="13" rx="12" ry="4.5" fill={G} />
      {bead(20, 13, 2.5, I)}
    </>
  ),

  // Get involved
  donors: (
    <>
      <path d="M5 22h30c0 7.5-6.5 12.5-15 12.5S5 29.5 5 22z" />
      {bead(20, 12, 7.5)}
    </>
  ),
  councils: (
    <>
      {[180, 135, 90, 45, 0].map((a) => (
        <circle key={a} cx={20 + 14 * Math.cos((a * Math.PI) / 180)} cy={29 - 14 * Math.sin((a * Math.PI) / 180)} r="3" />
      ))}
      <path d="M20 21.5 26.5 33h-13z" fill={G} stroke="none" />
    </>
  ),
  volunteers: (
    <>
      <circle cx="16" cy="13" r="4.5" />
      <path d="M6.5 36c0-7.5 4-12 9.5-12s9.5 4.5 9.5 12M22 22.5l6-9.5" />
      {bead(30, 8, 4.5)}
    </>
  ),

  // News
  research: (
    <>
      <path d="M9 4h15l9 9v23H9z" />
      <path d="M24 4v9h9z" fill={G} />
      <path d="M14 20h13M14 25h13M14 30h8" />
    </>
  ),
} satisfies Record<string, ReactNode>;

export type IconName = keyof typeof glyphs;

export function Icon({ name, size = 40, className }: { name: IconName; size?: number; className?: string }) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      stroke={I}
      strokeWidth="2.25"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      {glyphs[name]}
    </svg>
  );
}

export const triad = [
  {
    name: "Abantu",
    meaning: "The people",
    icon: "abantu",
    body: "Our first loyalty is to the communities we serve: the rural poor, indigenous peoples, women and girls, youth, and those living at the margins. Every decision begins and ends with one question. Does this serve the people?",
  },
  {
    name: "Ubuntu",
    meaning: "I am because we are",
    icon: "ubuntu",
    body: "Ubuntu is not sentiment. It is a governance system. Relationships built on dignity, reciprocity and mutual accountability are the infrastructure of all our work.",
  },
  {
    name: "Isintu",
    meaning: "Our custom and way of life",
    icon: "isintu",
    body: "We honour and protect indigenous knowledge, customary law and the governance sovereignty of Amakhosi. The legitimacy of our work is inseparable from the legitimacy of traditional leadership.",
  },
] as const satisfies readonly { name: string; meaning: string; icon: IconName; body: string }[];
