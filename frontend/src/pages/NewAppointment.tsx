import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Calendar, User, Laptop2 } from 'lucide-react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const providers = [
  { id: 'prov-1', name: 'Dr. Nguyen', specialty: 'Family Medicine' },
  { id: 'prov-2', name: 'Dr. Patel', specialty: 'Cardiology' },
];

export const NewAppointment = () => {
  const [form, setForm] = useState({ provider: '', date: '', time: '', type: 'Virtual' });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const onChange = (e: React.ChangeEvent<HTMLInputElement|HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError('');
  };
  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.provider || !form.date || !form.time || !form.type) {
      setError('Please fill in all required fields.');
      return;
    }
    // Mock: success
    navigate('/appointments');
  };

  return (
    <main className="max-w-xl mx-auto py-10 px-4">
      <Card className="shadow-lg border-0">
        <CardHeader className="flex flex-row items-center gap-3 pb-4 border-b">
          <Calendar className="text-[#1d4ed8]" />
          <CardTitle className="text-2xl font-bold" style={{ fontFamily: 'Montserrat, sans-serif' }}>Request New Appointment</CardTitle>
        </CardHeader>
        <CardContent>
          <form className="flex flex-col gap-5 mt-4" onSubmit={onSubmit} aria-label="New Appointment Form">
            <div>
              <label htmlFor="appointment-provider" className="text-sm font-medium text-slate-700 mb-1 block">Provider</label>
              <select
                id="appointment-provider"
                name="provider"
                value={form.provider}
                onChange={onChange}
                className="block w-full border rounded px-3 py-2 text-base text-slate-800 focus:ring-2 focus:ring-[#1d4ed8]"
                required
              >
                <option value="">Select provider</option>
                {providers.map(p => (
                  <option key={p.id} value={p.name}>{p.name} ({p.specialty})</option>
                ))}
              </select>
            </div>
            <div className="flex gap-4">
              <div className="flex-1">
                <label htmlFor="appointment-date" className="text-sm font-medium text-slate-700 mb-1 block">Date</label>
                <Input
                  id="appointment-date"
                  name="date"
                  type="date"
                  value={form.date}
                  onChange={onChange}
                  required
                />
              </div>
              <div className="flex-1">
                <label htmlFor="appointment-time" className="text-sm font-medium text-slate-700 mb-1 block">Time</label>
                <Input
                  id="appointment-time"
                  name="time"
                  type="time"
                  value={form.time}
                  onChange={onChange}
                  required
                />
              </div>
            </div>
            <div>
              <label htmlFor="appointment-type" className="text-sm font-medium text-slate-700 mb-1 block">Type</label>
              <select
                id="appointment-type"
                name="type"
                value={form.type}
                onChange={onChange}
                className="block w-full border rounded px-3 py-2 text-base text-slate-800 focus:ring-2 focus:ring-[#1d4ed8]"
                required
              >
                <option value="Virtual">Virtual Visit</option>
                <option value="In-Person">In-Person</option>
              </select>
            </div>
            {error && <div className="text-red-600 text-sm font-medium">{error}</div>}
            <Button type="submit" className="bg-[#1d4ed8] text-white mt-2" id="new-appointment-submit">
              Request Appointment
            </Button>
          </form>
        </CardContent>
      </Card>
    </main>
  );
}
