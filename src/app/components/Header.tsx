import { Link } from "react-router";
import { ROUTES } from "../routes";

export function Header() {
  return (
    <header className="bg-white border-b border-border sticky top-0 z-50 px-16 py-4">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to={ROUTES.home} className="flex items-center gap-4 -ml-4">
            <img
              src={`${import.meta.env.BASE_URL}serm2.png`}
              alt="Southeastern Railway Museum"
              className="h-11 object-contain"
            />
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            <Link
              to={ROUTES.home}
              className="text-foreground hover:text-primary transition-colors"
            >
              Home
            </Link>
            <Link
              to={ROUTES.exhibitions}
              className="text-foreground hover:text-primary transition-colors"
            >
              Exhibitions
            </Link>
            <Link
              to={ROUTES.home}
              className="text-foreground hover:text-primary transition-colors"
            >
              Support Us
            </Link>
            <a
              href="#about"
              className="text-foreground hover:text-primary transition-colors"
            >
              About Us
            </a>
            <Link
              to={ROUTES.home}
              className="bg-primary text-primary-foreground px-5 py-2 rounded-md hover:bg-primary/90 transition-colors"
            >
              Plan Your Visit
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}