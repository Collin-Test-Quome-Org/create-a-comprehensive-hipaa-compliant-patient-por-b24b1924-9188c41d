import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

export const Hero = () => {
  return (
    <div style={{ backgroundImage: "url('/branding/assets/hero-0.png')" }} className="bg-cover bg-center h-96 relative">
      <div className="bg-black bg-opacity-50 h-full flex flex-col items-center justify-center">
        <motion.h1
          className="text-white text-4xl md:text-5xl font-bold mb-4 drop-shadow-lg text-center"
          style={{ fontFamily: 'Montserrat, sans-serif' }}
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, type: 'spring', stiffness: 70 }}
        >
          Welcome to SecureHealth Portal
        </motion.h1>
        <motion.p
          className="text-white text-lg md:text-2xl mb-6 max-w-xl text-center drop-shadow"
          style={{ fontFamily: 'Roboto, sans-serif' }}
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, type: 'spring', stiffness: 70 }}
        >
          The future of your health records: Secure. Connected. Always accessible. Experience peace of mind with every click.
        </motion.p>
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.6, type: 'spring', stiffness: 80 }}
        >
          <Button id="cta-hero-start" className="text-lg px-8 py-4 shadow-lg" asChild>
            <Link to="/signup">Get Started</Link>
          </Button>
        </motion.div>
      </div>
    </div>
  );
};
