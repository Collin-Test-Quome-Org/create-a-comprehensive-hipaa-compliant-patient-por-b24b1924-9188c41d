import { Hero } from '@/components/Hero';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

export const LandingPage = () => (
  <main className="min-h-screen w-full bg-[#f9fafb]">
    <Hero />
    <section className="max-w-6xl mx-auto py-16 px-4 grid md:grid-cols-3 gap-10">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        viewport={{ once: true }}
        className="bg-white rounded-2xl shadow-2xl p-8 flex flex-col items-center text-center hover:scale-[1.03] transition-transform"
      >
        <div className="bg-[#1d4ed8]/10 rounded-full p-4 mb-4">
          <svg width="40" height="40" fill="none" viewBox="0 0 24 24"><path stroke="#1d4ed8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M12 21C17.523 21 22 16.523 22 11V7.236a2 2 0 00-1.106-1.789l-7-3.5a2 2 0 00-1.788 0l-7 3.5A2 2 0 002 7.236V11c0 5.523 4.477 10 10 10z"/></svg>
        </div>
        <h3 className="text-xl font-semibold mb-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>Shielded Conversations</h3>
        <p className="text-slate-600" style={{ fontFamily: 'Roboto, sans-serif' }}>
          Every message is protected by our digital shield, so you can focus on your health, not your privacy.
        </p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        viewport={{ once: true }}
        className="bg-white rounded-2xl shadow-2xl p-8 flex flex-col items-center text-center hover:scale-[1.03] transition-transform"
      >
        <div className="bg-[#1d4ed8]/10 rounded-full p-4 mb-4">
          <svg width="40" height="40" fill="none" viewBox="0 0 24 24"><path stroke="#1d4ed8" strokeWidth="2" d="M21 15V7a2 2 0 00-2-2H5a2 2 0 00-2 2v8"/><path stroke="#1d4ed8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M7 10h10M12 15v-5"/></svg>
        </div>
        <h3 className="text-xl font-semibold mb-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>Easy Scheduling</h3>
        <p className="text-slate-600" style={{ fontFamily: 'Roboto, sans-serif' }}>
          Book appointments and manage your care with clarity and just a few clicks.
        </p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        viewport={{ once: true }}
        className="bg-white rounded-2xl shadow-2xl p-8 flex flex-col items-center text-center hover:scale-[1.03] transition-transform"
      >
        <div className="bg-[#1d4ed8]/10 rounded-full p-4 mb-4">
          <svg width="40" height="40" fill="none" viewBox="0 0 24 24"><path stroke="#1d4ed8" strokeWidth="2" d="M12 17v.01"/><path stroke="#1d4ed8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M7.5 7.5a5 5 0 119 0c0 3-3 5.5-4.5 8C10.5 13 7.5 10.5 7.5 7.5z"/></svg>
        </div>
        <h3 className="text-xl font-semibold mb-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>Peace of Mind</h3>
        <p className="text-slate-600" style={{ fontFamily: 'Roboto, sans-serif' }}>
          With ShieldLink Health, your wellness journey is always in safe hands.
        </p>
      </motion.div>
    </section>
    <section className="w-full bg-[#1d4ed8] py-8 flex justify-center">
      <div className="flex flex-col md:flex-row items-center gap-6">
        <h2 className="text-2xl md:text-3xl font-bold text-white" style={{ fontFamily: 'Montserrat, sans-serif' }}>
          Ready to take control of your care?
        </h2>
        <Button asChild id="join-now-cta" size="lg" className="bg-white text-[#1d4ed8] font-bold text-lg shadow-md hover:bg-blue-100 ml-0 md:ml-4 transition-all">
          <Link to="/signup">Join Now</Link>
        </Button>
      </div>
    </section>
  </main>
);
