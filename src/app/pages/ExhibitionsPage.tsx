import { useState } from "react";
import { ExhibitionCard } from "../components/ExhibitionCard";

export function ExhibitionsPage() {
  const [filter, setFilter] = useState("all");

  const exhibitions = [
    {
      title: "Southern Railway Baggage Car",
      description:
        `One of the few surviving baggage cars used by
              Southern Railway from around 1952 to 1970.`,
      image: `${import.meta.env.BASE_URL}sou6457.jpg`,
      slug: "baggage-car",
      category: "baggage",
    },
    {
      title: "Thomas Ruffin Car",
      description:
        `A luxury sleeper car built by Pullman in 1929 that
              served on the Crescent Limited line owned by
              Southern Railway.`,
      image: `${import.meta.env.BASE_URL}thomas-ruffin.jpg`,
      slug: "ruffin",
      category: "passenger",
    },
    {
      title: "New Georgia Car",
      description:
        `Originally the Coach 3780, this car was a heavyweight passenger car built in 1922.`,
      image: `${import.meta.env.BASE_URL}newgeorgia.jpg`,
      slug: "newgeorgia",
      category: "passenger",
    },
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
                onClick={() => setFilter("baggage")}
                className={`px-5 py-2 rounded-full transition-colors ${
                  filter === "baggage"
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground hover:bg-muted/80"
                }`}
              >
                Baggage Cars
              </button>
              <button
                onClick={() => setFilter("passenger")}
                className={`px-5 py-2 rounded-full transition-colors ${
                  filter === "passenger"
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground hover:bg-muted/80"
                }`}
              >
                Passenger Cars
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
