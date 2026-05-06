import { Link } from "react-router";
import { ExhibitionCard } from "../components/ExhibitionCard";
import { ArrowLeft, Calendar, Cog, Package } from "lucide-react";
import { ROUTES } from "../routes";

export function BaggageCarPage() {
  const relatedArtifacts = [
    {
      title: "Georgia Southern & Florida Railroads",
      description:
        "The Southern Railway Baggage Car ran on the Georgia Southern Railways throughout the early 1900s. View a map of the full line system here.",
      era: "Historic Map",
      image: `${import.meta.env.BASE_URL}georgiasou.png`,
      slug: "georgia-southern-map",
      externalLink:
        "https://web.archive.org/web/20151221184804/http://www.railga.com/gsf18map.html", // Replace with your link
    },
    {
      title: "Historic Pullman Yards",
      description:
        "Pullman Yards, near Kirkwood in Atlanta, was the site of the Pullman Company's last sleeper car facility. Read more about the site and how it has been transformed in the city over the past decades.",
      era: "Archival Photo",
      image: `${import.meta.env.BASE_URL}factory.png`,
      slug: "pullman-yards",
      externalLink: "https://www.pullman-museum.org/pshs/pshsFullRecord.php?collection=pshs&pointer=14600",
    },
  ];

  return (
    <div>
      {/* Hero */}
      <section className="relative h-96 overflow-hidden">
        <img
          src={`${import.meta.env.BASE_URL}sou6457.jpg`}
          alt="Southern Railway Baggage Car"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8 mb-5">
          <Link to={ROUTES.exhibitions} className="flex text-[0.9rem] max-h-[2.8rem] w-fit border border-[#6D6D6D] items-center text-white gap-x-1 bg-[#6D6D6D]/55 p-3 mb-6  ml-6 rounded-sm ">
            <ArrowLeft strokeWidth={2} width={25} height={18}></ArrowLeft>
            Back to Exhibitions
          </Link>
          <div className="max-w-7xl mx-auto px-6">
            <h1 className="text-2xl md:text-4xl font-semibold text-white mb-2">
              Southern Railway Baggage Car
            </h1>
            <p className="text-white/90 text-lg mt-4">
              Also known as the Point Noire
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
              One of the few surviving baggage cars used by
              Southern Railway from around 1952 to 1970.
              Originally, it was the Point Noire, a heavyweight
              sleeper car built by the Pullman Company in 1926.
              It was a part of a series of luxury passenger cars
              designed before the Great Depression. The car
              began its life on the Georgia Southern & Florida
              (GS&F) Railway, which is part of Southern. This
              line ran from the South of Macon, Georgia, through
              Valdosta, all the way to Palatka, FL.{" "}
            </p>
            <p>
              Most of the sleeper cars on GS&F had the "Point"
              prefix in their names. Other sleeper cars on this
              line were Point Richmond and Point Allerton.
              Southern Railway merged with the Norfolk and
              Western Railway in the late 1900s to form Norfolk
              Southern Railway. Today, it is one of the biggest
              railroad companies in America. Their headquarters
              are in Atlanta, 1 hour from our museum.
            </p>
            <p>
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

      {/* Virtual Tour */}
      <section className="bg-primary text-white px-8 md:px-24 py-10">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-4">
            Virtual Tour
          </h2>

          <p className="text-lg opacity-90 mb-10">
            Explore the Southern Railway Baggage Car with this
            3D walkthrough
          </p>

          {/* Matterport Placeholder */}
          <div className="bg-primary/80 border border-white/20 h-[15rem] md:h-[45rem] w-full flex items-center justify-center">
            <iframe
              width="100%"
              height="100%"
              allowFullScreen
              src="https://my.matterport.com/show/?m=iB81MgtigZu"
              allow="autoplay; fullscreen; web-share; xr-spatial-tracking;"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Related Artifacts */}
      <section className="pt-10 pb-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-10">
            <h2 className="text-3xl font-bold mb-3">
              Related Artifacts
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {relatedArtifacts.map((artifact) => (
              <ExhibitionCard
                key={artifact.slug}
                {...artifact}
                imageObjectPosition={artifact.slug === 'georgia-southern-map' ? 'center bottom' : undefined}
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