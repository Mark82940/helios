import React, { useState, useMemo } from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';
import { Battery, Sun, Home, Euro, ArrowRight } from 'lucide-react';

interface CalculatorProps {
  embedded?: boolean;
}

const Calculator: React.FC<CalculatorProps> = ({ embedded = false }) => {
  const [roofSize, setRoofSize] = useState(12); // Standard Malta roof (panels count approx)
  const [orientation, setOrientation] = useState<'South' | 'EastWest'>('South');
  const [hasBattery, setHasBattery] = useState(false);
  const [showLeadForm, setShowLeadForm] = useState(false);

  // ROI Logic adjusted for Malta (High Irradiance)
  const calculateData = useMemo(() => {
    const baseConsumption = 5500; // kWh per year (AC usage in Malta is high)
    const gridPrice = 0.16; // Blended rate in Malta roughly
    const inflation = 1.03; 
    
    // Solar Production estimation (Malta is ~1600 kWh/kWp)
    // roofSize here represents number of panels (approx 450W each)
    const systemSizeKW = roofSize * 0.450;
    const productionPerKW = orientation === 'South' ? 1650 : 1450; 
    const totalProduction = systemSizeKW * productionPerKW;
    
    // Self Consumption Rate
    const selfConsumptionRate = hasBattery ? 0.85 : 0.45;
    
    // Costs
    // Approx €1000 per kW installed in Malta before grant for pure PV
    // Hybrid Inverter adds slight cost
    let pvSystemCost = systemSizeKW * 1200; 
    let batteryCost = 0;
    
    if (hasBattery) {
        batteryCost = 4500; // 5kWh approx installed
    }

    let totalSystemCost = pvSystemCost + batteryCost;
    let grantAmount = 0;

    // Grant Logic REWS 2025
    // PV Hybrid Grant: 50% max €3,000
    const pvGrant = Math.min(3000, pvSystemCost * 0.5);
    
    let batteryGrant = 0;
    if (hasBattery) {
        // Battery Grant: 80% max €7,200 (Malta)
        batteryGrant = Math.min(7200, batteryCost * 0.8);
    }

    grantAmount = pvGrant + batteryGrant;
    const netCost = totalSystemCost - grantAmount;
    
    const chartData = [];
    let runGrid = 0;
    let runSolar = netCost;
    
    for (let year = 1; year <= 20; year++) {
         const costOfPower = baseConsumption * gridPrice * Math.pow(inflation, year - 1);
         runGrid += costOfPower;
         
         const solarGeneratedVal = (totalProduction * selfConsumptionRate) * (gridPrice * Math.pow(inflation, year - 1));
         const exportVal = (totalProduction * (1 - selfConsumptionRate)) * 0.10;
         
         const remainingBill = Math.max(0, costOfPower - solarGeneratedVal);
         // Net year flow = remainingBill - exportVal.
         
         runSolar += (remainingBill - exportVal);

         if (year % 5 === 0) {
            chartData.push({
                year: `Year ${year}`,
                Grid: Math.round(runGrid),
                Solar: Math.round(runSolar),
            });
        }
    }
    
    return { chartData, totalProduction, totalSystemCost, grantAmount, netCost, systemSizeKW };
  }, [roofSize, orientation, hasBattery]);

  return (
    <section 
      id="calculator"
      className={`${embedded ? 'py-24' : 'pt-32 pb-24 min-h-screen'} bg-white`}
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-helios-blue mb-4">Precision ROI Calculator</h2>
            <p className="text-slate-600">Simulate your savings with real Malta weather data and REWS grant schemes.</p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8">
            
            {/* Controls */}
            <div className="lg:col-span-4 space-y-6">
                <div className="bg-slate-50 p-6 rounded-2xl shadow-sm border border-slate-200">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="p-2 bg-orange-100 rounded-lg">
                            <Sun className="w-5 h-5 text-helios-orange" />
                        </div>
                        <h3 className="font-bold text-slate-800">System Configuration</h3>
                    </div>
                    
                    <div className="space-y-8">
                        <div>
                            <div className="flex justify-between mb-2">
                                <label className="text-sm font-medium text-slate-600">Number of Panels</label>
                                <span className="font-mono font-bold text-helios-blue">{roofSize} Panels ({calculateData.systemSizeKW.toFixed(1)}kWp)</span>
                            </div>
                            <input 
                                type="range" 
                                min="6" 
                                max="32" 
                                value={roofSize} 
                                onChange={(e) => setRoofSize(Number(e.target.value))}
                                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-helios-orange"
                            />
                        </div>

                        <div>
                            <label className="text-sm font-medium text-slate-600 mb-2 block">Roof Facing</label>
                            <div className="grid grid-cols-2 gap-3">
                                <button 
                                    onClick={() => setOrientation('South')}
                                    className={`px-4 py-2 text-sm font-medium rounded-xl border transition-all ${orientation === 'South' ? 'bg-helios-blue text-white border-helios-blue' : 'bg-white text-slate-600 border-slate-200 hover:border-helios-blue'}`}
                                >
                                    South (Ideal)
                                </button>
                                <button 
                                    onClick={() => setOrientation('EastWest')}
                                    className={`px-4 py-2 text-sm font-medium rounded-xl border transition-all ${orientation === 'EastWest' ? 'bg-helios-blue text-white border-helios-blue' : 'bg-white text-slate-600 border-slate-200 hover:border-helios-blue'}`}
                                >
                                    East/West
                                </button>
                            </div>
                        </div>

                        <div className="pt-4 border-t border-slate-200">
                             <div className="flex items-center justify-between mb-2">
                                <span className="text-sm font-bold text-slate-800 flex items-center gap-2">
                                    <Battery className="w-4 h-4 text-helios-green" />
                                    Add Battery Storage?
                                </span>
                                <button 
                                    onClick={() => setHasBattery(!hasBattery)}
                                    className={`relative w-12 h-7 rounded-full transition-colors duration-300 ${hasBattery ? 'bg-helios-green' : 'bg-slate-300'}`}
                                >
                                    <div className={`absolute top-1 left-1 w-5 h-5 bg-white rounded-full shadow-md transform transition-transform duration-300 ${hasBattery ? 'translate-x-5' : 'translate-x-0'}`} />
                                </button>
                            </div>
                            <p className="text-xs text-slate-500">Unlocks additional 80% battery grant (up to €7,200).</p>
                        </div>
                    </div>
                </div>

                <div className="bg-helios-blue p-6 rounded-2xl shadow-xl text-white relative overflow-hidden">
                    <div className="relative z-10">
                        <div className="flex justify-between items-end mb-2">
                            <p className="text-blue-200 text-sm font-medium">Estimated Net Cost</p>
                            <span className="bg-green-500/20 text-green-300 text-xs px-2 py-1 rounded">After Grant</span>
                        </div>
                        <p className="text-4xl font-mono font-bold">€{Math.round(calculateData.netCost).toLocaleString()}</p>
                        
                        <div className="mt-4 pt-4 border-t border-white/10 space-y-2 text-sm text-blue-200">
                            <div className="flex justify-between">
                                <span>System Value:</span>
                                <span>€{Math.round(calculateData.totalSystemCost).toLocaleString()}</span>
                            </div>
                            <div className="flex justify-between text-helios-green font-bold">
                                <span>Gov Grant:</span>
                                <span>- €{Math.round(calculateData.grantAmount).toLocaleString()}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Chart */}
            <div className="lg:col-span-8 bg-white p-6 lg:p-8 rounded-3xl shadow-lg border border-slate-100 flex flex-col">
                <div className="flex justify-between items-center mb-8">
                    <h3 className="text-xl font-bold text-slate-800">20-Year Financial Projection</h3>
                    <div className="flex gap-4 text-sm">
                        <div className="flex items-center gap-2">
                            <span className="w-3 h-3 rounded-full bg-slate-300"></span>
                            <span className="text-slate-500">Grid Cost</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="w-3 h-3 rounded-full bg-helios-orange"></span>
                            <span className="text-slate-700 font-bold">Helios Net Cost</span>
                        </div>
                    </div>
                </div>

                <div className="h-[300px] w-full">
                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart
                            data={calculateData.chartData}
                            margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                            barSize={40}
                        >
                            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                            <XAxis 
                                dataKey="year" 
                                axisLine={false} 
                                tickLine={false} 
                                tick={{ fill: '#64748b', fontSize: 12 }} 
                                dy={10}
                            />
                            <YAxis 
                                axisLine={false} 
                                tickLine={false} 
                                tick={{ fill: '#64748b', fontSize: 12 }} 
                                tickFormatter={(value) => `€${value/1000}k`}
                            />
                            <Tooltip 
                                cursor={{ fill: '#f8fafc' }}
                                contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                                itemStyle={{ fontFamily: 'Roboto Mono' }}
                                formatter={(value: number) => `€${value.toLocaleString()}`}
                            />
                            <Bar dataKey="Grid" fill="#cbd5e1" radius={[4, 4, 0, 0]} />
                            <Bar dataKey="Solar" fill="#f37021" radius={[4, 4, 0, 0]} />
                        </BarChart>
                    </ResponsiveContainer>
                </div>

                <div className="mt-8 pt-8 border-t border-slate-100">
                    {!showLeadForm ? (
                         <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                            <div>
                                <h4 className="font-bold text-slate-900 text-lg">Like what you see?</h4>
                                <p className="text-slate-500 text-sm">Get a detailed PDF proposal including panel layout and grant application forms.</p>
                            </div>
                            <button 
                                onClick={() => setShowLeadForm(true)}
                                className="bg-helios-orange hover:bg-orange-600 text-white px-8 py-3 rounded-xl font-bold flex items-center gap-2 transition-all shadow-lg shadow-orange-500/20"
                            >
                                Get Detailed Quote
                                <ArrowRight className="w-5 h-5" />
                            </button>
                        </div>
                    ) : (
                        <form className="animate-fade-in bg-slate-50 p-6 rounded-xl border border-slate-200" onSubmit={(e) => e.preventDefault()}>
                            <h4 className="font-bold text-slate-900 mb-4">Send me the full breakdown</h4>
                            <div className="grid md:grid-cols-2 gap-4 mb-4">
                                <input type="text" placeholder="Name" className="p-3 rounded-lg border border-slate-300 focus:outline-none focus:border-helios-orange" />
                                <input type="tel" placeholder="Phone (e.g. +356)" className="p-3 rounded-lg border border-slate-300 focus:outline-none focus:border-helios-orange" />
                                <input type="email" placeholder="Email Address" className="p-3 rounded-lg border border-slate-300 focus:outline-none focus:border-helios-orange md:col-span-2" />
                            </div>
                            <button className="w-full bg-helios-blue text-white font-bold py-3 rounded-lg hover:bg-slate-800 transition-colors">
                                Send Proposal
                            </button>
                            <p className="text-center text-xs text-slate-400 mt-2">We respect your privacy. No spam.</p>
                        </form>
                    )}
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Calculator;