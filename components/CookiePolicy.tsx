import React from 'react';

const CookiePolicy: React.FC = () => {
  return (
    <div className="pt-32 pb-24 min-h-screen bg-slate-50">
      <div className="max-w-4xl mx-auto px-6 prose prose-slate">
        <h1 className="text-3xl font-bold text-helios-blue">Cookie Policy</h1>
        <p>We use cookies to improve your experience on our website.</p>
        
        <h3>What are cookies?</h3>
        <p>Cookies are small text files stored on your device when you visit a website.</p>
        
        <h3>Cookies We Use</h3>
        <ul>
            <li><strong>Essential Cookies:</strong> Required for the website to function.</li>
            <li><strong>Analytics Cookies:</strong> Help us understand how visitors use the site (e.g., Google Analytics).</li>
        </ul>
        
        <h3>Managing Cookies</h3>
        <p>You can control and delete cookies through your browser settings.</p>
      </div>
    </div>
  );
};

export default CookiePolicy;