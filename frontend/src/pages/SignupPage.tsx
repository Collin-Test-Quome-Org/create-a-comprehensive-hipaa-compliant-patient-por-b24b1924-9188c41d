import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export const SignupPage = () => (
  <div className="min-h-screen bg-[#f9fafe] flex items-center justify-center px-4">
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.7 }}
      className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-10 flex flex-col items-center"
    >
      <h1 className="text-3xl font-bold text-[#1d4ed8] mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>Sign Up</h1>
      <form className="w-full flex flex-col gap-4 mt-2">
        <input className="border border-slate-300 rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-[#1d4ed8]" id="signup-name" type="text" placeholder="Full Name" />
        <input className="border border-slate-300 rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-[#1d4ed8]" id="signup-email" type="email" placeholder="Email" />
        <input className="border border-slate-300 rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-[#1d4ed8]" id="signup-password" type="password" placeholder="Password" />
        <Button type="submit" id="signup-submit" className="bg-[#1d4ed8] text-white font-bold w-full hover:bg-blue-700 mt-2">Create Account</Button>
      </form>
      <p className="mt-6 text-slate-600" style={{ fontFamily: 'Roboto, sans-serif' }}>
        Already have an account?{' '}
        <Link className="text-[#1d4ed8] underline hover:text-blue-700" to="/login">Login</Link>
      </p>
    </motion.div>
  </div>
);
