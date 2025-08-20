import { motion } from 'framer-motion';

export const AboutPage = () => (
  <main className="bg-[#f9fafb] min-h-screen w-full pt-8 pb-16">
    <div className="max-w-3xl mx-auto px-4">
      <motion.h2
        className="text-3xl font-bold mb-4 text-[#1d4ed8]"
        style={{ fontFamily: 'Montserrat, sans-serif' }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        About ShieldLink Health
      </motion.h2>
      <motion.p
        className="text-lg text-slate-700 mb-6"
        style={{ fontFamily: 'Roboto, sans-serif' }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        At ShieldLink Health, we believe your well-being deserves the strongest protection and the most intuitive tools. Built for patients, loved by providers, our portal delivers seamless access to medical records, appointments, prescriptions, and secure messaging—all with unwavering HIPAA compliance. Our friendly digital shield stands guard, so you can focus on what matters: your health.
      </motion.p>
      <motion.ul
        className="list-disc ml-6 text-slate-600 mb-5"
        initial="hidden"
        animate="visible"
        variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
      >
        <motion.li className="mb-2" variants={{ hidden: { opacity: 0, x: 20 }, visible: { opacity: 1, x: 0 } }}>
          End-to-end encrypted communication for peace of mind
        </motion.li>
        <motion.li className="mb-2" variants={{ hidden: { opacity: 0, x: 20 }, visible: { opacity: 1, x: 0 } }}>
          Schedule, reschedule, and manage appointments with ease
        </motion.li>
        <motion.li className="mb-2" variants={{ hidden: { opacity: 0, x: 20 }, visible: { opacity: 1, x: 0 } }}>
          Effortless document uploads and prescription refills
        </motion.li>
        <motion.li className="mb-2" variants={{ hidden: { opacity: 0, x: 20 }, visible: { opacity: 1, x: 0 } }}>
          Real-time notifications for every important update
        </motion.li>
      </motion.ul>
      <motion.p
        className="text-base text-slate-500 font-medium"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        ShieldLink Health: Strong. Simple. Secure.
      </motion.p>
    </div>
  </main>
);
