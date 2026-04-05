import { Link, useLocation } from "react-router-dom";

const navLinks = [
  { label: "ALL WORKS", path: "/" },
  { label: "ABOUT", path: "/about" },
  { label: "CONTACT", path: "/contact" },
];

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 sm:px-6 md:px-12 py-5 md:py-6 bg-background/90 backdrop-blur-sm">
      <div className="flex items-center gap-3 sm:gap-6 md:gap-8">
        {navLinks.map((link) => (
          <Link
            key={link.path}
            to={link.path}
            className={`text-[10px] sm:text-xs tracking-[0.12em] sm:tracking-[0.15em] whitespace-nowrap font-body font-medium transition-opacity hover:opacity-50 ${
              location.pathname === link.path
                ? "text-foreground"
                : "text-muted-foreground"
            }`}
          >
            {link.label}
          </Link>
        ))}
      </div>
      <Link
        to="/"
        className="pl-3 sm:pl-4 font-display text-lg sm:text-2xl md:text-3xl italic whitespace-nowrap text-right text-foreground"
      >
        Julianna Revilla.
      </Link>
    </nav>
  );
};

export default Navbar;
