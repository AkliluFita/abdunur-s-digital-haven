import { Linkedin, Twitter, Instagram, Mail, MapPin, Phone, MessageCircle } from "lucide-react";

const REAL_EMAIL = "myfavorday@gmail.com";
const WHATSAPP_NUMBER = "19723438025";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/#services" },
  { label: "History", href: "/history" },
  { label: "Innovation", href: "/#innovation" },
  { label: "Contact", href: "/contact" },
];

const socialLinks = [
  { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
  { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
  { icon: MessageCircle, href: `https://wa.me/${WHATSAPP_NUMBER}`, label: "WhatsApp" },
];

const Footer = () => (
  <footer className="bg-primary border-t border-primary-foreground/10">
    {/* Main columns */}
    <div className="container mx-auto px-6 py-14">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Column 1: Brand */}
        <div className="flex flex-col gap-4">
          <a href="/" className="font-display font-bold text-2xl text-primary-foreground">
            Abdunur<span className="text-gold">.</span>com
          </a>
          <p className="text-primary-foreground/60 text-sm leading-relaxed max-w-xs">
            Serving the community with excellence, compassion, and purpose. Building a legacy that
            lifts thousands of lives across the Ethiopian and Eritrean diaspora.
          </p>
          {/* Social icons */}
          <div className="flex items-center gap-3 mt-2">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="w-9 h-9 rounded-full border border-primary-foreground/20 flex items-center justify-center text-primary-foreground/60 hover:text-gold hover:border-gold transition-all duration-200"
              >
                <Icon size={15} />
              </a>
            ))}
          </div>
        </div>

        {/* Column 2: Quick Links */}
        <div>
          <h4 className="text-primary-foreground font-semibold text-sm uppercase tracking-widest mb-5">
            Quick Links
          </h4>
          <ul className="flex flex-col gap-3">
            {quickLinks.map(({ label, href }) => (
              <li key={label}>
                <a
                  href={href}
                  className="text-primary-foreground/60 text-sm hover:text-gold transition-colors duration-200 flex items-center gap-2 group"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-gold/40 group-hover:bg-gold transition-colors duration-200" />
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3: Contact Info */}
        <div>
          <h4 className="text-primary-foreground font-semibold text-sm uppercase tracking-widest mb-5">
            Contact
          </h4>
          <ul className="flex flex-col gap-4">
            {[
              { icon: Mail, value: REAL_EMAIL, href: `mailto:${REAL_EMAIL}` },
              { icon: Phone, value: "+1 (972) 343-8025", href: "tel:+19723438025" },
              { icon: MessageCircle, value: "WhatsApp", href: `https://wa.me/${WHATSAPP_NUMBER}` },
              { icon: MapPin, value: "Richardson, Texas, USA", href: null },
            ].map(({ icon: Icon, value, href }) => (
              <li key={value} className="flex items-center gap-3 group">
                <Icon size={15} className="text-gold flex-shrink-0" strokeWidth={1.8} />
                {href ? (
                  <a
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="text-primary-foreground/60 text-sm hover:text-gold transition-colors duration-200"
                  >
                    {value}
                  </a>
                ) : (
                  <span className="text-primary-foreground/60 text-sm">{value}</span>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>

    {/* Copyright bar */}
    <div className="border-t border-primary-foreground/10 py-5 px-6">
      <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="text-primary-foreground/40 text-xs">
          © 2024 Abdunur.com. All Rights Reserved.
        </p>
        <p className="text-primary-foreground/30 text-xs">
          Built with passion &amp; purpose.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
