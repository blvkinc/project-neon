import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigationItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Projects", href: "/projects" },
    { name: "Contact", href: "/contact" },
  ];

  const isActive = (href: string) => {
    if (href === "/") {
      return location.pathname === href;
    }
    return location.pathname.startsWith(href);
  };

  return (
    <header className="w-full px-4 sm:px-6 py-4 flex items-center justify-between max-w-7xl mx-auto">
      <div className="flex items-center">
        <Link
          to="/"
          className="text-xl sm:text-2xl font-bold text-foreground hover:opacity-80 transition-opacity"
        >
          designkit.
        </Link>
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center space-x-8">
        {navigationItems.map((item) => (
          <Link
            key={item.name}
            to={item.href}
            className={`text-sm font-medium transition-colors hover:text-brand-800 ${
              isActive(item.href) ? "text-brand-800" : "text-brand-600"
            }`}
          >
            {item.name}
          </Link>
        ))}
      </nav>

      <div className="flex items-center gap-4">
        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-brand-600 hover:text-brand-800 transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        <Button
          variant="default"
          className="bg-brand-800 hover:bg-brand-900 text-white rounded-lg px-4 sm:px-6 py-2.5 text-sm sm:text-base font-medium transition-colors"
          asChild
        >
          <Link to="/contact">
            <span className="hidden sm:inline">Get Started Today</span>
            <span className="sm:hidden">Get Started</span>
          </Link>
        </Button>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-white border-t border-brand-200 shadow-lg md:hidden z-50">
          <nav className="px-4 py-4 space-y-3">
            {navigationItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`block text-sm font-medium transition-colors hover:text-brand-800 py-2 ${
                  isActive(item.href) ? "text-brand-800" : "text-brand-600"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
