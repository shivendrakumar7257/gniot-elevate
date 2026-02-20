import { useState } from "react";
import { Link } from "react-router-dom";
import { useReveal, useCounter } from "@/hooks/useReveal";
import { ChevronRight, Award, Users, BookOpen, Briefcase, Star, ArrowRight, Play, CheckCircle2 } from "lucide-react";
import heroCampus from "@/assets/hero-campus.jpg";
import labComputer from "@/assets/lab-computer.jpg";
import auditorium from "@/assets/auditorium.jpg";
import placementsImg from "@/assets/placements.jpg";
import campusLifeImg from "@/assets/campus-life.jpg";

const programs = [
  { icon: "🎓", title: "B.Tech (CSE)", duration: "4 Years", seats: "360 Seats", color: "from-blue-600 to-blue-800" },
  { icon: "⚡", title: "B.Tech (ECE)", duration: "4 Years", seats: "180 Seats", color: "from-purple-600 to-purple-800" },
  { icon: "⚙️", title: "B.Tech (ME)", duration: "4 Years", seats: "120 Seats", color: "from-green-600 to-green-800" },
  { icon: "💼", title: "MBA", duration: "2 Years", seats: "120 Seats", color: "from-amber-600 to-amber-800" },
  { icon: "💻", title: "BCA", duration: "3 Years", seats: "90 Seats", color: "from-teal-600 to-teal-800" },
  { icon: "🖥️", title: "MCA", duration: "2 Years", seats: "60 Seats", color: "from-red-600 to-red-800" },
];

const testimonials = [
  {
    name: "Rahul Sharma",
    role: "Software Engineer, Google",
    batch: "B.Tech CSE 2021",
    text: "GNIOT gave me the technical foundation and soft skills that helped me crack Google. The faculty was always supportive and industry-connected.",
    rating: 5,
  },
  {
    name: "Priya Agarwal",
    role: "Product Manager, Microsoft",
    batch: "MBA 2022",
    text: "The MBA program at GNIOT prepared me for real corporate challenges. The placement cell worked tirelessly to help every student succeed.",
    rating: 5,
  },
  {
    name: "Amit Verma",
    role: "Data Scientist, Amazon",
    batch: "B.Tech CSE 2020",
    text: "The research culture, modern labs, and experienced professors at GNIOT made my journey towards data science incredibly smooth.",
    rating: 5,
  },
];

const recruiters = [
  "TCS", "Infosys", "Wipro", "HCL", "Tech Mahindra", "Accenture",
  "IBM", "Deloitte", "Cognizant", "Capgemini", "Amazon", "Microsoft",
];

const events = [
  { date: "MAR 15", title: "TechFest 2025 — Annual Tech Festival", tag: "Upcoming" },
  { date: "MAR 22", title: "Campus Placement Drive — MNCs Hiring", tag: "Placement" },
  { date: "APR 5", title: "Convocation Ceremony — Batch 2025", tag: "Event" },
];

function StatCard({ end, suffix, label }: { end: number; suffix: string; label: string }) {
  const { count, ref } = useCounter({ end, duration: 2500 });
  return (
    <div ref={ref} className="text-center">
      <div className="stat-number text-5xl md:text-6xl mb-2">
        {count.toLocaleString()}{suffix}
      </div>
      <div className="text-white/70 text-sm font-medium tracking-wide uppercase">{label}</div>
    </div>
  );
}

export default function Index() {
  const heroReveal = useReveal();
  const aboutReveal = useReveal();
  const programsReveal = useReveal();
  const [testimonialIdx, setTestimonialIdx] = useState(0);

  return (
    <main>
      {/* ── HERO ── */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroCampus})`, transform: "scale(1.05)" }}
        />
        <div className="absolute inset-0 hero-overlay" />

        {/* Animated particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 rounded-full bg-gold/40 animate-float"
              style={{
                left: `${15 + i * 15}%`,
                top: `${20 + (i % 3) * 20}%`,
                animationDelay: `${i * 0.5}s`,
                animationDuration: `${3 + i * 0.5}s`,
              }}
            />
          ))}
        </div>

        <div className="relative max-w-7xl mx-auto px-4 pt-32 pb-20 w-full">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 text-gold text-sm font-medium mb-6 animate-fade-in">
              <Award size={14} className="text-gold" />
              NAAC Accredited | AKTU Affiliated | Est. 1998
            </div>

            <h1 className="text-5xl md:text-7xl font-black text-white leading-tight mb-6 animate-fade-in" style={{ animationDelay: "0.1s" }}>
              Shaping{" "}
              <span className="text-gradient">Future</span>
              <br />
              Innovators
            </h1>

            <p className="text-white/80 text-lg md:text-xl leading-relaxed mb-10 max-w-2xl animate-fade-in" style={{ animationDelay: "0.2s" }}>
              Greater Noida Institute of Technology — Where excellence meets innovation. 
              Join 15,000+ students building tomorrow's technology today.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{ animationDelay: "0.3s" }}>
              <Link
                to="/admissions"
                className="inline-flex items-center justify-center gap-2 bg-gold text-navy-dark font-bold px-8 py-4 rounded-xl text-base hover:bg-gold-light transition-all duration-300 shadow-gold hover:shadow-none hover:-translate-y-1"
              >
                Apply Now 2025
                <ArrowRight size={18} />
              </Link>
              <Link
                to="/academics"
                className="inline-flex items-center justify-center gap-2 glass text-white font-semibold px-8 py-4 rounded-xl text-base hover:bg-white/20 transition-all duration-300 border border-white/30"
              >
                <Play size={16} />
                Explore Programs
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/50 text-xs animate-float">
          <div className="w-5 h-8 rounded-full border border-white/30 flex items-start justify-center p-1">
            <div className="w-1 h-2 rounded-full bg-gold animate-bounce" />
          </div>
          Scroll
        </div>
      </section>

      {/* ── STATS BAND ── */}
      <section className="bg-navy py-16">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8">
          <StatCard end={15000} suffix="+" label="Students Enrolled" />
          <StatCard end={500} suffix="+" label="Expert Faculty" />
          <StatCard end={95} suffix="%" label="Placement Rate" />
          <StatCard end={42} suffix="LPA" label="Highest Package" />
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section className="section-padding bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div ref={aboutReveal.ref} className={`reveal-left ${aboutReveal.isVisible ? "visible" : ""}`}>
              <span className="text-gold font-semibold text-sm uppercase tracking-widest">About GNIOT</span>
              <h2 className="section-title gold-line mt-2">
                Excellence in Engineering & Management
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-5">
                Greater Noida Institute of Technology (GNIOT) has been a beacon of academic excellence since 1998. 
                Located in the heart of the NCR region, we offer world-class education with state-of-the-art infrastructure.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                NAAC accredited and affiliated to Dr. A.P.J. Abdul Kalam Technical University (AKTU), GNIOT 
                consistently ranks among the top engineering colleges in Uttar Pradesh.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                {["NAAC B++ Accredited", "NBA Accredited Programs", "ISO 9001:2015 Certified", "Ranked Top 50 in UP"].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-sm font-medium text-foreground">
                    <CheckCircle2 size={16} className="text-gold shrink-0" />
                    {item}
                  </div>
                ))}
              </div>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 bg-navy text-white font-semibold px-6 py-3 rounded-xl hover:bg-navy-light transition-colors"
              >
                Learn More <ChevronRight size={16} />
              </Link>
            </div>

            <div className={`reveal-right ${aboutReveal.isVisible ? "visible" : ""} grid grid-cols-2 gap-4`}>
              <img src={labComputer} alt="Computer Lab" className="rounded-2xl shadow-lg col-span-2 h-56 object-cover" />
              <img src={auditorium} alt="Auditorium" className="rounded-2xl shadow-lg h-44 object-cover" />
              <div className="rounded-2xl bg-navy p-6 flex flex-col justify-center h-44">
                <div className="text-gold text-4xl font-black mb-1">27+</div>
                <div className="text-white text-sm">Years of Academic Excellence</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── PROGRAMS ── */}
      <section className="section-padding bg-secondary/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14" ref={programsReveal.ref}>
            <span className="text-gold font-semibold text-sm uppercase tracking-widest">What We Offer</span>
            <h2 className="section-title gold-line-center mt-2">Programs Offered</h2>
            <p className="section-subtitle max-w-2xl mx-auto">
              Industry-aligned curricula designed to produce job-ready graduates
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {programs.map((prog, i) => (
              <div
                key={prog.title}
                className={`card-hover bg-card rounded-2xl overflow-hidden shadow-shadow-sm border border-border group cursor-pointer reveal ${programsReveal.isVisible ? "visible" : ""}`}
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                <div className={`bg-gradient-to-br ${prog.color} p-6 text-white`}>
                  <div className="text-4xl mb-3">{prog.icon}</div>
                  <h3 className="text-xl font-bold">{prog.title}</h3>
                  <div className="flex gap-4 mt-2 text-sm text-white/80">
                    <span>{prog.duration}</span>
                    <span>•</span>
                    <span>{prog.seats}</span>
                  </div>
                </div>
                <div className="p-5 flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">AKTU Affiliated</span>
                  <Link
                    to="/academics"
                    className="text-gold font-semibold text-sm flex items-center gap-1 hover:gap-2 transition-all"
                  >
                    Details <ChevronRight size={14} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CAMPUS LIFE GALLERY ── */}
      <section className="section-padding bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-gold font-semibold text-sm uppercase tracking-widest">Life at GNIOT</span>
            <h2 className="section-title gold-line-center mt-2">Campus Life</h2>
          </div>
          <div className="grid grid-cols-12 gap-4 h-[500px]">
            <div className="col-span-12 md:col-span-7 rounded-2xl overflow-hidden">
              <img src={campusLifeImg} alt="Campus Life" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
            </div>
            <div className="col-span-12 md:col-span-5 grid grid-rows-2 gap-4">
              <div className="rounded-2xl overflow-hidden">
                <img src={labComputer} alt="Lab" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="rounded-2xl overflow-hidden">
                <img src={auditorium} alt="Auditorium" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
              </div>
            </div>
          </div>
          <div className="text-center mt-8">
            <Link to="/campus-life" className="inline-flex items-center gap-2 border-2 border-navy text-navy font-semibold px-6 py-3 rounded-xl hover:bg-navy hover:text-white transition-all">
              Explore Campus <ChevronRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── PLACEMENTS ── */}
      <section className="section-padding bg-navy relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDM0djZoNnYtNmgtNnptNiA2aDZ2LTZoLTZ2NnptLTEyIDB2Nmg2di02aC02em0tNiAwaDZ2LTZoLTZ2NnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-50" />
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-gold font-semibold text-sm uppercase tracking-widest">Our Strength</span>
            <h2 className="text-4xl font-black text-white mt-2 gold-line-center">
              Placements & Recruiters
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <img src={placementsImg} alt="Placements" className="rounded-2xl shadow-navy h-72 object-cover w-full" />
            <div className="grid grid-cols-2 gap-6">
              {[
                { icon: Briefcase, label: "Companies Visited", value: "200+" },
                { icon: Users, label: "Students Placed", value: "1500+" },
                { icon: Award, label: "Highest Package", value: "42 LPA" },
                { icon: Star, label: "Avg. Package", value: "6.8 LPA" },
              ].map(({ icon: Icon, label, value }) => (
                <div key={label} className="glass rounded-2xl p-6 text-center border border-white/10">
                  <Icon size={24} className="text-gold mx-auto mb-3" />
                  <div className="text-3xl font-black text-white mb-1">{value}</div>
                  <div className="text-white/60 text-xs uppercase tracking-wide">{label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Recruiter logos */}
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4">
            {recruiters.map((r) => (
              <div key={r} className="glass rounded-xl p-4 text-center border border-white/10 hover:border-gold/50 transition-colors">
                <span className="text-white font-bold text-sm">{r}</span>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link to="/placements" className="inline-flex items-center gap-2 bg-gold text-navy-dark font-bold px-8 py-4 rounded-xl hover:bg-gold-light transition-colors shadow-gold">
              View Placement Details <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="section-padding bg-secondary/50">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-gold font-semibold text-sm uppercase tracking-widest">Alumni Speak</span>
          <h2 className="section-title gold-line-center mt-2 mb-12">Success Stories</h2>

          <div className="bg-card rounded-3xl p-10 shadow-shadow-md border border-border relative">
            <div className="text-6xl text-gold/20 font-serif absolute top-6 left-8">"</div>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6 relative z-10">
              {testimonials[testimonialIdx].text}
            </p>
            <div className="flex items-center justify-center gap-1 mb-4">
              {[...Array(testimonials[testimonialIdx].rating)].map((_, i) => (
                <Star key={i} size={16} className="fill-gold text-gold" />
              ))}
            </div>
            <div className="font-bold text-foreground">{testimonials[testimonialIdx].name}</div>
            <div className="text-gold text-sm font-medium">{testimonials[testimonialIdx].role}</div>
            <div className="text-muted-foreground text-xs mt-1">{testimonials[testimonialIdx].batch}</div>
          </div>

          <div className="flex justify-center gap-3 mt-6">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setTestimonialIdx(i)}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${i === testimonialIdx ? "bg-navy w-8" : "bg-border"}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── EVENTS ── */}
      <section className="section-padding bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <span className="text-gold font-semibold text-sm uppercase tracking-widest">Stay Updated</span>
              <h2 className="section-title gold-line mt-2 mb-8">News & Events</h2>
              <div className="space-y-4">
                {events.map((ev) => (
                  <div key={ev.title} className="flex gap-5 p-5 bg-card rounded-2xl border border-border hover:border-gold/30 transition-colors card-hover group cursor-pointer">
                    <div className="bg-navy rounded-xl px-3 py-4 text-center shrink-0 w-16">
                      <div className="text-gold font-black text-sm">{ev.date.split(" ")[0]}</div>
                      <div className="text-white/70 text-xs">{ev.date.split(" ")[1]}</div>
                    </div>
                    <div>
                      <span className={`text-xs font-semibold px-2 py-0.5 rounded-full mb-2 inline-block ${
                        ev.tag === "Placement" ? "bg-green-100 text-green-700" : ev.tag === "Upcoming" ? "bg-blue-100 text-blue-700" : "bg-amber-100 text-amber-700"
                      }`}>{ev.tag}</span>
                      <h4 className="font-semibold text-foreground group-hover:text-navy transition-colors">{ev.title}</h4>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Admission Banner */}
            <div className="bg-gradient-to-br from-gold-dark to-gold rounded-3xl p-10 text-navy-dark">
              <div className="text-5xl mb-4">🎓</div>
              <h3 className="text-3xl font-black mb-3">Admissions Open 2025!</h3>
              <p className="text-navy font-medium mb-6 opacity-80 leading-relaxed">
                Secure your seat in GNIOT's premier engineering and management programs. 
                Limited seats available — Apply before April 30, 2025.
              </p>
              <ul className="space-y-2 mb-8">
                {["Merit-based scholarships up to 100%", "Last date: April 30, 2025", "JEE / Board marks accepted"].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm font-medium text-navy">
                    <CheckCircle2 size={16} className="text-navy-dark" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                to="/admissions"
                className="inline-flex items-center gap-2 bg-navy text-white font-bold px-8 py-4 rounded-xl hover:bg-navy-light transition-colors"
              >
                Apply Now <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
