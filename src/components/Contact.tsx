import { useState } from "react";
import { Mail, MapPin, Phone, Send, CheckCircle, MessageCircle } from "lucide-react";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<{ name?: string; email?: string; message?: string }>({});

  const validate = () => {
    const errs: typeof errors = {};
    if (!form.name.trim()) errs.name = "Name is required.";
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      errs.email = "A valid email is required.";
    if (!form.message.trim() || form.message.trim().length < 10)
      errs.message = "Message must be at least 10 characters.";
    return errs;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) {
      setErrors(errs);
      return;
    }
    setErrors({});
    setLoading(true);
    // Simulate send
    setTimeout(() => {
      setLoading(false);
      setSent(true);
      setForm({ name: "", email: "", message: "" });
    }, 1200);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    setErrors((prev) => ({ ...prev, [e.target.name]: undefined }));
  };

  return (
    <section id="contact" className="py-24 px-6 bg-primary scroll-mt-16">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-gold text-xs font-semibold tracking-widest uppercase mb-3">Reach Out</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
            Get in Touch
          </h2>
          <p className="text-primary-foreground/70 max-w-xl mx-auto text-base leading-relaxed">
            Have an idea, project, or question? I'd love to hear from you. Fill in the form or reach
            me directly through the details below.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Form */}
          <div className="bg-primary-foreground/5 backdrop-blur-sm border border-primary-foreground/10 rounded-2xl p-8">
            {sent ? (
              <div className="flex flex-col items-center justify-center h-full text-center py-10 gap-4">
                <CheckCircle size={48} className="text-gold" />
                <h3 className="font-display text-2xl font-bold text-primary-foreground">Message Sent!</h3>
                <p className="text-primary-foreground/70 text-sm">
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
                <div>
                  <label htmlFor="name" className="block text-primary-foreground/80 text-xs font-semibold uppercase tracking-wider mb-1.5">
                    Full Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className="w-full rounded-xl bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/40 px-4 py-3 text-sm focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-all"
                  />
                  {errors.name && <p className="text-gold text-xs mt-1">{errors.name}</p>}
                </div>

                <div>
                  <label htmlFor="email" className="block text-primary-foreground/80 text-xs font-semibold uppercase tracking-wider mb-1.5">
                    Email Address
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    className="w-full rounded-xl bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/40 px-4 py-3 text-sm focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-all"
                  />
                  {errors.email && <p className="text-gold text-xs mt-1">{errors.email}</p>}
                </div>

                <div>
                  <label htmlFor="message" className="block text-primary-foreground/80 text-xs font-semibold uppercase tracking-wider mb-1.5">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project or idea..."
                    className="w-full rounded-xl bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/40 px-4 py-3 text-sm focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-all resize-none"
                  />
                  {errors.message && <p className="text-gold text-xs mt-1">{errors.message}</p>}
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-gold text-accent-foreground font-semibold text-sm hover:bg-gold/90 active:scale-[0.98] transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed shadow-sm hover:shadow-md hover:-translate-y-0.5"
                >
                  {loading ? (
                    <span className="w-4 h-4 border-2 border-accent-foreground/30 border-t-accent-foreground rounded-full animate-spin" />
                  ) : (
                    <Send size={16} />
                  )}
                  {loading ? "Sending…" : "Send Message"}
                </button>
              </form>
            )}
          </div>

          {/* Contact Info */}
          <div className="flex flex-col justify-center gap-8">
            <div>
              <h3 className="font-display text-2xl font-bold text-primary-foreground mb-2">
                Contact Information
              </h3>
              <p className="text-primary-foreground/60 text-sm leading-relaxed">
                Prefer to reach out directly? Here's where you can find me.
              </p>
            </div>

            <div className="flex flex-col gap-6">
              {[
                {
                  icon: Mail,
                  label: "Email",
                  value: "hello@abdunur.com",
                  href: "mailto:hello@abdunur.com",
                },
                {
                  icon: Phone,
                  label: "Phone",
                  value: "+1 (555) 000-0000",
                  href: "tel:+15550000000",
                },
                {
                  icon: MessageCircle,
                  label: "WhatsApp",
                  value: "Chat on WhatsApp",
                  href: "https://wa.me/15550000000",
                },
                {
                  icon: MapPin,
                  label: "Office Location",
                  value: "Richardson, Texas, USA",
                  href: null,
                },
              ].map(({ icon: Icon, label, value, href }) => (
                <div key={label} className="flex items-start gap-4 group">
                  <div className="w-11 h-11 rounded-xl bg-gold/20 flex items-center justify-center flex-shrink-0 group-hover:bg-gold/30 transition-colors duration-300">
                    <Icon size={18} className="text-gold" strokeWidth={1.8} />
                  </div>
                  <div>
                    <p className="text-primary-foreground/50 text-xs font-semibold uppercase tracking-wider mb-0.5">
                      {label}
                    </p>
                    {href ? (
                      <a
                        href={href}
                        className="text-primary-foreground text-sm font-medium hover:text-gold transition-colors"
                      >
                        {value}
                      </a>
                    ) : (
                      <p className="text-primary-foreground text-sm font-medium">{value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Decorative quote */}
            <div className="border-l-2 border-gold pl-5 mt-2">
              <p className="text-primary-foreground/70 text-sm italic leading-relaxed">
                "Every great partnership begins with a simple conversation. Let's start ours."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
