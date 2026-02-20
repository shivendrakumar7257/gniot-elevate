import { Link } from "react-router-dom";
import { useReveal } from "@/hooks/useReveal";
import labComputerImg from "@/assets/lab-computer.jpg";
import auditoriumImg from "@/assets/auditorium.jpg";
import { BookOpen, FlaskConical, Microscope, Users, ArrowRight } from "lucide-react";

const departments = [
  {
    id: "btech",
    icon: "⚙️",
    name: "Engineering",
    color: "from-blue-600 to-blue-800",
    courses: [
      { name: "B.Tech Computer Science & Engineering", duration: "4 Years", seats: 360 },
      { name: "B.Tech Electronics & Communication", duration: "4 Years", seats: 180 },
      { name: "B.Tech Mechanical Engineering", duration: "4 Years", seats: 120 },
      { name: "B.Tech Civil Engineering", duration: "4 Years", seats: 90 },
      { name: "B.Tech Electrical Engineering", duration: "4 Years", seats: 60 },
    ],
  },
  {
    id: "mba",
    icon: "💼",
    name: "Management",
    color: "from-amber-600 to-amber-800",
    courses: [
      { name: "MBA General Management", duration: "2 Years", seats: 120 },
      { name: "MBA Marketing & Sales", duration: "2 Years", seats: 60 },
      { name: "MBA Finance", duration: "2 Years", seats: 60 },
      { name: "MBA Human Resources", duration: "2 Years", seats: 60 },
      { name: "BBA", duration: "3 Years", seats: 120 },
    ],
  },
  {
    id: "bca",
    icon: "💻",
    name: "Computer Applications",
    color: "from-teal-600 to-teal-800",
    courses: [
      { name: "BCA (Bachelor of Computer Applications)", duration: "3 Years", seats: 90 },
      { name: "MCA (Master of Computer Applications)", duration: "2 Years", seats: 60 },
      { name: "B.Sc. Computer Science", duration: "3 Years", seats: 60 },
    ],
  },
];

const labs = [
  { icon: "🤖", name: "Artificial Intelligence Lab", desc: "NVIDIA GPU-powered AI/ML research workstations with dedicated research space" },
  { icon: "🔒", name: "Cyber Security Lab", desc: "Industry-grade network security simulation and ethical hacking environment" },
  { icon: "🏭", name: "Advanced Manufacturing Lab", desc: "CNC machines, 3D printers, and robotic arms for mechanical engineering" },
  { icon: "⚡", name: "Embedded Systems Lab", desc: "Microcontrollers, FPGA boards, and IoT development platforms" },
  { icon: "🧪", name: "Chemistry & Physics Lab", desc: "Modern analytical instruments and cutting-edge research equipment" },
  { icon: "🌐", name: "Data Center & Networking Lab", desc: "Enterprise-grade Cisco network infrastructure for hands-on learning" },
];

const faculty = [
  { name: "Dr. A.K. Singh", dept: "Computer Science", qual: "Ph.D. IIT Delhi", exp: "20+ Years" },
  { name: "Prof. S. Gupta", dept: "Electronics", qual: "Ph.D. IIT Kanpur", exp: "18+ Years" },
  { name: "Dr. M. Verma", dept: "Management", qual: "Ph.D. FMS Delhi", exp: "15+ Years" },
  { name: "Dr. P. Kumar", dept: "Mechanical Engg.", qual: "Ph.D. IIT Roorkee", exp: "22+ Years" },
];

export default function Academics() {
  const deptReveal = useReveal();
  const labReveal = useReveal();

  return (
    <main className="pt-28">
      {/* Header */}
      <section className="bg-navy py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,hsl(43_95%_49%_/_0.15),transparent_60%)]" />
        <div className="relative max-w-7xl mx-auto px-4 text-center">
          <span className="text-gold font-semibold text-sm uppercase tracking-widest">Academic Programs</span>
          <h1 className="text-5xl font-black text-white mt-3 mb-4">Academics</h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Industry-aligned, research-focused programs designed for the future
          </p>
          <div className="flex items-center justify-center gap-2 mt-4 text-sm text-white/50">
            <Link to="/" className="hover:text-gold transition-colors">Home</Link>
            <span>/</span>
            <span className="text-gold">Academics</span>
          </div>
        </div>
      </section>

      {/* Departments */}
      <section className="section-padding bg-background" ref={deptReveal.ref}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-gold font-semibold text-sm uppercase tracking-widest">Schools & Departments</span>
            <h2 className="section-title gold-line-center mt-2">Our Programs</h2>
          </div>

          <div className="space-y-10">
            {departments.map((dept, di) => (
              <div
                key={dept.id}
                id={dept.id}
                className={`reveal ${deptReveal.isVisible ? "visible" : ""}`}
                style={{ transitionDelay: `${di * 0.15}s` }}
              >
                <div className="bg-card rounded-3xl overflow-hidden border border-border shadow-shadow-sm">
                  <div className={`bg-gradient-to-r ${dept.color} p-8 flex items-center gap-4`}>
                    <div className="text-5xl">{dept.icon}</div>
                    <div>
                      <h3 className="text-2xl font-black text-white">School of {dept.name}</h3>
                      <p className="text-white/70 text-sm">{dept.courses.length} Programs Available</p>
                    </div>
                  </div>
                  <div className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {dept.courses.map((c) => (
                      <div key={c.name} className="bg-secondary/50 rounded-xl p-5 hover:shadow-shadow-md transition-shadow">
                        <h4 className="font-semibold text-foreground mb-3 text-sm leading-tight">{c.name}</h4>
                        <div className="flex gap-4 text-xs text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <BookOpen size={12} /> {c.duration}
                          </span>
                          <span className="flex items-center gap-1">
                            <Users size={12} /> {c.seats} Seats
                          </span>
                        </div>
                        <Link to="/admissions" className="mt-3 text-xs text-gold font-semibold flex items-center gap-1 hover:gap-2 transition-all">
                          Apply Now <ArrowRight size={12} />
                        </Link>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Labs */}
      <section id="labs" className="section-padding bg-navy relative overflow-hidden" ref={labReveal.ref}>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(220_78%_22%),transparent_70%)]" />
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-gold font-semibold text-sm uppercase tracking-widest">Research & Innovation</span>
            <h2 className="text-4xl font-black text-white mt-2 mb-4 gold-line-center">Labs & Research Centers</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {labs.map((lab, i) => (
              <div
                key={lab.name}
                className={`glass rounded-2xl p-7 border border-white/10 hover:border-gold/40 transition-all card-hover reveal ${labReveal.isVisible ? "visible" : ""}`}
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                <div className="text-4xl mb-4">{lab.icon}</div>
                <h4 className="text-white font-bold mb-2">{lab.name}</h4>
                <p className="text-white/60 text-sm leading-relaxed">{lab.desc}</p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <img src={labComputerImg} alt="Computer Lab" className="rounded-2xl shadow-navy h-64 object-cover w-full" />
            <img src={auditoriumImg} alt="Auditorium" className="rounded-2xl shadow-navy h-64 object-cover w-full" />
          </div>
        </div>
      </section>

      {/* Faculty */}
      <section className="section-padding bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-gold font-semibold text-sm uppercase tracking-widest">Expert Educators</span>
            <h2 className="section-title gold-line-center mt-2">Distinguished Faculty</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {faculty.map((f) => (
              <div key={f.name} className="card-hover bg-card rounded-2xl p-7 border border-border text-center shadow-shadow-sm">
                <div className="w-20 h-20 rounded-full bg-gradient-primary flex items-center justify-center mx-auto mb-4 text-2xl font-black text-white">
                  {f.name.split(" ")[1][0]}
                </div>
                <h4 className="font-bold text-foreground mb-1">{f.name}</h4>
                <div className="text-gold text-sm font-medium mb-1">{f.dept}</div>
                <div className="text-muted-foreground text-xs mb-1">{f.qual}</div>
                <div className="text-muted-foreground text-xs">{f.exp} Experience</div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8 text-muted-foreground">
            <span>500+ Faculty members with PhDs from IITs, NITs, and premier institutions</span>
          </div>
        </div>
      </section>
    </main>
  );
}
