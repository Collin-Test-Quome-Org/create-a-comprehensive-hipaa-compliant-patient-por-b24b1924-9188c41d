import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { GameOverModal } from "@/components/GameOverModal";
import Confetti from "react-confetti";

// Sample questions
const QUESTIONS = [
  {
    question: "What is the recommended amount of daily physical activity for adults?",
    choices: ["10 minutes", "30 minutes", "1 hour", "2 hours"],
    answer: 1,
  },
  {
    question: "Which vitamin is mainly produced when skin is exposed to sunlight?",
    choices: ["Vitamin A", "Vitamin D", "Vitamin C", "Vitamin B12"],
    answer: 1,
  },
  {
    question: "What organ does insulin help regulate?",
    choices: ["Heart", "Liver", "Pancreas", "Kidney"],
    answer: 2,
  },
  {
    question: "True or False: Drinking water helps regulate body temperature.",
    choices: ["True", "False"],
    answer: 0,
  },
  {
    question: "Which food is highest in fiber?",
    choices: ["White bread", "Banana", "Broccoli", "Chicken"],
    answer: 2,
  },
];

const DUMMY_LEADERBOARD = [
  { name: "You", score: 4 },
  { name: "Casey", score: 3 },
  { name: "Alex", score: 2 },
  { name: "Jordan", score: 1 },
  { name: "Riley", score: 0 },
];

export function HealthGame() {
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [selected, setSelected] = useState(null);
  const [showConfetti, setShowConfetti] = useState(false);
  const [leaderboard, setLeaderboard] = useState(DUMMY_LEADERBOARD);
  const questionCard = useRef(null);

  function answer(choiceIdx) {
    if (selected !== null) return;
    setSelected(choiceIdx);
    if (QUESTIONS[current].answer === choiceIdx) {
      setScore((s) => s + 1);
      setShowConfetti(true);
      setTimeout(() => setShowConfetti(false), 800);
    }
    setTimeout(() => {
      if (current === QUESTIONS.length - 1) {
        setGameOver(true);
        setLeaderboard((prev) => {
          const newBoard = [
            { name: "You", score: score + (QUESTIONS[current].answer === choiceIdx ? 1 : 0) },
            ...prev.filter((e) => e.name !== "You"),
          ];
          return newBoard.sort((a, b) => b.score - a.score);
        });
      } else {
        setCurrent((c) => c + 1);
        setSelected(null);
      }
    }, 900);
  }

  function restart() {
    setCurrent(0);
    setScore(0);
    setSelected(null);
    setGameOver(false);
  }

  return (
    <div className="relative w-full flex flex-col items-center justify-center min-h-[500px]">
      {showConfetti && <Confetti width={window.innerWidth} height={window.innerHeight} numberOfPieces={160} recycle={false} />}
      <motion.div
        ref={questionCard}
        key={current}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.33 }}
        className="w-full max-w-lg"
      >
        <Card className="shadow-2xl border-blue-100">
          <CardHeader>
            <CardTitle className="text-lg text-blue-800 font-bold">
              Health Hero Quiz
            </CardTitle>
            <div className="text-xs text-slate-500">
              Question {current + 1} of {QUESTIONS.length}
            </div>
          </CardHeader>
          <CardContent>
            <div className="font-semibold text-slate-900 text-lg mb-4">
              {QUESTIONS[current].question}
            </div>
            <div className="grid gap-3">
              {QUESTIONS[current].choices.map((choice, i) => (
                <Button
                  key={i}
                  id={`choice-${i}`}
                  variant={selected === null ? "outline" : i === QUESTIONS[current].answer ? "default" : selected === i ? "destructive" : "secondary"}
                  className={`w-full justify-start text-base py-5 transition-all duration-200 ${selected === i ? "scale-105" : ""}`}
                  disabled={selected !== null}
                  onClick={() => answer(i)}
                >
                  {choice}
                </Button>
              ))}
            </div>
            <div className="mt-4 text-slate-600 text-sm">
              Score: <span className="font-bold text-blue-700">{score}</span>
            </div>
          </CardContent>
        </Card>
      </motion.div>
      <GameOverModal open={gameOver} score={score} onRestart={restart} onClose={() => setGameOver(false)} leaderboard={leaderboard} />
    </div>
  );
}
