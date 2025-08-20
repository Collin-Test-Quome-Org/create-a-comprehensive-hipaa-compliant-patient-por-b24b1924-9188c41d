import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

export function Hero() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="relative w-full h-[30rem] flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: "url('/branding/assets/hero-0.png')" }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50" />
      <div className="relative z-10 flex flex-col items-center gap-6 text-center max-w-2xl">
        <motion.h1
          className="text-white text-5xl font-bold font-montserrat"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
        >
          Secure. Simple. Seamless Healthcare.
        </motion.h1>
        <motion.p
          className="text-slate-200 text-lg font-roboto max-w-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.7 }}
        >
          Welcome to ShieldRx — your trusted digital health companion. Connect, communicate, and manage your care in one secure place.
        </motion.p>
        <div className="flex gap-4 justify-center">
          <Button id="get-started-cta" asChild size="lg" className="bg-blue-700 text-white hover:bg-blue-800 font-semibold px-8 py-2 rounded-lg shadow-lg">
            <Link to="/signup">Get Started</Link>
          </Button>
          <Button id="learn-more-cta" asChild variant="outline" className="border-white text-white hover:bg-blue-100/20">
            <Link to="/dashboard">Learn More</Link>
          </Button>
        </div>
      </div>
    </motion.section>
  );
}
