
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { NAVIGATION_LINKS, ICONS, COLORS } from '../constants';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <nav className={`fixed top-0 left-0 w-full z-[60] transition-all duration-300 ${isScrolled ? 'bg-white/80 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold tracking-tighter serif">
          SpritDecor<span className="text-[#C5A059]">.</span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-8 items-center">
          {NAVIGATION_LINKS.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-sm font-medium tracking-wide uppercase transition-colors hover:text-[#C5A059] ${location.pathname === link.path ? 'text-[#C5A059]' : 'text-gray-800'}`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
        >
          {isOpen ? <ICONS.Close /> : <ICONS.Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/20 backdrop-blur-sm z-[55] md:hidden"
              onClick={() => setIsOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-full left-0 w-full bg-white border-t md:hidden py-6 px-6 flex flex-col space-y-4 z-[60]"
            >
              {NAVIGATION_LINKS.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-lg font-medium tracking-wide uppercase transition-colors hover:text-[#C5A059] ${location.pathname === link.path ? 'text-[#C5A059]' : 'text-gray-800'}`}
                >
                  {link.name}
                </Link>
              ))}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Footer = () => (
  <footer className="bg-[#1A1A1A] text-white pt-20 pb-10">
    <div className="container mx-auto px-6">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        <div className="col-span-1 md:col-span-2">
          <h2 className="text-3xl font-bold serif mb-6">SpritDecor</h2>
          <p className="text-gray-400 max-w-sm mb-8">
            Elevating modern Indian living through sophisticated design and bespoke craftsmanship. Blending traditional aesthetics with contemporary elegance.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-[#C5A059] transition-colors"><ICONS.Instagram /></a>
          </div>
        </div>
        <div>
          <h3 className="font-semibold uppercase text-xs tracking-widest mb-6">Navigation</h3>
          <ul className="space-y-4 text-gray-400 text-sm">
            {NAVIGATION_LINKS.map(link => (
              <li key={link.path}><Link to={link.path} className="hover:text-white transition-colors">{link.name}</Link></li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="font-semibold uppercase text-xs tracking-widest mb-6">Contact</h3>
          <ul className="space-y-4 text-gray-400 text-sm">
            <li>Design District, Sector 18<br />Mumbai, MH 400050</li>
            <li>hello@lumiere.design</li>
            <li>+91 22 1234 5678</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 uppercase tracking-widest">
        <p>&copy; 2025 SpritDecor Interior Design India & Developed by <a href="https://www.gautamstack.com" target="_blank">GautamStack Digital</a></p>
        <div className="flex space-x-6 mt-4 md:mt-0">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
        </div>
      </div>
    </div>
  </footer>
);

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
};
