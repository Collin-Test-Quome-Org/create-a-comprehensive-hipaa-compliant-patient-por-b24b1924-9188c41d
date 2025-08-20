import { useState } from 'react';
import { GameBoard } from '@/components/GameBoard';
import { ScoreModal } from '@/components/ScoreModal';
import { Leaderboard } from '@/components/Leaderboard';
import { motion } from 'framer-motion';

export const Game = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [lastScore, setLastScore] = useState(0);
  const [highScore, setHighScore] = useState(() => {
    const s = localStorage.getItem('highscore');
    return s ? parseInt(s) : 0;
  });

  const handleGameOver = (score: number) => {
    setLastScore(score);
    setModalOpen(true);
    if (score > highScore) {
      setHighScore(score);
      localStorage.setItem('highscore', score.toString());
    }
  };

  const handlePlayAgain = () => {
    setModalOpen(false);
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 100);
  };

  return (
    <div className="flex flex-col min-h-[calc(100vh-80px)] bg-gradient-to-br from-blue-50 to-slate-100">
      <motion.header
        initial={{ opacity: 0, y: -24 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full pt-12 pb-8 flex flex-col items-center"
      >
        <h1 className="font-montserrat font-bold text-3xl md:text-4xl text-blue-900 tracking-tight mb-2">Health Hero Challenge</h1>
        <p className="font-roboto text-base md:text-lg text-slate-700 max-w-xl text-center">Ready to flex your healthcare reflexes? Match the right symbols as fast as you can—compete for the high score and show you're the quickest hero on the block! No stethoscope required.</p>
      </motion.header>
      <main className="flex flex-col md:flex-row gap-8 justify-center items-start w-full max-w-5xl mx-auto px-4 pb-16">
        <div className="flex-1">
          <GameBoard onGameOver={handleGameOver} highScore={highScore} setHighScore={setHighScore} />
        </div>
        <div className="hidden md:block w-80">
          <Leaderboard />
        </div>
      </main>
      <ScoreModal open={modalOpen} score={lastScore} highScore={highScore} onClose={() => setModalOpen(false)} onPlayAgain={handlePlayAgain} />
      <div className="block md:hidden px-4 pb-10">
        <Leaderboard />
      </div>
    </div>
  );
};
