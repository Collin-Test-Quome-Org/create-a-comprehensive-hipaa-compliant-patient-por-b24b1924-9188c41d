import { Trophy, User } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { FC } from 'react';

interface LeaderboardEntry {
  name: string;
  score: number;
}

interface LeaderboardProps {
  entries: LeaderboardEntry[];
}

export const Leaderboard: FC<LeaderboardProps> = ({ entries }) => {
  return (
    <Card className="w-full max-w-md mx-auto mt-6 shadow-lg">
      <CardHeader className="flex flex-row items-center gap-2 pb-2">
        <Trophy className="text-yellow-500" size={28} />
        <CardTitle className="text-blue-700 font-bold" style={{ fontFamily: 'Montserrat, sans-serif' }}>
          Top Scores
        </CardTitle>
      </CardHeader>
      <CardContent>
        <ol className="divide-y divide-gray-200">
          {entries.map((entry, i) => (
            <li key={i} className="flex items-center py-2">
              <span className={`mr-3 font-bold text-lg ${i === 0 ? 'text-yellow-600' : i === 1 ? 'text-gray-500' : i === 2 ? 'text-orange-500' : 'text-gray-700'}`}>{i + 1}</span>
              <User className="text-blue-400 mr-2" size={20} />
              <span className="flex-1 font-medium">{entry.name}</span>
              <span className="ml-4 font-semibold text-blue-700">{entry.score}</span>
            </li>
          ))}
        </ol>
      </CardContent>
    </Card>
  );
};
