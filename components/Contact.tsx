import React from 'react';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="pt-32 pb-24 min-h-screen bg-slate-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          
          <div>
            <h1 className="text-4xl font-bold text-helios-blue mb-6">Get in Touch</h1>
            <p className="text-lg text-slate-600 mb-8">
              Have questions about solar? Need a quote? Our team is ready to help you start your journey to energy independence.
            </p>

            <div className="space-y-6 mb-12">
              <div className="flex items-start gap-4">
                <div className="bg-white p-3 rounded-xl shadow-sm text-helios-orange">
                    <MapPin className="w-6 h-6" />
                </div>
                <div>
                    <h3 className="font-bold text-slate-900">Visit Our Showroom</h3>
                    <p className="text-slate-600">Triq Il-Vitorja, Qormi, Malta, QRM 1234</p>
                </div>
              </div>

               <div className="flex items-start gap-4">
                <div className="bg-white p-3 rounded-xl shadow-sm text-helios-orange">
                    <Phone className="w-6 h-6" />
                </div>
                <div>
                    <h3 className="font-bold text-slate-900">Call Us</h3>
                    <p className="text-slate-600">+356 2123 4567</p>
                    <p className="text-slate-400 text-sm">Mon-Fri 08:00 - 17:00</p>
                </div>
              </div>

               <div className="flex items-start gap-4">
                <div className="bg-white p-3 rounded-xl shadow-sm text-helios-orange">
                    <Mail className="w-6 h-6" />
                </div>
                <div>
                    <h3 className="font-bold text-slate-900">Email Us</h3>
                    <p className="text-slate-600">info@heliosmalta.com</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-3xl shadow-lg border border-slate-100">
            <h3 className="text-xl font-bold text-slate-900 mb-6">Send us a message</h3>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-2 gap-4">
                    <input type="text" placeholder="Name" className="w-full p-3 rounded-xl border border-slate-200 focus:border-helios-orange focus:outline-none" />
                    <input type="tel" placeholder="Phone" className="w-full p-3 rounded-xl border border-slate-200 focus:border-helios-orange focus:outline-none" />
                </div>
                <input type="email" placeholder="Email" className="w-full p-3 rounded-xl border border-slate-200 focus:border-helios-orange focus:outline-none" />
                <textarea rows={4} placeholder="How can we help?" className="w-full p-3 rounded-xl border border-slate-200 focus:border-helios-orange focus:outline-none"></textarea>
                <button className="w-full bg-helios-blue text-white font-bold py-4 rounded-xl hover:bg-slate-800 transition-colors">
                    Send Message
                </button>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;