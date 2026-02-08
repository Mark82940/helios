import React from 'react';

const RewsGuidelines: React.FC = () => {
  return (
    <div className="pt-32 pb-24 min-h-screen bg-slate-50">
      <div className="max-w-4xl mx-auto px-6 prose prose-slate">
        <h1 className="text-3xl font-bold text-helios-blue">REWS Guidelines & Compliance</h1>
        <p className="text-lg text-slate-600">
          The Regulator for Energy and Water Services (REWS) sets the standards for all PV installations in Malta. Compliance is mandatory for grant approval and grid connection.
        </p>
        
        <h3>Key Requirements</h3>
        <ul>
          <li><strong>Mounting Structure:</strong> Must be certified wind-resistant for Maltese wind zones.</li>
          <li><strong>Inverter Standards:</strong> Must meet EN 50549-1 grid connection codes.</li>
          <li><strong>Fireman Switch:</strong> A DC isolator must be installed near the panels to ensure safety during emergencies.</li>
        </ul>

        <h3>Helpful Links</h3>
        <p>
            <a href="#" className="text-helios-orange hover:underline">Official REWS Website</a><br/>
            <a href="#" className="text-helios-orange hover:underline">Download 2025 Grant Prospectus (PDF)</a>
        </p>
      </div>
    </div>
  );
};

export default RewsGuidelines;