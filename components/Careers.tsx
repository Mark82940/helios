import React from 'react';
import { Mail } from 'lucide-react';

const Careers: React.FC = () => {
  return (
    <div className="pt-32 pb-24 min-h-screen bg-slate-50">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h1 className="text-4xl font-bold text-helios-blue mb-6">Join Our Team</h1>
        <p className="text-xl text-slate-600 mb-12">
          Help us power Malta's future. We are always looking for passionate individuals to join our growing family.
        </p>

        <div className="grid gap-6 text-left">
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex justify-between items-center">
            <div>
              <h3 className="text-xl font-bold text-slate-900">PV Installer (Licensed)</h3>
              <p className="text-slate-500">Full Time • Qormi HQ</p>
            </div>
            <button className="px-6 py-2 border border-slate-200 rounded-full font-bold hover:bg-slate-50">Apply</button>
          </div>
           <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex justify-between items-center">
            <div>
              <h3 className="text-xl font-bold text-slate-900">Electrical Engineer</h3>
              <p className="text-slate-500">Full Time • Hybrid</p>
            </div>
            <button className="px-6 py-2 border border-slate-200 rounded-full font-bold hover:bg-slate-50">Apply</button>
          </div>
           <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex justify-between items-center">
            <div>
              <h3 className="text-xl font-bold text-slate-900">Sales Consultant</h3>
              <p className="text-slate-500">Commission Based • Remote</p>
            </div>
            <button className="px-6 py-2 border border-slate-200 rounded-full font-bold hover:bg-slate-50">Apply</button>
          </div>
        </div>
        
        <div className="mt-12">
            <p className="text-slate-600 mb-4">Don't see a role for you? Send your CV spontaneously.</p>
            <a href="mailto:careers@heliosmalta.com" className="inline-flex items-center gap-2 text-helios-orange font-bold hover:underline">
                <Mail className="w-4 h-4" />
                careers@heliosmalta.com
            </a>
        </div>
      </div>
    </div>
  );
};

export default Careers;