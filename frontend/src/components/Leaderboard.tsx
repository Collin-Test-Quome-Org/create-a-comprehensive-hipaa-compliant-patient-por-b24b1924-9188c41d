import { Card, CardHeader, CardContent, CardTitle } from '@/components/ui/card';
import { Award } from 'lucide-react';
import { motion } from 'framer-motion';
import { FC } from 'react';

const fakeLeaderboard = [
  { name: 'Taylor M.', score: 38 },
  { name: 'Jesse C.', score: 32 },
  { name: 'Alex G.', score: 28 },
  { name: 'Jordan S.', score: 27 },
  { name: 'Morgan P.', score: 24 },
];

export const Leaderboard: FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full"
    >
      <Card className="bg-white/90 shadow-lg rounded-xl">
        <CardHeader className="flex flex-row items-center gap-2 pb-2">
          <Award className="text-yellow-500" />
          <CardTitle className="text-blue-800 tracking-tight font-bold text-lg">Leaderboard</CardTitle>
        </CardHeader>
        <CardContent>
          <ol className="space-y-2">
            {fakeLeaderboard.map((entry, idx) => (
              <li key={idx} className="flex items-center gap-3">
                <span className={`rounded-full w-7 h-7 flex items-center justify-center font-bold text-base ${
                  idx === 0 ? 'bg-yellow-100 text-yellow-700' : idx === 1 ? 'bg-gray-200 text-gray-700' : idx === 2 ? 'bg-amber-200 text-amber-800' : 'bg-slate-100 text-slate-600'
                }`}>{idx + 1}</span>
                <span className="flex-1 font-medium text-slate-700">{entry.name}</span>
                <span className="font-semibold text-blue-700">{entry.score}</span>
              </li>
            ))}
          </ol>
        </CardContent>
      </Card>
    </motion.div>
  );
};
