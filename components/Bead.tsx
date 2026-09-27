// Beadwork triangle pattern: the one bold element of the design.
// Rendered on the server; the staggered reveal is pure CSS (.bead) and is
// disabled under prefers-reduced-motion.

export function BeadBand() {
  return <div className="band band-gold" role="presentation" />;
}

type PanelProps = { width?: number; height?: number; animate?: boolean; seed?: number };

export function BeadPanel({ width = 420, height = 640, animate = true, seed = 0 }: PanelProps) {
  const s = 42;
  const h = 36;
  const rows = Math.ceil(height / h);
  const cols = Math.ceil(width / (s / 2)) + 2;
  const paths: { d: string; fill: string; delay: number }[] = [];
  for (let r = 0; r < rows; r++) {
    for (let c = -1; c < cols; c++) {
      const x = (c * s) / 2;
      const y = r * h;
      const up = (c + r) % 2 === 0;
      const d = up
        ? `M${x} ${y + h}L${x + s / 2} ${y}L${x + s} ${y + h}Z`
        : `M${x} ${y}L${x + s / 2} ${y + h}L${x + s} ${y}Z`;
      // Diamond motif: stronger colour near the diagonal bands.
      const band = Math.abs((((c + r + seed) % 12) + 12) % 12 - 6);
      const fill = band < 1 ? "#D6A13A" : band < 2 ? "#F0EFEA" : band < 3 ? "#3E5B45" : band < 4 ? "#23274A" : "#1F2242";
      paths.push({ d, fill, delay: r * 28 + Math.abs(c - 8) * 10 });
    }
  }
  return (
    <svg viewBox={`0 0 ${width} ${height}`} preserveAspectRatio="xMidYMid slice" aria-hidden="true" focusable="false">
      <rect width={width} height={height} fill="#1C1F3B" />
      {paths.map((p, i) => (
        <path
          key={i}
          d={p.d}
          fill={p.fill}
          className={animate ? "bead" : undefined}
          style={animate ? { animationDelay: `${p.delay}ms` } : undefined}
        />
      ))}
    </svg>
  );
}
