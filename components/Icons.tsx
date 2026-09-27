// Geometric icon set: triangles, circles and diamonds in indigo, gold and green.

export function AbantuIcon() {
  return (
    <svg width="64" height="64" viewBox="0 0 64 64" aria-hidden="true">
      <circle cx="20" cy="22" r="8" fill="#D6A13A" />
      <circle cx="44" cy="22" r="8" fill="#3E5B45" />
      <circle cx="32" cy="16" r="9" fill="#1C1F3B" stroke="#F0EFEA" strokeWidth="2" />
      <path d="M8 54c0-10 6-18 12-18s12 8 12 18zM32 54c0-10 6-18 12-18s12 8 12 18z" fill="currentColor" opacity=".18" />
      <path d="M18 56c0-12 6-22 14-22s14 10 14 22z" fill="currentColor" opacity=".35" />
    </svg>
  );
}

export function UbuntuIcon() {
  return (
    <svg width="64" height="64" viewBox="0 0 64 64" aria-hidden="true">
      <circle cx="24" cy="32" r="16" fill="none" stroke="#D6A13A" strokeWidth="5" />
      <circle cx="40" cy="32" r="16" fill="none" stroke="currentColor" strokeWidth="5" opacity=".55" />
    </svg>
  );
}

export function IsintuIcon() {
  return (
    <svg width="64" height="64" viewBox="0 0 64 64" aria-hidden="true">
      <path d="M32 4 58 32 32 60 6 32z" fill="none" stroke="currentColor" strokeWidth="4" opacity=".55" />
      <path d="M32 16 46 32 32 48 18 32z" fill="#D6A13A" />
      <path d="M32 26 38 32 32 38 26 32z" fill="#1C1F3B" />
    </svg>
  );
}

export const triad = [
  {
    name: "Abantu",
    meaning: "The people",
    Icon: AbantuIcon,
    body: "Our first loyalty is to the communities we serve: the rural poor, indigenous peoples, women and girls, youth, and those living at the margins. Every decision begins and ends with one question. Does this serve the people?",
  },
  {
    name: "Ubuntu",
    meaning: "I am because we are",
    Icon: UbuntuIcon,
    body: "Ubuntu is not sentiment. It is a governance system. Relationships built on dignity, reciprocity and mutual accountability are the infrastructure of all our work.",
  },
  {
    name: "Isintu",
    meaning: "Our custom and way of life",
    Icon: IsintuIcon,
    body: "We honour and protect indigenous knowledge, customary law and the governance sovereignty of Amakhosi. The legitimacy of our work is inseparable from the legitimacy of traditional leadership.",
  },
] as const;
