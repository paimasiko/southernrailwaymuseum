import { Link } from "react-router";
import { ExhibitionCard } from "../components/ExhibitionCard";
import { ArrowLeft } from "lucide-react";
import { ROUTES } from "../routes";

const PLACEHOLDER_IMAGE =
  "data:image/svg+xml;charset=UTF-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1600 900'%3E%3Crect width='1600' height='900' fill='%23d1d5db'/%3E%3C/svg%3E";

const galleryItems = Array.from({ length: 6 }, (_, index) => ({
  id: index + 1,
  image: PLACEHOLDER_IMAGE,
}));

export function ExhibitionTemplateGalleryPage() {
  return (
    <div>
      <section className="relative overflow-hidden">
        <div className="bg-[#000000]/60 min-h-[22rem] md:min-h-[28rem] relative">
          <div className="absolute bottom-0 left-0 right-0 p-8 mb-5">
            <div className="max-w-7xl mx-auto w-full px-6">
              <Link
                to={ROUTES.exhibitions}
                className="flex text-[0.9rem] max-h-[2.8rem] w-fit border border-[#6D6D6D] items-center text-white gap-x-1 bg-[#6D6D6D]/55 p-3 mb-6 ml-6 rounded-sm"
              >
                <ArrowLeft strokeWidth={2} width={25} height={18} />
                Back to Exhibitions
              </Link>
              <div className="max-w-3xl px-6">
                <h1 className="text-2xl md:text-4xl font-semibold text-white mb-2">
                  Placeholder Title
                </h1>
                <p className="text-white/90 text-lg md:text-xl mt-4">
                  Placeholder text here
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-secondary py-12 h-[40rem]">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl font-bold mb-6">Overview</h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <span>
              Overview text on the history of the artifact and infromation can go here
            </span>
          </div>
        </div>
      </section>

      <section className="bg-primary text-white px-6 py-10">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Gallery</h2>
          <p className="text-lg opacity-90 mb-10">
            Add images of the train car or artifact here
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-15">
            {galleryItems.map((item) => (
              <div
                key={item.id}
                className="bg-primary/80 border border-white/20 overflow-hidden rounded-md aspect-[4/3]"
              >
                <img
                  src={item.image}
                  alt={`Gallery placeholder ${item.id}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="pt-10 pb-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-10">
            <h2 className="text-3xl font-bold mb-3">Artifacts</h2>
            <p className="text-muted-foreground max-w-3xl">
              Explore the objects connected to this exhibition in more detail.
            </p>
          </div>
          <div className="max-w-md mx-auto">
            <ExhibitionCard
              title="Artifact Title"
              description="Body text with information can be placed here"
              image={PLACEHOLDER_IMAGE}
              slug="placeholder-artifact"
              variant="artifact"
            />
          </div>
        </div>
      </section>

      <section className="bg-[#1f1f1f] text-white py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Begin Your Journey?
          </h2>
          <p className="text-lg text-white/80 mb-10">
            Explore our complete collection of exhibitions and discover the rich history of southeastern railways.
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