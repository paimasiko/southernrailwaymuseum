import { Link } from "react-router";
import { Calendar, Home, Users } from "lucide-react";
import { ExhibitionCard } from "../components/ExhibitionCard";
import { ROUTES } from "../routes";

export function CaboosesPage() {
  const relatedArtifacts = [
    {
      title: "Painting of Crescent Limited",
      description:
        "By Howard Fogg",
      era: "Historic Map",
      image: `${import.meta.env.BASE_URL}crescen.png`,
      slug: "georgia-southern-map",
      externalLink:
        "https://web.archive.org/web/20151221184804/http://www.railga.com/gsf18map.html", // Replace with your link
    },
    {
      title: "Poster of Crescent",
      description:
        "Not issued when the train was running.",
      era: "Archival Photo",
      image: `${import.meta.env.BASE_URL}crescen2.png`,
      slug: "pullman-yards",
      externalLink: "https://example.com/pullman-yards", // Replace with your link
    },
  ];

  return (
    <div>
      {/* Hero */}
      <section className="relative h-96 overflow-hidden">
        <img
          src={`${import.meta.env.BASE_URL}thomas-ruffin.jpg`}
          alt="Thomas Ruffin Car"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8 mb-5">
          <div className="max-w-7xl mx-auto px-6">
            <h1 className="text-2xl md:text-4xl font-semibold text-white mb-2">
              Thomas Ruffin Car
            </h1>
            <p className="text-white/90 text-lg mt-4">
               Former Flagship Car
            </p>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="bg-secondary py-12">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl font-bold mb-6">Overview</h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              A luxury sleeper car built by Pullman in 1929 that
              served on the Crescent Limited line owned by
              Southern Railway. At the time, the Crescent
              Limited line was one of Southern's premier luxury
              passenger services. The car is named after Thomas
              Carter Ruffin. He was a Princeton alumnus who
              served as the Chief Justice of the North Carolina
              Supreme Court. Pullman was known for naming cars
              after prominent figures in American history.
            </p>
            <p>
              The Ruffin was originally built with ten open
              sections and two drawing rooms. It was later
              modified in 1935 to have 2 double bedrooms instead
              of one and to remove one of the drawing rooms.
              This change was likely made because of the decline
              in passenger numbers during the Great Depression.
              Drawing rooms were more expensive, so they often
              went unsold. Double bedrooms were becoming more
              popular during this time as they were cheap to
              book. Thus, Pullman would add more double bedrooms
              in exchange for removing one drawing room.
            </p>
            <p>
              The Crescent Limited line is one of the oldest
              running lines in America. While the Ruffin was in
              service, the Crescent ran between NYC and New
              Orleans. It was named after the Crescent City, New
              Orleans' nickname. The Ruffin, alongside other
              cars serving the Crescent Line, was painted a
              two-tone green color nicknamed “Virginia Green”.
              The Ruffin served on the line till sometime in the
              1940s when it was phased out for lightweight cars.
              It was eventually renumbered to be Southern 2449
              after the major Pullman divestiture and was
              donated to the National Railway Historical Society
              (NRHS) in 1965.
            </p>
          </div>
        </div>
      </section>

      {/* Virtual Tour */}
      <section className="bg-primary text-white px-24 py-10">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-4">
            Virtual Tour
          </h2>

          <p className="text-lg opacity-90 mb-10">
            Explore the Thomas Ruffin Car with this 3D
            walkthrough
          </p>

          {/* Matterport Placeholder */}
          <div className="bg-primary/80 border border-white/20 h-[45rem] w-full flex items-center justify-center">
            <iframe
              width="100%"
              height="100%"
              allowFullScreen
              src="https://my.matterport.com/show/?m=zW3Th73jEAd"
              allow="autoplay; fullscreen; web-share; xr-spatial-tracking;"
            ></iframe>
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
            {relatedArtifacts.map((artifact) => (
              <ExhibitionCard
                key={artifact.slug}
                {...artifact}
                variant="artifact"
              />
            ))}
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