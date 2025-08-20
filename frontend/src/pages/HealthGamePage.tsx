import { HealthGame } from "@/components/HealthGame";
import { motion } from "framer-motion";

export function HealthGamePage() {
  return (
    <motion.div initial={{ opacity: 0, y: 32 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
      <section className="w-full bg-gradient-to-b from-blue-50 via-white to-slate-100 pb-12 pt-4 min-h-[92vh]">
        <div className="max-w-2xl mx-auto px-4 py-6">
          <h1 className="font-montserrat font-bold text-blue-900 text-4xl mb-2 text-center">Health Hero Game</h1>
          <p className="text-slate-700 text-lg mb-6 text-center">
            Test your health smarts and climb the leaderboard! Each question helps you unlock your healthiest self. Ready to play?
          </p>
          <HealthGame />
        </div>
      </section>
    </motion.div>
  );
}
