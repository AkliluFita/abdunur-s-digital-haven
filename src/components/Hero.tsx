import profileImg from "@/assets/abdunur-image1.png";
import { Mail, ArrowRight, MapPin, Award, Users } from "lucide-react";

const stats = [
  { value: "10+", label: "Years of Service" },
  { value: "1000s", label: "Lives Impacted" },
  { value: "2+", label: "Companies Founded" },
];

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-20 pb-16 px-6 overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-secondary/60 via-background to-background" />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-gold/5 blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-primary/5 blur-3xl" />
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: `linear-gradient(hsl(var(--primary)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="container mx-auto">
        <div className="flex flex-col items-center text-center gap-10">

          {/* Tag */}
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold/10 border border-gold/20 animate-fade-up"
            style={{ animationDelay: "0.05s", opacity: 0 }}
          >
            <Award size={13} className="text-gold" />
            <span className="text-xs font-semibold tracking-widest uppercase text-gold">
              Innovator · Community Pioneer · Leader
            </span>
          </div>

          {/* ── Profile image (centered) ── */}
          <div
            className="animate-fade-up"
            style={{ animationDelay: "0.1s", opacity: 0 }}
          >
            <div className="relative inline-block">
              {/* Outer glow ring */}
              <div className="absolute -inset-6 rounded-[2.5rem] bg-gradient-to-br from-gold/25 via-primary/10 to-transparent blur-2xl" />
              {/* Border ring */}
              <div className="absolute -inset-2 rounded-[2.5rem] border border-gold/25" />
              <div className="absolute -inset-1 rounded-[2.5rem] border border-primary/10" />

              <img
                src={profileImg}
                alt="Abdu Zakir (Abdu Nur) — Community Pioneer and Innovator"
                className="relative w-48 h-56 md:w-56 md:h-64 lg:w-64 lg:h-72 rounded-[2rem] object-cover object-top shadow-2xl"
              />

              {/* Available badge */}
              <div className="absolute -bottom-5 -right-5 bg-card border border-border rounded-2xl px-4 py-3 shadow-xl flex items-center gap-2.5">
                <div className="w-2.5 h-2.5 rounded-full bg-green-400 animate-pulse" />
                <span className="text-xs font-semibold text-foreground">Available for Projects</span>
              </div>

              {/* Location badge */}
              <div className="absolute -top-4 -left-4 bg-card border border-border rounded-xl px-3 py-2 shadow-lg flex items-center gap-2">
                <MapPin size={13} className="text-gold" />
                <span className="text-xs font-medium text-foreground/80">Richardson, TX</span>
              </div>
            </div>
          </div>

          {/* ── Text (centered) ── */}
          <div className="max-w-3xl">
            {/* Name headline */}
            <h1
              className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-primary leading-tight mb-2 animate-fade-up"
              style={{ animationDelay: "0.15s", opacity: 0 }}
            >
              Abdu Zakir
            </h1>
            <p
              className="font-display text-2xl md:text-3xl font-semibold text-gold mb-6 animate-fade-up"
              style={{ animationDelay: "0.2s", opacity: 0 }}
            >
              Known as <span className="italic">Abdu Nur</span>
            </p>

            {/* Bio */}
            <p
              className="text-base text-muted-foreground leading-relaxed mb-8 animate-fade-up"
              style={{ animationDelay: "0.25s", opacity: 0 }}
            >
              A distinguished American professional and community pioneer based in{" "}
              <strong className="text-foreground font-semibold">Richardson, Texas</strong>. A
              multidisciplinary visionary, Zakir has spent decades weaving together a career defined
              by technical excellence, strategic leadership, and a profound, life-long commitment to
              the Ethiopian and Eritrean diaspora. As the founder of{" "}
              <strong className="text-foreground font-semibold">Edelala</strong>, he has spent over
              10 years building a legacy of service that transcends business — creating a lifeline
              for thousands through employment, healthcare advocacy, and social connection..
            </p>

            {/* Stats row */}
            <div
              className="flex flex-wrap justify-center gap-8 mb-9 animate-fade-up"
              style={{ animationDelay: "0.3s", opacity: 0 }}
            >
              {stats.map(({ value, label }) => (
                <div key={label} className="flex flex-col items-center">
                  <span className="font-display text-2xl font-bold text-primary">{value}</span>
                  <span className="text-xs text-muted-foreground font-medium uppercase tracking-wide">{label}</span>
                </div>
              ))}
            </div>

            {/* CTA buttons */}
            <div
              className="flex flex-col sm:flex-row gap-3 justify-center animate-fade-up"
              style={{ animationDelay: "0.35s", opacity: 0 }}
            >
              <a
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-primary text-primary-foreground font-semibold text-sm hover:bg-primary/90 transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
              >
                <Mail size={16} />
                Contact Me
              </a>
              <a
                href="#innovation"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl border-2 border-border text-foreground font-semibold text-sm hover:bg-secondary hover:border-primary/30 transition-all duration-200"
              >
                View Innovations
                <ArrowRight size={16} />
              </a>
              <a
                href="/history"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl border-2 border-gold/40 text-gold font-semibold text-sm hover:bg-gold/10 transition-all duration-200"
              >
                Our History
                <Users size={16} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
