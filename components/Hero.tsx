import React, { useState } from 'react';
import { ArrowRight, Zap, Sun } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  const [monthlyBill, setMonthlyBill] = useState(150);
  
  // Malta has high irradiance. 
  const estimatedAnnualSavings = Math.round(monthlyBill * 12 * 0.90); // 90% reduction possible in Malta
  const tenYearSavings = estimatedAnnualSavings * 10;

  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-slate-900 min-h-[90vh] flex items-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=2072&auto=format&fit=crop"
          alt="Modern solar roof installation against blue sky" 
          className="w-full h-full object-cover object-[center_30%] opacity-70"
        />
        {/* Lighter gradient to keep panels visible but text readable */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/60 to-transparent" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center w-full">
        
        {/* Left: Text Content */}
        <div className="space-y-8 animate-fade-in-up opacity-0" style={{ animationDelay: '0.1s' }}>
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-helios-orange/20 text-helios-orange border border-helios-orange/30 rounded-full text-xs font-bold uppercase tracking-wider backdrop-blur-md">
            <Sun className="w-3 h-3 fill-current" />
            Malta's #1 Solar Partner
          </div>
          
          <h1 className="text-4xl lg:text-6xl font-extrabold text-white leading-[1.1] tracking-tight drop-shadow-lg">
            POWER YOUR HOME <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-helios-orange to-yellow-400">
              WITH MEDITERRANEAN SUN.
            </span>
          </h1>
          
          <p className="text-lg text-slate-100 max-w-lg leading-relaxed font-medium drop-shadow-md">
            Take advantage of Malta's 3,000+ hours of sunshine. Save up to €10,200 with the new REWS government grants and eliminate your Enemalta bill.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <Link to="/calculator" className="bg-helios-orange text-white px-8 py-4 rounded-xl font-bold flex items-center gap-2 hover:bg-orange-600 transition-all shadow-lg hover:translate-y-[-2px] hover:shadow-orange-500/50">
              Calculate Savings
              <ArrowRight className="w-4 h-4" />
            </Link>
            <div className="flex items-center gap-4 px-6 py-4 bg-white/10 border border-white/20 rounded-xl backdrop-blur-md hover:bg-white/20 transition-colors">
              <div className="flex -space-x-3">
                {[1, 2, 3].map((i) => (
                  <img 
                    key={i} 
                    src={`https://randomuser.me/api/portraits/men/${20+i}.jpg`} 
                    alt="User" 
                    className="w-10 h-10 rounded-full border-2 border-slate-800"
                  />
                ))}
              </div>
              <div className="text-sm">
                <span className="block font-bold text-white">1,500+</span>
                <span className="text-slate-200">Installations in Malta</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Floating Widget */}
        <div className="relative mt-12 lg:mt-0 animate-fade-in-up opacity-0" style={{ animationDelay: '0.3s' }}>
            {/* Visual background effect */}
            <div className="absolute inset-0 bg-helios-orange/20 rounded-3xl rotate-3 scale-95 blur-2xl"></div>
            
            <div className="relative bg-white/95 border border-white/50 shadow-2xl rounded-3xl p-8 backdrop-blur-xl">
                <div className="flex justify-between items-start mb-6">
                    <div>
                        <h3 className="text-lg font-bold text-slate-900">Instant Savings Check</h3>
                        <p className="text-slate-500 text-xs mt-1">Malta Residential Rates</p>
                    </div>
                    <div className="bg-orange-100 p-2 rounded-lg">
                        <Zap className="text-helios-orange w-5 h-5 fill-current" />
                    </div>
                </div>

                <div className="space-y-6">
                    <div>
                        <div className="flex justify-between text-sm font-medium mb-4">
                            <span className="text-slate-600">Current Monthly Bill</span>
                            <span className="font-mono text-helios-blue font-bold">€{monthlyBill}</span>
                        </div>
                        <input
                            type="range"
                            min="50"
                            max="600"
                            step="10"
                            value={monthlyBill}
                            onChange={(e) => setMonthlyBill(Number(e.target.value))}
                            className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-helios-orange"
                        />
                         <div className="flex justify-between text-xs text-slate-400 mt-2">
                            <span>€50</span>
                            <span>€600+</span>
                        </div>
                    </div>

                    <div className="bg-slate-50 rounded-xl p-6 border border-slate-100 text-center">
                        <p className="text-sm text-slate-500 font-medium mb-1">Potential 10-Year Value</p>
                        <p className="text-4xl font-mono font-bold text-helios-green tracking-tight">
                             €{tenYearSavings.toLocaleString()}
                        </p>
                        <div className="mt-2 inline-block px-3 py-1 bg-green-100 text-green-700 text-xs font-bold rounded-full">
                            ROI: ~2.5 Years
                        </div>
                    </div>

                    <Link to="/calculator" className="block w-full text-center bg-slate-900 hover:bg-slate-800 text-white font-bold py-4 rounded-xl shadow-lg transition-all active:scale-95">
                        Get Full Quote & Design
                    </Link>
                    
                    <p className="text-xs text-center text-slate-400">
                        Includes REWS Grant analysis.
                    </p>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;