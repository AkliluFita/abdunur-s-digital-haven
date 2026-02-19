import { useState } from "react";
import { MessageCircle, X, Send, HelpCircle, Mail, Phone } from "lucide-react";

const WHATSAPP_NUMBER = "19723438025";
const REAL_EMAIL = "myfavorday@gmail.com";

const faqs = [
  { q: "How do I get started?", a: "Simply fill out the contact form or click 'Get Started' on any service card. I'll respond within 24 hours." },
  { q: "Do you offer free consultations?", a: "Yes! I offer a complimentary 30-minute discovery call for all new clients." },
  { q: "What areas do you serve?", a: "I work with clients globally. Sessions can be conducted in-person (Richardson, TX area) or remotely via video." },
];

const SupportBox = () => {
  const [open, setOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<"chat" | "faq">("chat");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const handleSend = () => {
    if (!message.trim()) return;
    setSent(true);
    setMessage("");
    setTimeout(() => setSent(false), 3000);
  };

  return (
    <>
      {/* WhatsApp floating button */}
      <a
        href={`https://wa.me/${WHATSAPP_NUMBER}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-24 right-6 z-50 flex items-center justify-center rounded-full shadow-xl transition-all duration-300 hover:scale-110 hover:-translate-y-1"
        style={{ background: "#25D366", width: "3.25rem", height: "3.25rem" }}
      >
        <svg viewBox="0 0 24 24" fill="white" width="22" height="22" aria-hidden="true">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      </a>

      {/* Support toggle button */}
      <button
        onClick={() => setOpen((v) => !v)}
        aria-label="Toggle support"
        className="fixed bottom-6 right-6 z-50 rounded-full bg-primary text-primary-foreground shadow-xl flex items-center justify-center hover:bg-primary/90 transition-all duration-300 hover:scale-110"
        style={{ width: "3.25rem", height: "3.25rem" }}
      >
        {open ? <X size={20} /> : <HelpCircle size={20} />}
      </button>

      {/* Support panel */}
      {open && (
        <div
          className="fixed bottom-24 right-6 z-50 w-80 bg-card border border-border rounded-3xl shadow-2xl overflow-hidden animate-fade-up"
          style={{ boxShadow: "var(--shadow-hover)" }}
        >
          {/* Header */}
          <div className="bg-primary px-5 py-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-gold/20 border border-gold/30 flex items-center justify-center flex-shrink-0">
                <MessageCircle size={18} className="text-gold" />
              </div>
              <div>
                <p className="text-primary-foreground font-semibold text-sm">Support Center</p>
                <p className="text-primary-foreground/60 text-xs">We typically reply within 24h</p>
              </div>
            </div>
          </div>

          {/* Tabs */}
          <div className="flex border-b border-border">
            {(["chat", "faq"] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`flex-1 py-2.5 text-xs font-semibold uppercase tracking-wider transition-colors ${
                  activeTab === tab
                    ? "text-primary border-b-2 border-gold"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {tab === "chat" ? "Quick Message" : "FAQs"}
              </button>
            ))}
          </div>

          {/* Body */}
          <div className="p-4">
            {activeTab === "chat" ? (
              <div className="flex flex-col gap-3">
                <div className="flex flex-col gap-2 mb-1">
                  <a
                    href={`mailto:${REAL_EMAIL}`}
                    className="flex items-center gap-3 px-3 py-2.5 bg-secondary rounded-xl hover:bg-secondary/80 transition-colors"
                  >
                    <Mail size={14} className="text-gold flex-shrink-0" />
                    <span className="text-xs font-medium text-foreground">{REAL_EMAIL}</span>
                  </a>
                  <a
                    href={`https://wa.me/${WHATSAPP_NUMBER}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 px-3 py-2.5 bg-secondary rounded-xl hover:bg-secondary/80 transition-colors"
                  >
                    <Phone size={14} className="text-green-500 flex-shrink-0" />
                    <span className="text-xs font-medium text-foreground">WhatsApp: +1 (972) 343-8025</span>
                  </a>
                </div>

                <p className="text-[11px] text-muted-foreground font-medium uppercase tracking-wider">
                  Or leave a quick note:
                </p>

                {sent ? (
                  <div className="flex items-center gap-2 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 text-green-700 dark:text-green-400 rounded-xl px-3 py-3 text-sm font-medium">
                    <span>✓</span> Message received! I'll be in touch soon.
                  </div>
                ) : (
                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Type your message…"
                      className="flex-1 text-sm rounded-xl bg-secondary border border-border text-foreground placeholder:text-muted-foreground px-3 py-2.5 focus:outline-none focus:border-gold transition-colors"
                      onKeyDown={(e) => e.key === "Enter" && handleSend()}
                    />
                    <button
                      onClick={handleSend}
                      className="w-10 h-10 rounded-xl bg-primary text-primary-foreground flex items-center justify-center hover:bg-primary/90 transition-colors flex-shrink-0"
                    >
                      <Send size={14} />
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <div className="flex flex-col gap-2">
                {faqs.map((faq, i) => (
                  <div key={i} className="border border-border rounded-xl overflow-hidden">
                    <button
                      onClick={() => setOpenFaq(openFaq === i ? null : i)}
                      className="w-full flex items-center justify-between px-4 py-3 text-left text-sm font-medium text-foreground hover:bg-secondary transition-colors"
                    >
                      <span>{faq.q}</span>
                      <span className="text-gold ml-2 flex-shrink-0">{openFaq === i ? "−" : "+"}</span>
                    </button>
                    {openFaq === i && (
                      <div className="px-4 pb-3 text-xs text-muted-foreground leading-relaxed border-t border-border pt-2">
                        {faq.a}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Footer */}
          <div className="px-4 py-3 border-t border-border text-center">
            <a
              href="/contact"
              onClick={() => setOpen(false)}
              className="text-xs text-gold hover:text-gold/80 font-semibold transition-colors"
            >
              Go to full contact form →
            </a>
          </div>
        </div>
      )}
    </>
  );
};

export default SupportBox;
