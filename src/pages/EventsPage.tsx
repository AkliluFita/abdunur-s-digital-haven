import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Calendar, Play, Image, ExternalLink } from "lucide-react";

const events = [
  {
    title: "Ethiopian New Year Community Celebration",
    date: "September 11, 2024",
    description: "Annual community gathering to celebrate Enkutatash with traditional food, music, and cultural performances.",
    type: "event" as const,
  },
  {
    title: "Diaspora Job Fair 2024",
    date: "August 15, 2024",
    description: "Connecting community members with local employers. Over 30 companies participated in this career-building event.",
    type: "event" as const,
  },
  {
    title: "Hajj Travel Information Session",
    date: "March 20, 2024",
    description: "Informational session about upcoming Hajj travel packages, visa requirements, and spiritual preparation guidance.",
    type: "event" as const,
  },
  {
    title: "Ramadan Charity Drive",
    date: "March 10, 2024",
    description: "Community-wide charity initiative distributing food packages and essentials to families in need during the holy month.",
    type: "event" as const,
  },
];

const flyers = [
  {
    title: "House Rent Services — Spring 2024",
    description: "New listings available across Richardson and DFW. Affordable family homes and apartments.",
  },
  {
    title: "Quran Classes Enrollment Open",
    description: "Register your children for Tajweed and Hifz classes. All ages welcome, online & in-person.",
  },
  {
    title: "Security Services Launch",
    description: "Introducing our advanced security solutions for homes, businesses, and community events.",
  },
  {
    title: "Babysitter Network Expansion",
    description: "We're growing our certified babysitter network. Join us or find a trusted caregiver today.",
  },
];

const videos = [
  {
    title: "Edelala Community Impact — 10 Years of Service",
    youtubeId: "dQw4w9WgXcQ",
    description: "A documentary-style overview of Edelala's decade-long journey serving the Ethiopian and Eritrean diaspora.",
  },
  {
    title: "Ethiopian New Year 2024 Celebration Highlights",
    youtubeId: "dQw4w9WgXcQ",
    description: "Highlights from our vibrant Enkutatash community celebration featuring traditional performances.",
  },
  {
    title: "Job Fair 2024 — Connecting Community to Careers",
    youtubeId: "dQw4w9WgXcQ",
    description: "Recap of our annual job fair bringing together employers and job seekers from the diaspora community.",
  },
  {
    title: "Hajj Travel 2024 — Journey of a Lifetime",
    youtubeId: "dQw4w9WgXcQ",
    description: "Follow our community members on their spiritual journey to Mecca, organized by Abdunur.com.",
  },
];

const EventsPage = () => {
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
        {/* Hero Banner */}
        <section className="relative pt-28 pb-20 px-6 overflow-hidden bg-primary text-primary-foreground">
          <div
            className="absolute inset-0 -z-0 pointer-events-none opacity-10"
            style={{
              backgroundImage: `linear-gradient(hsl(var(--primary-foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary-foreground)) 1px, transparent 1px)`,
              backgroundSize: "60px 60px",
            }}
          />
          <div className="container mx-auto relative z-10 text-center">
            <p className="text-gold text-xs font-semibold tracking-widest uppercase mb-4">Stay Connected</p>
            <h1 className="font-display text-5xl md:text-6xl font-bold text-primary-foreground mb-6 leading-tight">
              Events & Media
            </h1>
            <p className="text-primary-foreground/70 max-w-2xl mx-auto text-lg leading-relaxed">
              Community events, announcements, and video content — stay updated with everything happening at Abdunur.com
            </p>
          </div>
        </section>

        {/* Events Section */}
        <section className="py-20 px-6">
          <div className="container mx-auto">
            <div className="flex items-center gap-3 mb-10 reveal">
              <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
                <Calendar size={20} className="text-primary-foreground" strokeWidth={1.8} />
              </div>
              <h2 className="font-display text-3xl font-bold text-primary">Upcoming & Recent Events</h2>
              <div className="flex-1 h-px bg-border ml-2" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 reveal">
              {events.map((event) => (
                <div
                  key={event.title}
                  className="bg-card border border-border rounded-2xl p-6 hover:-translate-y-1 hover:border-accent/30 transition-all duration-300"
                  style={{ boxShadow: "var(--shadow-card)" }}
                >
                  <div className="flex items-center gap-2 mb-3">
                    <Calendar size={14} className="text-gold" />
                    <span className="text-xs font-semibold text-gold">{event.date}</span>
                  </div>
                  <h3 className="font-display text-lg font-bold text-primary mb-2">{event.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{event.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Flyers Section */}
        <section className="py-20 px-6 bg-secondary/50">
          <div className="container mx-auto">
            <div className="flex items-center gap-3 mb-10 reveal">
              <div className="w-10 h-10 rounded-xl bg-gold flex items-center justify-center">
                <Image size={20} className="text-accent-foreground" strokeWidth={1.8} />
              </div>
              <h2 className="font-display text-3xl font-bold text-primary">Flyers & Announcements</h2>
              <div className="flex-1 h-px bg-border ml-2" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 reveal">
              {flyers.map((flyer) => (
                <div
                  key={flyer.title}
                  className="bg-card border border-border rounded-2xl overflow-hidden hover:-translate-y-1 hover:border-accent/30 transition-all duration-300 group"
                  style={{ boxShadow: "var(--shadow-card)" }}
                >
                  {/* Placeholder flyer visual */}
                  <div className="h-40 bg-gradient-to-br from-primary/10 via-gold/10 to-primary/5 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-2xl bg-gold/10 border border-gold/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Image size={28} className="text-gold" />
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="font-display text-base font-bold text-primary mb-2 leading-snug">{flyer.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{flyer.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* YouTube Videos Section */}
        <section className="py-20 px-6">
          <div className="container mx-auto">
            <div className="flex items-center gap-3 mb-10 reveal">
              <div className="w-10 h-10 rounded-xl bg-destructive flex items-center justify-center">
                <Play size={20} className="text-white" strokeWidth={1.8} />
              </div>
              <h2 className="font-display text-3xl font-bold text-primary">Videos</h2>
              <div className="flex-1 h-px bg-border ml-2" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 reveal">
              {videos.map((video) => (
                <div
                  key={video.title}
                  className="bg-card border border-border rounded-2xl overflow-hidden hover:-translate-y-1 hover:border-accent/30 transition-all duration-300"
                  style={{ boxShadow: "var(--shadow-card)" }}
                >
                  {/* YouTube Embed */}
                  <div className="relative aspect-video bg-secondary">
                    <iframe
                      src={`https://www.youtube.com/embed/${video.youtubeId}`}
                      title={video.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="absolute inset-0 w-full h-full"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="font-display text-lg font-bold text-primary mb-2">{video.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{video.description}</p>
                    <a
                      href={`https://www.youtube.com/watch?v=${video.youtubeId}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 mt-4 text-xs font-semibold text-primary hover:text-gold transition-colors"
                    >
                      Watch on YouTube <ExternalLink size={12} />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 px-6 bg-primary text-center">
          <div className="container mx-auto">
            <h2 className="font-display text-3xl font-bold text-primary-foreground mb-4">
              Have an Event to Share?
            </h2>
            <p className="text-primary-foreground/70 max-w-xl mx-auto mb-8">
              If you'd like to promote a community event or share a video, get in touch with us.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-gold text-accent-foreground font-semibold text-sm hover:bg-gold/90 transition-all duration-200 shadow-lg hover:-translate-y-0.5"
            >
              Contact Us
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default EventsPage;
