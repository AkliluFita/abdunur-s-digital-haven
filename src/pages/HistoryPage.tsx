import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import profileImg from "@/assets/abdunur_zakir.png";
import communityImg from "@/assets/history-community.jpg";
import edelalaImg from "@/assets/history-edelala.jpg";
import { Award, Users, Heart, Star, BookOpen, Globe } from "lucide-react";

const milestones = [
  {
    year: "2010",
    icon: Star,
    title: "The Beginning",
    description:
      "Abdu Zakir (Abdu Nur) began his journey of community service in Richardson, Texas, recognizing the urgent need for organized support among the growing Ethiopian and Eritrean diaspora.",
  },
  {
    year: "2012",
    icon: Users,
    title: "Founding Edelala",
    description:
      "He founded Edelala, a pioneering organization designed to serve as a lifeline for thousands of diaspora members — creating employment pathways, healthcare advocacy programs, and social connectivity networks.",
  },
  {
    year: "2015",
    icon: Heart,
    title: "Healthcare Advocacy",
    description:
      "Expanded Edelala's mission to include comprehensive healthcare navigation services, helping thousands of families access medical care, insurance enrollment, and wellness resources in their new home country.",
  },
  {
    year: "2018",
    icon: Globe,
    title: "Community Expansion",
    description:
      "Grew community outreach programs to serve not only Ethiopian and Eritrean families but the broader immigrant community across the DFW metroplex, building bridges between cultures.",
  },
  {
    year: "2021",
    icon: BookOpen,
    title: "Education & Faith",
    description:
      "Launched educational and spiritual programs including Quran classes and Hajj travel facilitation, strengthening the faith and cultural identity of the community.",
  },
  {
    year: "2024",
    icon: Award,
    title: "A Legacy of Service",
    description:
      "Today, Abdu Nur's legacy spans over a decade of transformative service — a testament to what one visionary, driven by purpose, can build when he commits to lifting his community.",
  },
];

const values = [
  {
    icon: Heart,
    title: "Compassion",
    desc: "Serving with genuine care and empathy for every individual and family.",
  },
  {
    icon: Users,
    title: "Community",
    desc: "Building bridges that connect, empower, and strengthen the diaspora.",
  },
  {
    icon: Star,
    title: "Excellence",
    desc: "Delivering quality service in everything we undertake, without compromise.",
  },
  {
    icon: Globe,
    title: "Inclusion",
    desc: "Welcoming all backgrounds and faiths with open arms and equal dignity.",
  },
];

const HistoryPage = () => {
  const [darkMode, setDarkMode] = useState(false);
  useScrollReveal();

  const toggleDark = () => {
    setDarkMode((v) => {
      document.documentElement.classList.toggle("dark", !v);
      return !v;
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar darkMode={darkMode} toggleDark={toggleDark} />

      <main>
        {/* ── Hero Banner ── */}
        <section className="relative pt-28 pb-20 px-6 overflow-hidden bg-primary text-primary-foreground">
          <div className="absolute inset-0 -z-0 pointer-events-none opacity-10"
            style={{
              backgroundImage: `linear-gradient(hsl(var(--primary-foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary-foreground)) 1px, transparent 1px)`,
              backgroundSize: "60px 60px",
            }}
          />
          <div className="container mx-auto relative z-10 text-center">
            <p className="text-gold text-xs font-semibold tracking-widest uppercase mb-4">Our Story</p>
            <h1 className="font-display text-5xl md:text-6xl font-bold text-primary-foreground mb-6 leading-tight">
              A Legacy of Service<br />
              <span className="text-gold">&amp; Community</span>
            </h1>
            <p className="text-primary-foreground/70 max-w-2xl mx-auto text-lg leading-relaxed">
              The story of Abdu Zakir, known as Abdu Nur — a visionary who dedicated his life to
              building a bridge between his roots and his community's future.
            </p>
          </div>
        </section>

        {/* ── Story Section ── */}
        <section className="py-20 px-6">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24 reveal">
              {/* Image */}
              <div className="relative">
                <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-gold/15 to-primary/5 blur-2xl" />
                <div className="absolute -inset-1 rounded-[2rem] border border-gold/20" />
                <img
                  src={profileImg}
                  alt="Abdu Zakir - Abdu Nur"
                  className="relative w-full rounded-[1.75rem] object-cover object-top shadow-2xl aspect-[4/5]"
                />
                <div className="absolute bottom-6 left-6 right-6 bg-primary/90 backdrop-blur-sm rounded-2xl px-5 py-4 text-primary-foreground">
                  <p className="font-display font-bold text-lg">Abdu Zakir</p>
                  <p className="text-primary-foreground/70 text-sm">Known as Abdu Nur · Richardson, Texas</p>
                </div>
              </div>

              {/* Text */}
              <div>
                <p className="section-tag mb-4">Who He Is</p>
                <h2 className="font-display text-4xl font-bold text-primary mb-6 leading-snug">
                  A Visionary Built by Purpose
                </h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed text-base">
                  <p>
                    Abdu Zakir, widely known as <strong className="text-foreground">Abdu Nur</strong>, is a
                    distinguished American professional and community pioneer based in Richardson, Texas.
                    A multidisciplinary visionary, Zakir has spent decades weaving together a career
                    defined by technical excellence, strategic leadership, and a profound, life-long
                    commitment to the Ethiopian and Eritrean diaspora.
                  </p>
                  <p>
                    As the founder of <strong className="text-foreground">Edelala</strong>, he has spent
                    over 10 years building a legacy of service that transcends business — creating a
                    lifeline for thousands through employment, healthcare advocacy, and social connection.
                    His work has touched the lives of families across the Dallas-Fort Worth metroplex and
                    beyond.
                  </p>
                  <p>
                    Zakir's story is not just one of professional success, but of a man who chose to use
                    every tool at his disposal — every relationship, every skill, every platform — in
                    service of people who needed a champion.
                  </p>
                </div>
              </div>
            </div>

            {/* Community Image + Edelala */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24 reveal">
              {/* Text */}
              <div className="order-2 lg:order-1">
                <p className="section-tag mb-4">Edelala & Community</p>
                <h2 className="font-display text-4xl font-bold text-primary mb-6 leading-snug">
                  Building Lifelines for the Diaspora
                </h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed text-base">
                  <p>
                    Edelala was founded on a simple but powerful belief: that every person deserves
                    access to opportunity, dignity, and support — regardless of where they came from.
                    What began as a grassroots effort evolved into a full-service community organization
                    with programs spanning employment placement, healthcare navigation, housing assistance,
                    and spiritual welfare.
                  </p>
                  <p>
                    For the Ethiopian and Eritrean diaspora, Edelala became more than an organization —
                    it became a home. A place where new arrivals could find guidance, where the elderly
                    could find care, where families could find each other.
                  </p>
                </div>
                <div className="mt-8 grid grid-cols-3 gap-4">
                  {[
                    { val: "10+", label: "Years Active" },
                    { val: "1000s", label: "Lives Touched" },
                    { val: "2+", label: "Organizations" },
                  ].map(({ val, label }) => (
                    <div key={label} className="bg-secondary rounded-2xl p-4 text-center border border-border">
                      <p className="font-display text-2xl font-bold text-primary">{val}</p>
                      <p className="text-xs text-muted-foreground font-medium uppercase tracking-wide mt-1">{label}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Image */}
              <div className="order-1 lg:order-2 relative">
                <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-primary/10 to-gold/5 blur-2xl" />
                <img
                  src={communityImg}
                  alt="Ethiopian and Eritrean community gathering"
                  className="relative w-full rounded-[1.75rem] object-cover shadow-2xl aspect-video"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ── Timeline ── */}
        <section className="py-20 px-6 bg-secondary/50">
          <div className="container mx-auto">
            <div className="text-center mb-14 reveal">
              <p className="section-tag mb-3">The Journey</p>
              <h2 className="font-display text-4xl font-bold text-primary mb-4">Key Milestones</h2>
              <p className="text-muted-foreground max-w-xl mx-auto">
                A decade-long journey of building, serving, and inspiring an entire community.
              </p>
            </div>

            <div className="relative max-w-3xl mx-auto">
              {/* Vertical line */}
              <div className="absolute left-8 top-0 bottom-0 w-px bg-border hidden sm:block" />

              <div className="flex flex-col gap-8">
                {milestones.map(({ year, icon: Icon, title, description }, i) => (
                  <div key={year} className="flex gap-6 items-start reveal" style={{ animationDelay: `${i * 0.1}s` }}>
                    {/* Year badge */}
                    <div className="hidden sm:flex flex-col items-center flex-shrink-0 w-16">
                      <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center shadow-md z-10">
                        <Icon size={18} className="text-primary-foreground" strokeWidth={1.8} />
                      </div>
                      <span className="text-xs font-bold text-gold mt-2 font-display">{year}</span>
                    </div>

                    {/* Card */}
                    <div className="flex-1 bg-card border border-border rounded-2xl p-6 hover:border-gold/30 transition-colors duration-300 hover:shadow-md">
                      <div className="flex items-center gap-3 mb-2 sm:hidden">
                        <div className="w-8 h-8 rounded-xl bg-primary flex items-center justify-center">
                          <Icon size={14} className="text-primary-foreground" />
                        </div>
                        <span className="text-xs font-bold text-gold font-display">{year}</span>
                      </div>
                      <h3 className="font-display text-lg font-bold text-primary mb-2">{title}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── Values ── */}
        <section className="py-20 px-6">
          <div className="container mx-auto">
            <div className="text-center mb-14 reveal">
              <p className="section-tag mb-3">What Guides Us</p>
              <h2 className="font-display text-4xl font-bold text-primary mb-4">Core Values</h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto reveal">
              {values.map(({ icon: Icon, title, desc }) => (
                <div
                  key={title}
                  className="bg-card border border-border rounded-2xl p-6 text-center hover:-translate-y-1 transition-all duration-300 hover:border-gold/30"
                  style={{ boxShadow: "var(--shadow-card)" }}
                >
                  <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center mx-auto mb-4">
                    <Icon size={22} className="text-gold" strokeWidth={1.8} />
                  </div>
                  <h3 className="font-display font-bold text-primary text-lg mb-2">{title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="py-16 px-6 bg-primary text-center">
          <div className="container mx-auto">
            <h2 className="font-display text-3xl font-bold text-primary-foreground mb-4">
              Be Part of the Story
            </h2>
            <p className="text-primary-foreground/70 max-w-xl mx-auto mb-8">
              Join thousands who have benefited from Abdu Nur's services and be a part of a community that cares.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-gold text-accent-foreground font-semibold text-sm hover:bg-gold/90 transition-all duration-200 shadow-lg hover:-translate-y-0.5"
            >
              Get in Touch
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default HistoryPage;
