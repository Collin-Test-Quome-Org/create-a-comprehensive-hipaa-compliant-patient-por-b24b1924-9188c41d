import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, Clock, PlusCircle, User } from 'lucide-react';
import { Link } from 'react-router-dom';

// Fake data
const appointments = [
  {
    id: 'apt-1',
    provider: 'Dr. Nguyen',
    specialty: 'Family Medicine',
    date: '2024-07-17',
    time: '10:00am - 10:30am',
    type: 'Virtual',
    status: 'Confirmed',
  },
  {
    id: 'apt-2',
    provider: 'Dr. Patel',
    specialty: 'Cardiology',
    date: '2024-08-05',
    time: '2:00pm - 2:45pm',
    type: 'In-Person',
    status: 'Requested',
  },
];

export const Appointments = () => {
  return (
    <main className="max-w-4xl mx-auto py-10 px-4">
      <Card className="shadow-lg border-0 mb-8">
        <CardHeader className="flex flex-row items-center gap-3 pb-4 border-b">
          <Calendar className="text-[#1d4ed8]" />
          <CardTitle className="text-2xl font-bold" style={{ fontFamily: 'Montserrat, sans-serif' }}>Appointments</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center mb-6 mt-2">
            <Button asChild className="bg-[#1d4ed8] text-white hover:bg-blue-700" id="appointments-new">
              <Link to="/appointments/new"><PlusCircle className="mr-2" />New Appointment</Link>
            </Button>
          </div>
          {appointments.length === 0 ? (
            <div className="py-8 text-center text-slate-500 text-lg">No appointments found.</div>
          ) : (
            <div className="divide-y">
              {appointments.map(apt => (
                <div key={apt.id} className="flex items-center gap-4 py-5 group">
                  <User className="text-[#1d4ed8]" />
                  <div className="flex-1">
                    <div className="font-semibold text-lg">{apt.provider} <span className="text-slate-400">({apt.specialty})</span></div>
                    <div className="text-slate-500 text-sm flex items-center gap-2">
                      <Calendar size={16} className="mr-1" /> {apt.date}
                      <Clock size={16} className="ml-3 mr-1" /> {apt.time}
                      <span className="ml-3">{apt.type}</span>
                    </div>
                  </div>
                  <span className={
                    apt.status === 'Confirmed' ? 'text-green-600' : 'text-yellow-500'
                  }>{apt.status}</span>
                  <Button asChild variant="outline" className="ml-2" id={`appointments-details-${apt.id}`}>
                    <Link to={`/appointments/${apt.id}`}>Details</Link>
                  </Button>
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    </main>
  );
};
