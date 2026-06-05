import { motion } from 'framer-motion';
import { BarChart3, Bot, Clock, Shield, Zap } from 'lucide-react';
import { CogioLogo } from '@/components/brand/cogio-logo';

const highlights = [
  { icon: Clock, text: 'Live timers & manual entries' },
  { icon: Bot, text: 'AI timesheet assistant' },
  { icon: BarChart3, text: 'Project & utilization reports' },
  { icon: Shield, text: 'Roles, permissions & multi-tenant' },
];

export function AuthBrandPanel() {
  return (
    <div className="relative hidden overflow-hidden bg-mesh lg:flex lg:w-[52%] lg:flex-col lg:justify-between lg:p-12 xl:p-16">
      <div className="pointer-events-none absolute inset-0">
        <motion.div
          className="absolute -left-20 top-1/4 h-72 w-72 rounded-full bg-[oklch(58%_0.28_285/0.35)] blur-3xl"
          animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute -right-10 bottom-1/4 h-64 w-64 rounded-full bg-[oklch(72%_0.16_195/0.3)] blur-3xl"
          animate={{ x: [0, -25, 0], y: [0, 15, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,oklch(100%_0_0/0.03)_1px,transparent_1px),linear-gradient(to_bottom,oklch(100%_0_0/0.03)_1px,transparent_1px)] bg-[size:48px_48px]" />
      </div>

      <CogioLogo
        href="/"
        size="lg"
        onDark
        wordmarkClassName="text-xl text-white"
        className="relative z-10 hidden lg:inline-flex"
      />

      <div className="relative z-10 max-w-md">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-medium text-white/80">
            <Zap className="h-3.5 w-3.5 text-[oklch(88%_0.14_195)]" />
            Workforce intelligence platform
          </div>
          <h1 className="text-4xl font-bold leading-[1.15] tracking-tight text-white [text-shadow:0_2px_20px_oklch(0%_0_0/0.5)] xl:text-5xl">
            Time tracking,
            <span className="text-gradient"> reimagined.</span>
          </h1>
          <p className="mt-4 text-base leading-relaxed text-white/75">
            Unify projects, tasks, and timesheets in one beautiful workspace — with AI that helps
            your team submit accurate hours, faster.
          </p>
        </motion.div>

        <motion.ul
          className="mt-10 space-y-4"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.08, delayChildren: 0.35 } },
          }}
        >
          {highlights.map(({ icon: Icon, text }) => (
            <motion.li
              key={text}
              variants={{
                hidden: { opacity: 0, x: -12 },
                visible: { opacity: 1, x: 0 },
              }}
              className="flex items-center gap-3 text-sm text-white/90"
            >
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/5">
                <Icon className="h-4 w-4 text-[oklch(78%_0.16_195)]" />
              </span>
              {text}
            </motion.li>
          ))}
        </motion.ul>
      </div>

      <p className="relative z-10 text-xs text-white/60">
        Trusted by teams who ship on schedule.
      </p>
    </div>
  );
}
