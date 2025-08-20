import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { FileText, Download, Search } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const records = [
  {
    id: 'rec-1',
    type: 'Lab Result',
    name: 'CBC Panel',
    date: '2024-07-13',
    status: 'Ready',
    fileUrl: '/mock-files/cbc-panel.pdf',
  },
  {
    id: 'rec-2',
    type: 'Visit Summary',
    name: 'Annual Physical',
    date: '2024-06-02',
    status: 'Ready',
    fileUrl: '/mock-files/annual-physical.pdf',
  },
];

export const MedicalRecords = () => {
  const [search, setSearch] = useState('');
  const filtered = records.filter(r =>
    r.name.toLowerCase().includes(search.toLowerCase()) || r.type.toLowerCase().includes(search.toLowerCase())
  );
  return (
    <main className="max-w-3xl mx-auto py-10 px-4">
      <Card className="shadow-lg border-0">
        <CardHeader className="flex flex-row items-center gap-3 pb-4 border-b">
          <FileText className="text-[#1d4ed8]" />
          <CardTitle className="text-2xl font-bold" style={{ fontFamily: 'Montserrat, sans-serif' }}>Medical Records</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center gap-2 mb-6 mt-2">
            <Input
              id="records-search"
              type="search"
              value={search}
              onChange={e => setSearch(e.target.value)}
              placeholder="Search records..."
              className="w-full md:w-72"
            />
            <Search className="text-slate-400" />
            <Button asChild variant="secondary" className="ml-auto" id="medical-records-upload">
              <Link to="/medical-records/upload">Upload Document</Link>
            </Button>
          </div>
          <div className="divide-y">
            {filtered.length === 0 ? (
              <div className="py-8 text-center text-slate-500 text-lg">No records found. Try a different search.</div>
            ) : (
              filtered.map(rec => (
                <div key={rec.id} className="flex items-center gap-4 py-5 group">
                  <FileText className="text-[#1d4ed8]" />
                  <div className="flex-1">
                    <div className="font-semibold text-lg">{rec.name}</div>
                    <div className="text-slate-500 text-sm">{rec.type} &middot; {rec.date}</div>
                  </div>
                  <span className="text-sm font-medium text-green-600 mr-2">{rec.status}</span>
                  <Button asChild size="icon" variant="ghost" className="group-hover:bg-slate-100" id={`records-download-${rec.id}`}
                    aria-label={`Download ${rec.name}`}>
                    <a href={rec.fileUrl} target="_blank" rel="noopener noreferrer"><Download /></a>
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
