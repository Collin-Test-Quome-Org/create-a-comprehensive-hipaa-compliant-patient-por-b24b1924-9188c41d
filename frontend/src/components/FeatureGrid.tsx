import { FilePlus, CalendarDays, MessageCircle, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
  {
    icon: ShieldCheck,
    title: 'Military-Grade Security',
    description: 'Your health data stays safe with end-to-end encryption and advanced access controls.',
  },
  {
    icon: MessageCircle,
    title: 'Instant Messaging',
    description: 'Chat securely with your care team and get fast responses, all within the platform.',
  },
  {
    icon: CalendarDays,
    title: 'Appointment Scheduling',
    description: 'Book, view, and manage appointments with just a few clicks — no phone calls required.',
  },
  {
    icon: FilePlus,
    title: 'Easy Uploads',
    description: 'Upload prescriptions & medical records with drag-and-drop simplicity.',
  },
];

export function FeatureGrid() {
  return (
    <section className="w-full max-w-6xl mx-auto py-20 px-4">
      <h2 className="text-3xl font-bold font-montserrat text-center text-blue-700 mb-12">Why Choose ShieldRx?</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {features.map((feature, i) => (
          <motion.div
            key={feature.title}
            className="flex items-start gap-5 bg-white rounded-xl shadow-lg p-8 hover:scale-[1.02] transition-transform"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15, duration: 0.7 }}
          >
            <div className="flex-shrink-0 bg-blue-100 text-blue-700 rounded-full p-3">
              <feature.icon size={32} />
            </div>
            <div>
              <h3 className="font-montserrat text-xl font-semibold text-blue-900 mb-1">{feature.title}</h3>
              <p className="font-roboto text-slate-600">{feature.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
