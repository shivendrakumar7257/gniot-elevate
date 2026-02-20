import { useState } from "react";
import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Clock, Facebook, Twitter, Instagram, Youtube, Linkedin, ArrowRight, CheckCircle2 } from "lucide-react";

const contactInfo = [
  {
    icon: MapPin,
    title: "Address",
    details: ["Plot 2, Knowledge Park II,", "Greater Noida, Uttar Pradesh", "PIN - 201306"],
  },
  {
    icon: Phone,
    title: "Phone",
    details: ["+91 120-4567890", "+91 120-4567891", "Toll-free: 1800-XXX-XXXX"],
  },
  {
    icon: Mail,
    title: "Email",
    details: ["admissions@gniot.net", "info@gniot.net", "placements@gniot.net"],
  },
  {
    icon: Clock,
    title: "Office Hours",
    details: ["Mon – Sat: 9:00 AM – 5:00 PM", "Sunday: Closed", "Admission Office: 9 AM – 6 PM"],
  },
];

const socials = [
  { Icon: Facebook, href: "#", label: "Facebook", color: "hover:bg-blue-600" },
  { Icon: Twitter, href: "#", label: "Twitter", color: "hover:bg-sky-500" },
  { Icon: Instagram, href: "#", label: "Instagram", color: "hover:bg-pink-600" },
  { Icon: Youtube, href: "#", label: "YouTube", color: "hover:bg-red-600" },
  { Icon: Linkedin, href: "#", label: "LinkedIn", color: "hover:bg-blue-700" },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="pt-28">
      {/* Header */}
      <section className="bg-navy py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,hsl(43_95%_49%_/_0.15),transparent_60%)]" />
        <div className="relative max-w-7xl mx-auto px-4 text-center">
          <span className="text-gold font-semibold text-sm uppercase tracking-widest">Get in Touch</span>
          <h1 className="text-5xl font-black text-white mt-3 mb-4">Contact Us</h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            We're here to help. Reach out to us for admissions, enquiries, or campus visits.
          </p>
          <div className="flex items-center justify-center gap-2 mt-4 text-sm text-white/50">
            <Link to="/" className="hover:text-gold transition-colors">Home</Link>
            <span>/</span>
            <span className="text-gold">Contact</span>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="section-padding bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactInfo.map(({ icon: Icon, title, details }) => (
              <div key={title} className="card-hover bg-card rounded-2xl p-7 border border-border shadow-shadow-sm text-center">
                <div className="w-14 h-14 rounded-2xl bg-navy flex items-center justify-center mx-auto mb-4">
                  <Icon size={24} className="text-gold" />
                </div>
                <h4 className="font-bold text-foreground mb-3">{title}</h4>
                <div className="space-y-1">
                  {details.map((d) => (
                    <p key={d} className="text-muted-foreground text-sm">{d}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Form + Map */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Inquiry Form */}
            <div className="bg-card rounded-3xl border border-border shadow-shadow-md overflow-hidden">
              <div className="bg-navy p-8">
                <h3 className="text-2xl font-bold text-white">Send us a Message</h3>
                <p className="text-white/60 text-sm mt-1">We'll get back to you within 24 hours</p>
              </div>
              <div className="p-8">
                {submitted ? (
                  <div className="text-center py-10">
                    <CheckCircle2 size={56} className="text-green-500 mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-foreground mb-2">Message Sent!</h3>
                    <p className="text-muted-foreground text-sm">Thank you for reaching out. We'll respond within 24 hours.</p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="mt-6 text-gold font-semibold text-sm hover:underline"
                    >
                      Send another message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">Full Name *</label>
                        <input
                          type="text"
                          required
                          className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-navy"
                          placeholder="Your name"
                          value={form.name}
                          onChange={(e) => setForm({ ...form, name: e.target.value })}
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">Phone *</label>
                        <input
                          type="tel"
                          required
                          className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-navy"
                          placeholder="+91 XXXXX XXXXX"
                          value={form.phone}
                          onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Email *</label>
                      <input
                        type="email"
                        required
                        className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-navy"
                        placeholder="your@email.com"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Subject</label>
                      <select
                        className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-navy"
                        value={form.subject}
                        onChange={(e) => setForm({ ...form, subject: e.target.value })}
                      >
                        <option value="">Select a subject</option>
                        <option>Admission Enquiry</option>
                        <option>Campus Visit</option>
                        <option>Placement Query</option>
                        <option>Fee Structure</option>
                        <option>Scholarship Information</option>
                        <option>Other</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Message *</label>
                      <textarea
                        rows={4}
                        required
                        className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-navy resize-none"
                        placeholder="How can we help you?"
                        value={form.message}
                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full bg-navy text-white font-bold py-4 rounded-xl hover:bg-navy-light transition-colors flex items-center justify-center gap-2"
                    >
                      Send Message <ArrowRight size={18} />
                    </button>
                  </form>
                )}
              </div>
            </div>

            {/* Map + Social */}
            <div className="space-y-6">
              {/* Google Maps embed placeholder */}
              <div className="rounded-3xl overflow-hidden border border-border shadow-shadow-md h-80">
                <iframe
                  title="GNIOT Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3508.234678901234!2d77.4284!3d28.4751!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cc1e3a7e3e7c3%3A0x5d7b4c8e2d8f9a1b!2sKnowledge%20Park%20II%2C%20Greater%20Noida!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                />
              </div>

              {/* Social Media */}
              <div className="bg-card rounded-3xl border border-border p-7">
                <h4 className="font-bold text-foreground mb-4">Follow Us</h4>
                <div className="flex gap-3 flex-wrap">
                  {socials.map(({ Icon, href, label, color }) => (
                    <a
                      key={label}
                      href={href}
                      aria-label={label}
                      className={`flex items-center gap-2 bg-secondary text-foreground px-4 py-2.5 rounded-xl text-sm font-medium ${color} hover:text-white transition-all duration-200`}
                    >
                      <Icon size={16} />
                      {label}
                    </a>
                  ))}
                </div>
              </div>

              {/* Quick CTA */}
              <div className="bg-gradient-to-br from-gold-dark to-gold rounded-3xl p-7 text-navy-dark">
                <h4 className="font-black text-xl mb-2">Visit Our Campus</h4>
                <p className="text-navy font-medium text-sm mb-4 opacity-80">
                  Come experience GNIOT firsthand. Campus tours available Mon-Sat, 10 AM - 4 PM.
                </p>
                <Link
                  to="/admissions"
                  className="inline-flex items-center gap-2 bg-navy text-white font-bold px-5 py-3 rounded-xl hover:bg-navy-light transition-colors text-sm"
                >
                  Book Campus Tour <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
