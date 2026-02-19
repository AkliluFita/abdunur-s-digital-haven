import { useState } from "react";
import { Mail, MapPin, Phone, Send, CheckCircle, MessageCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useScrollReveal } from "@/hooks/useScrollReveal";

interface FormState {
  name: string;
  email: string;
  phone: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

const REAL_EMAIL = "myfavorday@gmail.com";
const WHATSAPP_NUMBER = "19723438025";

const validate = (form: FormState): FormErrors => {
  const errs: FormErrors = {};
  if (!form.name.trim() || form.name.trim().length < 2)
    errs.name = "Name must be at least 2 characters.";
  if (form.name.trim().length > 100)
    errs.name = "Name must be less than 100 characters.";
  if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim()))
    errs.email = "A valid email address is required.";
  if (form.email.trim().length > 255)
    errs.email = "Email must be less than 255 characters.";
  if (!form.message.trim() || form.message.trim().length < 10)
    errs.message = "Message must be at least 10 characters.";
  if (form.message.trim().length > 2000)
    errs.message = "Message must be less than 2000 characters.";
  return errs;
};

const ContactPage = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [form, setForm] = useState<FormState>({ name: "", email: "", phone: "", message: "" });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<FormErrors>({});
  useScrollReveal();

  const toggleDark = () => {
    setDarkMode((v) => {
      document.documentElement.classList.toggle("dark", !v);
      return !v;
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    setErrors((prev) => ({ ...prev, [e.target.name]: undefined }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate(form);
    if (Object.keys(errs).length) {
      setErrors(errs);
      return;
    }
    setErrors({});
    setLoading(true);

    // Build mailto link with real email
    const subject = encodeURIComponent(`Contact from ${form.name.trim()} via Abdunur.com`);
    const body = encodeURIComponent(
      `Name: ${form.name.trim()}\nEmail: ${form.email.trim()}\nPhone: ${form.phone.trim() || "Not provided"}\n\nMessage:\n${form.message.trim()}`
    );
    window.location.href = `mailto:${REAL_EMAIL}?subject=${subject}&body=${body}`;

    setTimeout(() => {
      setLoading(false);
      setSent(true);
      setForm({ name: "", email: "", phone: "", message: "" });
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar darkMode={darkMode} toggleDark={toggleDark} />

      <main>
        {/* ── Header Banner ── */}
        <section className="relative pt-28 pb-16 px-6 bg-primary text-primary-foreground overflow-hidden">
          <div className="absolute inset-0 opacity-10 pointer-events-none"
            style={{
              backgroundImage: `linear-gradient(hsl(var(--primary-foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary-foreground)) 1px, transparent 1px)`,
              backgroundSize: "60px 60px",
            }}
          />
          <div className="container mx-auto relative z-10 text-center">
            <p className="text-gold text-xs font-semibold tracking-widest uppercase mb-3">Reach Out</p>
            <h1 className="font-display text-5xl md:text-6xl font-bold text-primary-foreground mb-4">
              Get in Touch
            </h1>
            <p className="text-primary-foreground/70 max-w-xl mx-auto text-base leading-relaxed">
              Have an idea, project, or question? I'd love to hear from you. Fill in the form or reach
              me directly through the details below.
            </p>
          </div>
        </section>

        {/* ── Form + Info ── */}
        <section className="py-20 px-6">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
              {/* Contact Form */}
              <div className="bg-card border border-border rounded-2xl p-8 shadow-sm reveal">
                <h2 className="font-display text-2xl font-bold text-primary mb-6">Send a Message</h2>
                {sent ? (
                  <div className="flex flex-col items-center justify-center h-full text-center py-10 gap-4">
                    <CheckCircle size={48} className="text-gold" />
                    <h3 className="font-display text-2xl font-bold text-primary">Message Sent!</h3>
                    <p className="text-muted-foreground text-sm">
                      Thank you for reaching out. I'll get back to you as soon as possible.
                    </p>
                    <button
                      onClick={() => setSent(false)}
                      className="mt-2 text-gold text-sm underline underline-offset-4 hover:text-gold/80 transition-colors"
                    >
                      Send another message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
                    {/* Name */}
                    <div>
                      <label htmlFor="name" className="block text-foreground/70 text-xs font-semibold uppercase tracking-wider mb-1.5">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        maxLength={100}
                        className={`w-full rounded-xl bg-secondary border text-foreground placeholder:text-muted-foreground px-4 py-3 text-sm focus:outline-none focus:ring-2 transition-all ${errors.name ? "border-red-400 focus:ring-red-300" : "border-border focus:border-gold focus:ring-gold/30"}`}
                      />
                      {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                    </div>

                    {/* Email */}
                    <div>
                      <label htmlFor="email" className="block text-foreground/70 text-xs font-semibold uppercase tracking-wider mb-1.5">
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        maxLength={255}
                        className={`w-full rounded-xl bg-secondary border text-foreground placeholder:text-muted-foreground px-4 py-3 text-sm focus:outline-none focus:ring-2 transition-all ${errors.email ? "border-red-400 focus:ring-red-300" : "border-border focus:border-gold focus:ring-gold/30"}`}
                      />
                      {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                    </div>

                    {/* Phone (optional) */}
                    <div>
                      <label htmlFor="phone" className="block text-foreground/70 text-xs font-semibold uppercase tracking-wider mb-1.5">
                        Phone Number <span className="text-muted-foreground font-normal">(optional)</span>
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="+1 (555) 000-0000"
                        className="w-full rounded-xl bg-secondary border border-border text-foreground placeholder:text-muted-foreground px-4 py-3 text-sm focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/30 transition-all"
                      />
                    </div>

                    {/* Message */}
                    <div>
                      <label htmlFor="message" className="block text-foreground/70 text-xs font-semibold uppercase tracking-wider mb-1.5">
                        Message <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={5}
                        value={form.message}
                        onChange={handleChange}
                        placeholder="Tell me about your project or idea..."
                        maxLength={2000}
                        className={`w-full rounded-xl bg-secondary border text-foreground placeholder:text-muted-foreground px-4 py-3 text-sm focus:outline-none focus:ring-2 transition-all resize-none ${errors.message ? "border-red-400 focus:ring-red-300" : "border-border focus:border-gold focus:ring-gold/30"}`}
                      />
                      <div className="flex justify-between items-center mt-1">
                        {errors.message ? (
                          <p className="text-red-500 text-xs">{errors.message}</p>
                        ) : (
                          <span />
                        )}
                        <span className="text-xs text-muted-foreground">{form.message.length}/2000</span>
                      </div>
                    </div>

                    <button
                      type="submit"
                      disabled={loading}
                      className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-primary text-primary-foreground font-semibold text-sm hover:bg-primary/90 active:scale-[0.98] transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed shadow-sm hover:shadow-md hover:-translate-y-0.5"
                    >
                      {loading ? (
                        <span className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                      ) : (
                        <Send size={16} />
                      )}
                      {loading ? "Opening mail client…" : "Send Message"}
                    </button>

                    <p className="text-xs text-muted-foreground text-center">
                      Your message will open your email client pre-filled and ready to send.
                    </p>
                  </form>
                )}
              </div>

              {/* Contact Info */}
              <div className="flex flex-col justify-start gap-8 reveal">
                <div>
                  <h2 className="font-display text-2xl font-bold text-primary mb-2">
                    Contact Information
                  </h2>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Prefer to reach out directly? Here's where you can find me.
                  </p>
                </div>

                <div className="flex flex-col gap-5">
                  {[
                    {
                      icon: Mail,
                      label: "Email",
                      value: REAL_EMAIL,
                      href: `mailto:${REAL_EMAIL}`,
                    },
                    {
                      icon: Phone,
                      label: "Phone",
                      value: "+1 (972) 343-8025",
                      href: "tel:+19723438025",
                    },
                    {
                      icon: MessageCircle,
                      label: "WhatsApp",
                      value: "Chat on WhatsApp",
                      href: `https://wa.me/${WHATSAPP_NUMBER}`,
                    },
                    {
                      icon: MapPin,
                      label: "Office Location",
                      value: "Richardson, Texas, USA",
                      href: null,
                    },
                  ].map(({ icon: Icon, label, value, href }) => (
                    <div key={label} className="flex items-start gap-4 group">
                      <div className="w-11 h-11 rounded-xl bg-gold/10 flex items-center justify-center flex-shrink-0 group-hover:bg-gold/20 transition-colors duration-300 border border-gold/20">
                        <Icon size={18} className="text-gold" strokeWidth={1.8} />
                      </div>
                      <div>
                        <p className="text-muted-foreground text-xs font-semibold uppercase tracking-wider mb-0.5">
                          {label}
                        </p>
                        {href ? (
                          <a
                            href={href}
                            target={href.startsWith("http") ? "_blank" : undefined}
                            rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                            className="text-foreground text-sm font-medium hover:text-gold transition-colors"
                          >
                            {value}
                          </a>
                        ) : (
                          <p className="text-foreground text-sm font-medium">{value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Quote */}
                <div className="border-l-2 border-gold pl-5 mt-2">
                  <p className="text-muted-foreground text-sm italic leading-relaxed">
                    "Every great partnership begins with a simple conversation. Let's start ours."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Google Maps Embed ── */}
        <section className="px-6 pb-20">
          <div className="container mx-auto max-w-5xl">
            <div className="rounded-2xl overflow-hidden border border-border shadow-sm reveal" style={{ height: "400px" }}>
              <iframe
                title="Richardson Texas Office Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d107353.36!2d-96.7298!3d32.9483!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864c21a4a0e5b3fb%3A0x9f5e83b3c9ef4c38!2sRichardson%2C%20TX!5e0!3m2!1sen!2sus!4v1700000000000"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ContactPage;
