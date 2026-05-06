import { Link } from "react-router";
import { ArrowRight, Tag } from "lucide-react";
import { ROUTES } from "../routes";

interface ExhibitionCardProps {
  title: string;
  description: string;
  image: string;
  slug: string;
  externalLink?: string;
}

export function ExhibitionCard({
  title,
  description,
  image,
  slug,
  externalLink,
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
  return (
    <div className="bg-card border border-border rounded-xl overflow-hidden hover:shadow-lg transition-shadow">
      <div className="aspect-[16/10] overflow-hidden">
        <img
          src={src}
          alt={title}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-6">
        <h3 className="font-semibold mb-2">{title}</h3>
        <p className="text-sm text-muted-foreground mb-4">
          {description}
        </p>
        {externalLink ? (
          <a
            href={externalLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary hover:gap-3 transition-all"
          >
            Explore <ArrowRight className="w-4 h-4" />
          </a>
        ) : (
          <Link
            to={`${ROUTES.exhibitions}/${slug}`}
            className="inline-flex items-center gap-2 text-primary hover:gap-3 transition-all"
          >
            Explore <ArrowRight className="w-4 h-4" />
          </Link>
        )}
      </div>
    </div>
  );
}