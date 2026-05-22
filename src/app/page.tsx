"use client";

import { FloatingCard } from "@/components/FloatingCard";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Gavel, Receipt, ListTodo, FileText, Receipt as Billing, ListTodo as Tasks } from "lucide-react";
import { motion, Variants } from "framer-motion";

export default function Home() {
  const textContainerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  return (
    <div className="relative min-h-screen w-full flex flex-col items-center justify-start overflow-y-auto overflow-x-hidden bg-[#F3F6FC] text-[#3B4265] transition-colors duration-500 dark:bg-[#0b0f19] dark:text-slate-100 py-16 px-6 lg:px-16">
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[10%] left-[5%] w-[350px] h-[350px] rounded-full bg-blue-400/10 blur-[100px] dark:bg-blue-600/5" />
        <div className="absolute top-[35%] right-[15%] w-[400px] h-[400px] rounded-full bg-purple-300/10 blur-[120px] dark:bg-purple-600/5" />
        <div className="absolute bottom-[15%] left-[20%] w-[380px] h-[380px] rounded-full bg-orange-300/10 blur-[110px] dark:bg-orange-500/5" />
      </div>

      <div className="absolute top-6 right-6 z-50">
        <ThemeToggle />
      </div>

      <main className="relative z-10 w-full max-w-[1300px] flex flex-col items-start justify-start px-6 lg:px-20">
        <div className="w-full lg:w-[80%] flex flex-col gap-9 text-left items-start">
          <motion.h1
          variants={textContainerVariants}
          initial="hidden"
          animate="visible"
          className="text-2xl sm:text-4xl lg:text-[60px] font-semibold leading-[1.08] tracking-tight max-w-4xl select-none"
        >
          <span className="text-slate-400 dark:text-slate-500">A single platform to </span>
          <br className="hidden sm:inline" />
          <span className="text-slate-800 dark:text-slate-100 font-bold bg-gradient-to-r from-slate-900 to-indigo-950 dark:from-slate-100 dark:to-indigo-200 bg-clip-text">manage </span>
          <span className="text-slate-400 dark:text-slate-500">every part of </span>
          <br className="hidden sm:inline" />
          <span className="text-slate-400 dark:text-slate-500">your </span>
          <span className="text-slate-800 dark:text-slate-100 font-bold bg-gradient-to-r from-slate-900 to-indigo-950 dark:from-slate-100 dark:to-indigo-200 bg-clip-text">legal work</span>
        </motion.h1>

          <p className="text-lg sm:text-[20px] leading-relaxed text-[#3562FF] dark:text-blue-400 font-medium max-w-lg transition-colors">
            Track matters, coordinate schedules, manage <br className="hidden sm:inline" />clients, centralize documents, and handle communication - all in one system.
          </p>
        </div>

        <div className="hidden lg:block w-[calc(100%+8rem)] -mx-16 relative h-[380px] mt-2 z-10">
          <div className="absolute -left-22 top-[0%] w-[12%] h-[80px] rounded-r-full rounded-l-none bg-[#E5EEFB] dark:bg-slate-600/15 origin-left rotate-[-13deg]" />
          <div className="absolute -left-20 top-[28%] w-[20%] h-[80px] rounded-r-full rounded-l-none bg-[#E5EEFB] dark:bg-slate-600/15" />
          <div className="absolute -left-20 top-[53%] w-[30%] h-[80px] rounded-r-full rounded-l-none bg-[#E5EEFB] dark:bg-slate-600/15" />

          <div className="absolute -right-20 top-[-10%] w-[20%] h-[80px] rounded-l-full rounded-r-none bg-[#E5EEFB] dark:bg-slate-600/15  " />
          <div className="absolute -right-20 top-[-38%] w-[25%] h-[80px] rounded-l-full rounded-r-none bg-[#E5EEFB] dark:bg-slate-600/15" />
          <div className="absolute -right-20 top-[-62%] w-[18%] h-[80px] rounded-l-full rounded-r-none bg-[#E5EEFB] dark:bg-slate-600/15 origin-right rotate-[5deg]" />

          <div className="pointer-events-auto">
            <FloatingCard
              variant="pill"
              color="orange"
              rotation={-12}
              icon={Gavel}
              label="Matters"
              delay={0.2}
              width={340}
              height={78}
              className="absolute top-[15%] left-[20%]"
            />
          </div>

          <div className="pointer-events-auto">
            <FloatingCard
              variant="pill"
              color="dark"
              rotation={0}
              icon={Tasks}
              label="Tasks"
              delay={0.4}
              width={340}
              height={78}
              className="absolute top-[58%] left-[30%]"
            />
          </div>

          <div className="pointer-events-auto">
            <FloatingCard
              variant="pill"
              color="blue"
              rotation={12}
              icon={Billing}
              label="Billing"
              delay={0.1}
              width={360}
              height={90}
              className="absolute top-[-12%] left-[50%]"
            />
          </div>

          <div className="pointer-events-auto">
            <FloatingCard
              variant="portal"
              color="lavender"
              rotation={5}
              delay={0.3}
              width={360}
              height={92}
              className="absolute top-[28%] left-[50%]"
            />
          </div>

          <div className="pointer-events-auto">
            <FloatingCard
              variant="pill"
              color="dark"
              rotation={-10}
              icon={FileText}
              label="Documents"
              delay={0.5}
              width={340}
              height={78}
              className="absolute top-[58%] left-[68%]"
            />
          </div>
        </div>

        <div className="block lg:hidden w-full max-w-[1300px] px-6 lg:px-20 flex flex-col gap-5 mt-8 relative z-10">
          <div className="flex flex-wrap gap-4">
            <div className="flex-1 min-w-[140px] rounded-2xl p-5 flex flex-col gap-3 bg-blue-600 text-white shadow-lg">
              <div className="w-9 h-9 rounded-full bg-white/15 flex items-center justify-center">
                <Receipt className="w-5 h-5 text-white" />
              </div>
              <span className="font-bold text-base tracking-tight">Billing</span>
            </div>

            <div className="flex-1 min-w-[140px] rounded-2xl p-5 flex flex-col gap-3 bg-[#E2843A] text-white shadow-lg">
              <div className="w-9 h-9 rounded-full bg-white/15 flex items-center justify-center">
                <Gavel className="w-5 h-5 text-white" />
              </div>
              <span className="font-bold text-base tracking-tight">Matters</span>
            </div>

            <div className="flex-1 min-w-[140px] rounded-2xl p-5 flex flex-col gap-3 bg-[#1E1B30] text-[#E2843A] border border-slate-800/10 dark:bg-[#131122] dark:border-slate-800/40">
              <div className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center">
                <ListTodo className="w-5 h-5 text-[#E2843A]" />
              </div>
              <span className="font-bold text-base tracking-tight text-white">Tasks</span>
            </div>

            <div className="flex-1 min-w-[140px] rounded-2xl p-5 flex flex-col gap-3 bg-[#1E1B30] text-[#E2843A] border border-slate-800/10 dark:bg-[#131122] dark:border-slate-800/40">
              <div className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center">
                <FileText className="w-5 h-5 text-[#E2843A]" />
              </div>
              <span className="font-bold text-base tracking-tight text-white">Documents</span>
            </div>
          </div>

          <div className="rounded-[24px] p-5 bg-[#C4CEF2] text-slate-800 border border-white/30 shadow-lg dark:bg-[#20253B]/90 dark:text-slate-100 dark:border-white/5">
            <div className="flex items-center gap-4 text-left relative pl-3.5">
              <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#E2843A] rounded-full" />

              <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0 border border-white/40 dark:border-slate-700 relative">
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  <defs>
                    <linearGradient id="avatar-bg-mob" x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0%" stopColor="#FB923C" />
                      <stop offset="100%" stopColor="#EA580C" />
                    </linearGradient>
                  </defs>
                  <circle cx="50" cy="50" r="50" fill="url(#avatar-bg-mob)" />
                  <circle cx="50" cy="46" r="22" fill="#E0A983" />
                  <path d="M28 42 C28 22, 72 22, 72 42" fill="#201C34" stroke="#201C34" strokeWidth="4" />
                  <rect x="34" y="40" width="13" height="8" rx="2" fill="none" stroke="#201C34" strokeWidth="2.5" />
                  <rect x="53" y="40" width="13" height="8" rx="2" fill="none" stroke="#201C34" strokeWidth="2.5" />
                  <line x1="47" y1="44" x2="53" y2="44" stroke="#201C34" strokeWidth="2.5" />
                  <circle cx="40" cy="44" r="2" fill="#201C34" />
                  <circle cx="60" cy="44" r="2" fill="#201C34" />
                  <path d="M44 56 Q50 61 56 56" fill="none" stroke="#201C34" strokeWidth="2.5" strokeLinecap="round" />
                  <path d="M24 85 C24 70, 76 70, 76 85 Z" fill="#2563EB" />
                </svg>
              </div>

              <div className="flex flex-col flex-1 min-w-0">
                <span className="font-bold text-sm text-slate-800 dark:text-slate-100">
                  John Doe - Portal
                </span>
                <span className="text-xs font-medium text-slate-600 dark:text-slate-400 mt-0.5 truncate">
                  Hey! Could you please review a document for me?
                </span>
                <span className="text-[9px] font-bold tracking-wider text-[#A25F2A] dark:text-[#F39C12] mt-0.5">
                  MAT-2233 • 2 h ago
                </span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
