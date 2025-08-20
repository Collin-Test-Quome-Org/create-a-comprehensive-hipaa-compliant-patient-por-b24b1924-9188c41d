import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog";
import { Trophy } from "lucide-react";

export function GameOverModal({ open, score, onRestart, onClose, leaderboard }) {
  useEffect(() => {
    if (open) {
      // focus trap, etc.
    }
  }, [open]);
  return (
    <AnimatePresence>
      {open && (
        <Dialog open={open} onOpenChange={onClose}>
          <DialogContent className="max-w-md mx-auto text-center">
            <motion.div initial={{scale: 0.7, opacity: 0}} animate={{scale: 1, opacity: 1}} exit={{scale: 0.7, opacity: 0}} transition={{duration: 0.3}}>
              <DialogHeader>
                <div className="flex justify-center">
                  <Trophy className="text-yellow-400 w-16 h-16 drop-shadow mb-2" />
                </div>
                <DialogTitle className="text-2xl font-bold text-blue-800">Game Over!</DialogTitle>
                <DialogDescription className="mb-2 text-lg text-gray-700">You scored <span className="font-semibold text-blue-600">{score}</span> points!</DialogDescription>
              </DialogHeader>
              <div className="my-4">
                <h3 className="font-medium text-lg mb-1">Leaderboard</h3>
                <ul className="bg-slate-100 rounded-lg p-3 text-slate-800">
                  {leaderboard && leaderboard.length > 0 ? (
                    leaderboard.slice(0, 5).map((entry, i) => (
                      <li key={i} className={`flex justify-between py-1 px-2 ${entry.score === score ? "bg-blue-100 rounded" : ""}`}>
                        <span className="font-mono">{entry.name}</span>
                        <span className="font-bold">{entry.score}</span>
                      </li>
                    ))
                  ) : (
                    <li className="italic">No scores yet!</li>
                  )}
                </ul>
              </div>
              <DialogFooter>
                <Button id="restart-game" variant="default" className="mr-2" onClick={onRestart}>Play Again</Button>
                <Button id="close-modal" variant="secondary" onClick={onClose}>Close</Button>
              </DialogFooter>
            </motion.div>
          </DialogContent>
        </Dialog>
      )}
    </AnimatePresence>
  );
}
