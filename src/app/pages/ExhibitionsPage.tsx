import { useState } from "react";
import { ExhibitionCard } from "../components/ExhibitionCard";

export function ExhibitionsPage() {
  const [filter, setFilter] = useState("all");

  const exhibitions = [
    {
      title: "Freight Car Collection",
      description: "Explore the workhorses of American railroading, from boxcars to refrigerator cars that moved goods across the nation.",
      era: "1920s - 1960s",
      image: "https://images.unsplash.com/photo-1474487548417-781cb71495f3?w=800&q=80",
      slug: "freight-cars",
      category: "freight"
    },
    {
      title: "Historic Caboose Collection",
      description: "Step inside authentic cabooses and learn about the crews who lived and worked in these iconic railway cars.",
      era: "1930s - 1980s",
      image: "https://images.unsplash.com/photo-1519669700-30773ef18ce9?w=800&q=80",
      slug: "cabooses",
      category: "freight"
    },
    {
      title: "Pullman Sleeper Car",
      description: "Experience the golden age of luxury rail travel in beautifully restored sleeping cars from America's passenger train era.",
      era: "1940s - 1960s",
      image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=800&q=80",
      slug: "pullman-sleeper",
      category: "passenger"
    }
  ];

  const filteredExhibitions = filter === "all"
    ? exhibitions
    : exhibitions.filter(e => e.category === filter);

  return (
    <div>
      {/* Page Header */}
      <section className="bg-primary text-primary-foreground py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-4xl font-bold mb-4">All Exhibitions</h1>
          <p className="text-lg opacity-95">
            Explore our complete collection of historic railway cars, locomotives, and artifacts
          </p>
        </div>
      </section>

      {/* Filters and Content */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-6">
          {/* Filter Buttons */}
          <div className="mb-8">
            <div className="flex flex-wrap gap-3 mb-6">
              <button
                onClick={() => setFilter("all")}
                className={`px-5 py-2 rounded-full transition-colors ${
                  filter === "all"
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground hover:bg-muted/80"
                }`}
              >
                All Exhibitions
              </button>
              <button
                onClick={() => setFilter("freight")}
                className={`px-5 py-2 rounded-full transition-colors ${
                  filter === "freight"
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground hover:bg-muted/80"
                }`}
              >
                Freight Cars
              </button>
            </div>
            <p className="text-muted-foreground">
              Showing {filteredExhibitions.length} Exhibition{filteredExhibitions.length !== 1 ? "s" : ""}
            </p>
          </div>

          {/* Exhibition Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredExhibitions.map((exhibition) => (
              <ExhibitionCard key={exhibition.slug} {...exhibition} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
