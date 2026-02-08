import React from 'react';
import { CheckCircle2, AlertCircle } from 'lucide-react';

const GrantGuide: React.FC = () => {
  return (
    <div className="pt-32 pb-24 min-h-screen bg-slate-50">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="text-4xl font-bold text-helios-blue mb-6">REWS Grant Guide 2025</h1>
        
        <div className="bg-orange-50 border border-orange-200 p-6 rounded-2xl mb-12 flex items-start gap-4">
          <AlertCircle className="w-6 h-6 text-helios-orange shrink-0 mt-1" />
          <div>
            <h3 className="font-bold text-orange-900">Important Note</h3>
            <p className="text-orange-800 text-sm">
              Grant schemes are subject to annual budget caps. We recommend applying early in the year to guarantee funding reservation.
            </p>
          </div>
        </div>

        <div className="prose prose-slate max-w-none">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Available Schemes</h2>
          
          <div className="space-y-8 mb-12">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
              <h3 className="text-xl font-bold text-helios-blue mb-2">Scheme PV - Standard Solar</h3>
              <p className="text-slate-600 mb-4">For systems without battery storage.</p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-slate-700"><CheckCircle2 className="w-4 h-4 text-green-500"/> 50% Refund on eligible costs</li>
                <li className="flex items-center gap-2 text-slate-700"><CheckCircle2 className="w-4 h-4 text-green-500"/> Capped at €2,500</li>
                <li className="flex items-center gap-2 text-slate-700"><CheckCircle2 className="w-4 h-4 text-green-500"/> Feed-in Tariff: €0.10c per unit sold to grid</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 ring-2 ring-helios-orange/20">
              <h3 className="text-xl font-bold text-helios-blue mb-2">Scheme Battery - Hybrid Systems</h3>
              <p className="text-slate-600 mb-4">For systems including battery storage (new or retrofit).</p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-slate-700"><CheckCircle2 className="w-4 h-4 text-green-500"/> 80% Refund on Battery Cost</li>
                <li className="flex items-center gap-2 text-slate-700"><CheckCircle2 className="w-4 h-4 text-green-500"/> Capped at €7,200 (Malta) / €8,550 (Gozo)</li>
                <li className="flex items-center gap-2 text-slate-700"><CheckCircle2 className="w-4 h-4 text-green-500"/> Plus standard PV grant for the panels</li>
              </ul>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-slate-900 mb-4">Application Process</h2>
          <ol className="list-decimal pl-5 space-y-2 text-slate-700">
            <li><strong>Site Survey:</strong> We verify your roof meets technical requirements.</li>
            <li><strong>Part A Submission:</strong> We submit the application to REWS on your behalf.</li>
            <li><strong>Approval:</strong> REWS issues a "Grant Offer Letter" (usually within 2-4 weeks).</li>
            <li><strong>Installation:</strong> We install and commission the system.</li>
            <li><strong>Part B Submission:</strong> We submit the invoice, photos, and commissioning certs.</li>
            <li><strong>Payment:</strong> REWS deposits the grant directly into your IBAN (approx. 3-5 months).</li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default GrantGuide;