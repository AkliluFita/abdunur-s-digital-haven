import { Trophy, Rocket, Star, Lightbulb } from "lucide-react";

const innovations = [
  {
    icon: Trophy,
    tag: "Award Winning",
    title: "Award Winning Project",
    description:
      "Recognized at the National Innovation Summit for developing a groundbreaking solution that reduced operational costs by 40% for mid-sized enterprises.",
  },
  {
    icon: Rocket,
    tag: "Successful Launch",
    title: "Successful Product Launch",
    description:
      "Spearheaded the end-to-end launch of a SaaS platform now serving 10,000+ users across 15 countries, achieving product-market fit within 3 months.",
  },
  {
    icon: Star,
    tag: "Industry Recognition",
    title: "Global Startup Finalist",
    description:
      "Selected among the top 10 startups worldwide at a leading tech accelerator, securing strategic partnerships that accelerated growth by 3x.",
  },
];

const Innovations = () => {
  return (
    <section id="innovation" className="py-24 px-6 bg-secondary/40 scroll-mt-16">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-16 reveal">
          <p className="section-tag mb-3">Track Record</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-primary mb-4">
            Innovations &amp; Success Stories
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-base leading-relaxed">
            A curated selection of milestones that reflect a commitment to excellence,
            bold thinking, and measurable impact.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {innovations.map(({ icon: Icon, tag, title, description }, i) => (
            <div
              key={title}
              className="card-innovation group reveal"
              style={{ transitionDelay: `${i * 0.12}s` }}
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-2xl bg-gold-light flex items-center justify-center mb-6 group-hover:bg-gold/20 transition-colors duration-300">
                <Icon size={26} className="text-gold" strokeWidth={1.8} />
              </div>
              {/* Tag */}
              <span className="section-tag text-[10px] mb-3 block">{tag}</span>
              {/* Title */}
              <h3 className="font-display text-xl font-semibold text-primary mb-3 leading-snug">
                {title}
              </h3>
              {/* Description */}
              <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>

              {/* Bottom accent line */}
              <div className="mt-6 h-0.5 w-0 bg-gold rounded-full group-hover:w-12 transition-all duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Innovations;
