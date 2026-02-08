import React from 'react';
import { FileText, Wrench, PiggyBank, Search } from 'lucide-react';

const Process: React.FC = () => {
  const steps = [
    {
      icon: Search,
      title: "1. Virtual Design",
      desc: "After you use our calculator, we conduct a satellite survey of your roof to create a custom panel layout.",
      color: "bg-blue-100 text-blue-600"
    },
    {
      icon: FileText,
      title: "2. REWS & Permits",
      desc: "We handle all the paperwork. From the REWS Grant Application (Part A) to Enemalta grid connection permits.",
      color: "bg-orange-100 text-helios-orange"
    },
    {
      icon: Wrench,
      title: "3. 1-Day Installation",
      desc: "Our certified Malta-based team installs your Jinko/Huawei system in a single day with zero mess.",
      color: "bg-green-100 text-green-600"
    },
    {
      icon: PiggyBank,
      title: "4. Grant Refund",
      desc: "We submit Part B for you. You receive your €3,000+ government refund directly into your bank account.",
      color: "bg-purple-100 text-purple-600"
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-helios-orange font-bold text-sm tracking-wider uppercase mb-2 block">The Journey</span>
          <h2 className="text-3xl lg:text-4xl font-bold text-helios-blue mb-4">How We Handle Everything</h2>
          <p className="text-slate-600">Going solar in Malta involves paperwork. We take that burden off your shoulders.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden lg:block absolute top-8 left-[10%] right-[10%] h-0.5 bg-slate-100 -z-10"></div>

          {steps.map((step, idx) => (
            <div key={idx} className="relative group bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300">
              <div className={`w-16 h-16 ${step.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <step.icon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{step.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;