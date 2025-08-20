import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Bell, Calendar, FileText, ClipboardList, MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export const Dashboard = () => {
  // Fake notifications and stats
  const notifications = [
    { id: 1, type: 'Appointment', text: 'Upcoming appointment with Dr. Nguyen on Jul 17, 2024', icon: <Calendar className="text-[#1d4ed8]" size={18} /> },
    { id: 2, type: 'Lab Result', text: 'New lab result available: CBC Panel', icon: <FileText className="text-[#1d4ed8]" size={18} /> },
    { id: 3, type: 'Message', text: 'New secure message from Dr. Patel', icon: <MessageCircle className="text-[#1d4ed8]" size={18} /> },
  ];

  return (
    <main className="max-w-7xl mx-auto px-4 py-8">
      <section className="mb-8 flex flex-col md:flex-row gap-6">
        <motion.div
          className="flex-1 bg-white rounded-xl shadow-lg overflow-hidden relative"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="bg-gradient-to-r from-[#1d4ed8] to-[#94a3b8] px-8 py-8 text-white">
            <h1 className="text-3xl font-bold mb-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              Welcome back to ShieldLink Health!
            </h1>
            <p className="text-lg font-medium mb-3">Your health, securely in your hands.</p>
            <div className="flex flex-wrap gap-2 mt-4">
              <Button asChild className="bg-white text-[#1d4ed8] hover:bg-slate-100" id="dashboard-medical-records">
                <Link to="/medical-records">View Medical Records</Link>
              </Button>
              <Button asChild variant="outline" className="border-white text-white hover:bg-white/10" id="dashboard-appointments">
                <Link to="/appointments">Manage Appointments</Link>
              </Button>
              <Button asChild variant="ghost" className="text-white hover:bg-white/10" id="dashboard-messaging">
                <Link to="/messaging">Secure Messaging</Link>
              </Button>
            </div>
          </div>
        </motion.div>
        <div className="flex flex-col gap-4 md:w-80">
          <Card className="h-full shadow border-0">
            <CardHeader className="pb-2 flex flex-row items-center gap-2">
              <Bell className="text-[#1d4ed8]" />
              <CardTitle className="text-base font-bold" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                Notifications
              </CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col gap-2">
              {notifications.map(n => (
                <motion.div
                  key={n.id}
                  className="flex items-start gap-2 rounded-md px-2 py-1 hover:bg-slate-50 cursor-pointer"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: n.id * 0.12 }}
                >
                  <div>{n.icon}</div>
                  <div className="text-sm text-slate-700">{n.text}</div>
                </motion.div>
              ))}
              <Button asChild variant="link" className="p-0 text-[#1d4ed8] mt-2 self-end" id="dashboard-all-notifications">
                <Link to="/notifications">View all</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
        <motion.div
          className="bg-white rounded-xl shadow px-8 py-8 flex flex-col gap-3 border-t-4 border-[#1d4ed8]"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <div className="flex items-center gap-3 mb-2">
            <ClipboardList className="text-[#1d4ed8]" />
            <h2 className="text-xl font-bold" style={{ fontFamily: 'Montserrat, sans-serif' }}>Upcoming Appointments</h2>
          </div>
          <div>
            <div className="flex flex-col gap-1">
              <span className="text-base font-medium">Jul 17, 2024 - Dr. Nguyen - Family Medicine</span>
              <span className="text-slate-500 text-sm">10:00am - 10:30am | Virtual Visit</span>
              <Button asChild variant="outline" className="mt-2 w-fit" id="dashboard-appointment-details">
                <Link to="/appointments/1">View Details</Link>
              </Button>
            </div>
          </div>
          <Button asChild variant="secondary" className="mt-4 w-fit" id="dashboard-schedule-appointment">
            <Link to="/appointments/new">Schedule New Appointment</Link>
          </Button>
        </motion.div>
        <motion.div
          className="bg-white rounded-xl shadow px-8 py-8 flex flex-col gap-3 border-t-4 border-[#1d4ed8]"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <div className="flex items-center gap-3 mb-2">
            <FileText className="text-[#1d4ed8]" />
            <h2 className="text-xl font-bold" style={{ fontFamily: 'Montserrat, sans-serif' }}>Recent Medical Records</h2>
          </div>
          <div>
            <span className="text-base font-medium">CBC Panel - Jul 13, 2024</span>
            <span className="block text-slate-500 text-sm">Status: Ready</span>
            <Button asChild variant="outline" className="mt-2 w-fit" id="dashboard-view-record">
              <Link to="/medical-records">View Record</Link>
            </Button>
          </div>
          <Button asChild variant="secondary" className="mt-4 w-fit" id="dashboard-all-records">
            <Link to="/medical-records">All Records</Link>
          </Button>
        </motion.div>
      </section>
    </main>
  );
};
