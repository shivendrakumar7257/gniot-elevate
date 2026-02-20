import { Link } from "react-router-dom";
import { useReveal } from "@/hooks/useReveal";
import campusLifeImg from "@/assets/campus-life.jpg";
import labComputerImg from "@/assets/lab-computer.jpg";
import auditoriumImg from "@/assets/auditorium.jpg";
import placementsImg from "@/assets/placements.jpg";

const clubs = [
  { icon: "💻", name: "Coding Club", members: "500+", desc: "Competitive programming and hackathons" },
  { icon: "🎭", name: "Cultural Society", members: "800+", desc: "Dance, drama, music, and art" },
  { icon: "📸", name: "Photography Club", members: "200+", desc: "Creative photography and videography" },
  { icon: "⚽", name: "Sports Society", members: "1000+", desc: "Cricket, football, badminton, kabaddi" },
  { icon: "🤖", name: "Robotics Club", members: "300+", desc: "AI, IoT, and hardware engineering" },
  { icon: "🌱", name: "NSS Unit", members: "400+", desc: "Community service and social welfare" },
  { icon: "📰", name: "Media Cell", members: "150+", desc: "College magazine and digital media" },
  { icon: "🚀", name: "E-Cell", members: "250+", desc: "Startup and entrepreneurship ecosystem" },
];

const facilities = [
  { icon: "🏠", title: "Boys Hostel", desc: "3 blocks with 1000+ rooms, 24/7 security, WiFi, gym, and dining" },
  { icon: "🏠", title: "Girls Hostel", desc: "Dedicated campus for girls with enhanced security and amenities" },
  { icon: "🍽️", title: "Food Court", desc: "Multi-cuisine cafeteria serving 3000+ meals daily at subsidized rates" },
  { icon: "🏥", title: "Medical Center", desc: "On-campus health center with doctor, ambulance, and first-aid" },
  { icon: "🚌", title: "Transport", desc: "50+ buses connecting all major areas of NCR region" },
  { icon: "🌐", title: "High-Speed WiFi", desc: "Campus-wide gigabit internet connectivity for all students" },
];

const gallery = [
  { src: campusLifeImg, alt: "Campus Life", span: "col-span-2 row-span-2" },
  { src: labComputerImg, alt: "Computer Lab", span: "" },
  { src: auditoriumImg, alt: "Auditorium", span: "" },
  { src: placementsImg, alt: "Placement", span: "" },
  { src: campusLifeImg, alt: "Students", span: "" },
];

export default function CampusLife() {
  const clubsReveal = useReveal();
  const facilityReveal = useReveal();

  return (
    <main className="pt-28">
      {/* Header */}
      <section className="bg-navy py-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={campusLifeImg} alt="Campus" className="w-full h-full object-cover opacity-15" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 text-center">
          <span className="text-gold font-semibold text-sm uppercase tracking-widest">Life Beyond Classrooms</span>
          <h1 className="text-5xl font-black text-white mt-3 mb-4">Campus Life</h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Experience a vibrant, diverse, and enriching life at GNIOT
          </p>
          <div className="flex items-center justify-center gap-2 mt-4 text-sm text-white/50">
            <Link to="/" className="hover:text-gold transition-colors">Home</Link>
            <span>/</span>
            <span className="text-gold">Campus Life</span>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="section-padding bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-gold font-semibold text-sm uppercase tracking-widest">Visual Tour</span>
            <h2 className="section-title gold-line-center mt-2">Campus Gallery</h2>
          </div>
          <div className="grid grid-cols-3 grid-rows-2 gap-4 h-[500px]">
            <div className="col-span-2 row-span-2 rounded-2xl overflow-hidden">
              <img src={campusLifeImg} alt="Campus Life" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
            </div>
            <div className="rounded-2xl overflow-hidden">
              <img src={labComputerImg} alt="Lab" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-2xl overflow-hidden">
                <img src={auditoriumImg} alt="Auditorium" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="rounded-2xl overflow-hidden">
                <img src={placementsImg} alt="Placements" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Clubs */}
      <section className="section-padding bg-navy relative overflow-hidden" ref={clubsReveal.ref}>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,hsl(43_95%_49%_/_0.1),transparent_60%)]" />
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-gold font-semibold text-sm uppercase tracking-widest">Student Bodies</span>
            <h2 className="text-4xl font-black text-white mt-2 gold-line-center">Clubs & Societies</h2>
            <p className="text-white/60 mt-4">Join 30+ active clubs and discover your passion</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {clubs.map((club, i) => (
              <div
                key={club.name}
                className={`glass rounded-2xl p-6 border border-white/10 hover:border-gold/40 transition-all card-hover text-center reveal ${clubsReveal.isVisible ? "visible" : ""}`}
                style={{ transitionDelay: `${i * 0.08}s` }}
              >
                <div className="text-4xl mb-3">{club.icon}</div>
                <h4 className="text-white font-bold mb-1 text-sm">{club.name}</h4>
                <div className="text-gold text-xs font-semibold mb-2">{club.members} Members</div>
                <p className="text-white/50 text-xs">{club.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities */}
      <section className="section-padding bg-secondary/50" ref={facilityReveal.ref}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-gold font-semibold text-sm uppercase tracking-widest">Student Amenities</span>
            <h2 className="section-title gold-line-center mt-2">Hostel & Facilities</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {facilities.map((f, i) => (
              <div
                key={f.title}
                className={`card-hover bg-card rounded-2xl p-7 border border-border shadow-shadow-sm reveal ${facilityReveal.isVisible ? "visible" : ""}`}
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                <div className="text-4xl mb-4">{f.icon}</div>
                <h4 className="font-bold text-lg text-foreground mb-2">{f.title}</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Events Banner */}
      <section className="section-padding bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-br from-navy to-navy-light rounded-3xl p-10 md:p-14 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(43_95%_49%_/_0.1),transparent_60%)]" />
            <div className="relative">
              <div className="text-5xl mb-5">🎉</div>
              <h3 className="text-3xl md:text-4xl font-black text-white mb-4">
                Experience GNIOT's Vibrant Culture
              </h3>
              <p className="text-white/70 text-lg max-w-2xl mx-auto mb-8">
                From TechFest to cultural nights, sports championships to industry summits — 
                life at GNIOT is an experience like no other.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/admissions"
                  className="inline-flex items-center justify-center gap-2 bg-gold text-navy-dark font-bold px-8 py-4 rounded-xl hover:bg-gold-light transition-colors shadow-gold"
                >
                  Join GNIOT Family
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 glass text-white font-semibold px-8 py-4 rounded-xl border border-white/30 hover:bg-white/10 transition-colors"
                >
                  Schedule Campus Tour
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
