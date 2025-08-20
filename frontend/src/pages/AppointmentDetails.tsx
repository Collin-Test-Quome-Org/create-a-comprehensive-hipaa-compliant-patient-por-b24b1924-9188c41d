import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, Clock, User, Laptop2, CheckCircle, FileText } from 'lucide-react';
import { useParams, Link } from 'react-router-dom';

// Fake appointments data for details
const appointments = [
  {
    id: 'apt-1',
    provider: 'Dr. Nguyen',
    specialty: 'Family Medicine',
    date: '2024-07-17',
    time: '10:00am - 10:30am',
    type: 'Virtual',
    status: 'Confirmed',
    notes: 'Annual wellness check. Please have your recent lab results ready for review.',
    documents: [
      { name: 'CBC Panel.pdf', url: '/mock-files/cbc-panel.pdf' }
    ]
  },
  {
    id: 'apt-2',
    provider: 'Dr. Patel',
    specialty: 'Cardiology',
    date: '2024-08-05',
    time: '2:00pm - 2:45pm',
    type: 'In-Person',
    status: 'Requested',
    notes: '',
    documents: []
  },
];

export const AppointmentDetails = () => {
  const { id } = useParams();
  const apt = appointments.find(a => a.id === id);

  if (!apt) {
    return (
      <main className="max-w-2xl mx-auto py-10 px-4">
        <Card className="shadow-lg border-0">
          <CardHeader className="pb-4 border-b">
            <CardTitle className="text-2xl font-bold" style={{ fontFamily: 'Montserrat, sans-serif' }}>Appointment Not Found</CardTitle>
          </CardHeader>
          <CardContent>
            <Link to="/appointments" className="text-[#1d4ed8] hover:underline">Back to Appointments</Link>
          </CardContent>
        </Card>
      </main>
    );
  }

  return (
    <main className="max-w-2xl mx-auto py-10 px-4">
      <Card className="shadow-lg border-0">
        <CardHeader className="flex flex-row items-center gap-3 pb-4 border-b">
          <Calendar className="text-[#1d4ed8]" />
          <CardTitle className="text-2xl font-bold" style={{ fontFamily: 'Montserrat, sans-serif' }}>Appointment Details</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col gap-6 mt-2">
          <div className="flex items-center gap-4">
            <User className="text-[#1d4ed8]" />
            <span className="font-semibold text-lg">{apt.provider} <span className="text-slate-400">({apt.specialty})</span></span>
          </div>
          <div className="flex items-center gap-4">
            <Calendar size={20} className="text-[#1d4ed8]" />
            <span>{apt.date}</span>
            <Clock size={20} className="text-[#1d4ed8] ml-4" />
            <span>{apt.time}</span>
            <Laptop2 size={20} className="text-[#1d4ed8] ml-4" />
            <span>{apt.type}</span>
          </div>
          <div className="flex items-center gap-3">
            <CheckCircle className={apt.status === 'Confirmed' ? 'text-green-600' : 'text-yellow-500'} />
            <span className={apt.status === 'Confirmed' ? 'text-green-600' : 'text-yellow-500'}>{apt.status}</span>
          </div>
          {apt.notes && (
            <div className="bg-blue-50 rounded p-4 text-slate-700 text-base">
              <span className="font-semibold">Provider Notes:</span> {apt.notes}
            </div>
          )}
          {apt.documents.length > 0 && (
            <div>
              <div className="font-semibold text-slate-700 mb-1 flex items-center gap-2"><FileText className="text-[#1d4ed8]" size={18} />Documents</div>
              <ul>
                {apt.documents.map(doc => (
                  <li key={doc.url}>
                    <a href={doc.url} target="_blank" className="text-[#1d4ed8] hover:underline flex items-center gap-1"><FileText size={15} />{doc.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="flex gap-2 mt-4">
            <Button asChild variant="outline" id="appointment-back">
              <Link to="/appointments">Back</Link>
            </Button>
            <Button asChild variant="secondary" id="appointment-message-provider">
              <Link to="/messaging/new">Message Provider</Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </main>
  );
}
