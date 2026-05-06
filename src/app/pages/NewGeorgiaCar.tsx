import { Link } from "react-router";
import { Calendar, Bed, Sparkles } from "lucide-react";
import { ExhibitionCard } from "../components/ExhibitionCard";
import { ROUTES } from "../routes";
export function PullmanSleeperPage() {
  const relatedArtifacts = [
    {
      title: "Map of Old Cincinnati Southern Railway",
      description:
        "Cincinnati Southern Railway connects the Cincinnati to the south. Began serivce around 1880.",
      era: "Historic Map",
      image: `${import.meta.env.BASE_URL}Cincinati.jpg`,
      slug: "georgia-southern-map",
      externalLink:
        "https://web.archive.org/web/20151221184804/http://www.railga.com/gsf18map.html", // Replace with your link
    },
  ];

  return (
    <div>
      {/* Hero */}
      <section className="relative h-96 overflow-hidden">
        <img
          src={`${import.meta.env.BASE_URL}newgeorgia.jpg`}
          alt="New Georgia Car (Pullman Coach 3780)"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8 mb-5">
          <div className="max-w-7xl mx-auto px-6">
            <h1 className="text-2xl md:text-4xl font-semibold text-white mb-2">
              New Georgia Car
            </h1>
            <p className="text-white/90 text-lg mt-4">
              Also known as the Pullman Coach 3780
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
              Originally the Coach 3780, this car was a
              heavyweight passenger car built in 1922. It ran on
              Cincinnati, New Orleans & Texas Pacific Railway
              (CNO&TP) specifically from Cincinnati to New
              Orleans. This route was named the Queen and
              Crescent Route and was a cooperative route with
              CNO&TP and Southern Railway. The line began
              operations in 1881, and today, it is owned by
              Norfolk Southern, which purchased it for $1.6
              billion in 2024.
            </p>
            <p>
              The car ran carrying coach passengers until 1959.
              This was a result of new cars being available and
              overall fewer people using the trains. It was then
              donated in 1959 to the NRHS, and it stayed on
              display for a while. The car never received any
              major modifications. Eventually, it was relettered
              to New Georgia 1104 and leased to run on the New
              Georgia Railway in the 1980s. This was an
              excursion line that usually took defunct cars and
              restored them for tourism or events. It was fully
              staffed by Atlanta NRHS volunteers and operated by
              the Georgia Building Authority (GBA).
            </p>
            <p>
              The car was made at a time when demand for sleeper
              cars was declining. The Great Depression severely
              cut sleeper car revenue. While Pullman was able to
              thrive for some time during World Wars I and II
              due to military manufacturing, it wasn’t able to
              keep up in the long term. On one hand, the
              manufacturing of heavyweight cars like the Coach
              represented the beginning of the end for Pullman.
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
            Explore the New Georgia Car with this 3D walkthrough
          </p>

          {/* Matterport Placeholder */}
          <div className="bg-primary/80 border border-white/20 h-[45rem] w-full flex items-center justify-center">
            <iframe
              width="100%"
              height="100%"
              allowFullScreen
              src="https://my.matterport.com/show/?m=xSuzzFiaiSV"
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
          <div className="max-w-md mx-auto">
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