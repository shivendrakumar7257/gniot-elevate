import { Link } from "react-router-dom";
import { useReveal, useCounter } from "@/hooks/useReveal";
import placementsImg from "@/assets/placements.jpg";
import { Star, TrendingUp, Award, Users, Briefcase } from "lucide-react";

const stats = [
  { end: 95, suffix: "%", label: "Placement Rate", icon: TrendingUp },
  { end: 42, suffix: " LPA", label: "Highest Package", icon: Award },
  { end: 6.8, suffix: " LPA", label: "Average Package", icon: Star },
  { end: 200, suffix: "+", label: "Recruiters", icon: Briefcase },
  { end: 1500, suffix: "+", label: "Students Placed", icon: Users },
  { end: 98, suffix: "%", label: "MBA Placement", icon: TrendingUp },
];

const recruiters = [
  "TCS", "Infosys", "Wipro", "HCL Technologies", "Tech Mahindra", "Accenture",
  "IBM", "Deloitte", "Cognizant", "Capgemini", "Amazon", "Microsoft",
  "Google", "Samsung", "Bajaj", "Bosch", "L&T", "Tata Steel",
  "HDFC Bank", "ICICI Bank", "Axis Bank", "KPMG", "EY", "PwC",
];

const stories = [
  {
    name: "Rahul Sharma",
    company: "Google",
    role: "Software Engineer",
    package: "45 LPA",
    batch: "B.Tech CSE 2021",
    text: "GNIOT's industry-focused curriculum and coding culture helped me crack Google. The placement cell support was exceptional.",
    rating: 5,
  },
  {
    name: "Priya Agarwal",
    company: "Microsoft",
    role: "Product Manager",
    package: "38 LPA",
    batch: "MBA 2022",
    text: "The MBA program gave me excellent business acumen. Mock interviews and workshops were game-changers for my placement.",
    rating: 5,
  },
  {
    name: "Amit Verma",
    company: "Amazon",
    role: "Data Scientist",
    package: "32 LPA",
    batch: "B.Tech CSE 2020",
    text: "Research projects and AI lab experience at GNIOT made me stand out. I'm grateful for the mentorship I received.",
    rating: 5,
  },
];

function StatCounter({ end, suffix, label, icon: Icon }: { end: number; suffix: string; label: string; icon: any }) {
  const { count, ref } = useCounter({ end, duration: 2200 });
  return (
    <div ref={ref} className="text-center glass rounded-2xl p-7 border border-white/10 hover:border-gold/40 transition-colors card-hover">
      <Icon size={28} className="text-gold mx-auto mb-3" />
      <div className="text-4xl font-black text-white mb-1">
        {typeof end === "number" && end % 1 !== 0 ? count.toFixed(1) : count.toLocaleString()}{suffix}
      </div>
      <div className="text-white/60 text-sm uppercase tracking-wide">{label}</div>
    </div>
  );
}

export default function Placements() {
  const statsReveal = useReveal();
  const storiesReveal = useReveal();

  return (
    <main className="pt-28">
      {/* Header */}
      <section className="bg-navy py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(43_95%_49%_/_0.12),transparent_60%)]" />
        <div className="relative max-w-7xl mx-auto px-4 text-center">
          <span className="text-gold font-semibold text-sm uppercase tracking-widest">Career Excellence</span>
          <h1 className="text-5xl font-black text-white mt-3 mb-4">Placements</h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            95% placement record with 200+ companies visiting annually
          </p>
          <div className="flex items-center justify-center gap-2 mt-4 text-sm text-white/50">
            <Link to="/" className="hover:text-gold transition-colors">Home</Link>
            <span>/</span>
            <span className="text-gold">Placements</span>
          </div>
        </div>
      </section>

      {/* Hero Placement Visual */}
      <section className="section-padding bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-gold font-semibold text-sm uppercase tracking-widest">Industry Connect</span>
              <h2 className="section-title gold-line mt-2">Placement at GNIOT</h2>
              <p className="text-muted-foreground leading-relaxed mb-5">
                Our dedicated placement cell works round-the-year to connect students with the best companies. 
                With a 95% placement record, GNIOT consistently delivers on its promise to every student.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                The Training & Placement Department conducts rigorous pre-placement training including aptitude, 
                group discussions, mock interviews, and technical skill development sessions.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {["Year-round placement drives", "Industry mentorship program", "Mock interview sessions", "Soft skills training"].map((i) => (
                  <div key={i} className="flex items-center gap-2 text-sm text-foreground">
                    <div className="w-5 h-5 rounded-full bg-gold/20 flex items-center justify-center shrink-0">
                      <div className="w-2 h-2 rounded-full bg-gold" />
                    </div>
                    {i}
                  </div>
                ))}
              </div>
            </div>
            <img src={placementsImg} alt="Placement Session" className="rounded-2xl shadow-lg h-80 object-cover w-full" />
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="section-padding bg-navy relative overflow-hidden" ref={statsReveal.ref}>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDM0djZoNnYtNmgtNnptNiA2aDZ2LTZoLTZ2NnptLTEyIDB2Nmg2di02aC02em0tNiAwaDZ2LTZoLTZ2NnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-50" />
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-gold font-semibold text-sm uppercase tracking-widest">Numbers That Matter</span>
            <h2 className="text-4xl font-black text-white mt-2 gold-line-center">Placement Statistics 2024</h2>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
            {stats.map((s, i) => (
              <div key={s.label} className={`reveal ${statsReveal.isVisible ? "visible" : ""}`} style={{ transitionDelay: `${i * 0.1}s` }}>
                <StatCounter {...s} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recruiters */}
      <section className="section-padding bg-secondary/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-gold font-semibold text-sm uppercase tracking-widest">Our Partners</span>
            <h2 className="section-title gold-line-center mt-2">Top Recruiters</h2>
          </div>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4">
            {recruiters.map((r) => (
              <div
                key={r}
                className="bg-card rounded-xl p-4 text-center border border-border hover:border-navy hover:shadow-shadow-md transition-all card-hover"
              >
                <div className="w-10 h-10 rounded-lg bg-navy flex items-center justify-center mx-auto mb-2">
                  <span className="text-gold font-black text-xs">{r[0]}</span>
                </div>
                <span className="text-foreground font-semibold text-xs">{r}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="section-padding bg-background" ref={storiesReveal.ref}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-gold font-semibold text-sm uppercase tracking-widest">Alumni Achievers</span>
            <h2 className="section-title gold-line-center mt-2">Success Stories</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stories.map((s, i) => (
              <div
                key={s.name}
                className={`card-hover bg-card rounded-3xl border border-border p-8 shadow-shadow-sm reveal ${storiesReveal.isVisible ? "visible" : ""}`}
                style={{ transitionDelay: `${i * 0.15}s` }}
              >
                <div className="flex items-center gap-1 mb-5">
                  {[...Array(s.rating)].map((_, j) => (
                    <Star key={j} size={14} className="fill-gold text-gold" />
                  ))}
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6 italic">"{s.text}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-navy flex items-center justify-center text-gold font-black text-lg">
                    {s.name[0]}
                  </div>
                  <div>
                    <div className="font-bold text-foreground">{s.name}</div>
                    <div className="text-xs text-gold font-medium">{s.role} @ {s.company}</div>
                    <div className="text-xs text-muted-foreground">{s.batch}</div>
                  </div>
                  <div className="ml-auto bg-navy rounded-lg px-3 py-2 text-center">
                    <div className="text-gold font-black text-sm">{s.package}</div>
                    <div className="text-white/60 text-[10px]">Package</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
