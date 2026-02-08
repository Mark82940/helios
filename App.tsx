import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Process from './components/Process';
import Calculator from './components/Calculator';
import Grants from './components/Grants';
import Products from './components/Products';
import PackageDetail from './components/PackageDetail';
import Footer from './components/Footer';

// Company Pages
import AboutUs from './components/AboutUs';
import Projects from './components/Projects';
import GrantGuide from './components/GrantGuide';
import Careers from './components/Careers';
import Contact from './components/Contact';

// Resource Pages
import RewsGuidelines from './components/RewsGuidelines';
import EnemaltaTariffs from './components/EnemaltaTariffs';
import PrivacyPolicy from './components/PrivacyPolicy';
import CookiePolicy from './components/CookiePolicy';

// Home Page Component
const Home = () => (
  <>
    <Hero />
    <Process />
    <Calculator embedded />
    <Products embedded />
    <Grants embedded />
  </>
);

const App: React.FC = () => {
  return (
    <HashRouter>
      <div className="min-h-screen flex flex-col w-full overflow-x-hidden bg-slate-50">
        <ScrollToTop />
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/calculator" element={<Calculator />} />
            <Route path="/grants" element={<Grants />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/:id" element={<PackageDetail />} />
            
            {/* Company Routes */}
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/grant-guide" element={<GrantGuide />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/contact" element={<Contact />} />
            
            {/* Resource Routes */}
            <Route path="/rews-guidelines" element={<RewsGuidelines />} />
            <Route path="/enemalta-tariffs" element={<EnemaltaTariffs />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/cookie-policy" element={<CookiePolicy />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </HashRouter>
  );
};

// Helper to scroll to top on route change
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

export default App;