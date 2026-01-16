
import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <div className="pt-32">
      {/* Story Section */}
      <section className="py-24 container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            <span className="text-xs uppercase tracking-[0.3em] font-bold text-[#C5A059] mb-4 block">The Lumière Story</span>
            <h1 className="text-5xl md:text-6xl font-bold serif mb-8 leading-tight">Curating Atmosphere and Artistry Since 2012</h1>
            <p className="text-gray-500 text-lg leading-relaxed mb-6">
              Founded in the heart of Milan, Lumière began with a simple philosophy: a home should be a reflection of the soul, not just a shelter. What started as a small furniture workshop has evolved into a full-service interior design powerhouse.
            </p>
            <p className="text-gray-500 text-lg leading-relaxed mb-8">
              We specialize in blending classical luxury with modern minimalist aesthetics, ensuring every room we touch feels both grand and intimate.
            </p>
            <div className="flex gap-12 pt-8 border-t border-gray-100">
              <div>
                <span className="block text-4xl font-bold serif text-[#C5A059]">12+</span>
                <span className="text-xs uppercase tracking-widest text-gray-400">Years Experience</span>
              </div>
              <div>
                <span className="block text-4xl font-bold serif text-[#C5A059]">350+</span>
                <span className="text-xs uppercase tracking-widest text-gray-400">Projects Completed</span>
              </div>
              <div>
                <span className="block text-4xl font-bold serif text-[#C5A059]">15</span>
                <span className="text-xs uppercase tracking-widest text-gray-400">Design Awards</span>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="lg:w-1/2 relative"
          >
            <img
              src="https://images.unsplash.com/photo-1599696848652-f0ff23bc911f?q=80&w=687&auto=format&fit=crop"
              alt="Designer working"
              className="w-full aspect-[4/5] object-cover rounded-sm shadow-2xl"
            />
            <div className="absolute -bottom-8 -left-8 w-48 h-48 bg-[#C5A059] p-8 hidden md:flex flex-col justify-end text-white">
              <span className="text-3xl font-bold serif mb-1">Quality</span>
              <span className="text-xs uppercase tracking-widest">Guaranteed</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-[#1A1A1A] text-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold serif">Our Core Philosophy</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            {[
              { title: "Integrity", desc: "We handle every material and relationship with utmost honesty and transparency." },
              { title: "Innovation", desc: "Pushing the boundaries of what's possible with smart home integration and sustainable materials." },
              { title: "Elegance", desc: "A pursuit of beauty that transcends trends and remains timeless for generations." }
            ].map((v, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <div className="w-12 h-1 px-4 bg-[#C5A059] mx-auto mb-6"></div>
                <h3 className="text-2xl font-bold serif mb-4">{v.title}</h3>
                <p className="text-gray-400 leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-xl mb-16">
            <h2 className="text-4xl font-bold serif mb-6">Meet the Visionaries</h2>
            <p className="text-gray-500">A collective of designers, architects, and artists dedicated to redefining the concept of home.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: "Marco Rossi", role: "Principal Architect", img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400" },
              { name: "Sienna Bell", role: "Interior Stylist", img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=400" },
              { name: "Liam O'Connor", role: "Custom Furniture Lead", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400" },
              { name: "Elena Chen", role: "Lighting Specialist", img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=400" }
            ].map((m, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="overflow-hidden mb-4 rounded-sm aspect-[3/4]">
                  <img src={m.img} alt={m.name} className="w-full h-full object-cover grayscale transition-all duration-500 group-hover:grayscale-0 group-hover:scale-110" />
                </div>
                <h4 className="text-xl font-bold serif">{m.name}</h4>
                <p className="text-xs uppercase tracking-widest text-[#C5A059] font-semibold">{m.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
