import { Link, useLocation } from "react-router-dom";

const navLinks = [
  { label: "Work", path: "/" },
  { label: "About", path: "/about" },
  { label: "Contact", path: "/contact" },
];

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-5 bg-background/80 backdrop-blur-sm border-b border-border/50">
      <Link to="/" className="font-display text-lg tracking-wide text-foreground">
        YOUR NAME
      </Link>
      <div className="flex items-center gap-6 md:gap-8">
        {navLinks.map((link) => (
          <Link
            key={link.path}
            to={link.path}
            className={`text-sm font-body tracking-wide transition-opacity hover:opacity-60 ${
              location.pathname === link.path
                ? "text-foreground underline underline-offset-4"
                : "text-muted-foreground"
            }`}
          >
            {link.label}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
