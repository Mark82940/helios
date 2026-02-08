import React from 'react';
import { Check, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface PackageProps {
  id: string;
  name: string;
  kw: string;
  price: string;
  image: string;
  features: string[];
  isPopular?: boolean;
}

const PackageCard: React.FC<PackageProps> = ({ id, name, kw, price, image, features, isPopular }) => (
  <div className={`relative flex flex-col rounded-3xl transition-all duration-300 overflow-hidden ${isPopular ? 'bg-white shadow-2xl md:scale-105 border-2 border-helios-orange z-10' : 'bg-white border border-slate-200 hover:shadow-xl'}`}>
    {isPopular && (
      <div className="absolute top-0 left-1/2 -translate-x-1/2 bg-helios-orange text-white px-4 py-1 rounded-b-xl text-sm font-bold shadow-md z-20">
        Best Value
      </div>
    )}
    
    <div className="h-48 overflow-hidden relative">
        <img src={image} alt={name} className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-4 left-6 text-white">
             <h3 className="font-medium uppercase tracking-wider text-xs mb-1 opacity-90">{name}</h3>
             <div className="flex items-baseline gap-2">
                <span className="text-3xl font-bold">{kw}</span>
                <span className="font-medium opacity-80">System</span>
            </div>
        </div>
    </div>

    <div className="p-8 flex flex-col flex-grow">
      <div className="mb-6 flex items-baseline gap-1">
        <span className="text-3xl font-mono font-bold text-helios-blue">€{price}</span>
        <span className="text-sm text-slate-400">fully installed</span>
      </div>

      <ul className="space-y-4 mb-8 flex-grow">
        {features.map((feat, idx) => (
          <li key={idx} className="flex items-start gap-3 text-sm text-slate-600">
            <div className="mt-0.5 p-0.5 bg-green-100 rounded-full shrink-0">
              <Check className="w-3 h-3 text-green-600" />
            </div>
            {feat}
          </li>
        ))}
      </ul>

      <Link 
        to={`/products/${id}`}
        className={`w-full py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all ${isPopular ? 'bg-helios-orange text-white hover:bg-orange-600 shadow-lg shadow-orange-500/25' : 'bg-slate-50 border-2 border-slate-200 text-slate-700 hover:border-helios-blue hover:text-helios-blue'}`}
      >
        Select Package
        <ArrowRight className="w-4 h-4" />
      </Link>
    </div>
  </div>
);

interface ProductsProps {
  embedded?: boolean;
}

export const packagesData = [
    {
      id: "starter",
      name: "Apartment / Starter",
      kw: "3.6kWp",
      price: "5,450",
      image: "https://ecdn6.globalso.com/upload/p/421/image_other/2024-05/11-1.jpg",
      description: "Perfect for apartments or smaller households with limited roof space. This system is designed to cover essential daytime loads like refrigerators, standby devices, and washing cycles.",
      features: [
        "8x Jinko Tiger Neo N-Type Panels",
        "Huawei 3KTL Hybrid Inverter",
        "WIFI Module Included",
        "Anodized Aluminum Structure",
        "REWS Grant Eligible (-€2,500)"
      ]
    },
    {
      id: "family",
      name: "Family Home",
      kw: "6.4kWp",
      price: "8,950",
      image: "https://www.energian.co.uk/cdn/shop/files/Off-gridLFPESS_960ca823-624b-417a-80dc-00fc2f3f3b6f_2048x.jpg?v=1689755656",
      description: "Our best-selling system for standard Maltese families. Covers AC usage during summer and heating in winter. Fully hybrid-ready, allowing you to add batteries later without changing the inverter.",
      features: [
        "14x Jinko Tiger Neo 455W Panels",
        "Huawei 5KTL Hybrid Inverter",
        "Smart Power Meter Included",
        "Battery Ready System",
        "REWS Grant Eligible (-€3,000)",
        "Premium Black Frame"
      ],
      isPopular: true
    },
    {
      id: "villa",
      name: "Villa + Storage",
      kw: "10kWp + 10kWh",
      price: "16,800",
      image: "https://irrorwxhpnjmln5m-static.micyjz.com/cloud/lrBpjKrrlmSRmjornimjjq/10KW-solar-power-system.png",
      description: "The ultimate energy independence package. Includes a large solar array and massive battery storage to power your home well into the night. Ideal for Villas with pool pumps or EVs.",
      features: [
        "22x Jinko High-Yield Panels",
        "Huawei 10KTL 3-Phase Inverter",
        "2x Huawei Luna 5kWh Batteries",
        "Backup Box (Power during outage)",
        "Max Grant Eligible (-€7,200)",
        "EV Charger Integration"
      ]
    }
];

const Products: React.FC<ProductsProps> = ({ embedded = false }) => {
  return (
    <section 
      id="products" 
      className={`${embedded ? 'py-24' : 'pt-32 pb-24 min-h-screen'} bg-slate-50`}
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-helios-blue mb-4">Turnkey Solar Packages</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Top-tier hardware tailored for Malta's climate. Prices include installation, commissioning, and VAT.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 items-start">
          {packagesData.map((pkg) => (
            <PackageCard key={pkg.id} {...pkg} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;