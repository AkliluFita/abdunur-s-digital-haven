import { useState, useEffect, useRef } from "react";
import { Menu, X, Linkedin, Twitter, Instagram, ChevronDown, Moon, Sun, MessageCircle } from "lucide-react";

const serviceItems = [
  // Business
  { label: "House Rent Service", href: "/#services" },
  { label: "Advanced Security Services", href: "/#services" },
  { label: "Room Rent Services", href: "/#services" },
  { label: "Baby Sitters", href: "/#services" },
  { label: "Job Find", href: "/#services" },
  // Personal
  { label: "Charity", href: "/#services" },
  { label: "Mam Adapt", href: "/#services" },
  { label: "Hajj Travel", href: "/#services" },
  { label: "Quran", href: "/#services" },
];

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/#services", hasDropdown: true },
  { label: "History", href: "/history" },
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
              <div key={link.label} className="relative" ref={dropdownRef}>
                <button
                  onClick={() => setDropdownOpen((v) => !v)}
                  className="nav-link pb-0.5 flex items-center gap-1 focus:outline-none"
                  aria-haspopup="true"
                  aria-expanded={dropdownOpen}
                >
                  {link.label}
                  <ChevronDown
                    size={14}
                    className={`transition-transform duration-200 ${dropdownOpen ? "rotate-180" : ""}`}
                  />
                </button>

                {/* Dropdown */}
                {dropdownOpen && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-64 rounded-2xl bg-card border border-border shadow-xl py-2 z-50 animate-fade-in">
                    {/* Arrow */}
                    <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-2 overflow-hidden">
                      <div className="w-4 h-4 bg-card border-l border-t border-border rotate-45 translate-y-2 mx-auto" />
                    </div>
                    <p className="px-4 pt-1 pb-2 text-[10px] font-bold uppercase tracking-widest text-muted-foreground border-b border-border mb-1">
                      Services
                    </p>
                    {serviceItems.map((item) => (
                      <a
                        key={item.label}
                        href={item.href}
                        onClick={() => setDropdownOpen(false)}
                        className="flex items-center gap-2.5 px-4 py-2.5 text-sm text-foreground/80 hover:text-primary hover:bg-secondary transition-colors duration-150"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-gold/50 flex-shrink-0" />
                        {item.label}
                      </a>
                    ))}
                  </div>
                )}
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

          {/* Dark mode toggle */}
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
      {mobileOpen && (
        <div className="md:hidden bg-background border-t border-border px-6 py-4 flex flex-col gap-1 animate-fade-in">
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
                    className={`transition-transform ${mobileServicesOpen ? "rotate-180" : ""}`}
                  />
                </button>
                {mobileServicesOpen && (
                  <div className="pl-4 flex flex-col gap-1 pb-2">
                    {serviceItems.map((item) => (
                      <a
                        key={item.label}
                        href={item.href}
                        onClick={() => setMobileOpen(false)}
                        className="flex items-center gap-2 py-2 text-sm text-foreground/70 hover:text-primary transition-colors"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-gold/50" />
                        {item.label}
                      </a>
                    ))}
                  </div>
                )}
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
      )}
    </header>
  );
};

export default Navbar;
