import { useState } from "react";
import { Briefcase, User, Home, Shield, BedDouble, Baby, Briefcase as BriefcaseIcon, Heart, Users, Plane, BookOpen, X, CheckCircle } from "lucide-react";

import houseRent from "@/assets/service-house-rent.jpg";
import security from "@/assets/service-security.jpg";
import roomRent from "@/assets/service-room-rent.jpg";
import babysitter from "@/assets/service-babysitter.jpg";
import jobFind from "@/assets/service-job-find.jpg";
import charity from "@/assets/service-charity.jpg";
import mamAdapt from "@/assets/service-mam-adapt.jpg";
import hajjTravel from "@/assets/service-hajj-travel.jpg";
import quran from "@/assets/service-quran.jpg";

interface Service {
  icon: React.ElementType;
  title: string;
  description: string;
  image: string;
  details: string;
  highlights: string[];
  category: string;
}

const businessServices: Service[] = [
  {
    icon: Home,
    title: "House Rent Service",
    description: "Find your perfect home with our comprehensive house rental listings across Richardson and the DFW area.",
    image: houseRent,
    details:
      "We connect families and individuals with quality rental homes throughout the Dallas-Fort Worth metroplex. Our team personally vets each property to ensure safe, comfortable, and affordable housing options for the community.",
    highlights: [
      "Vetted property listings",
      "Flexible lease terms",
      "Community-focused locations",
      "Move-in assistance support",
    ],
    category: "Business",
  },
  {
    icon: Shield,
    title: "Advanced Security Services",
    description: "Professional security solutions for homes, businesses, and community events with trained personnel.",
    image: security,
    details:
      "Our advanced security services provide trained professionals for residential, commercial, and event security needs. We deliver peace of mind through reliable, responsive, and professional protection services.",
    highlights: [
      "24/7 security personnel",
      "CCTV installation & monitoring",
      "Event security management",
      "Emergency response planning",
    ],
    category: "Business",
  },
  {
    icon: BedDouble,
    title: "Room Rent Services",
    description: "Affordable room rentals for individuals and students seeking comfortable, community-friendly accommodation.",
    image: roomRent,
    details:
      "Whether you're a student, new arrival, or individual looking for affordable shared accommodation, we offer carefully selected room rentals in welcoming, community-oriented environments.",
    highlights: [
      "Furnished & unfurnished options",
      "Short and long-term leases",
      "Community living spaces",
      "Affordable pricing plans",
    ],
    category: "Business",
  },
  {
    icon: Baby,
    title: "Baby Sitters",
    description: "Trusted and caring babysitting services provided by vetted, experienced childcare professionals.",
    image: babysitter,
    details:
      "We connect families with background-checked, experienced babysitters who provide safe, nurturing care for your children. Our sitters are passionate about child development and speak multiple languages to serve our diverse community.",
    highlights: [
      "Background-checked sitters",
      "Multilingual caregivers",
      "Flexible scheduling",
      "First aid certified staff",
    ],
    category: "Business",
  },
  {
    icon: BriefcaseIcon,
    title: "Job Find",
    description: "Career placement and job-finding services helping community members access meaningful employment opportunities.",
    image: jobFind,
    details:
      "We assist members of the Ethiopian and Eritrean diaspora — and the broader community — in finding employment through our extensive employer network, resume preparation, and interview coaching services.",
    highlights: [
      "Employer network access",
      "Resume & CV preparation",
      "Interview coaching",
      "Career pathway planning",
    ],
    category: "Business",
  },
];

const personalServices: Service[] = [
  {
    icon: Heart,
    title: "Charity",
    description: "Community charity initiatives supporting families, the elderly, and those in need across the diaspora.",
    image: charity,
    details:
      "Our charity programs are rooted in the belief that a strong community lifts everyone. We organize fundraisers, distribute aid, and coordinate volunteer efforts to support vulnerable members of the Ethiopian and Eritrean diaspora in the DFW area.",
    highlights: [
      "Food & essential aid drives",
      "Healthcare assistance programs",
      "Educational scholarships",
      "Elderly care support",
    ],
    category: "Personal",
  },
  {
    icon: Users,
    title: "Mam Adapt",
    description: "Family support and adaptation services helping new arrivals and mothers navigate life in the US.",
    image: mamAdapt,
    details:
      "Mam Adapt provides comprehensive family settlement services, including cultural orientation, language support, healthcare navigation, and social integration programs designed specifically for mothers and families new to the United States.",
    highlights: [
      "Cultural orientation sessions",
      "Healthcare navigation support",
      "Language assistance",
      "Social integration programs",
    ],
    category: "Personal",
  },
  {
    icon: Plane,
    title: "Hajj Travel",
    description: "Complete Hajj pilgrimage travel packages organized with care, guidance, and spiritual preparation.",
    image: hajjTravel,
    details:
      "We organize carefully curated Hajj travel packages for Muslim community members, handling all logistics from visa applications and flight bookings to accommodation in Mecca and guided spiritual preparation programs.",
    highlights: [
      "Full visa & documentation support",
      "Flight & hotel coordination",
      "Spiritual preparation guidance",
      "Group travel arrangements",
    ],
    category: "Personal",
  },
  {
    icon: BookOpen,
    title: "Quran",
    description: "Quran learning and recitation classes for all ages, taught by qualified and experienced teachers.",
    image: quran,
    details:
      "Our Quran program offers structured learning for children, teens, and adults at all levels. From basic recitation (Tajweed) to memorization (Hifz), our qualified teachers provide personalized instruction in a supportive, faith-centered environment.",
    highlights: [
      "Classes for all age groups",
      "Tajweed (recitation) courses",
      "Hifz (memorization) programs",
      "Online & in-person sessions",
    ],
    category: "Personal",
  },
];

// ── Service Detail Modal ──────────────────────────────────────────────────────

interface ServiceModalProps {
  service: Service | null;
  onClose: () => void;
}

const ServiceModal = ({ service, onClose }: ServiceModalProps) => {
  if (!service) return null;
  const Icon = service.icon;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-label={service.title}
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-foreground/50 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Panel */}
      <div className="relative bg-card border border-border rounded-3xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto animate-fade-up">
        {/* Image header */}
        <div className="relative h-52 overflow-hidden rounded-t-3xl">
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/70 to-transparent" />
          {/* Category tag */}
          <span className="absolute top-4 left-4 bg-gold text-accent-foreground text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full">
            {service.category}
          </span>
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-8 h-8 bg-black/40 hover:bg-black/60 text-white rounded-full flex items-center justify-center transition-colors"
            aria-label="Close"
          >
            <X size={16} />
          </button>
          {/* Title overlay */}
          <div className="absolute bottom-4 left-4 right-4 flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gold/20 border border-gold/40 flex items-center justify-center flex-shrink-0">
              <Icon size={20} className="text-gold" strokeWidth={1.8} />
            </div>
            <h3 className="font-display text-2xl font-bold text-white">{service.title}</h3>
          </div>
        </div>

        {/* Body */}
        <div className="p-6 md:p-8">
          <p className="text-muted-foreground text-base leading-relaxed mb-6">{service.details}</p>

          <div>
            <h4 className="font-display text-base font-semibold text-primary mb-4">
              What's included
            </h4>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {service.highlights.map((item) => (
                <li key={item} className="flex items-start gap-2.5">
                  <CheckCircle size={16} className="text-gold mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-foreground/80">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a
              href="/contact"
              onClick={onClose}
              className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-semibold text-sm hover:bg-primary/90 transition-all duration-200 hover:-translate-y-0.5 shadow-md"
            >
              Get Started
            </a>
            <button
              onClick={onClose}
              className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl border border-border text-foreground font-semibold text-sm hover:bg-secondary transition-all duration-200"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// ── Service Card ──────────────────────────────────────────────────────────────

interface ServiceCardProps {
  service: Service;
  onOpen: (s: Service) => void;
}

const ServiceCard = ({ service, onOpen }: ServiceCardProps) => {
  const Icon = service.icon;
  return (
    <div
      className="group bg-card rounded-2xl border border-border overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-accent/30 cursor-pointer"
      style={{ boxShadow: "var(--shadow-card)" }}
      onClick={() => onOpen(service)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === "Enter" && onOpen(service)}
      aria-label={`View details for ${service.title}`}
    >
      {/* Image */}
      <div className="relative h-44 overflow-hidden bg-secondary">
        <img
          src={service.image}
          alt={service.title}
          className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent" />
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <span className="bg-black/50 text-white text-xs font-semibold px-3 py-1.5 rounded-full backdrop-blur-sm">
            Click for details
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="w-10 h-10 rounded-xl bg-gold/10 flex items-center justify-center mb-4 group-hover:bg-gold/20 transition-colors duration-300">
          <Icon size={20} className="text-gold" strokeWidth={1.8} />
        </div>
        <h4 className="font-display text-lg font-semibold text-primary mb-2 leading-snug">{service.title}</h4>
        <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
        <div className="mt-4 h-0.5 w-0 bg-gold rounded-full group-hover:w-10 transition-all duration-500" />
      </div>
    </div>
  );
};

// ── Subsection ────────────────────────────────────────────────────────────────

interface SubsectionProps {
  icon: React.ElementType;
  label: string;
  services: Service[];
  onOpen: (s: Service) => void;
}

const Subsection = ({ icon: Icon, label, services, onOpen }: SubsectionProps) => (
  <div className="mb-16 last:mb-0">
    <div className="flex items-center gap-3 mb-8">
      <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center flex-shrink-0">
        <Icon size={20} className="text-primary-foreground" strokeWidth={1.8} />
      </div>
      <h3 className="font-display text-2xl font-bold text-primary">{label}</h3>
      <div className="flex-1 h-px bg-border ml-2" />
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {services.map((service) => (
        <ServiceCard key={service.title} service={service} onOpen={onOpen} />
      ))}
    </div>
  </div>
);

// ── Main Section ──────────────────────────────────────────────────────────────

const Services = () => {
  const [activeService, setActiveService] = useState<Service | null>(null);

  return (
    <>
      <section id="services" className="py-24 px-6 bg-background scroll-mt-16">
        <div className="container mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <p className="section-tag mb-3">What I Offer</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-primary mb-4">My Services</h2>
            <p className="text-muted-foreground max-w-xl mx-auto text-base leading-relaxed">
              Professional solutions tailored to your needs — whether you're growing a business or
              enriching your personal and community life.
            </p>
          </div>

          <Subsection
            icon={Briefcase}
            label="Business Services"
            services={businessServices}
            onOpen={setActiveService}
          />
          <Subsection
            icon={User}
            label="Personal Services"
            services={personalServices}
            onOpen={setActiveService}
          />
        </div>
      </section>

      {/* Modal */}
      <ServiceModal service={activeService} onClose={() => setActiveService(null)} />
    </>
  );
};

export default Services;
