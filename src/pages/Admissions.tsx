import { useState } from "react";
import { Link } from "react-router-dom";
import { useReveal, useCounter } from "@/hooks/useReveal";
import { CheckCircle2, ArrowRight, ChevronRight } from "lucide-react";

const steps = [
  { step: "01", title: "Check Eligibility", desc: "Ensure you meet the academic requirements for your chosen program" },
  { step: "02", title: "Fill Application", desc: "Complete the online application form with accurate details" },
  { step: "03", title: "Upload Documents", desc: "Upload all required documents in the specified format" },
  { step: "04", title: "Pay Application Fee", desc: "Pay the nominal application fee through secure payment gateway" },
  { step: "05", title: "Merit List", desc: "Check your name in the merit list published on the website" },
  { step: "06", title: "Admission Confirmed", desc: "Visit campus for document verification and final admission" },
];

const eligibility = [
  { program: "B.Tech", criteria: "10+2 with PCM — Min 60% marks. JEE score preferred." },
  { program: "MBA", criteria: "Graduation in any discipline — Min 50%. CAT/MAT/CMAT score accepted." },
  { program: "BCA", criteria: "10+2 with Mathematics — Min 50% marks." },
  { program: "MCA", criteria: "BCA/B.Sc. Computer Science — Min 50% marks." },
];

const scholarships = [
  { name: "Merit Scholarship", amount: "Up to 100%", criteria: "90%+ in 10+2 or JEE Top 1000" },
  { name: "Sports Excellence", amount: "Up to 50%", criteria: "National/State level sports achievement" },
  { name: "Girl Child Special", amount: "25% Tuition fee waiver", criteria: "All girl students" },
  { name: "Economically Weaker", amount: "Up to 75%", criteria: "Family income below ₹2.5 LPA" },
];

function StatCard({ end, suffix, label }: { end: number; suffix: string; label: string }) {
  const { count, ref } = useCounter({ end, duration: 2000 });
  return (
    <div ref={ref} className="text-center bg-navy rounded-2xl p-6 border border-white/10">
      <div className="text-4xl font-black text-gold mb-1">{count.toLocaleString()}{suffix}</div>
      <div className="text-white/70 text-sm">{label}</div>
    </div>
  );
}

export default function Admissions() {
  const stepsReveal = useReveal();
  const [form, setForm] = useState({ name: "", email: "", phone: "", program: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="pt-28">
      {/* Header */}
      <section className="bg-navy py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,hsl(43_95%_49%_/_0.15),transparent_60%)]" />
        <div className="relative max-w-7xl mx-auto px-4 text-center">
          <span className="text-gold font-semibold text-sm uppercase tracking-widest">Join Us</span>
          <h1 className="text-5xl font-black text-white mt-3 mb-4">Admissions 2025</h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto mb-6">
            Your journey to excellence begins here. Apply for the 2025-26 academic session
          </p>
          <div className="inline-flex items-center gap-2 bg-gold/20 border border-gold/40 rounded-full px-5 py-2.5 text-gold text-sm font-semibold">
            🎓 Applications Open — Closing April 30, 2025
          </div>
          <div className="flex items-center justify-center gap-2 mt-4 text-sm text-white/50">
            <Link to="/" className="hover:text-gold transition-colors">Home</Link>
            <span>/</span>
            <span className="text-gold">Admissions</span>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="bg-navy border-t border-white/10 py-10">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-4">
          <StatCard end={15000} suffix="+" label="Students Enrolled" />
          <StatCard end={95} suffix="%" label="Placement Rate" />
          <StatCard end={42} suffix=" LPA" label="Highest Package" />
          <StatCard end={200} suffix="+" label="Recruiters" />
        </div>
      </section>

      {/* Admission Process */}
      <section className="section-padding bg-background" ref={stepsReveal.ref}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-gold font-semibold text-sm uppercase tracking-widest">How to Apply</span>
            <h2 className="section-title gold-line-center mt-2">Admission Process</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {steps.map((s, i) => (
              <div
                key={s.step}
                className={`card-hover bg-card rounded-2xl p-7 border border-border shadow-shadow-sm reveal ${stepsReveal.isVisible ? "visible" : ""} relative overflow-hidden`}
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                <div className="absolute top-4 right-4 text-7xl font-black text-border/50 leading-none">{s.step}</div>
                <div className="w-12 h-12 rounded-xl bg-navy flex items-center justify-center mb-4">
                  <span className="text-gold font-black text-lg">{s.step}</span>
                </div>
                <h4 className="font-bold text-foreground mb-2">{s.title}</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Eligibility */}
      <section className="section-padding bg-secondary/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-gold font-semibold text-sm uppercase tracking-widest">Requirements</span>
            <h2 className="section-title gold-line-center mt-2">Eligibility Criteria</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {eligibility.map((e) => (
              <div key={e.program} className="bg-card rounded-2xl p-6 border border-border flex gap-4 shadow-shadow-sm hover:shadow-shadow-md transition-shadow">
                <div className="w-14 h-14 rounded-xl bg-navy flex items-center justify-center text-gold font-black text-sm shrink-0">
                  {e.program}
                </div>
                <div>
                  <h4 className="font-bold text-foreground mb-1">{e.program}</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">{e.criteria}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="section-padding bg-background">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-gold font-semibold text-sm uppercase tracking-widest">Get Started</span>
            <h2 className="section-title gold-line-center mt-2">Online Application Form</h2>
          </div>
          <div className="bg-card rounded-3xl border border-border shadow-shadow-md overflow-hidden">
            <div className="bg-navy p-8 text-center">
              <h3 className="text-2xl font-bold text-white">Apply for Admission 2025-26</h3>
              <p className="text-white/60 text-sm mt-1">Fill the form and our counsellor will contact you within 24 hours</p>
            </div>
            <div className="p-8">
              {submitted ? (
                <div className="text-center py-12">
                  <CheckCircle2 size={64} className="text-green-500 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-foreground mb-2">Application Submitted!</h3>
                  <p className="text-muted-foreground">Thank you for applying to GNIOT. Our counsellor will contact you within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Full Name *</label>
                    <input
                      type="text"
                      required
                      className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-navy focus:border-transparent"
                      placeholder="Enter your full name"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Email Address *</label>
                    <input
                      type="email"
                      required
                      className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-navy focus:border-transparent"
                      placeholder="Enter your email"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Phone Number *</label>
                    <input
                      type="tel"
                      required
                      className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-navy focus:border-transparent"
                      placeholder="+91 XXXXX XXXXX"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Program of Interest *</label>
                    <select
                      required
                      className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-navy focus:border-transparent"
                      value={form.program}
                      onChange={(e) => setForm({ ...form, program: e.target.value })}
                    >
                      <option value="">Select Program</option>
                      <option>B.Tech (CSE)</option>
                      <option>B.Tech (ECE)</option>
                      <option>B.Tech (ME)</option>
                      <option>MBA</option>
                      <option>BCA</option>
                      <option>MCA</option>
                    </select>
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-foreground mb-2">Message (Optional)</label>
                    <textarea
                      rows={4}
                      className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-navy focus:border-transparent resize-none"
                      placeholder="Any specific queries or requirements..."
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                    />
                  </div>
                  <div className="md:col-span-2">
                    <button
                      type="submit"
                      className="w-full bg-navy text-white font-bold py-4 rounded-xl hover:bg-navy-light transition-colors flex items-center justify-center gap-2"
                    >
                      Submit Application <ArrowRight size={18} />
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Scholarships */}
      <section className="section-padding bg-navy relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,hsl(43_95%_49%_/_0.1),transparent_60%)]" />
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-gold font-semibold text-sm uppercase tracking-widest">Financial Aid</span>
            <h2 className="text-4xl font-black text-white mt-2 mb-4 gold-line-center">Scholarships Available</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {scholarships.map((s) => (
              <div key={s.name} className="glass rounded-2xl p-7 border border-white/10 hover:border-gold/40 transition-colors">
                <div className="flex items-start justify-between mb-3">
                  <h4 className="text-white font-bold text-lg">{s.name}</h4>
                  <span className="bg-gold text-navy-dark font-black text-sm px-3 py-1 rounded-lg shrink-0 ml-4">{s.amount}</span>
                </div>
                <p className="text-white/60 text-sm">{s.criteria}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
