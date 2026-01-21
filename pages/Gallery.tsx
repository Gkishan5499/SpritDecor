import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ICONS } from '../constants';

// =============================
//  360° PANOLENS VIEWER SECTION
// =============================
const PanoramicViewer = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const viewerRef = useRef<any>(null);
  const panoramaRef = useRef<any>(null);

  const [isAutoRotating, setIsAutoRotating] = useState(true);
  const [isLoading, setIsLoading] = useState(true);

  const toggleAutoRotate = () => {
    if (!viewerRef.current) return;
    const newState = !isAutoRotating;
    viewerRef.current.setAutoRotate(newState, 0.3);
    setIsAutoRotating(newState);
  };

  const resetView = () => {
    if (viewerRef.current && panoramaRef.current) {
      const camera = viewerRef.current.getCamera();
      camera.position.set(0, 0, 0.1);
    }
  };

  useEffect(() => {
    if (!containerRef.current) return;

    const init = async () => {
      setIsLoading(true);
      try {
        const panolensModule = await import('panolens');
        const PANOLENS = panolensModule; // named export module

        if (viewerRef.current) {
          viewerRef.current.dispose();
          viewerRef.current = null;
        }

        const imagePath = new URL('/360/livingroom.png', window.location.origin).href;
        const panorama = new PANOLENS.ImagePanorama(imagePath);
        panoramaRef.current = panorama;

        const viewer = new PANOLENS.Viewer({
          container: containerRef.current,
          autoRotate: true,
          autoRotateSpeed: 0.3,
          controlBar: false,
          cameraFov: 70,
          horizontalView: false,
        });

        viewer.add(panorama);
        viewerRef.current = viewer;

        panorama.addEventListener('load', () => setIsLoading(false));
        panorama.addEventListener('error', () => setIsLoading(false));

      } catch (err) {
        console.error('Panolens failed:', err);
        setIsLoading(false);
      }
    };

    init();
    return () => viewerRef.current && viewerRef.current.dispose();
  }, []);

  return (
    <section className="relative h-[70vh] w-full overflow-hidden bg-black">

      {/* Panolens Container */}
      <div
        ref={containerRef}
        className="absolute inset-0 w-full h-full"
        style={{ touchAction: 'none' }}
      />

      {/* Loading Overlay */}
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/50 z-30">
          <div className="text-white text-center">
            <div className="w-12 h-12 border-4 border-[#C5A059] border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
            <p className="text-sm uppercase tracking-widest">Loading 360° View</p>
          </div>
        </div>
      )}

      {/* Controls */}
      <div className="absolute top-8 right-8 z-20 flex flex-col gap-3">
        <motion.button
          onClick={toggleAutoRotate}
          whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
          className="bg-black/70 backdrop-blur-md border border-white/20 text-white p-3 rounded-full hover:bg-[#C5A059] hover:text-black transition-all"
          title="Auto Rotate Toggle"
        >
          {isAutoRotating ? <ICONS.Pause /> : <ICONS.Play />}
        </motion.button>

        <motion.button
          onClick={resetView}
          whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
          className="bg-black/70 backdrop-blur-md border border-white/20 text-white p-3 rounded-full hover:bg-[#C5A059] hover:text-black transition-all"
          title="Reset View"
        >
          <ICONS.Home />
        </motion.button>
      </div>

      {/* Overlay UI */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-black/60 backdrop-blur-md px-6 py-3 border border-white/20 text-white rounded-full flex items-center space-x-3"
        >
          <ICONS.Rotate />
          <span className="text-[10px] uppercase tracking-[0.2em] font-bold">Drag to rotate • Scroll to zoom</span>
        </motion.div>
      </div>

      {/* Title */}
      <div className="absolute bottom-8 left-8 z-20 text-white">
        <h3 className="text-2xl serif font-bold">Executive Suite 402</h3>
        <p className="text-xs uppercase tracking-widest text-[#C5A059] font-bold">Full 360° View</p>
      </div>
    </section>
  );
};

// =============================
//  STATIC PHOTO GRID
// =============================
const GalleryGrid = () => {
  const images = [
    "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1616486701797-0f33f61038ec?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1617103996702-96ff29b1c467?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1618221381711-42ca8ab6e908?auto=format&fit=crop&q=80&w=800",
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative aspect-[4/5] bg-gray-100 overflow-hidden"
            >
              <img 
                src={img} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// =============================
//  PAGE WRAPPER
// =============================
const Gallery = () => {
  return (
    <div className="pt-24 min-h-screen">
      
      {/* Hero Text */}
      <div className="container mx-auto px-6 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-2xl mb-12"
        >
          <span className="text-xs uppercase tracking-[0.3em] font-bold text-[#C5A059] block mb-4">
            Interactive Experience
          </span>
          <h1 className="text-5xl md:text-6xl font-bold serif leading-tight mb-6">
            Visual Gallery
          </h1>
          <p className="text-gray-500 text-lg leading-relaxed">
            Step into our designs. Explore every angle through immersive 360° virtual tours and high-definition captures.
          </p>
        </motion.div>
      </div>

      {/* 360 Viewer */}
      <PanoramicViewer />

      {/* Divider */}
      <div className="container mx-auto px-6 pt-24">
        <h2 className="text-3xl font-bold serif border-b border-gray-200 pb-6">Project Details</h2>
      </div>

      {/* Static Gallery */}
      <GalleryGrid />

      {/* VR CTA */}
      <section className="pb-24">
        <div className="container mx-auto px-6">
          <div className="bg-[#1A1A1A] p-12 md:p-24 rounded-sm text-white flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="max-w-md">
              <h3 className="text-4xl font-bold serif mb-6 leading-tight">Request a VR Consultation</h3>
              <p className="text-gray-400 mb-8 leading-relaxed">
                Experience your future home before the first brick is laid. We provide high-end VR walkthroughs for all premium projects.
              </p>
              <a 
                href="#/booking" 
                className="border border-[#C5A059] text-[#C5A059] px-8 py-3 uppercase tracking-widest text-xs font-bold hover:bg-[#C5A059] hover:text-black transition-all"
              >
                Schedule Tour
              </a>
            </div>
            <div className="flex-1 aspect-video rounded overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1622396481328-9b1b78cdd9fd?auto=format&fit=crop&q=80&w=1200"
                className="w-full h-full object-cover opacity-60"
              />
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Gallery;
