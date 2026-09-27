import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const alt = "Isintu Samakhosi Institution: Reviving the power of African kingships";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Bead pattern on the right, wordmark and headline on the left (brief §8).
export default async function OgImage() {
  const logo = await readFile(join(process.cwd(), "public/images/logo-emblem.png"));
  const logoSrc = `data:image/png;base64,${logo.toString("base64")}`;
  const tris: { x: number; y: number; up: boolean; fill: string }[] = [];
  for (let r = 0; r < 18; r++)
    for (let c = -1; c < 24; c++) {
      const band = Math.abs(((c + r) % 12) - 6);
      tris.push({ x: c * 21, y: r * 36, up: (c + r) % 2 === 0, fill: band < 1 ? "#D6A13A" : band < 2 ? "#F0EFEA" : band < 3 ? "#3E5B45" : band < 4 ? "#23274A" : "#1F2242" });
    }
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", background: "#1C1F3B", color: "#F0EFEA" }}>
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", padding: "0 64px", width: 720 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 18, marginBottom: 40 }}>
            <img src={logoSrc} width={84} height={84} alt="" />
            <div style={{ display: "flex", flexDirection: "column", fontSize: 30 }}>
              <span>Isintu Samakhosi</span>
              <span style={{ fontSize: 20, opacity: 0.7 }}>Institution NPC</span>
            </div>
          </div>
          <div style={{ fontSize: 30, color: "#D6A13A", marginBottom: 16 }}>Abantu, Ubuntu, Isintu</div>
          <div style={{ fontSize: 68, lineHeight: 1.05, letterSpacing: -1 }}>Reviving the power of African kingships</div>
        </div>
        <svg width="480" height="630" viewBox="0 0 480 630">
          {tris.map((t, i) => (
            <path key={i} fill={t.fill} d={t.up ? `M${t.x} ${t.y + 36}L${t.x + 21} ${t.y}L${t.x + 42} ${t.y + 36}Z` : `M${t.x} ${t.y}L${t.x + 21} ${t.y + 36}L${t.x + 42} ${t.y}Z`} />
          ))}
        </svg>
      </div>
    ),
    size,
  );
}
