import React, { useState, useEffect } from 'react';
import { Sun, Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Check if we are on the home page
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Navigation style logic
  // If we are NOT on home, OR if we are scrolled, use the "Solid White" style.
  // Otherwise (Home + Top), use "Transparent" style.
  const useSolidNav = !isHome || isScrolled;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
        useSolidNav
          ? 'bg-white/95 backdrop-blur-md border-gray-200 py-3 shadow-sm'
          : 'bg-transparent border-transparent py-5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group cursor-pointer" onClick={() => window.scrollTo(0, 0)}>
          <div className="bg-helios-orange p-1.5 rounded-lg group-hover:rotate-12 transition-transform duration-300">
            <Sun className="text-white w-6 h-6" />
          </div>
          <span className={`text-xl font-bold tracking-tight ${useSolidNav ? 'text-helios-blue' : 'text-white'}`}>
            HELIOS<span className="text-helios-orange">ENERGY</span>
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {['Calculator', 'Products', 'Grants'].map((item) => {
            const path = `/${item.toLowerCase()}`;
            const isActive = location.pathname === path;
            
            return (
              <Link
                key={item}
                to={path}
                className={`text-sm font-medium transition-colors ${
                  isActive 
                    ? 'text-helios-orange font-bold' 
                    : useSolidNav ? 'text-slate-600 hover:text-helios-orange' : 'text-white/90 hover:text-white'
                }`}
              >
                {item}
              </Link>
            );
          })}
          <Link 
            to="/calculator"
            className="bg-helios-orange hover:bg-orange-600 text-white px-6 py-2.5 rounded-full font-semibold text-sm transition-all shadow-lg hover:shadow-orange-500/30"
          >
            Get Quote
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X className={`w-6 h-6 ${useSolidNav ? 'text-slate-800' : 'text-white'}`} />
          ) : (
            <Menu className={`w-6 h-6 ${useSolidNav ? 'text-slate-800' : 'text-white'}`} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-t border-gray-100 shadow-xl py-4 flex flex-col items-center gap-4">
          {['Calculator', 'Products', 'Grants'].map((item) => (
            <Link
              key={item}
              to={`/${item.toLowerCase()}`}
              className="text-slate-600 font-medium py-2 w-full text-center hover:bg-slate-50"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item}
            </Link>
          ))}
          <Link 
            to="/calculator"
            className="bg-helios-orange text-white px-8 py-3 rounded-full font-bold w-3/4 text-center mt-2"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Get Quote
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;