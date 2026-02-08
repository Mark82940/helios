import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { packagesData } from './Products';
import { Check, ArrowLeft, ShieldCheck, Zap, Calendar } from 'lucide-react';

const PackageDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const product = packagesData.find(p => p.id === id);
  const [formSubmitted, setFormSubmitted] = useState(false);

  if (!product) {
    return (
      <div className="pt-40 pb-20 text-center">
        <h2 className="text-2xl font-bold mb-4">Package not found</h2>
        <Link to="/products" className="text-helios-orange hover:underline">Return to Products</Link>
      </div>
    );
  }

  return (
    <section className="pt-32 pb-24 min-h-screen bg-slate-50">
      <div className="max-w-6xl mx-auto px-6">
        <Link to="/products" className="inline-flex items-center gap-2 text-slate-500 hover:text-helios-orange mb-8 transition-colors">
          <ArrowLeft className="w-4 h-4" />
          Back to Packages
        </Link>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left: Image & Details */}
          <div>
            <div className="rounded-3xl overflow-hidden shadow-xl mb-8 border border-slate-200">
              <img src={product.image} alt={product.name} className="w-full h-80 object-cover" />
            </div>
            
            <h1 className="text-3xl font-bold text-helios-blue mb-2">{product.name}</h1>
            <div className="flex items-center gap-4 mb-6">
              <span className="text-2xl font-mono font-bold text-helios-orange">{product.kw}</span>
              <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-bold">IN STOCK</span>
            </div>
            
            <p className="text-slate-600 leading-relaxed mb-8 text-lg">
              {product.description || "A complete turnkey solution designed for Maltese homes."}
            </p>

            <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
              <h3 className="font-bold text-slate-900 mb-4">System Components</h3>
              <ul className="space-y-3">
                {product.features.map((feat, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-slate-700">
                    <Check className="w-5 h-5 text-green-500 shrink-0" />
                    {feat}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right: Order Form */}
          <div className="lg:pl-8">
            <div className="bg-white p-8 rounded-3xl shadow-lg border border-slate-100 sticky top-32">
              <div className="mb-8 pb-8 border-b border-slate-100">
                <p className="text-sm text-slate-500 mb-1">Total Installed Price</p>
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-bold text-slate-900">€{product.price}</span>
                  <span className="text-slate-400">inc. VAT</span>
                </div>
                <p className="text-xs text-green-600 mt-2 font-medium flex items-center gap-1">
                  <ShieldCheck className="w-3 h-3" />
                  Eligible for REWS Grant Refund
                </p>
              </div>

              {!formSubmitted ? (
                <form onSubmit={(e) => { e.preventDefault(); setFormSubmitted(true); }} className="space-y-4">
                  <h3 className="font-bold text-slate-900 mb-2">Secure this package</h3>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <input required type="text" placeholder="First Name" className="w-full p-3 rounded-xl border border-slate-200 focus:outline-none focus:border-helios-orange focus:ring-1 focus:ring-helios-orange transition-all" />
                    <input required type="text" placeholder="Last Name" className="w-full p-3 rounded-xl border border-slate-200 focus:outline-none focus:border-helios-orange focus:ring-1 focus:ring-helios-orange transition-all" />
                  </div>
                  
                  <input required type="tel" placeholder="Mobile Number (+356)" className="w-full p-3 rounded-xl border border-slate-200 focus:outline-none focus:border-helios-orange focus:ring-1 focus:ring-helios-orange transition-all" />
                  <input required type="email" placeholder="Email Address" className="w-full p-3 rounded-xl border border-slate-200 focus:outline-none focus:border-helios-orange focus:ring-1 focus:ring-helios-orange transition-all" />
                  
                  <input type="text" placeholder="Installation Address (Town)" className="w-full p-3 rounded-xl border border-slate-200 focus:outline-none focus:border-helios-orange focus:ring-1 focus:ring-helios-orange transition-all" />

                  <button type="submit" className="w-full bg-helios-orange text-white font-bold py-4 rounded-xl hover:bg-orange-600 transition-all shadow-lg shadow-orange-500/20 mt-4 flex items-center justify-center gap-2">
                    Request Site Visit
                    <Calendar className="w-5 h-5" />
                  </button>
                  <p className="text-center text-xs text-slate-400 mt-4">
                    No payment required now. We will contact you to schedule a free technical site survey.
                  </p>
                </form>
              ) : (
                <div className="text-center py-8">
                  <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Check className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Request Received!</h3>
                  <p className="text-slate-600 mb-6">
                    Thank you for choosing the {product.name}. Our engineering team will contact you within 24 hours to book your site survey.
                  </p>
                  <button onClick={() => setFormSubmitted(false)} className="text-helios-orange font-bold text-sm hover:underline">
                    Submit another request
                  </button>
                </div>
              )}
            </div>

            <div className="mt-8 flex gap-4 text-sm text-slate-500 justify-center">
               <div className="flex items-center gap-1">
                 <Zap className="w-4 h-4 text-helios-blue" />
                 <span>High Efficiency</span>
               </div>
               <div className="flex items-center gap-1">
                 <ShieldCheck className="w-4 h-4 text-helios-blue" />
                 <span>12-Year Warranty</span>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PackageDetail;