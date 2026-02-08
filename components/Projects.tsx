import React from 'react';
import { MapPin } from 'lucide-react';

const Projects: React.FC = () => {
  const projects = [
    { title: "Villa installation", location: "Madliena", size: "12kWp + 15kWh Battery", img: "https://images.unsplash.com/photo-1617154238532-680482b4df00?auto=format&fit=crop&q=80&w=800" },
    { title: "Terraced House", location: "Mosta", size: "6.4kWp Hybrid", img: "https://images.unsplash.com/photo-1592833159057-65a269f5eb25?auto=format&fit=crop&q=80&w=800" },
    { title: "Apartment Block", location: "Sliema", size: "32kWp Communal", img: "https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=800" },
    { title: "Farmhouse Retrofit", location: "Gozo", size: "8kWp + Backup", img: "https://images.unsplash.com/photo-1624397640148-949b1732bb0a?auto=format&fit=crop&q=80&w=800" },
  ];

  return (
    <div className="pt-32 pb-24 min-h-screen bg-slate-50">
      <div className="max-w-6xl mx-auto px-6">
        <h1 className="text-4xl font-bold text-helios-blue mb-4">Recent Installations</h1>
        <p className="text-slate-600 mb-12 max-w-2xl">Browse a selection of our recent work across Malta and Gozo.</p>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((proj, idx) => (
            <div key={idx} className="group relative rounded-3xl overflow-hidden shadow-lg h-80">
              <img src={proj.img} alt={proj.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-8 text-white">
                <h3 className="text-2xl font-bold mb-1">{proj.title}</h3>
                <div className="flex items-center gap-4 text-sm opacity-90">
                  <span className="flex items-center gap-1"><MapPin className="w-4 h-4 text-helios-orange" /> {proj.location}</span>
                  <span className="bg-white/20 px-2 py-0.5 rounded backdrop-blur-md">{proj.size}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;