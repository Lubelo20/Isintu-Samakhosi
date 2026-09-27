import type { ReactNode } from "react";

// Visible placeholder for content the client still needs to supply.
export function Todo({ children }: { children: ReactNode }) {
  return <span className="todo">{children}</span>;
}

export const isTodo = (s: string) => s.startsWith("TODO:");

/** Render a content string as a paragraph, or as a TODO block if it is one. */
export function P({ text, className }: { text: string; className?: string }) {
  if (isTodo(text)) return <Todo>{text.replace(/^TODO:\s*/, "")}</Todo>;
  return <p className={className}>{text}</p>;
}
