import Image from "next/image";
import { photos, type PhotoKey } from "@/lib/photos";

type Props = {
  name: PhotoKey;
  caption?: string;
  className?: string;
  sizes?: string;
  priority?: boolean;
  /** Fill the parent box (parent sets the size), e.g. in the mosaic. */
  fill?: boolean;
};

export function Photo({ name, caption, className = "", sizes = "(max-width: 820px) 100vw, 50vw", priority, fill }: Props) {
  const p = photos[name];
  return (
    <figure className={`photo ${className}`}>
      {fill ? (
        <Image src={p.src} alt={p.alt} fill sizes={sizes} priority={priority} placeholder={p.blur} />
      ) : (
        <Image src={p.src} alt={p.alt} width={p.width} height={p.height} sizes={sizes} priority={priority} placeholder={p.blur} />
      )}
      {caption && <figcaption>{caption}</figcaption>}
    </figure>
  );
}
