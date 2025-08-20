import { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

function getRandomInt(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const SYMBOLS = ['💊','🩺','💉','🧬','🔬','⚕️','🧑‍⚕️','🩹','🦠','📋'];

interface GameBoardProps {
  onGameOver: (score: number) => void;
  highScore: number;
  setHighScore: (score: number) => void;
}

export const GameBoard = ({ onGameOver, highScore, setHighScore }: GameBoardProps) => {
  const [tiles, setTiles] = useState<{symbol: string; id: number}[]>([]);
  const [score, setScore] = useState(0);
  const [running, setRunning] = useState(false);
  const [timer, setTimer] = useState(60); // seconds
  const [selected, setSelected] = useState<number | null>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (running && timer > 0) {
      intervalRef.current = setInterval(() => {
        setTimer(t => t - 1);
      }, 1000);
      return () => { if (intervalRef.current) clearInterval(intervalRef.current); };
    }
    if (timer === 0 && running) {
      setRunning(false);
      if (intervalRef.current) clearInterval(intervalRef.current);
      if (score > highScore) setHighScore(score);
      setTimeout(() => onGameOver(score), 500);
    }
  }, [running, timer, score, highScore, setHighScore, onGameOver]);

  useEffect(() => {
    if (running) {
      generateTiles();
    }
  }, [running]);

  const generateTiles = () => {
    const randomIdx = getRandomInt(0, SYMBOLS.length - 1);
    let board = [];
    for (let i = 0; i < 9; i++) {
      let symbol = i === 0 ? SYMBOLS[randomIdx] : SYMBOLS[getRandomInt(0, SYMBOLS.length - 1)];
      board.push({ symbol, id: i });
    }
    board = shuffle(board);
    setTiles(board);
  };

  const shuffle = (arr: any[]) => {
    const copy = [...arr];
    for (let i = copy.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
  };

  const handleStart = () => {
    setScore(0);
    setRunning(true);
    setTimer(60);
    generateTiles();
    setSelected(null);
  };

  const handleTileClick = (idx: number) => {
    if (!running) return;
    if (selected !== null) return;
    setSelected(idx);
    const targetSymbol = tiles[0].symbol;
    if (tiles[idx].symbol === targetSymbol) {
      setScore(s => s + 1);
      setTimeout(() => {
        setSelected(null);
        generateTiles();
      }, 250);
    } else {
      setTimeout(() => setSelected(null), 350);
    }
  };

  return (
    <div className="w-full max-w-lg mx-auto flex flex-col items-center gap-6">
      <div className="flex flex-row justify-between w-full">
        <div className="text-lg font-bold text-blue-800">Score: {score}</div>
        <div className="text-lg font-bold text-blue-600">Time: {timer}s</div>
      </div>
      {!running && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="w-full flex flex-col items-center">
          <Button id="start-game-btn" onClick={handleStart} className="text-lg px-8 py-3 font-semibold">
            Start Game
          </Button>
        </motion.div>
      )}
      {running && (
        <motion.div
          key="board"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: 'spring', duration: 0.4 }}
          className="grid grid-cols-3 gap-4 w-full"
        >
          {tiles.map((tile, idx) => (
            <motion.button
              id={`tile-btn-${idx}`}
              key={tile.id}
              onClick={() => handleTileClick(idx)}
              className={`aspect-square w-full rounded-lg shadow-md text-4xl flex items-center justify-center font-bold border transition-all
                ${selected === idx
                  ? tiles[idx].symbol === tiles[0].symbol
                    ? 'bg-green-200 border-green-400 scale-110'
                    : 'bg-red-100 border-red-400 scale-105'
                  : 'bg-white border-slate-200 hover:bg-blue-50'}
              `}
              whileTap={{ scale: 1.1 }}
              aria-label={`Tile ${idx + 1}`}
              disabled={selected !== null || !running}
            >
              {tile.symbol}
            </motion.button>
          ))}
        </motion.div>
      )}
      <div className="w-full flex flex-row justify-between mt-2 text-slate-500">
        <div className="text-xs">High Score: <span className="text-blue-700 font-semibold">{highScore}</span></div>
        <div className="text-xs">Find: <span className="font-bold text-blue-800 text-lg">{running && tiles.length > 0 ? tiles[0].symbol : '---'}</span></div>
      </div>
    </div>
  );
};
