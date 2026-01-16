
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PORTFOLIO } from '../data/mockData';
import { ICONS } from '../constants';

const categories = ['All', 'Living Room', 'Bedroom', 'Office', 'Kitchen', 'Decor'];

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedItem, setSelectedItem] = useState<typeof PORTFOLIO[0] | null>(null);

  const filteredItems = activeCategory === 'All'
    ? PORTFOLIO
    : PORTFOLIO.filter(item => item.category === activeCategory);

  return (
    <div className="pt-32 pb-24 min-h-screen">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div>
            <h1 className="text-5xl md:text-6xl font-bold serif leading-tight">Project Portfolio</h1>
            <p className="text-gray-500 mt-4 max-w-md">A showcase of our most recent transformations and architectural triumphs.</p>
          </div>
          
          <div className="flex flex-wrap gap-4 overflow-x-auto pb-2 md:pb-0 no-scrollbar">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`text-xs font-bold uppercase tracking-widest px-6 py-2 border-b-2 transition-all whitespace-nowrap ${
                  activeCategory === cat ? 'border-[#C5A059] text-[#C5A059]' : 'border-transparent text-gray-400 hover:text-gray-600'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="group relative cursor-pointer aspect-[4/5] overflow-hidden"
                onClick={() => setSelectedItem(item)}
              >
                <img src={item.image} alt={item.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center text-center p-6">
                   <span className="text-[#C5A059] text-xs uppercase tracking-widest font-bold mb-2">{item.category}</span>
                   <h3 className="text-2xl text-white font-bold serif mb-4">{item.title}</h3>
                   <span className="w-8 h-[2px] bg-white group-hover:w-16 transition-all"></span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-6"
            onClick={() => setSelectedItem(null)}
          >
            <button className="absolute top-10 right-10 text-white hover:text-[#C5A059]" onClick={() => setSelectedItem(null)}>
              <ICONS.Close />
            </button>
            
            <motion.div
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 50, scale: 0.95 }}
              className="max-w-5xl w-full grid grid-cols-1 lg:grid-cols-5 gap-0 bg-white overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="lg:col-span-3 h-[50vh] lg:h-[70vh]">
                <img src={selectedItem.image} alt={selectedItem.title} className="w-full h-full object-cover" />
              </div>
              <div className="lg:col-span-2 p-12 flex flex-col justify-center">
                <span className="text-[#C5A059] text-xs uppercase tracking-[0.3em] font-bold mb-4 block">{selectedItem.category}</span>
                <h2 className="text-4xl font-bold serif mb-6">{selectedItem.title}</h2>
                <p className="text-gray-500 leading-relaxed mb-8">{selectedItem.description}</p>
                <button
                  onClick={() => setSelectedItem(null)}
                  className="w-fit text-xs font-bold uppercase tracking-widest border-b-2 border-black pb-1 hover:text-[#C5A059] hover:border-[#C5A059] transition-all"
                >
                  Close Preview
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Portfolio;
