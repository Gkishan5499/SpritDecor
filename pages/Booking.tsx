
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { BookingFormData } from '../types';
import { SERVICES } from '../data/mockData';

const Booking = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm<BookingFormData>();

  const onSubmit = (data: BookingFormData) => {
    console.log('Booking submitted:', data);
    // Simulate API delay
    setTimeout(() => {
      setIsSubmitted(true);
      // In a real app, we'd store this in local storage or a mock backend here
      const bookings = JSON.parse(localStorage.getItem('bookings') || '[]');
      localStorage.setItem('bookings', JSON.stringify([...bookings, { ...data, date: new Date().toISOString() }]));
    }, 1000);
  };

  return (
    <div className="pt-32 pb-24 bg-[#FDFBF7] min-h-screen">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto bg-white shadow-xl flex flex-col md:flex-row overflow-hidden rounded-sm border border-[#C5A059]/10">
          
          {/* Info Side */}
          <div className="md:w-1/3 bg-[#1A1A1A] text-white p-12 flex flex-col justify-between">
            <div>
              <h1 className="text-4xl font-bold serif mb-6">Let's Design Your Future</h1>
              <p className="text-gray-400 font-light leading-relaxed mb-12">
                Fill out the form to schedule a preliminary consultation with our lead designers. We typically respond within 24 hours across India.
              </p>
            </div>
            
            <div className="space-y-6">
              <div>
                <span className="block text-xs uppercase tracking-widest text-[#C5A059] font-bold mb-1">Inquiry Line</span>
                <p className="text-sm">+91 22 1234 5678</p>
              </div>
              <div>
                <span className="block text-xs uppercase tracking-widest text-[#C5A059] font-bold mb-1">Studio Address</span>
                <p className="text-sm">Mumbai, MH 400050</p>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="md:w-2/3 p-12 bg-white">
            <AnimatePresence mode="wait">
              {!isSubmitted ? (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit(onSubmit)}
                  className="space-y-6"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-1">
                      <label className="text-[10px] uppercase tracking-widest font-bold text-gray-400">Full Name</label>
                      <input
                        {...register('fullName', { required: true })}
                        className={`w-full border-b ${errors.fullName ? 'border-red-500' : 'border-gray-200'} focus:border-[#C5A059] outline-none py-2 transition-colors`}
                        placeholder="John Doe"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-[10px] uppercase tracking-widest font-bold text-gray-400">Email Address</label>
                      <input
                        {...register('email', { required: true, pattern: /^\S+@\S+$/i })}
                        className={`w-full border-b ${errors.email ? 'border-red-500' : 'border-gray-200'} focus:border-[#C5A059] outline-none py-2 transition-colors`}
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-1">
                      <label className="text-[10px] uppercase tracking-widest font-bold text-gray-400">Phone Number</label>
                      <input
                        {...register('phone')}
                        className="w-full border-b border-gray-200 focus:border-[#C5A059] outline-none py-2 transition-colors"
                        placeholder="+91 98765 43210"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-[10px] uppercase tracking-widest font-bold text-gray-400">Service Type</label>
                      <select
                        {...register('serviceType', { required: true })}
                        className="w-full border-b border-gray-200 focus:border-[#C5A059] outline-none py-2 transition-colors bg-white"
                      >
                        <option value="">Select a service</option>
                        {SERVICES.map(s => <option key={s.id} value={s.title}>{s.title}</option>)}
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-1">
                      <label className="text-[10px] uppercase tracking-widest font-bold text-gray-400">Preferred Date</label>
                      <input
                        type="date"
                        {...register('preferredDate')}
                        className="w-full border-b border-gray-200 focus:border-[#C5A059] outline-none py-2 transition-colors"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-[10px] uppercase tracking-widest font-bold text-gray-400">Location Address</label>
                      <input
                        {...register('location')}
                        className="w-full border-b border-gray-200 focus:border-[#C5A059] outline-none py-2 transition-colors"
                        placeholder="City, Area, Pincode"
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="text-[10px] uppercase tracking-widest font-bold text-gray-400">Your Message</label>
                    <textarea
                      {...register('message')}
                      rows={3}
                      className="w-full border-b border-gray-200 focus:border-[#C5A059] outline-none py-2 transition-colors resize-none"
                      placeholder="Tell us about your space..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 bg-[#C5A059] text-white text-xs font-bold uppercase tracking-[0.2em] hover:bg-[#B18C44] transition-all"
                  >
                    Confirm Booking
                  </button>
                </motion.form>
              ) : (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="h-full flex flex-col items-center justify-center text-center py-12"
                >
                  <div className="w-20 h-20 bg-[#C5A059]/10 rounded-full flex items-center justify-center text-[#C5A059] mb-8">
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                  </div>
                  <h2 className="text-3xl font-bold serif mb-4">Inquiry Received</h2>
                  <p className="text-gray-500 mb-10 max-w-sm">
                    Thank you for reaching out. One of our lead designers will contact you shortly to confirm your consultation.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="text-xs font-bold uppercase tracking-widest border-b-2 border-black pb-1 hover:text-[#C5A059] hover:border-[#C5A059] transition-all"
                  >
                    Send Another Request
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;
