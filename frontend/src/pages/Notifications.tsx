import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Bell, CheckCircle, Calendar, FileText, MessageCircle } from 'lucide-react';

const notifications = [
  { id: 1, type: 'Appointment', text: 'Upcoming appointment with Dr. Nguyen on Jul 17, 2024', icon: <Calendar className="text-[#1d4ed8]" size={20} /> },
  { id: 2, type: 'Lab Result', text: 'New lab result available: CBC Panel', icon: <FileText className="text-[#1d4ed8]" size={20} /> },
  { id: 3, type: 'Message', text: 'New secure message from Dr. Patel', icon: <MessageCircle className="text-[#1d4ed8]" size={20} /> },
  { id: 4, type: 'General', text: 'Profile updated successfully', icon: <CheckCircle className="text-green-600" size={20} /> },
];

export const Notifications = () => {
  return (
    <main className="max-w-2xl mx-auto py-10 px-4">
      <Card className="shadow-lg border-0">
        <CardHeader className="flex flex-row items-center gap-3 pb-4 border-b">
          <Bell className="text-[#1d4ed8]" />
          <CardTitle className="text-2xl font-bold" style={{ fontFamily: 'Montserrat, sans-serif' }}>Notifications</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="divide-y">
            {notifications.length === 0 ? (
              <div className="py-8 text-center text-slate-500 text-lg">No notifications.</div>
            ) : (
              notifications.map(n => (
                <div key={n.id} className="flex items-center gap-4 py-5 group">
                  <div>{n.icon}</div>
                  <div className="flex-1">
                    <div className="font-medium text-base">{n.text}</div>
                    <div className="text-slate-400 text-xs">{n.type}</div>
                  </div>
                </div>
              ))
            )}
          </div>
        </CardContent>
      </Card>
    </main>
  );
};
