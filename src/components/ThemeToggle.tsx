"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";
import { motion } from "framer-motion";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setMounted(true);
    }, 0);
    return () => clearTimeout(timer);
  }, []);

  if (!mounted) {
    return <div className="w-10 h-10 rounded-full bg-slate-200/50 dark:bg-slate-800/50 animate-pulse" />;
  }

  const isDark = theme === "dark";

  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="p-2.5 rounded-full border border-slate-200/80 dark:border-slate-800/80 bg-white/70 dark:bg-slate-900/70 backdrop-blur-md shadow-sm hover:shadow-md text-slate-700 dark:text-slate-300 transition-all cursor-pointer"
      aria-label="Toggle dark mode"
    >
      <div className="relative w-5 h-5 overflow-hidden">
        <motion.div
          animate={{
            y: isDark ? -30 : 0,
            opacity: isDark ? 0 : 1,
          }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <Sun className="w-5 h-5 text-amber-500" strokeWidth={2.5} />
        </motion.div>
        <motion.div
          animate={{
            y: isDark ? 0 : 30,
            opacity: isDark ? 1 : 0,
          }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <Moon className="w-5 h-5 text-indigo-400" strokeWidth={2.5} />
        </motion.div>
      </div>
    </motion.button>
  );
}
