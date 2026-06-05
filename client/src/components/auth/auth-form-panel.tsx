import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';

interface AuthFormPanelProps {
  children: ReactNode;
}

export function AuthFormPanel({ children }: AuthFormPanelProps) {
  return (
    <div className="relative flex flex-1 flex-col overflow-hidden">
      <div
        className="absolute inset-0 bg-gradient-to-br from-[oklch(97%_0.015_285)] via-[oklch(98.5%_0.008_264)] to-[oklch(96%_0.02_200)]"
        aria-hidden
      />
      <div
        className="absolute inset-0 bg-[linear-gradient(to_right,oklch(58%_0.22_285/0.09)_1px,transparent_1px),linear-gradient(to_bottom,oklch(58%_0.22_285/0.09)_1px,transparent_1px)] bg-[size:40px_40px]"
        aria-hidden
      />

      <motion.div
        className="pointer-events-none absolute -right-24 top-[15%] h-[420px] w-[420px] rounded-full bg-[oklch(72%_0.16_195/0.14)] blur-3xl"
        animate={{ scale: [1, 1.08, 1], opacity: [0.5, 0.75, 0.5] }}
        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
        aria-hidden
      />
      <motion.div
        className="pointer-events-none absolute -left-16 bottom-[10%] h-[360px] w-[360px] rounded-full bg-[oklch(58%_0.28_285/0.1)] blur-3xl"
        animate={{ scale: [1.05, 1, 1.05], opacity: [0.4, 0.65, 0.4] }}
        transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut' }}
        aria-hidden
      />
      <motion.div
        className="pointer-events-none absolute right-[20%] top-[55%] h-48 w-48 rounded-full bg-[oklch(68%_0.22_320/0.08)] blur-2xl"
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
        aria-hidden
      />

      <div
        className="pointer-events-none absolute inset-y-0 left-0 hidden w-px bg-gradient-to-b from-transparent via-[oklch(58%_0.28_285/0.25)] to-transparent lg:block"
        aria-hidden
      />

      <div className="relative z-10 flex flex-1 flex-col">
        <header className="flex items-center justify-end p-6 lg:px-10 lg:pt-8">
          <Link
            to="/"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
          >
            <ArrowLeft className="h-4 w-4" />
            <span className="hidden sm:inline">Back to home</span>
            <span className="sm:hidden">Home</span>
          </Link>
        </header>

        <div className="flex flex-1 items-center justify-center px-6 pb-10 sm:px-10 lg:px-14">
          {children}
        </div>
      </div>
    </div>
  );
}
