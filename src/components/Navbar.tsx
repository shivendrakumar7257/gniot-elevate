import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, Phone, Mail } from "lucide-react";

const navItems = [
  { label: "Home", href: "/" },
  {
    label: "About",
    href: "/about",
    submenu: [
      { label: "Chairman's Message", href: "/about#chairman" },
      { label: "Vision & Mission", href: "/about#vision" },
      { label: "Infrastructure", href: "/about#infrastructure" },
      { label: "Accreditations", href: "/about#accreditations" },
    ],
  },
  {
    label: "Academics",
    href: "/academics",
    submenu: [
      { label: "B.Tech Programs", href: "/academics#btech" },
      { label: "MBA", href: "/academics#mba" },
      { label: "BCA / MCA", href: "/academics#bca" },
      { label: "Research & Labs", href: "/academics#labs" },
    ],
  },
  { label: "Admissions", href: "/admissions" },
  { label: "Placements", href: "/placements" },
  { label: "Campus Life", href: "/campus-life" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setActiveDropdown(null);
  }, [location.pathname]);

  const isActive = (href: string) =>
    href === "/" ? location.pathname === "/" : location.pathname.startsWith(href);

  return (
    <>
      {/* Top bar */}
      <div className="bg-navy-dark text-white text-xs py-2 px-4 hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <span className="opacity-80">Affiliated to AKTU, NAAC Accredited | Estd. 1998</span>
          <div className="flex items-center gap-6">
            <a href="tel:+911204567890" className="flex items-center gap-1 opacity-80 hover:opacity-100 transition-opacity">
              <Phone size={12} /> +91 120-4567890
            </a>
            <a href="mailto:info@gniot.net" className="flex items-center gap-1 opacity-80 hover:opacity-100 transition-opacity">
              <Mail size={12} /> info@gniot.net
            </a>
            <Link to="/admissions" className="bg-gold text-navy-dark font-semibold px-3 py-1 rounded text-xs hover:bg-gold-light transition-colors">
              Apply Now 2025
            </Link>
          </div>
        </div>
      </div>

      {/* Main navbar */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-navy/95 backdrop-blur-lg shadow-navy mt-0 py-3"
            : "bg-transparent py-4 mt-8"
        }`}
        style={{ backdropFilter: isScrolled ? "blur(20px)" : undefined }}
      >
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-12 h-12 rounded-xl bg-gold flex items-center justify-center font-black text-navy-dark text-xl shadow-gold transition-transform group-hover:scale-105">
              G
            </div>
            <div>
              <div className="text-white font-black text-lg leading-tight tracking-wide">GNIOT</div>
              <div className="text-gold text-[10px] font-medium leading-tight tracking-wider uppercase">
                Greater Noida
              </div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => item.submenu && setActiveDropdown(item.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  to={item.href}
                  className={`flex items-center gap-1 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 nav-link-animated
                    ${isActive(item.href)
                      ? "text-gold"
                      : "text-white/90 hover:text-gold"
                    }`}
                >
                  {item.label}
                  {item.submenu && <ChevronDown size={14} className={`transition-transform ${activeDropdown === item.label ? "rotate-180" : ""}`} />}
                </Link>

                {/* Dropdown */}
                {item.submenu && activeDropdown === item.label && (
                  <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-xl shadow-lg border border-border overflow-hidden animate-slide-down">
                    {item.submenu.map((sub) => (
                      <Link
                        key={sub.label}
                        to={sub.href}
                        className="block px-4 py-3 text-sm text-foreground hover:bg-navy hover:text-white transition-colors border-b border-border/50 last:border-0"
                      >
                        {sub.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA + Mobile toggle */}
          <div className="flex items-center gap-3">
            <Link
              to="/admissions"
              className="hidden md:flex items-center gap-2 bg-gold text-navy-dark font-bold px-5 py-2.5 rounded-xl text-sm hover:bg-gold-light transition-all duration-200 shadow-gold hover:shadow-none hover:-translate-y-0.5"
            >
              Apply Now
            </Link>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden text-white p-2 rounded-lg hover:bg-white/10 transition-colors"
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="lg:hidden bg-navy/98 backdrop-blur-xl border-t border-white/10 animate-slide-down">
            <div className="max-w-7xl mx-auto px-4 py-4 space-y-1">
              {navItems.map((item) => (
                <div key={item.label}>
                  <Link
                    to={item.href}
                    className={`block px-4 py-3 rounded-lg text-sm font-medium transition-colors
                      ${isActive(item.href) ? "bg-gold/20 text-gold" : "text-white/90 hover:bg-white/10 hover:text-white"}`}
                  >
                    {item.label}
                  </Link>
                  {item.submenu && (
                    <div className="ml-4 space-y-1 mt-1">
                      {item.submenu.map((sub) => (
                        <Link
                          key={sub.label}
                          to={sub.href}
                          className="block px-4 py-2 rounded-lg text-xs text-white/60 hover:text-gold hover:bg-white/5 transition-colors"
                        >
                          → {sub.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="pt-2">
                <Link to="/admissions" className="block text-center bg-gold text-navy-dark font-bold px-5 py-3 rounded-xl text-sm hover:bg-gold-light transition-colors">
                  Apply Now 2025
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
