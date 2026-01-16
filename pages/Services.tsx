
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { SERVICES } from '../data/mockData';
import { ICONS } from '../constants';

const Services = () => {
  return (
    <div className="pt-32 pb-24">
      <section className="container mx-auto px-6">
        <div className="max-w-2xl mb-20">
          <span className="text-xs uppercase tracking-[0.3em] font-bold text-[#C5A059] mb-4 block">Our Expertise</span>
          <h1 className="text-5xl md:text-6xl font-bold serif leading-tight">Comprehensive Interior Solutions</h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, idx) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white group border border-transparent hover:border-[#C5A059]/20 transition-all p-4 rounded-sm"
            >
              <div className="overflow-hidden mb-6 aspect-video">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="px-2">
                <span className="text-[10px] uppercase tracking-widest text-gray-400 font-bold mb-2 block">{service.category}</span>
                <h3 className="text-2xl font-bold serif mb-4 group-hover:text-[#C5A059] transition-colors">{service.title}</h3>
                <p className="text-gray-500 mb-8 leading-relaxed">
                  {service.description}
                </p>
                <Link
                  to="/booking"
                  className="flex items-center text-xs font-bold uppercase tracking-widest group-hover:translate-x-2 transition-transform"
                >
                  Book Now <span className="ml-2 text-[#C5A059]"><ICONS.ArrowRight /></span>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="mt-32 bg-[#F5F5F0] py-24">
        <div className="container mx-auto px-6 text-center max-w-3xl">
          <h2 className="text-4xl font-bold serif mb-8">Looking for a custom solution?</h2>
          <p className="text-gray-500 text-lg mb-10 leading-relaxed">
            Our team thrives on unique challenges. Whether it's a historic renovation or a futuristic workspace, we bring the same level of luxury and care.
          </p>
          <Link
            to="/booking"
            className="inline-block px-12 py-5 bg-[#1A1A1A] text-white text-sm font-bold uppercase tracking-[0.2em] hover:bg-[#C5A059] transition-all"
          >
            Start Your Project
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Services;
