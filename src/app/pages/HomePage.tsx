import { Link } from "react-router";
import { ExhibitionCard } from "../components/ExhibitionCard";
import { Clock, MapPin, Ticket, Users } from "lucide-react";
import { ROUTES } from "../routes";

export function HomePage() {
  const featuredExhibitions = [
    {
      title: "Southern Railway Baggage Car",
      description:
        `One of the few surviving baggage cars used by
              Southern Railway from around 1952 to 1970.`,
      image: `${import.meta.env.BASE_URL}sou6457.jpg`,
      slug: "baggage-car",
    },
    {
      title: "Thomas Ruffin Car",
      description:
        `A luxury sleeper car built by Pullman in 1929 that
              served on the Crescent Limited line owned by
              Southern Railway.`,
      image: `${import.meta.env.BASE_URL}thomas-ruffin.jpg`,
      slug: "ruffin",
    },
    {
      title: "New Georgia Car",
      description:
        `Originally the Coach 3780, this car was a heavyweight passenger car built in 1922.`,
      image: `${import.meta.env.BASE_URL}newgeorgia.jpg`,
      slug: "newgeorgia",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[550px] text-white">
        {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url('${import.meta.env.BASE_URL}background_railroad.jpg')`,
            }}
          />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50" />

        {/* Content */}
        <div className="relative max-w-7xl mx-auto px-6 h-full flex items-center">
          <div className="max-w-5xl text-left">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 md:whitespace-nowrap">
              Journey Through Railway History
            </h1>

            <p className="text-lg mb-8 max-w-2xl">
              Experience the stories, engineering marvels, and
              human achievement that built the American
              Southeast through interactive digital exhibitions.
            </p>

            <div className="flex gap-4">
              <Link
                to={ROUTES.exhibitions}
                className="bg-primary px-6 py-3 rounded-md font-medium hover:bg-primary/90 transition-colors"
              >
                Explore Exhibitions
              </Link>

              <button className="bg-white/20 backdrop-blur px-6 py-3 rounded-md font-medium hover:bg-white/30 transition-colors">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* More Than a Museum Visit */}
      <section className="bg-white pt-20 pb-10">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-foreground">
            More Than a Museum Visit
          </h2>

          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            The Southeastern Railway Museum offers 90+ railway
            cars for exploration. Throughout the property, you
            and your family will encounter Baggage Cars,
            Cabooses, Postal Cars, Locomotives, and much more.
            Each exhibition page provides intuitive navigation,
            rich visual storytelling, and layered historical
            context, allowing you to explore train cars and
            artifacts in greater depth — whether you're visiting
            in person or from home.
          </p>
        </div>
      </section>

      {/* Featured Exhibitions */}
      <section className="pt-10 pb-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-10">
            <h2 className="text-3xl font-bold mb-3">
              Featured Exhibitions
            </h2>
            <p className="text-muted-foreground">
              Discover the stories behind our iconic pieces
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredExhibitions.map((exhibition) => (
              <ExhibitionCard
                key={exhibition.slug}
                {...exhibition}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Museum Floor Plan */}
      <section className="bg-primary text-white py-16">
        <div className="max-w-7xl mx-auto px-6 h-fit">
          <h2 className="text-3xl font-bold mb-4">
            Museum Floor Plan
          </h2>

          <p className="text-lg opacity-90 mb-10">
            This floor plan shows you where the Museum galleries
            and facilities are located, to help you plan your
            visit.
          </p>

          {/* Floor Plan Placeholder */}
          <div className="bg-primary/80 rounded-lg h-[15rem] md:h-[35rem] w-full flex items-center content-center justify-center">
            <img
              src={`${import.meta.env.BASE_URL}floorplan.png`}
              alt="Museum Floor Plan"
              className="h-fit w-fit object-contain border border-white/20"
            />
          </div>
        </div>
      </section>

      {/* Journey CTA */}
      <section className="bg-[#1f1f1f] text-white py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Begin Your Journey?
          </h2>

          <p className="text-lg text-white/80 mb-10">
            Explore our complete collection of exhibitions and
            discover the rich history of southeastern railways.
          </p>

          <Link
            to={ROUTES.exhibitions}
            className="inline-flex items-center gap-3 bg-primary px-10 py-4 rounded-md font-medium text-lg hover:bg-primary/90 transition-colors"
          >
            Explore All Exhibitions
            <span>→</span>
          </Link>
        </div>
      </section>
    </div>
  );
}