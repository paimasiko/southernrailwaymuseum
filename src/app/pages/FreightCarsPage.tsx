import { Link } from "react-router";
import { Calendar, Cog, Package } from "lucide-react";

export function FreightCarsPage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative h-96 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1474487548417-781cb71495f3?w=1600&q=80"
          alt="Freight Car Collection"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8">
          <div className="max-w-7xl mx-auto px-6">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">
              Southern Railway Baggage Car
            </h1>
            <p className="text-white/90 text-lg">
              The Workhorses of American Railroading
            </p>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="pt-10 pb-4">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-10">
            <h2 className="text-3xl font-bold mb-3 pb-4">
              Overview
            </h2>
            <p className="text-md opacity-70 mb-10">
              One of the few surviving baggage cars used by
              Southern Railway from around 1952 to 1970.
              Originally, it was the Point Noire, a heavyweight
              sleeper car built by the Pullman Company in 1926.
              It was a part of a series of luxury passenger cars
              designed before the Great Depression. The car
              began its life on the Georgia Southern & Florida
              (GS&F) Railway, which is part of Southern. This
              line ran from the South of Macon, Georgia, through
              Valdosta, all the way to Palatka, FL.
              <br />
              <br />
              Most of the sleeper cars on GS&F had the "Point"
              prefix in their names. Other sleeper cars on this
              line were Point Richmond and Point Allerton.
              Southern Railway merged with the Norfolk and
              Western Railway in the late 1900s to form Norfolk
              Southern Railway. Today, it is one of the biggest
              railroad companies in America. Their headquarters
              are in Atlanta, 1 hour from our museum.
              <br />
              <br />
              In the late 1940s, Pullman was involved in an
              antitrust lawsuit with the Department of Justice,
              which resulted in the company having to divest a
              large portion of its assets. The Point Noire was
              sold to Southern. Afterward, they rebuilt it as a
              baggage car, which became the Southern #6457 and
              remains that way till today. It still ran on the
              GS&F line, mainly with local duties, serving the
              towns it passed through by delivering mail and
              packages.
            </p>
          </div>
        </div>
      </section>

      {/* Museum Floor Plan */}
      <section className="bg-primary text-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-4">
            Virtual Tour
          </h2>

          <p className="text-lg opacity-90 mb-10">
            Explore the Southern Railway Baggage Car with this
            3D walkthrough
          </p>

          {/* Floor Plan Placeholder */}
          <div className="bg-primary/80 border border-white/20 rounded-lg h-[400px] w-full flex items-center justify-center">
            <span className="text-white/70">
              Floor Plan Image Goes Here
            </span>
          </div>
        </div>
      </section>

      {/* Related Artifacts */}
      <section className="bg-white pt-16 pb-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">
            Related Artifacts
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto">
            {/* Artifact Card 1 */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg border border-border">
              <img
                src="/georgia-southern-map.jpg"
                alt="Georgia Southern and Florida Railroads Map"
                className="w-full h-64 object-cover"
              />

              <div className="p-6">
                <h3 className="text-2xl font-bold mb-5">
                  Georgia Southern & Florida Railroads
                </h3>

                <p className="text-muted-foreground mb-8 leading-relaxed">
                  The Southern Railway Baggage Car ran on the
                  Georgia Southern Railways throughout the early
                  1900s. View a map of the full line system
                  here.
                </p>

                <a
                  href="#"
                  className="text-primary font-medium inline-flex items-center gap-2 hover:underline"
                >
                  Explore Artifact <span>↗</span>
                </a>
              </div>
            </div>

            {/* Artifact Card 2 */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg border border-border">
              <img
                src="/historic-pullman-yards.jpg"
                alt="Historic Pullman Yards"
                className="w-full h-64 object-cover grayscale"
              />

              <div className="p-6">
                <h3 className="text-2xl font-bold mb-5">
                  Historic Pullman Yards
                </h3>

                <p className="text-muted-foreground mb-8 leading-relaxed">
                  Pullman Yards, near Kirkwood in Atlanta, was
                  the site of the Pullman Company's last sleeper
                  car facility. Read more about the site and how
                  it has been transformed in the city over the
                  past decades.
                </p>

                <a
                  href="#"
                  className="text-primary font-medium inline-flex items-center gap-2 hover:underline"
                >
                  Explore Artifact <span>↗</span>
                </a>
              </div>
            </div>
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
            to="/exhibitions"
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