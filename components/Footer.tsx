import React from 'react';
import { Sun, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          
          {/* Brand */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-2">
               <Sun className="text-helios-orange w-6 h-6" />
               <span className="text-xl font-bold text-white">HELIOS<span className="text-helios-orange">MALTA</span></span>
            </Link>
            <p className="text-sm text-slate-400 leading-relaxed">
              Empowering Maltese homes with sustainable energy. Authorized REWS installers and Huawei Gold Partners.
            </p>
            <div className="flex gap-4">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                <a key={i} href="#" className="hover:text-helios-orange transition-colors">
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-bold mb-6">Company</h4>
            <ul className="space-y-4 text-sm">
              <li><Link to="/about-us" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/projects" className="hover:text-white transition-colors">Our Projects</Link></li>
              <li><Link to="/grant-guide" className="hover:text-white transition-colors">Grant Guide</Link></li>
              <li><Link to="/careers" className="hover:text-white transition-colors">Careers</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

           <div>
            <h4 className="text-white font-bold mb-6">Resources</h4>
            <ul className="space-y-4 text-sm">
              <li><Link to="/rews-guidelines" className="hover:text-white transition-colors">REWS Guidelines</Link></li>
              <li><Link to="/enemalta-tariffs" className="hover:text-white transition-colors">Enemalta Tariffs</Link></li>
              <li><Link to="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link to="/cookie-policy" className="hover:text-white transition-colors">Cookie Policy</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold mb-6">Contact Us</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-helios-orange shrink-0" />
                <span>Triq Il-Vitorja,<br/>Qormi, Malta, QRM 1234</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-helios-orange shrink-0" />
                <span>+356 2123 4567</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-helios-orange shrink-0" />
                <span>info@heliosmalta.com</span>
              </li>
            </ul>
          </div>

        </div>
        
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <p>&copy; {new Date().getFullYear()} Helios Energy Malta Ltd. All rights reserved.</p>
          <p>VAT MT12345678</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;