
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ICONS, COLORS } from '../constants';
import { SERVICES, PORTFOLIO, TESTIMONIALS } from '../data/mockData';

const Hero = () => (
  <section className="relative h-screen flex items-center overflow-hidden">
    <div className="absolute inset-0 z-0">
      <img
        src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=2000"
        alt="Modern interior"
        className="w-full h-full object-cover scale-105"
      />
      <div className="absolute inset-0 bg-black/30" />
    </div>

    <div className="container mx-auto px-6 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        className="max-w-3xl text-white"
      >
        <span className="inline-block text-xs uppercase tracking-[0.3em] font-semibold mb-6">Bespoke Living Spaces</span>
        <h1 className="text-5xl md:text-8xl font-bold leading-tight mb-8 serif">
          Modern Interior & Home Decor Services
        </h1>
        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
          <Link
            to="/booking"
            className="px-8 py-4 bg-[#C5A059] text-white text-sm font-semibold uppercase tracking-widest hover:bg-[#B18C44] transition-all flex items-center justify-center group"
          >
            Book a Service <span className="ml-2 group-hover:translate-x-1 transition-transform"><ICONS.ArrowRight /></span>
          </Link>
          <Link
            to="/portfolio"
            className="px-8 py-4 border border-white text-white text-sm font-semibold uppercase tracking-widest hover:bg-white hover:text-black transition-all flex items-center justify-center"
          >
            View Collection
          </Link>
        </div>
      </motion.div>
    </div>
  </section>
);

const FeatureSection = () => (
  <section className="py-24 bg-white">
    <div className="container mx-auto px-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
        {[
          { title: "Curated Design", desc: "Every element is hand-selected to create a cohesive and timeless aesthetic that reflects your personality.", icon: "01" },
          { title: "Luxury Materials", desc: "We source only the finest fabrics, stones, and metals to ensure your home feels as premium as it looks.", icon: "02" },
          { title: "Expert Craftsmanship", desc: "Our network of master artisans brings years of experience to every custom furniture piece and finish.", icon: "03" }
        ].map((f, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.2 }}
            className="group"
          >
            <span className="block text-4xl font-light text-[#C5A059] serif mb-4">{f.icon}</span>
            <h3 className="text-2xl font-semibold mb-4 serif">{f.title}</h3>
            <p className="text-gray-500 leading-relaxed">{f.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const FeaturedPortfolio = () => (
  <section className="py-24 bg-[#F5F5F0]">
    <div className="container mx-auto px-6">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16">
        <div className="max-w-xl">
          <span className="text-xs uppercase tracking-widest text-[#C5A059] font-bold">Our Work</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 serif">Elegant Spaces Crafted for Discerning Clients</h2>
        </div>
        <Link to="/portfolio" className="text-sm font-bold uppercase tracking-widest border-b-2 border-[#C5A059] pb-1 hover:text-[#C5A059] transition-all mt-8 md:mt-0">
          View All Projects
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {PORTFOLIO.slice(0, 3).map((item, idx) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="group relative overflow-hidden aspect-[4/5]"
          >
            <img src={item.image} alt={item.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 p-8 flex flex-col justify-end">
              <span className="text-xs text-[#C5A059] uppercase tracking-widest mb-2">{item.category}</span>
              <h3 className="text-2xl text-white font-bold serif">{item.title}</h3>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const Testimonials = () => (
  <section className="py-24 bg-white overflow-hidden">
    <div className="container mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold serif">What Our Clients Say</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
        {TESTIMONIALS.map((t, idx) => (
          <motion.div
            key={t.id}
            initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-8 bg-[#FDFBF7] border border-[#C5A059]/10 rounded-sm"
          >
            <p className="text-lg italic text-gray-700 mb-8 font-light leading-relaxed">"{t.content}"</p>
            <div className="flex items-center">
              <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full mr-4 object-cover" />
              <div>
                <h4 className="font-bold serif">{t.name}</h4>
                <p className="text-xs uppercase text-gray-400 tracking-widest">{t.role}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const Home = () => (
  <div>
    <Hero />
    <FeatureSection />
    <FeaturedPortfolio />
    <Testimonials />
  </div>
);

export default Home;
