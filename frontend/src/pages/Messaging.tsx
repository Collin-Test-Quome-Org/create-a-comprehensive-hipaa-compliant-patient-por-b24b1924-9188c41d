import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MessageCircle, Plus, Lock } from 'lucide-react';
import { Link } from 'react-router-dom';

const conversations = [
  {
    id: 'conv-1',
    provider: 'Dr. Patel',
    subject: 'Lab Results Follow Up',
    lastMessage: 'Thank you for the update! I have some questions.',
    unread: true,
    lastDate: 'Jul 15, 2024',
  },
  {
    id: 'conv-2',
    provider: 'Dr. Nguyen',
    subject: 'Prescription Refill',
    lastMessage: 'Your refill has been approved and sent to your pharmacy.',
    unread: false,
    lastDate: 'Jul 10, 2024',
  },
];

export const Messaging = () => {
  return (
    <main className="max-w-3xl mx-auto py-10 px-4">
      <Card className="shadow-lg border-0 mb-8">
        <CardHeader className="flex flex-row items-center gap-2 pb-4 border-b">
          <MessageCircle className="text-[#1d4ed8]" />
          <CardTitle className="text-2xl font-bold" style={{ fontFamily: 'Montserrat, sans-serif' }}>Secure Messaging</CardTitle>
          <Lock className="ml-2 text-green-500" size={18} />
        </CardHeader>
        <CardContent>
          <div className="flex items-center mb-6 mt-2">
            <Button asChild className="bg-[#1d4ed8] text-white hover:bg-blue-700" id="messaging-new">
              <Link to="/messaging/new"><Plus className="mr-1" />New Message</Link>
            </Button>
          </div>
          {conversations.length === 0 ? (
            <div className="py-8 text-center text-slate-500 text-lg">No conversations found.</div>
          ) : (
            <div className="divide-y">
              {conversations.map(conv => (
                <div key={conv.id} className={`flex items-center gap-4 py-5 group ${conv.unread ? 'bg-blue-50' : ''}`}>
                  <MessageCircle className="text-[#1d4ed8]" />
                  <div className="flex-1">
                    <div className="font-semibold text-lg flex items-center gap-2">
                      {conv.provider}
                      {conv.unread && <span className="rounded-full bg-[#1d4ed8] text-white px-2 py-0.5 text-xs font-bold ml-2">New</span>}
                    </div>
                    <div className="text-slate-500 text-sm">{conv.subject}</div>
                    <div className="text-slate-500 text-xs mt-1">{conv.lastMessage}</div>
                  </div>
                  <span className="text-xs text-slate-400 mr-3">{conv.lastDate}</span>
                  <Button asChild variant="outline" className="ml-2" id={`messaging-details-${conv.id}`}>
                    <Link to={`/messaging/${conv.id}`}>View</Link>
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
