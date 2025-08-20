import { ShieldCheck, MessageCircle, CalendarCheck2, FileText } from 'lucide-react';
import { motion } from 'framer-motion';

const stats = [
  {
    icon: ShieldCheck,
    label: 'Protected Health Records',
    value: '2,800+',
    color: 'bg-blue-100 text-blue-700',
  },
  {
    icon: MessageCircle,
    label: 'Secure Messages Sent',
    value: '19,500+',
    color: 'bg-slate-100 text-blue-700',
  },
  {
    icon: CalendarCheck2,
    label: 'Appointments Booked',
    value: '4,600+',
    color: 'bg-blue-50 text-blue-700',
  },
  {
    icon: FileText,
    label: 'Documents Shared',
    value: '3,200+',
    color: 'bg-slate-50 text-blue-700',
  },
];

export function StatsCards() {
  return (
    <div className="w-full max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 py-12">
      {stats.map((stat, i) => (
        <motion.div
          key={stat.label}
          className={`rounded-xl p-6 flex flex-col items-center shadow-lg ${stat.color}`}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.12, duration: 0.6 }}
        >
          <stat.icon size={36} className="mb-2" />
          <span className="text-3xl font-bold font-montserrat">{stat.value}</span>
          <span className="text-sm font-roboto mt-1 text-slate-600 text-center">{stat.label}</span>
        </motion.div>
      ))}
    </div>
  );
}
