import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { X, Trophy } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader } from '@/components/ui/dialog';
import { FC } from 'react';

interface ScoreModalProps {
  open: boolean;
  score: number;
  onClose: () => void;
  onPlayAgain: () => void;
  highScore?: number;
}

export const ScoreModal: FC<ScoreModalProps> = ({ open, score, highScore, onClose, onPlayAgain }) => {
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-xs px-0 py-0 rounded-2xl">
        <Card className="shadow-xl border-0 bg-gradient-to-br from-blue-50 to-slate-100">
          <CardHeader className="flex flex-row items-center gap-2 justify-between">
            <CardTitle className="flex items-center gap-2 text-blue-700 text-2xl font-bold tracking-tight">
              <Trophy className="text-yellow-500" size={32} />
              Game Over
            </CardTitle>
            <Button variant="ghost" size="icon" aria-label="Close" id="score-modal-close" onClick={onClose}>
              <X />
            </Button>
          </CardHeader>
          <CardContent className="flex flex-col gap-4 items-center pb-6">
            <motion.div
              initial={{ scale: 0.6 }}
              animate={{ scale: 1 }}
              transition={{ type: 'spring', stiffness: 240 }}
              className="text-5xl font-bold text-blue-800 mt-2"
            >
              {score}
            </motion.div>
            <div className="text-base text-slate-600">Your Score</div>
            {highScore !== undefined && (
              <div className="text-xs text-slate-500">High Score: <span className="font-semibold text-blue-700">{highScore}</span></div>
            )}
            <div className="flex gap-2 mt-4">
              <Button id="play-again-btn" variant="default" onClick={onPlayAgain}>
                Play Again
              </Button>
              <Button id="score-modal-close-2" variant="secondary" onClick={onClose}>
                Close
              </Button>
            </div>
          </CardContent>
        </Card>
      </DialogContent>
    </Dialog>
  );
};
