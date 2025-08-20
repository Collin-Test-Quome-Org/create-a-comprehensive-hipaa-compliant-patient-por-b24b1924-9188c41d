import { motion } from 'framer-motion';

export const AboutPage = () => (
  <div className="min-h-screen bg-[#f9fafe] pt-20 px-6 flex flex-col items-center">
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      className="max-w-3xl mx-auto bg-white rounded-2xl shadow-xl p-10 mt-8 text-center"
    >
      <h1 className="text-4xl font-bold text-[#1d4ed8] mb-3" style={{ fontFamily: 'Montserrat, sans-serif' }}>About ShieldLink Health</h1>
      <p className="text-xl text-slate-700 mb-6" style={{ fontFamily: 'Roboto, sans-serif' }}>
        We’re ShieldLink Health — your digital wellness concierge. Our mission is to provide patients with a secure, seamless, and empowering communication platform for their healthcare journey. Rooted in trust and innovation, we believe in giving you full control, clarity, and confidence over every message and meeting.
      </p>
      <div className="flex flex-col md:flex-row gap-6 justify-center mt-8">
        <div className="flex-1 bg-[#1d4ed8]/10 rounded-lg p-6">
          <h3 className="font-semibold text-lg text-[#1d4ed8] mb-2">Our Values</h3>
          <ul className="text-left text-slate-700 space-y-1" style={{ fontFamily: 'Roboto, sans-serif' }}>
            <li>• Privacy-first design</li>
            <li>• Human-centered care</li>
            <li>• Effortless experience</li>
            <li>• Transparent technology</li>
          </ul>
        </div>
        <div className="flex-1 bg-[#1d4ed8]/10 rounded-lg p-6">
          <h3 className="font-semibold text-lg text-[#1d4ed8] mb-2">Who We Serve</h3>
          <ul className="text-left text-slate-700 space-y-1" style={{ fontFamily: 'Roboto, sans-serif' }}>
            <li>• Patients who value privacy and empowerment</li>
            <li>• Families seeking clarity and peace of mind</li>
            <li>• Providers looking for secure, simple ways to connect</li>
          </ul>
        </div>
      </div>
    </motion.div>
  </div>
);
