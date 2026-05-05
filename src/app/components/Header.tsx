import { Link } from "react-router";

export function Header() {
  return (
    <header className="bg-white border-b border-border sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-4 -ml-4">
            <img
              src="/serm.png"
              alt="Southeastern Railway Museum"
              className="h-18 object-contain"
            />
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            <Link
              to="/"
              className="text-foreground hover:text-primary transition-colors"
            >
              Home
            </Link>
            <Link
              to="/exhibitions"
              className="text-foreground hover:text-primary transition-colors"
            >
              Exhibitions
            </Link>
            <Link
              to="/support"
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
              to="/support"
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