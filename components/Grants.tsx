import React, { useState } from 'react';
import { CheckCircle2, ShieldCheck, Info, FileText, Banknote, X, ArrowRight } from 'lucide-react';

interface GrantsProps {
  embedded?: boolean;
}

const Grants: React.FC<GrantsProps> = ({ embedded = false }) => {
  const [isEligibilityOpen, setIsEligibilityOpen] = useState(false);
  const [step, setStep] = useState(0);
  const [isEligible, setIsEligible] = useState(true);

  const questions = [
    { text: "Are you the owner of the property?", correct: true },
    { text: "Is the property used for residential purposes?", correct: true },
    { text: "Do you have a registered electricity meter?", correct: true },
    { text: "Is the roof structure legally built (with permits)?", correct: true }
  ];

  const handleAnswer = (answer: boolean) => {
    if (!answer) {
      setIsEligible(false);
      setStep(questions.length); // Jump to end
    } else {
      if (step < questions.length - 1) {
        setStep(step + 1);
      } else {
        setStep(questions.length); // Done
      }
    }
  };

  const resetQuiz = () => {
    setIsEligibilityOpen(false);
    setTimeout(() => {
        setStep(0);
        setIsEligible(true);
    }, 300);
  }

  return (
    <section 
      id="grants" 
      className={`${embedded ? 'py-24' : 'pt-32 pb-20 min-h-screen'} bg-slate-50 border-b border-slate-200`}
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
           <span className="text-helios-orange font-bold text-sm tracking-wider uppercase mb-2 block">REWS 2025/2026 Schemes</span>
           <h2 className="text-3xl lg:text-4xl font-bold text-helios-blue mb-4">Significant Government Grants</h2>
           <p className="text-slate-600 max-w-2xl mx-auto">
             Malta encourages renewable energy adoption with generous rebates. All applications are managed via REWS (Renewable Energy and Water Services).
           </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
            
            {/* Standard PV */}
            <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-lg relative overflow-hidden group hover:border-helios-blue transition-colors duration-300">
                <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                    <ShieldCheck className="w-32 h-32" />
                </div>
                <h3 className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-2">Option A</h3>
                <h4 className="text-2xl font-bold text-helios-blue mb-4">PV System</h4>
                <div className="flex items-baseline gap-2 mb-1">
                    <div className="text-4xl font-mono font-bold text-helios-green">€2,500</div>
                    <span className="text-xs text-slate-400 font-bold uppercase">MAX</span>
                </div>
                <p className="text-sm text-slate-400 mb-6">50% of eligible costs</p>
                
                <ul className="space-y-4 mb-8">
                    <li className="flex items-start gap-3 text-sm text-slate-700">
                        <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0" />
                        <span>Max €625 per kWp installed</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm text-slate-700">
                        <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0" />
                        <span>Standard String Inverters</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm text-slate-700">
                        <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0" />
                        <span>Feed-in Tariff: €0.10/kWh</span>
                    </li>
                </ul>
            </div>

            {/* Hybrid - Hero Card */}
            <div className="bg-helios-blue rounded-3xl p-8 border border-helios-blue shadow-2xl relative overflow-hidden transform lg:-translate-y-4 flex flex-col justify-between">
                <div className="absolute top-0 right-0 bg-helios-orange text-white text-xs font-bold px-3 py-1 rounded-bl-xl z-10">
                    MOST POPULAR
                </div>
                {/* Background Decor */}
                <div className="absolute -right-10 -bottom-10 bg-white/5 w-64 h-64 rounded-full blur-3xl"></div>

                <div>
                    <h3 className="text-sm font-bold text-blue-200 uppercase tracking-wider mb-2">Option B (Recommended)</h3>
                    <h4 className="text-2xl font-bold text-white mb-4">Hybrid Inverter System</h4>
                    <div className="flex items-baseline gap-2 mb-1">
                        <div className="text-4xl font-mono font-bold text-helios-orange">€3,000</div>
                        <span className="text-xs text-blue-200 font-bold uppercase">MAX</span>
                    </div>
                    <p className="text-sm text-blue-200 mb-6">50% of eligible costs</p>
                    
                    <ul className="space-y-4 mb-8">
                        <li className="flex items-start gap-3 text-sm text-white">
                            <CheckCircle2 className="w-5 h-5 text-helios-orange shrink-0" />
                            <span>Increased Cap for Hybrid Tech</span>
                        </li>
                        <li className="flex items-start gap-3 text-sm text-white">
                            <CheckCircle2 className="w-5 h-5 text-helios-orange shrink-0" />
                            <span>Max €750 per kWp installed</span>
                        </li>
                        <li className="flex items-start gap-3 text-sm text-white">
                            <CheckCircle2 className="w-5 h-5 text-helios-orange shrink-0" />
                            <span>Future-Proof (Battery Ready)</span>
                        </li>
                    </ul>
                </div>
                 <button 
                    onClick={() => setIsEligibilityOpen(true)}
                    className="w-full bg-white text-helios-blue font-bold py-3 rounded-xl hover:bg-blue-50 transition-colors shadow-lg"
                 >
                    Check Eligibility
                </button>
            </div>

             {/* Battery */}
            <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-lg relative overflow-hidden group hover:border-helios-green transition-colors duration-300">
                 <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                    <Banknote className="w-32 h-32" />
                </div>
                <h3 className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-2">Storage Add-on</h3>
                <h4 className="text-2xl font-bold text-helios-blue mb-4">Battery Storage</h4>
                <div className="flex items-baseline gap-2 mb-1">
                    <div className="text-4xl font-mono font-bold text-helios-green">€7,200</div>
                    <span className="text-xs text-slate-400 font-bold uppercase">MAX</span>
                </div>
                <p className="text-sm text-slate-400 mb-6">80% of eligible costs</p>
                
                <ul className="space-y-4 mb-8">
                    <li className="flex items-start gap-3 text-sm text-slate-700">
                        <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0" />
                        <span>Up to €7,200 in Malta (80%)</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm text-slate-700">
                        <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0" />
                        <span>Up to <b>€8,550</b> in Gozo (95%)</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm text-slate-700">
                        <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0" />
                        <span>Retrofit on existing systems ok</span>
                    </li>
                </ul>
            </div>
        </div>

        <div className="mt-16 grid md:grid-cols-2 gap-8">
            <div className="bg-slate-100 rounded-2xl p-8">
                <div className="flex items-center gap-3 mb-4">
                    <div className="bg-white p-2 rounded-lg shadow-sm">
                        <FileText className="w-6 h-6 text-helios-blue" />
                    </div>
                    <h3 className="font-bold text-lg text-slate-900">Application Process</h3>
                </div>
                <ol className="relative border-l-2 border-slate-300 ml-3 space-y-6">
                    <li className="ml-6">
                        <span className="absolute -left-2 w-4 h-4 rounded-full bg-slate-300 border-2 border-white"></span>
                        <h4 className="font-bold text-slate-800 text-sm">Step 1: Part A (Application)</h4>
                        <p className="text-sm text-slate-600 mt-1">We submit the grant application to REWS before purchase. Approval confirms your grant reservation.</p>
                    </li>
                    <li className="ml-6">
                        <span className="absolute -left-2 w-4 h-4 rounded-full bg-slate-300 border-2 border-white"></span>
                        <h4 className="font-bold text-slate-800 text-sm">Step 2: Installation</h4>
                        <p className="text-sm text-slate-600 mt-1">Our certified team installs the system and issues commissioning certificates.</p>
                    </li>
                     <li className="ml-6">
                        <span className="absolute -left-2 w-4 h-4 rounded-full bg-helios-green border-2 border-white"></span>
                        <h4 className="font-bold text-slate-800 text-sm">Step 3: Part B (Reimbursement)</h4>
                        <p className="text-sm text-slate-600 mt-1">We submit final invoices and photos. REWS processes the payment directly to your bank account.</p>
                    </li>
                </ol>
            </div>

             <div className="bg-blue-50 rounded-2xl p-8 border border-blue-100">
                 <div className="flex items-center gap-3 mb-4">
                    <div className="bg-white p-2 rounded-lg shadow-sm">
                        <Info className="w-6 h-6 text-helios-blue" />
                    </div>
                    <h3 className="font-bold text-lg text-slate-900">Important Criteria</h3>
                </div>
                <ul className="space-y-4">
                    <li className="flex gap-3 text-sm text-slate-700">
                        <div className="w-1.5 h-1.5 rounded-full bg-helios-blue mt-2 shrink-0"></div>
                        <span>Applicant must be the property owner.</span>
                    </li>
                    <li className="flex gap-3 text-sm text-slate-700">
                        <div className="w-1.5 h-1.5 rounded-full bg-helios-blue mt-2 shrink-0"></div>
                        <span>Property must be used for residential purposes.</span>
                    </li>
                    <li className="flex gap-3 text-sm text-slate-700">
                        <div className="w-1.5 h-1.5 rounded-full bg-helios-blue mt-2 shrink-0"></div>
                        <span>Planning permits may be required for certain areas (UCAs) - we assist with this.</span>
                    </li>
                    <li className="flex gap-3 text-sm text-slate-700">
                        <div className="w-1.5 h-1.5 rounded-full bg-helios-blue mt-2 shrink-0"></div>
                        <span>Invoices and receipts must be fiscally valid.</span>
                    </li>
                </ul>
                <div className="mt-6 pt-6 border-t border-blue-200">
                    <p className="text-xs text-slate-500 italic">
                        * Grants are subject to availability and REWS approval. Schemes may change annually.
                    </p>
                </div>
            </div>
        </div>
      </div>

      {/* Eligibility Modal */}
      {isEligibilityOpen && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={resetQuiz} />
            <div className="bg-white rounded-3xl p-8 w-full max-w-lg relative z-10 shadow-2xl animate-fade-in-up">
                <button onClick={resetQuiz} className="absolute top-4 right-4 text-slate-400 hover:text-slate-800">
                    <X className="w-6 h-6" />
                </button>

                {step < questions.length ? (
                    <div>
                        <div className="mb-6">
                            <span className="text-xs font-bold text-helios-orange uppercase tracking-wider">Question {step + 1} of {questions.length}</span>
                            <div className="w-full bg-slate-100 h-1.5 rounded-full mt-2">
                                <div className="bg-helios-orange h-1.5 rounded-full transition-all duration-300" style={{ width: `${((step + 1) / questions.length) * 100}%` }} />
                            </div>
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 mb-8">{questions[step].text}</h3>
                        <div className="grid grid-cols-2 gap-4">
                            <button onClick={() => handleAnswer(true)} className="py-3 rounded-xl border-2 border-slate-200 font-bold text-slate-700 hover:border-helios-green hover:bg-green-50 hover:text-green-700 transition-all">
                                Yes
                            </button>
                            <button onClick={() => handleAnswer(false)} className="py-3 rounded-xl border-2 border-slate-200 font-bold text-slate-700 hover:border-red-400 hover:bg-red-50 hover:text-red-700 transition-all">
                                No
                            </button>
                        </div>
                    </div>
                ) : (
                    <div className="text-center">
                        {isEligible ? (
                            <div>
                                <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <CheckCircle2 className="w-10 h-10" />
                                </div>
                                <h3 className="text-2xl font-bold text-slate-900 mb-2">You are Eligible!</h3>
                                <p className="text-slate-600 mb-6">Great news! Based on your answers, you likely qualify for the full 50% REWS grant.</p>
                                <button onClick={resetQuiz} className="bg-helios-orange text-white font-bold py-3 px-8 rounded-xl hover:bg-orange-600 w-full transition-colors">
                                    Get Your Quote Now
                                </button>
                            </div>
                        ) : (
                            <div>
                                <div className="w-16 h-16 bg-red-100 text-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <X className="w-10 h-10" />
                                </div>
                                <h3 className="text-2xl font-bold text-slate-900 mb-2">Likely Not Eligible</h3>
                                <p className="text-slate-600 mb-6">Unfortunately, you may not meet all the criteria for the REWS grant at this time. However, solar can still be a great investment.</p>
                                <button onClick={resetQuiz} className="border-2 border-slate-200 text-slate-700 font-bold py-3 px-8 rounded-xl hover:bg-slate-50 w-full transition-colors">
                                    Close
                                </button>
                            </div>
                        )}
                    </div>
                )}
            </div>
        </div>
      )}
    </section>
  );
};

export default Grants;