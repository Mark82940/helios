import React from 'react';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="pt-32 pb-24 min-h-screen bg-slate-50">
      <div className="max-w-4xl mx-auto px-6 prose prose-slate">
        <h1 className="text-3xl font-bold text-helios-blue">Privacy Policy</h1>
        <p>Last updated: January 2025</p>
        <p>Helios Energy Malta ("we", "us") respects your privacy. This policy explains how we handle your data.</p>
        
        <h3>Information We Collect</h3>
        <p>We collect information you provide directly to us via our forms, such as name, email, phone number, and address, solely for the purpose of providing solar quotations.</p>
        
        <h3>How We Use Information</h3>
        <p>We use your data to:</p>
        <ul>
            <li>Process your quote requests.</li>
            <li>Submit grant applications to REWS on your behalf (with your consent).</li>
            <li>Schedule site visits.</li>
        </ul>
        
        <h3>Data Protection</h3>
        <p>We do not sell your personal data to third parties. Data is stored securely on servers within the EU.</p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;