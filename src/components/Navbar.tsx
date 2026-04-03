import { Link, useLocation } from "react-router-dom";

const navLinks = [
  { label: "ALL WORKS", path: "/" },
  { label: "ABOUT", path: "/about" },
  { label: "CONTACT", path: "/contact" },
];

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-6 bg-background/90 backdrop-blur-sm">
      <div className="flex items-center gap-6 md:gap-8">
        {navLinks.map((link) => (
          <Link
            key={link.path}
            to={link.path}
            className={`text-xs tracking-[0.15em] font-body font-medium transition-opacity hover:opacity-50 ${
              location.pathname === link.path
                ? "text-foreground"
                : "text-muted-foreground"
            }`}
          >
            {link.label}
          </Link>
        ))}
      </div>
      <Link to="/" className="font-display text-2xl md:text-3xl italic text-foreground">
        Your Name.
      </Link>
    </nav>
  );
};

export default Navbar;
