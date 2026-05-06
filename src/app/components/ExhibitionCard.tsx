import { Link } from "react-router";
import { ArrowRight, ExternalLink } from "lucide-react";
import { ROUTES } from "../routes";
import type { ReactNode } from "react";

interface ExhibitionCardProps {
  title: string;
  description: string;
  image: string;
  slug: string;
  externalLink?: string;
  variant?: "train" | "artifact";
  imageObjectPosition?: string;
  endIcon?: ReactNode;
}

export function ExhibitionCard({
  title,
  description,
  image,
  slug,
  externalLink,
  variant,
  endIcon,
  imageObjectPosition,
}: ExhibitionCardProps) {
  let src = image;
  const base = import.meta.env.BASE_URL || '/';
  if (
    !/^https?:\/\//.test(image) &&
    !image.startsWith('data:') &&
    !image.startsWith(base)
  ) {
    src = image.startsWith('/') ? `${base}${image.slice(1)}` : `${base}${image}`;
  }
  console.debug('[ExhibitionCard]', title, '->', src);
  const displayVariant = variant ?? (externalLink ? "artifact" : "train");
  const exploreIcon =
    endIcon ??
    (displayVariant === "artifact" ? (
      <ExternalLink className="w-4 h-4" strokeWidth={3} />
    ) : (
      <ArrowRight className="w-4 h-4" strokeWidth={3} />
    ));
  const exploreLabel = displayVariant === "artifact" ? "Explore Artifact" : "Explore Exhibition";
  return (
    <div className="bg-card border border-border rounded-3xl overflow-hidden hover:shadow-lg transition-shadow">
      <div className="aspect-[16/10] overflow-hidden">
        <img
          src={src}
          alt={title}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          style={imageObjectPosition ? { objectPosition: imageObjectPosition } : undefined}
        />
      </div>
      <div className="p-6">
        <h3 className="font-semibold mb-2">{title}</h3>
        <p className="text-xs text-muted-foreground mb-4">
          {description}
        </p>
        {externalLink ? (
          <a
            href={externalLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm inline-flex items-center gap-2 text-primary hover:gap-3 transition-all"
          >
            {exploreLabel} {exploreIcon}
          </a>
        ) : (
          <Link
            to={`${ROUTES.exhibitions}/${slug}`}
            className="text-sm inline-flex items-center gap-2 text-primary hover:gap-3 transition-all"
          >
            {exploreLabel} {exploreIcon}
          </Link>
        )}
      </div>
    </div>
  );
}