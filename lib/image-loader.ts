// Static-export image loader. Photos in public/ are already resized (max 1600px) and
// stripped of EXIF data, so they are served as they are. The base path is added so
// images still load when the site is hosted in a sub-folder.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export default function imageLoader({ src, width }: { src: string; width: number; quality?: number }) {
  if (/^(https?:|data:)/.test(src)) return src;
  return `${basePath}${src}?w=${width}`;
}
