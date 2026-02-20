import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Youtube, Linkedin, MapPin, Phone, Mail, ArrowRight } from "lucide-react";

const quickLinks = ["Home", "About Us", "Academics", "Admissions", "Placements", "Campus Life", "Contact"];
const programs = ["B.Tech (CSE)", "B.Tech (ECE)", "B.Tech (ME)", "MBA", "BCA", "MCA", "B.Pharm"];
const links = ["/", "/about", "/academics", "/admissions", "/placements", "/campus-life", "/contact"];

const socials = [
  { Icon: Facebook, href: "#", label: "Facebook" },
  { Icon: Twitter, href: "#", label: "Twitter" },
  { Icon: Instagram, href: "#", label: "Instagram" },
  { Icon: Youtube, href: "#", label: "YouTube" },
  { Icon: Linkedin, href: "#", label: "LinkedIn" },
];

export default function Footer() {
  return (
    <footer className="bg-navy-dark text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-3 mb-5">
            <div className="w-12 h-12 rounded-xl bg-gold flex items-center justify-center font-black text-navy-dark text-xl">
              G
            </div>
            <div>
              <div className="font-black text-xl">GNIOT</div>
              <div className="text-gold text-xs font-medium tracking-wider uppercase">Greater Noida</div>
            </div>
          </div>
          <p className="text-white/60 text-sm leading-relaxed mb-5">
            Greater Noida Institute of Technology — Shaping Future Innovators since 1998. NAAC Accredited, AKTU Affiliated.
          </p>
          <div className="flex gap-3">
            {socials.map(({ Icon, href, label }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="w-9 h-9 rounded-lg bg-white/10 hover:bg-gold hover:text-navy-dark flex items-center justify-center transition-all duration-200 text-white/70"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-bold text-base mb-5 gold-line">Quick Links</h4>
          <ul className="space-y-3">
            {quickLinks.map((label, i) => (
              <li key={label}>
                <Link
                  to={links[i]}
                  className="text-white/60 hover:text-gold text-sm flex items-center gap-2 group transition-colors"
                >
                  <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Programs */}
        <div>
          <h4 className="font-bold text-base mb-5 gold-line">Programs</h4>
          <ul className="space-y-3">
            {programs.map((p) => (
              <li key={p}>
                <Link
                  to="/academics"
                  className="text-white/60 hover:text-gold text-sm flex items-center gap-2 group transition-colors"
                >
                  <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                  {p}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact + Newsletter */}
        <div>
          <h4 className="font-bold text-base mb-5 gold-line">Contact Us</h4>
          <div className="space-y-3 mb-6">
            <div className="flex gap-3 text-sm text-white/60">
              <MapPin size={16} className="text-gold mt-0.5 shrink-0" />
              <span>Knowledge Park II, Greater Noida, Uttar Pradesh - 201306</span>
            </div>
            <a href="tel:+911204567890" className="flex gap-3 text-sm text-white/60 hover:text-gold transition-colors">
              <Phone size={16} className="text-gold shrink-0" />
              +91 120-4567890
            </a>
            <a href="mailto:info@gniot.net" className="flex gap-3 text-sm text-white/60 hover:text-gold transition-colors">
              <Mail size={16} className="text-gold shrink-0" />
              info@gniot.net
            </a>
          </div>

          {/* Newsletter */}
          <h4 className="font-semibold text-sm mb-3">Newsletter</h4>
          <div className="flex gap-2">
            <input
              type="email"
              placeholder="Your email"
              className="flex-1 bg-white/10 border border-white/20 rounded-lg px-3 py-2 text-sm text-white placeholder:text-white/40 focus:outline-none focus:border-gold"
            />
            <button className="bg-gold text-navy-dark px-3 py-2 rounded-lg hover:bg-gold-light transition-colors">
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-5 flex flex-col md:flex-row justify-between items-center gap-3 text-sm text-white/40">
          <span>© 2025 GNIOT — Greater Noida Institute of Technology. All rights reserved.</span>
          <div className="flex gap-4">
            <a href="#" className="hover:text-gold transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-gold transition-colors">Terms of Use</a>
            <a href="#" className="hover:text-gold transition-colors">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
