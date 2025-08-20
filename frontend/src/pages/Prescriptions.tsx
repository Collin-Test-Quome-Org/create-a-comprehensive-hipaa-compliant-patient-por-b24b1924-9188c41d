import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Pill, RefreshCcw, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const prescriptions = [
  {
    id: 'rx-1',
    name: 'Atorvastatin 20mg',
    prescribedBy: 'Dr. Patel',
    lastFilled: '2024-06-28',
    refillsLeft: 2,
  },
  {
    id: 'rx-2',
    name: 'Lisinopril 10mg',
    prescribedBy: 'Dr. Nguyen',
    lastFilled: '2024-07-03',
    refillsLeft: 0,
  },
];

export const Prescriptions = () => {
  return (
    <main className="max-w-3xl mx-auto py-10 px-4">
      <Card className="shadow-lg border-0">
        <CardHeader className="flex flex-row items-center gap-3 pb-4 border-b">
          <Pill className="text-[#1d4ed8]" />
          <CardTitle className="text-2xl font-bold" style={{ fontFamily: 'Montserrat, sans-serif' }}>Prescriptions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="divide-y">
            {prescriptions.length === 0 ? (
              <div className="py-8 text-center text-slate-500 text-lg">No prescriptions found.</div>
            ) : (
              prescriptions.map(rx => (
                <div key={rx.id} className="flex items-center gap-4 py-5 group">
                  <Pill className="text-[#1d4ed8]" />
                  <div className="flex-1">
                    <div className="font-semibold text-lg">{rx.name}</div>
                    <div className="text-slate-500 text-sm">Prescribed by {rx.prescribedBy}</div>
                    <div className="text-slate-500 text-xs">Last filled: {rx.lastFilled}</div>
                  </div>
                  <span className="text-sm text-slate-700 mr-3">Refills left: <strong>{rx.refillsLeft}</strong></span>
                  <Button asChild size="icon" variant="outline" className="group-hover:bg-blue-50 mr-2" id={`prescriptions-refill-${rx.id}`}
                    disabled={rx.refillsLeft === 0}
                  >
                    <Link to="#">
                      <RefreshCcw />
                    </Link>
                  </Button>
                  <Button asChild variant="ghost" size="icon" className="text-[#1d4ed8]" id={`prescriptions-details-${rx.id}`}>
                    <Link to={`/prescriptions/${rx.id}`}>
                      <ChevronRight />
                    </Link>
                  </Button>
                </div>
              ))
            )}
          </div>
        </CardContent>
      </Card>
    </main>
  );
};
