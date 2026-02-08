import React from 'react';
import { Users, Award, Zap } from 'lucide-react';

const AboutUs: React.FC = () => {
  return (
    <div className="pt-32 pb-24 min-h-screen bg-slate-50">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="text-4xl font-bold text-helios-blue mb-6">About Helios Malta</h1>
        <p className="text-xl text-slate-600 leading-relaxed mb-12">
          We are Malta's leading dedicated solar energy provider, focused on making renewable energy accessible, affordable, and hassle-free for every household on the island.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
            <Users className="w-8 h-8 text-helios-orange mb-4" />
            <h3 className="font-bold text-lg mb-2">Expert Team</h3>
            <p className="text-slate-500 text-sm">Founded by electrical engineers with over 15 years of experience in PV technology.</p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
            <Award className="w-8 h-8 text-helios-orange mb-4" />
            <h3 className="font-bold text-lg mb-2">REWS Certified</h3>
            <p className="text-slate-500 text-sm">Fully authorized installers ensuring your grant application is 100% compliant.</p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
            <Zap className="w-8 h-8 text-helios-orange mb-4" />
            <h3 className="font-bold text-lg mb-2">Premium Tech</h3>
            <p className="text-slate-500 text-sm">We exclusively use Tier-1 Jinko Panels and Huawei Inverters for maximum yield.</p>
          </div>
        </div>

        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-lg border border-slate-100">
          <h2 className="text-2xl font-bold text-helios-blue mb-4">Our Mission</h2>
          <p className="text-slate-600 mb-6">
            To empower 10,000 Maltese homes with energy independence by 2030. We believe that sunlight is Malta's greatest natural resource, and every roof has the potential to become a power plant.
          </p>
          <p className="text-slate-600">
            We don't just sell panels; we design complete energy solutions that integrate seamlessly with your lifestyle, from smart monitoring apps to EV charger integration.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;