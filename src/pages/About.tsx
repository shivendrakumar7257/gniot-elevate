import { Link } from "react-router-dom";
import { useReveal } from "@/hooks/useReveal";
import chairmanImg from "@/assets/chairman.jpg";
import campusLifeImg from "@/assets/campus-life.jpg";
import { CheckCircle2, Award, BookOpen, Users, Building2 } from "lucide-react";

const accreditations = ["NAAC B++", "NBA Accredited", "AKTU Affiliated", "ISO 9001:2015", "AICTE Approved", "UGC Recognized"];

const infrastructure = [
  { icon: "🏫", title: "Smart Classrooms", desc: "200+ digitally equipped classrooms with IoT-integrated learning tools" },
  { icon: "🔬", title: "Advanced Labs", desc: "50+ specialized labs including AI, Robotics, and Cyber Security" },
  { icon: "📚", title: "Central Library", desc: "500,000+ books, journals and e-resources accessible 24/7" },
  { icon: "🏃", title: "Sports Complex", desc: "World-class indoor and outdoor sports facilities" },
  { icon: "🏠", title: "Hostel Facilities", desc: "Separate boys & girls hostels with modern amenities" },
  { icon: "🍽️", title: "Cafeteria", desc: "Multi-cuisine food court serving 3000+ students daily" },
];

const milestones = [
  { year: "1998", event: "GNIOT Founded" },
  { year: "2003", event: "Engineering Programs launched" },
  { year: "2010", event: "NBA Accreditation received" },
  { year: "2015", event: "NAAC Accreditation B+" },
  { year: "2020", event: "NAAC Upgraded to B++" },
  { year: "2025", event: "27 Years of Excellence" },
];

export default function About() {
  const heroReveal = useReveal();
  const visionReveal = useReveal();
  const infraReveal = useReveal();

  return (
    <main className="pt-28">
      {/* Page Header */}
      <section className="relative bg-navy py-20 overflow-hidden">
        <div
          className="absolute inset-0 opacity-10 bg-cover bg-center"
          style={{ backgroundImage: `url(${campusLifeImg})` }}
        />
        <div className="relative max-w-7xl mx-auto px-4 text-center">
          <span className="text-gold font-semibold text-sm uppercase tracking-widest">Know Us Better</span>
          <h1 className="text-5xl font-black text-white mt-3 mb-4">About GNIOT</h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            27 years of academic excellence, innovation, and transforming young minds into industry leaders
          </p>
          <div className="flex items-center justify-center gap-2 mt-4 text-sm text-white/50">
            <Link to="/" className="hover:text-gold transition-colors">Home</Link>
            <span>/</span>
            <span className="text-gold">About Us</span>
          </div>
        </div>
      </section>

      {/* Chairman Message */}
      <section id="chairman" className="section-padding bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div ref={heroReveal.ref} className={`reveal-left ${heroReveal.isVisible ? "visible" : ""}`}>
              <div className="relative">
                <img
                  src={chairmanImg}
                  alt="Chairman GNIOT"
                  className="rounded-2xl shadow-lg w-72 mx-auto lg:mx-0"
                />
                <div className="absolute -bottom-4 -right-4 bg-gold rounded-2xl px-6 py-4 shadow-gold">
                  <div className="font-black text-navy-dark text-lg">Dr. R.K. Sharma</div>
                  <div className="text-navy text-xs font-medium">Chairman, GNIOT</div>
                </div>
              </div>
            </div>

            <div className={`reveal-right ${heroReveal.isVisible ? "visible" : ""}`}>
              <span className="text-gold font-semibold text-sm uppercase tracking-widest">Chairman's Message</span>
              <h2 className="section-title gold-line mt-2">
                Building Tomorrow's Leaders Today
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                "At GNIOT, we believe that education is not merely about acquiring knowledge — it's about developing 
                character, fostering innovation, and building the capacity to create positive change in the world."
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                "Our commitment to excellence is reflected in our state-of-the-art infrastructure, distinguished faculty, 
                and industry partnerships that give our students a competitive edge in the global marketplace."
              </p>
              <p className="text-muted-foreground leading-relaxed">
                "I invite you to join our community of learners, innovators, and future leaders who are shaping 
                the technological landscape of tomorrow."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section id="vision" className="section-padding bg-navy relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,hsl(43_95%_49%_/_0.1),transparent_60%)]" />
        <div className="relative max-w-7xl mx-auto" ref={visionReveal.ref}>
          <div className="text-center mb-14">
            <span className="text-gold font-semibold text-sm uppercase tracking-widest">Our Purpose</span>
            <h2 className="text-4xl font-black text-white mt-2 gold-line-center">Vision & Mission</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className={`glass rounded-2xl p-8 border border-white/10 reveal-left ${visionReveal.isVisible ? "visible" : ""}`}>
              <div className="w-14 h-14 rounded-xl bg-gold flex items-center justify-center mb-6">
                <Award size={28} className="text-navy-dark" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Our Vision</h3>
              <p className="text-white/70 leading-relaxed">
                To be a globally recognized institution of higher learning that fosters academic excellence, 
                ethical values, and innovation, producing graduates who lead with integrity and make meaningful 
                contributions to society and industry.
              </p>
            </div>

            <div className={`glass rounded-2xl p-8 border border-white/10 reveal-right ${visionReveal.isVisible ? "visible" : ""}`}>
              <div className="w-14 h-14 rounded-xl bg-gold flex items-center justify-center mb-6">
                <BookOpen size={28} className="text-navy-dark" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Our Mission</h3>
              <ul className="space-y-3">
                {[
                  "Provide quality technical education aligned with industry needs",
                  "Foster research, innovation, and entrepreneurial thinking",
                  "Develop holistic personalities with ethical values",
                  "Create global citizens ready for 21st-century challenges",
                ].map((m) => (
                  <li key={m} className="flex items-start gap-2 text-white/70 text-sm">
                    <CheckCircle2 size={16} className="text-gold mt-0.5 shrink-0" />
                    {m}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Infrastructure */}
      <section id="infrastructure" className="section-padding bg-background" ref={infraReveal.ref}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-gold font-semibold text-sm uppercase tracking-widest">World-Class Facilities</span>
            <h2 className="section-title gold-line-center mt-2">Infrastructure Overview</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {infrastructure.map((item, i) => (
              <div
                key={item.title}
                className={`card-hover bg-card rounded-2xl p-7 border border-border shadow-shadow-sm reveal ${infraReveal.isVisible ? "visible" : ""}`}
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="font-bold text-lg text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding bg-secondary/50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-gold font-semibold text-sm uppercase tracking-widest">Our Journey</span>
            <h2 className="section-title gold-line-center mt-2">Milestones</h2>
          </div>
          <div className="relative">
            <div className="absolute left-1/2 -translate-x-0.5 top-0 bottom-0 w-0.5 bg-border" />
            {milestones.map((m, i) => (
              <div key={m.year} className={`flex items-center gap-8 mb-8 ${i % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}>
                <div className={`flex-1 text-${i % 2 === 0 ? "right" : "left"}`}>
                  <div className="bg-card rounded-xl p-4 border border-border shadow-shadow-sm inline-block">
                    <div className="text-gold font-black text-lg">{m.year}</div>
                    <div className="text-foreground font-medium text-sm">{m.event}</div>
                  </div>
                </div>
                <div className="w-4 h-4 rounded-full bg-gold border-4 border-background shrink-0 z-10" />
                <div className="flex-1" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Accreditations */}
      <section id="accreditations" className="section-padding bg-navy">
        <div className="max-w-7xl mx-auto text-center">
          <span className="text-gold font-semibold text-sm uppercase tracking-widest">Trust & Recognition</span>
          <h2 className="text-4xl font-black text-white mt-2 mb-12 gold-line-center">Accreditations & Affiliations</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {accreditations.map((a) => (
              <div key={a} className="glass rounded-xl p-5 border border-white/10 hover:border-gold/50 transition-colors">
                <Award size={24} className="text-gold mx-auto mb-2" />
                <div className="text-white font-bold text-sm">{a}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
