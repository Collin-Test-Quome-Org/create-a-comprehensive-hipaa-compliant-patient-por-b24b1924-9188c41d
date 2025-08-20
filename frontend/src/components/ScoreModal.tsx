import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { X } from 'lucide-react';
import { FC } from 'react';

interface ScoreModalProps {
  isOpen: boolean;
  onClose: () => void;
  score: number;
  highScore: number;
  onRestart: () => void;
}

export const ScoreModal: FC<ScoreModalProps> = ({ isOpen, onClose, score, highScore, onRestart }) => {
  if (!isOpen) return null;

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="bg-white rounded-xl shadow-xl p-8 max-w-sm w-full relative"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
      >
        <button id="score-modal-close" onClick={onClose} className="absolute right-4 top-4 text-gray-500 hover:text-gray-800">
          <X size={20} />
        </button>
        <h2 className="text-2xl font-bold text-center mb-4 text-blue-700" style={{ fontFamily: 'Montserrat, sans-serif' }}>Game Over</h2>
        <div className="text-center mb-6">
          <p className="text-lg">Your score:</p>
          <span className="text-4xl font-extrabold text-blue-600">{score}</span>
          <p className="mt-2 text-gray-500">High score: <span className="font-semibold text-blue-500">{highScore}</span></p>
        </div>
        <div className="flex flex-col gap-3">
          <Button id="restart-btn" onClick={onRestart} className="w-full">Restart Game</Button>
          <Button variant="outline" id="close-btn" onClick={onClose} className="w-full">Close</Button>
        </div>
      </motion.div>
    </motion.div>
  );
};
