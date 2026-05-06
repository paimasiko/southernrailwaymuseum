import { Link } from "react-router";
import { ROUTES } from "../routes";
import { useEffect, useState } from "react";

export function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="bg-white border-b border-border sticky top-0 z-50">
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

          {/* Mobile hamburger */}
          <div className="md:hidden">
            <button
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
              className="p-2 rounded-md text-foreground hover:bg-gray-100"
            >
              {open ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 6L6 18" />
                  <path d="M6 6l12 12" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 12h18" />
                  <path d="M3 6h18" />
                  <path d="M3 18h18" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile overlay */}
      <div
        className={`fixed inset-0 bg-black/40 transition-opacity ${open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'} md:hidden`}
        onClick={() => setOpen(false)}
      />

      {/* Slide-out mobile nav */}
      <aside className={`fixed top-0 right-0 h-full w-64 bg-white shadow-xl transform transition-transform ${open ? 'translate-x-0' : 'translate-x-full'} md:hidden z-50`}>
        <div className="p-6 h-full flex flex-col">
          <div className="flex items-center justify-end mb-6">
            <button aria-label="Close menu" onClick={() => setOpen(false)} className="p-2 rounded-md hover:bg-gray-100">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 6L6 18" />
                <path d="M6 6l12 12" />
              </svg>
            </button>
          </div>

          <nav className="flex flex-col gap-4">
            <Link to={ROUTES.home} onClick={() => setOpen(false)} className="text-foreground hover:text-primary transition-colors">
              Home
            </Link>
            <Link to={ROUTES.exhibitions} onClick={() => setOpen(false)} className="text-foreground hover:text-primary transition-colors">
              Exhibitions
            </Link>
            <Link to={ROUTES.home} onClick={() => setOpen(false)} className="text-foreground hover:text-primary transition-colors">
              Support Us
            </Link>
            <a href="#about" onClick={() => setOpen(false)} className="text-foreground hover:text-primary transition-colors">
              About Us
            </a>

            <Link to={ROUTES.home} onClick={() => setOpen(false)} className="mt-4 inline-block bg-primary text-primary-foreground px-5 py-2 rounded-md hover:bg-primary/90 transition-colors">
              Plan Your Visit
            </Link>
          </nav>

          <div className="flex mt-auto text-sm text-muted-foreground align-middle justify-center items-center content-center">
            <Link to={ROUTES.home} className="flex items-center self-center content-center justify-center gap-4 -ml-4">
            <img
              src={`${import.meta.env.BASE_URL}serm2.png`}
              alt="Southeastern Railway Museum"
              className="h-11 object-contain"
            />
          </Link>
          </div>
        </div>
      </aside>
    </header>
  );
}