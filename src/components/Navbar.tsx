import { useState, useEffect, useRef } from "react";
import { Menu, X, Linkedin, Twitter, Instagram, ChevronDown, Moon, Sun, MessageCircle, Briefcase, User } from "lucide-react";

const serviceCategories = [
  {
    label: "Business Services",
    icon: Briefcase,
    items: [
      { label: "House Rent Service", href: "/#services" },
      { label: "Advanced Security Services", href: "/#services" },
      { label: "Room Rent Services", href: "/#services" },
      { label: "Baby Sitters", href: "/#services" },
      { label: "Job Find", href: "/#services" },
    ],
  },
  {
    label: "Personal Services",
    icon: User,
    items: [
      { label: "Charity", href: "/#services" },
      { label: "Mam Adapt", href: "/#services" },
      { label: "Hajj Travel", href: "/#services" },
      { label: "Quran", href: "/#services" },
    ],
  },
];

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/#services", hasDropdown: true },
  { label: "History", href: "/history" },
  { label: "Events", href: "/events" },
  { label: "Innovation", href: "/#innovation" },
  { label: "Contact", href: "/contact" },
];

const socialLinks = [
  { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
  { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
  {
    icon: MessageCircle,
    href: "https://wa.me/19723438025",
    label: "WhatsApp",
    className: "text-green-500 hover:text-green-400",
  },
];

interface NavbarProps {
  darkMode: boolean;
  toggleDark: () => void;
}

const Navbar = ({ darkMode, toggleDark }: NavbarProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const dropdownTimeout = useRef<ReturnType<typeof setTimeout>>();

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const handleDropdownEnter = () => {
    clearTimeout(dropdownTimeout.current);
    setDropdownOpen(true);
  };

  const handleDropdownLeave = () => {
    dropdownTimeout.current = setTimeout(() => setDropdownOpen(false), 200);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-md border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between h-16 px-6">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2 flex-shrink-0">
          <span className="font-display font-bold text-xl text-primary tracking-tight">
            Abdunur<span className="text-gold">.</span>com
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-7">
          {navLinks.map((link) =>
            link.hasDropdown ? (
              <div
                key={link.label}
                className="relative"
                ref={dropdownRef}
                onMouseEnter={handleDropdownEnter}
                onMouseLeave={handleDropdownLeave}
              >
                <button
                  onClick={() => setDropdownOpen((v) => !v)}
                  className="nav-link pb-0.5 flex items-center gap-1 focus:outline-none"
                  aria-haspopup="true"
                  aria-expanded={dropdownOpen}
                >
                  {link.label}
                  <ChevronDown
                    size={14}
                    className={`transition-transform duration-300 ${dropdownOpen ? "rotate-180" : ""}`}
                  />
                </button>

                {/* Mega Dropdown */}
                <div
                  className={`absolute top-full left-1/2 -translate-x-1/2 mt-3 rounded-2xl bg-card border border-border shadow-xl z-50 transition-all duration-300 origin-top ${
                    dropdownOpen
                      ? "opacity-100 scale-100 translate-y-0 pointer-events-auto"
                      : "opacity-0 scale-95 -translate-y-2 pointer-events-none"
                  }`}
                  style={{ width: "480px" }}
                >
                  {/* Arrow */}
                  <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-2 overflow-hidden">
                    <div className="w-4 h-4 bg-card border-l border-t border-border rotate-45 translate-y-2 mx-auto" />
                  </div>

                  <div className="grid grid-cols-2 gap-0 p-2">
                    {serviceCategories.map((cat) => {
                      const CatIcon = cat.icon;
                      return (
                        <div key={cat.label} className="p-2">
                          <div className="flex items-center gap-2 px-3 py-2 mb-1">
                            <div className="w-7 h-7 rounded-lg bg-primary/10 flex items-center justify-center">
                              <CatIcon size={14} className="text-primary" />
                            </div>
                            <p className="text-[11px] font-bold uppercase tracking-widest text-muted-foreground">
                              {cat.label}
                            </p>
                          </div>
                          {cat.items.map((item) => (
                            <a
                              key={item.label}
                              href={item.href}
                              onClick={() => setDropdownOpen(false)}
                              className="flex items-center gap-2.5 px-3 py-2 text-sm text-foreground/80 hover:text-primary hover:bg-secondary rounded-lg transition-all duration-150 group"
                            >
                              <span className="w-1.5 h-1.5 rounded-full bg-gold/40 group-hover:bg-gold group-hover:scale-125 transition-all duration-200 flex-shrink-0" />
                              {item.label}
                            </a>
                          ))}
                        </div>
                      );
                    })}
                  </div>

                  <div className="border-t border-border px-4 py-3 text-center">
                    <a
                      href="/#services"
                      onClick={() => setDropdownOpen(false)}
                      className="text-xs font-semibold text-primary hover:text-gold transition-colors"
                    >
                      View All Services →
                    </a>
                  </div>
                </div>
              </div>
            ) : (
              <a key={link.label} href={link.href} className="nav-link pb-0.5">
                {link.label}
              </a>
            )
          )}
        </nav>

        {/* Right side: socials + dark mode */}
        <div className="hidden md:flex items-center gap-2">
          {socialLinks.map(({ icon: Icon, href, label, className: extraClass }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className={`w-8 h-8 rounded-full flex items-center justify-center border border-border text-muted-foreground hover:text-primary hover:border-primary hover:bg-secondary transition-all duration-200 ${extraClass ?? ""}`}
            >
              <Icon size={15} />
            </a>
          ))}

          <button
            onClick={toggleDark}
            aria-label="Toggle dark mode"
            className="ml-1 w-8 h-8 rounded-full flex items-center justify-center border border-border text-muted-foreground hover:text-primary hover:border-primary hover:bg-secondary transition-all duration-200"
          >
            {darkMode ? <Sun size={15} /> : <Moon size={15} />}
          </button>
        </div>

        {/* Mobile toggle */}
        <div className="md:hidden flex items-center gap-2">
          <button
            onClick={toggleDark}
            aria-label="Toggle dark mode"
            className="p-2 text-foreground/70"
          >
            {darkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button
            className="p-2 text-foreground"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden bg-background border-t border-border overflow-hidden transition-all duration-300 ease-in-out ${
          mobileOpen ? "max-h-[80vh] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-6 py-4 flex flex-col gap-1">
          {navLinks.map((link) =>
            link.hasDropdown ? (
              <div key={link.label}>
                <button
                  onClick={() => setMobileServicesOpen((v) => !v)}
                  className="w-full flex items-center justify-between py-2.5 text-base font-medium text-foreground/80 hover:text-primary transition-colors"
                >
                  {link.label}
                  <ChevronDown
                    size={16}
                    className={`transition-transform duration-300 ${mobileServicesOpen ? "rotate-180" : ""}`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    mobileServicesOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="pl-2 pb-2">
                    {serviceCategories.map((cat) => {
                      const CatIcon = cat.icon;
                      return (
                        <div key={cat.label} className="mb-3">
                          <div className="flex items-center gap-2 py-2 pl-2">
                            <CatIcon size={14} className="text-primary" />
                            <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
                              {cat.label}
                            </span>
                          </div>
                          {cat.items.map((item) => (
                            <a
                              key={item.label}
                              href={item.href}
                              onClick={() => setMobileOpen(false)}
                              className="flex items-center gap-2 py-2 pl-4 text-sm text-foreground/70 hover:text-primary transition-colors"
                            >
                              <span className="w-1.5 h-1.5 rounded-full bg-gold/50" />
                              {item.label}
                            </a>
                          ))}
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            ) : (
              <a
                key={link.label}
                href={link.href}
                className="py-2.5 text-base font-medium text-foreground/80 hover:text-primary transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </a>
            )
          )}
          <div className="flex items-center gap-3 pt-3 border-t border-border mt-2">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="w-9 h-9 rounded-full flex items-center justify-center border border-border text-muted-foreground hover:text-primary hover:border-primary transition-all duration-200"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
