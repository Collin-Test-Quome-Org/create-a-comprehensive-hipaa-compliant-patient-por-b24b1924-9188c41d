import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

export const ContactPage = () => (
  <div className="min-h-screen bg-[#f9fafe] pt-20 px-6 flex flex-col items-center">
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      className="max-w-xl mx-auto bg-white rounded-2xl shadow-xl p-10 mt-8 text-center"
    >
      <h1 className="text-4xl font-bold text-[#1d4ed8] mb-3" style={{ fontFamily: 'Montserrat, sans-serif' }}>Contact Us</h1>
      <p className="text-lg text-slate-700 mb-4" style={{ fontFamily: 'Roboto, sans-serif' }}>
        Reach out to our ShieldLink Health care team. We’re here for you — securely, supportively, and always with a smile.
      </p>
      <form className="flex flex-col gap-4 items-center mt-4">
        <input className="border border-slate-300 rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-[#1d4ed8]" id="contact-name" type="text" placeholder="Your Name" />
        <input className="border border-slate-300 rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-[#1d4ed8]" id="contact-email" type="email" placeholder="Your Email" />
        <textarea className="border border-slate-300 rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-[#1d4ed8] resize-none" id="contact-message" rows={4} placeholder="How can we help you?" />
        <Button type="submit" id="contact-submit" className="bg-[#1d4ed8] text-white font-bold w-full hover:bg-blue-700 mt-2">Send Message</Button>
      </form>
    </motion.div>
  </div>
);
