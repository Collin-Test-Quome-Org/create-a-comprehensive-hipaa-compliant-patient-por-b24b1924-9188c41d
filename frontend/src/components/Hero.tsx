import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

export const Hero = () => (
  <section className="relative w-full h-[32rem] flex items-center justify-center overflow-hidden">
    <div
      style={{ backgroundImage: "url('/branding/assets/hero-0.png')" }}
      className="absolute inset-0 bg-cover bg-center z-0"
    />
    <div className="absolute inset-0 bg-black bg-opacity-60 z-10 flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        className="text-center px-6"
      >
        <h1
          className="text-white text-5xl md:text-6xl font-bold mb-4 drop-shadow-lg"
          style={{ fontFamily: 'Montserrat, sans-serif' }}
        >
          Welcome to ShieldLink Health
        </h1>
        <p className="text-slate-100 text-lg md:text-xl max-w-xl mx-auto mb-8" style={{ fontFamily: 'Roboto, sans-serif' }}>
          Secure, seamless healthcare communication for patients who demand trust, clarity, and control. Our digital shield keeps your conversations safe and your care connected.
        </p>
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <Button asChild id="get-started-cta" size="lg" className="bg-[#1d4ed8] text-white font-bold text-lg shadow-md hover:bg-blue-700 transition-all">
            <Link to="/signup">Get Started</Link>
          </Button>
          <Button asChild id="learn-more-cta" variant="outline" size="lg" className="border-white text-white font-bold text-lg hover:bg-white hover:text-[#1d4ed8] transition-all">
            <Link to="/about">Learn More</Link>
          </Button>
        </div>
      </motion.div>
    </div>
  </section>
);
