"use client";

import { ComponentType } from "react";
import { motion, Variants } from "framer-motion";
import { LucideProps } from "lucide-react";
import Image from "next/image";

export interface FloatingCardProps {
  color: "blue" | "orange" | "dark" | "lavender";
  rotation: number;
  icon?: ComponentType<LucideProps>;
  label?: string;
  variant?: "default" | "portal" | "pill";
  className?: string;
  delay?: number;
  width?: number;
  height?: number;
}

const CARD_WIDTH = 300;
const CARD_HEIGHT = 70;

export function FloatingCard({
  color,
  rotation,
  icon: Icon,
  label,
  variant = "default",
  className = "",
  delay = 0,
  width = CARD_WIDTH,
  height = CARD_HEIGHT,
}: FloatingCardProps) {
  const colorStyles = {
    blue: "bg-legal-blue text-white shadow-blue-500/20",
    orange: "bg-legal-orange text-white shadow-orange-500/20",
    dark: "bg-legal-dark text-legal-orange shadow-slate-900/30 dark:bg-black/40 border border-slate-800/20 dark:border-slate-800",
    lavender: "bg-indigo-100 dark:bg-indigo-950/40 text-slate-800 dark:text-indigo-200 border border-indigo-200/50 dark:border-indigo-900/50 shadow-indigo-500/10",
  };

  const entranceVariants: Variants = {
    initial: {
      opacity: 0,
      y: 40,
      rotate: rotation,
      scale: 0.9,
    },
    animate: {
      opacity: 1,
      y: 0,
      rotate: rotation,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 70,
        damping: 15,
        delay: delay * 0.15,
      },
    },
  };

  const floatTransition = {
    y: {
      duration: 4 + (delay % 4) * 0.5,
      repeat: Infinity,
      repeatType: "reverse" as const,
      ease: "easeInOut" as const,
      delay: delay * 0.2,
    },
  };

  const cardStyle = {
    width: `${width}px`,
    minWidth: `${width}px`,
    maxWidth: `${width}px`,
    height: `${height}px`,
    minHeight: `${height}px`,
    maxHeight: `${height}px`,
  };

  if (variant === "portal") {
    return (
      <motion.div
        variants={entranceVariants}
        initial="initial"
        animate="animate"
        style={{ originX: 0.5, originY: 0.5, ...cardStyle }}
        className={`inline-block select-none ${className}`}
      >
        <motion.div
          animate={{ y: [0, -6, 0] }}
          transition={floatTransition}
          whileHover={{
            scale: 1.04,
            y: -10,
            rotate: 1.5,
            transition: { duration: 0.3 },
          }}
          className={`relative flex items-center w-full h-full overflow-hidden pl-3 pr-5 py-0 rounded-3xl md:rounded-[28px] shadow-lg md:shadow-xl backdrop-blur-sm cursor-pointer border border-indigo-200/50 dark:border-indigo-900/50 shadow-indigo-500/10 ${colorStyles[color]}`}
        >
          <div className="absolute left-3 top-4 bottom-4 w-1.5 bg-orange-500 dark:bg-orange-600 rounded-full" />

          <div className="ml-1.5 flex-shrink-0 w-8 h-8 md:w-9 md:h-9 rounded-full overflow-hidden border-2 border-white dark:border-indigo-950 shadow-md">
            <Image
              src="/user_avatar.png"
              alt="John Doe"
              width={48}
              height={48}
              className="object-cover w-full h-full"
            />
          </div>

          <div className="ml-2 min-w-0 flex flex-col select-none text-left">
            <span className="font-bold text-[11px] md:text-[12px] text-slate-800 dark:text-indigo-100 tracking-tight leading-tight truncate">
              John Doe - Portal
            </span>
            <span className="text-[9px] md:text-[10px] text-slate-600 dark:text-indigo-300 font-medium leading-tight mt-0.5 truncate">
              Hey! Could you please review a document for me?
            </span>
            <span className="text-[9px] md:text-[10px] text-orange-600 dark:text-orange-400 font-bold mt-0.5 tracking-wide truncate">
              MAT-2233 • 2 h ago
            </span>
          </div>
        </motion.div>
      </motion.div>
    );
  }

  return (
    <motion.div
      variants={entranceVariants}
      initial="initial"
      animate="animate"
        style={{ originX: 0.5, originY: 0.5, ...cardStyle }}
      className={`inline-block select-none ${className}`}
    >
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={floatTransition}
        whileHover={{
          scale: 1.06,
          y: -12,
          rotate: -2,
          transition: { type: "spring", stiffness: 400, damping: 10 },
        }}
        className={`flex items-center justify-left gap-[10px] w-full h-full overflow-hidden px-[16px] md:px-[24px] py-0 rounded-full shadow-lg md:shadow-xl cursor-pointer ${colorStyles[color]}`}
      >
        {Icon && (
          <div className="flex-shrink-0">
            <Icon className="w-[20px] h-[20px] md:w-[30px] md:h-[30px]" strokeWidth={2.2} />
          </div>
        )}
        <span className="font-bold text-[15px] md:text-[22px] tracking-tight whitespace-nowrap">
          {label}
        </span>
      </motion.div>
    </motion.div>
  );
}
