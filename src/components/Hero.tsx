import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export const Hero = () => (
  <section className="relative w-full h-[520px] md:h-[420px] flex items-center justify-center overflow-hidden bg-[#f9fafb]">
    <div
      style={{ backgroundImage: "url('/branding/assets/hero-0.png')" }}
      className="absolute inset-0 w-full h-full bg-cover bg-center"
    />
    <div className="absolute inset-0 bg-black/40" />
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      className="relative z-10 flex flex-col items-center text-center px-4 max-w-2xl mx-auto"
    >
      <h1 className="text-white text-4xl md:text-5xl font-extrabold mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
        ShieldLink Health Portal
      </h1>
      <p className="text-slate-100 text-lg md:text-xl mb-8" style={{ fontFamily: 'Roboto, sans-serif' }}>
        Secure access. Trusted care. Your health, always protected.
      </p>
      <div className="flex flex-col md:flex-row gap-4 justify-center">
        <Button
          asChild
          id="hero-cta-get-started"
          size="lg"
          className="bg-[#1d4ed8] text-white hover:bg-blue-700 font-bold text-lg shadow-md"
        >
          <Link to="/signup">Get Started</Link>
        </Button>
        <Button
          asChild
          id="hero-cta-login"
          variant="secondary"
          size="lg"
          className="font-bold text-lg"
        >
          <Link to="/login">Patient Login</Link>
        </Button>
      </div>
    </motion.div>
  </section>
);
