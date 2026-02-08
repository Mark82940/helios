import React from 'react';

const EnemaltaTariffs: React.FC = () => {
  return (
    <div className="pt-32 pb-24 min-h-screen bg-slate-50">
      <div className="max-w-4xl mx-auto px-6 prose prose-slate">
        <h1 className="text-3xl font-bold text-helios-blue">Enemalta Electricity Tariffs</h1>
        <p className="text-lg text-slate-600">
          Understanding your bill is the first step to saving. Malta uses a stepped tariff system where the cost per unit increases as you consume more.
        </p>

        <h3>Residential Rates (2024/2025)</h3>
        <table className="w-full text-left border-collapse my-8">
            <thead>
                <tr className="border-b border-slate-300">
                    <th className="py-2">Consumption Band (kWh)</th>
                    <th className="py-2">Rate (€/kWh)</th>
                </tr>
            </thead>
            <tbody>
                <tr className="border-b border-slate-100"><td className="py-2">0 - 2,000</td><td className="py-2">€0.1047</td></tr>
                <tr className="border-b border-slate-100"><td className="py-2">2,001 - 6,000</td><td className="py-2">€0.1298</td></tr>
                <tr className="border-b border-slate-100"><td className="py-2">6,001 - 10,000</td><td className="py-2">€0.1607</td></tr>
                <tr className="border-b border-slate-100"><td className="py-2">10,001 - 20,000</td><td className="py-2">€0.3420</td></tr>
                <tr className="border-b border-slate-100"><td className="py-2">20,001 +</td><td className="py-2">€0.6076</td></tr>
            </tbody>
        </table>

        <h3>Feed-in Tariff (Selling to Grid)</h3>
        <p>
            For any excess energy your solar system produces that you do not use immediately, Enemalta pays you a fixed rate of <strong>€0.10 per unit</strong> guaranteed for 20 years.
        </p>
      </div>
    </div>
  );
};

export default EnemaltaTariffs;