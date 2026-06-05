import { motion, useScroll, useTransform } from 'framer-motion';
import {
  ArrowRight,
  BarChart3,
  Bot,
  Calendar,
  CheckCircle2,
  Clock,
  Layers,
  Sparkles,
  Users,
  Zap,
} from 'lucide-react';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const features = [
  {
    icon: Clock,
    title: 'Precision time tracking',
    description:
      'Running timers, manual entries, and billable hours — captured in real time across every project.',
    gradient: 'from-[oklch(58%_0.26_285)] to-[oklch(65%_0.18_200)]',
  },
  {
    icon: Bot,
    title: 'AI timesheet assistant',
    description:
      'Smart suggestions fill gaps in your week. Review, edit, and submit — without the Sunday scramble.',
    gradient: 'from-[oklch(65%_0.22_320)] to-[oklch(58%_0.26_285)]',
  },
  {
    icon: Layers,
    title: 'Projects & tasks',
    description:
      'Organize work by client and initiative. Assign owners, track status, and connect time to outcomes.',
    gradient: 'from-[oklch(72%_0.16_195)] to-[oklch(58%_0.22_260)]',
  },
  {
    icon: BarChart3,
    title: 'Reports that matter',
    description:
      'Utilization, budgets, and team capacity — dashboards built for managers who need clarity, fast.',
    gradient: 'from-[oklch(58%_0.26_285)] to-[oklch(72%_0.16_195)]',
  },
  {
    icon: Calendar,
    title: 'Calendar sync',
    description:
      'Google Calendar integration keeps meetings and focus blocks aligned with logged hours.',
    gradient: 'from-[oklch(65%_0.18_200)] to-[oklch(68%_0.24_300)]',
  },
  {
    icon: Users,
    title: 'Multi-tenant teams',
    description:
      'Organizations, roles, and permissions — scale from startup squad to enterprise division.',
    gradient: 'from-[oklch(68%_0.26_320)] to-[oklch(58%_0.26_285)]',
  },
];

const stats = [
  { value: '2.4M+', label: 'Hours tracked' },
  { value: '98%', label: 'Timesheet accuracy' },
  { value: '40%', label: 'Less admin time' },
];

const steps = [
  { step: '01', title: 'Connect your team', desc: 'Invite members, set roles, and configure organizations.' },
  { step: '02', title: 'Track & organize', desc: 'Run timers on tasks or log time against projects instantly.' },
  { step: '03', title: 'Let AI assist', desc: 'Review AI-generated timesheet drafts before submission.' },
  { step: '04', title: 'Approve & report', desc: 'Managers approve weekly sheets and export insights.' },
];

export function LandingPage() {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <>
      <section ref={heroRef} className="relative overflow-hidden pt-32 pb-24 sm:pt-40 sm:pb-32">
        <FloatingOrbs />

        <motion.div style={{ y: heroY, opacity: heroOpacity }} className="relative mx-auto max-w-6xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mx-auto flex max-w-3xl flex-col items-center text-center"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 }}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm text-ink-muted backdrop-blur-sm"
            >
              <Sparkles className="h-4 w-4 text-[oklch(78%_0.16_195)]" />
              Now with AI timesheet intelligence
              <span className="rounded-full bg-[oklch(58%_0.28_285/0.3)] px-2 py-0.5 text-xs font-medium text-white">
                New
              </span>
            </motion.div>

            <h1 className="text-4xl font-bold leading-[1.08] tracking-tight sm:text-6xl lg:text-7xl">
              Know where every
              <br />
              <span className="text-gradient">hour goes.</span>
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-muted sm:text-xl">
              Cogio unifies time tracking, projects, and timesheets — with an AI assistant that
              helps your team log accurately and managers approve with confidence.
            </p>

            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
              <Button
                asChild
                size="lg"
                className="h-12 gap-2 rounded-xl bg-gradient-to-r from-[oklch(58%_0.26_285)] to-[oklch(65%_0.18_200)] px-8 text-base font-semibold text-white shadow-xl shadow-[oklch(58%_0.28_285/0.4)] hover:opacity-95"
              >
                <Link to="/signup">
                  Get started
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="h-12 rounded-xl border-white/15 bg-white/5 px-8 text-base text-white hover:bg-white/10"
              >
                <Link to="/login">Log in</Link>
              </Button>
            </div>

            <div className="mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-ink-muted">
              {['AI-assisted timesheets', 'Live timers', 'Team-ready'].map((item) => (
                <span key={item} className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[oklch(72%_0.16_195)]" />
                  {item}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.25 }}
            className="relative mx-auto mt-16 max-w-5xl"
          >
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-r from-[oklch(58%_0.28_285/0.4)] via-[oklch(72%_0.16_195/0.2)] to-[oklch(68%_0.26_320/0.3)] blur-2xl" />
            <div className="relative overflow-hidden rounded-2xl border border-white/10 glass-strong glow-ring">
              <DashboardPreview />
            </div>
          </motion.div>
        </motion.div>
      </section>

      <section className="border-y border-white/10 py-12">
        <div className="mx-auto flex max-w-6xl flex-wrap justify-center gap-12 px-6 sm:gap-20">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center"
            >
              <p className="text-3xl font-bold text-gradient sm:text-4xl">{stat.value}</p>
              <p className="mt-1 text-sm text-ink-muted">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section id="features" className="py-24 sm:py-32">
        <div className="mx-auto max-w-6xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mx-auto max-w-2xl text-center"
          >
            <p className="text-sm font-semibold uppercase tracking-widest text-[oklch(78%_0.16_195)]">
              Features
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Everything your team needs to
              <span className="text-gradient"> move faster</span>
            </h2>
            <p className="mt-4 text-ink-muted">
              From live timers to executive reports — one platform, zero spreadsheet chaos.
            </p>
          </motion.div>

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, i) => (
              <motion.article
                key={feature.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ delay: i * 0.06 }}
                whileHover={{ y: -4 }}
                className="group rounded-2xl border border-white/10 glass p-6 transition-shadow hover:border-white/20 hover:shadow-lg hover:shadow-[oklch(58%_0.28_285/0.15)]"
              >
                <div
                  className={cn(
                    'mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br text-white',
                    feature.gradient,
                  )}
                >
                  <feature.icon className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-semibold text-white">{feature.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">{feature.description}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section id="how-it-works" className="border-t border-white/10 py-24 sm:py-32">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <p className="text-sm font-semibold uppercase tracking-widest text-[oklch(78%_0.16_195)]">
                How it works
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                Up and running in minutes
              </h2>
              <p className="mt-4 text-ink-muted">
                A workflow designed for consultants, agencies, and product teams who live in their
                calendars and Jira boards.
              </p>
            </motion.div>

            <div className="space-y-4">
              {steps.map((item, i) => (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, x: 24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="flex gap-5 rounded-xl border border-white/10 glass p-5"
                >
                  <span className="text-2xl font-bold text-gradient">{item.step}</span>
                  <div>
                    <h3 className="font-semibold text-white">{item.title}</h3>
                    <p className="mt-1 text-sm text-ink-muted">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="get-started" className="py-24 sm:py-32">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mx-auto max-w-4xl px-6"
        >
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-[oklch(22%_0.06_285)] to-[oklch(14%_0.05_270)] p-10 text-center sm:p-14">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,oklch(58%_0.28_285/0.25),transparent_60%)]" />
            <div className="relative">
              <Zap className="mx-auto h-10 w-10 text-[oklch(78%_0.16_195)]" />
              <h2 className="mt-4 text-3xl font-bold sm:text-4xl">Ready to reclaim your time?</h2>
              <p className="mx-auto mt-3 max-w-lg text-ink-muted">
                Join teams who ship on schedule. Set up your workspace and start tracking time in
                minutes.
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Button
                  asChild
                  size="lg"
                  className="h-12 rounded-xl bg-white px-8 font-semibold text-[oklch(14%_0.04_270)] hover:bg-white/90"
                >
                  <Link to="/signup">
                    Create account
                    <ArrowRight className="ml-2 inline h-4 w-4" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="ghost"
                  size="lg"
                  className="h-12 text-white hover:bg-white/10"
                >
                  <Link to="/login">I already have an account</Link>
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      </section>
    </>
  );
}

function FloatingOrbs() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <motion.div
        className="absolute left-[10%] top-[20%] h-[420px] w-[420px] rounded-full bg-[oklch(58%_0.28_285/0.2)] blur-[100px]"
        animate={{ scale: [1, 1.15, 1], opacity: [0.4, 0.6, 0.4] }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div
        className="absolute right-[5%] top-[30%] h-[320px] w-[320px] rounded-full bg-[oklch(72%_0.16_195/0.18)] blur-[80px]"
        animate={{ scale: [1.1, 1, 1.1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 10, repeat: Infinity }}
      />
    </div>
  );
}

function DashboardPreview() {
  return (
    <div className="bg-[oklch(12%_0.04_270)] p-4 sm:p-6">
      <div className="mb-4 flex items-center gap-2">
        <div className="h-3 w-3 rounded-full bg-red-400/80" />
        <div className="h-3 w-3 rounded-full bg-amber-400/80" />
        <div className="h-3 w-3 rounded-full bg-emerald-400/80" />
        <span className="ml-3 text-xs text-ink-muted">app.cogio.io — Dashboard</span>
      </div>
      <div className="grid gap-3 sm:grid-cols-3">
        {[
          { label: 'This week', value: '32.5h', color: 'from-[oklch(58%_0.26_285)]' },
          { label: 'Billable', value: '28h', color: 'from-[oklch(72%_0.16_195)]' },
          { label: 'Pending approval', value: '2', color: 'from-[oklch(68%_0.26_320)]' },
        ].map((card) => (
          <div
            key={card.label}
            className="rounded-xl border border-white/10 bg-white/5 p-4"
          >
            <p className="text-xs text-ink-muted">{card.label}</p>
            <p
              className={cn(
                'mt-1 bg-gradient-to-r bg-clip-text text-2xl font-bold text-transparent',
                card.color,
                'to-white',
              )}
            >
              {card.value}
            </p>
          </div>
        ))}
      </div>
      <div className="mt-4 space-y-2">
        {['Website redesign', 'API integration', 'Client standup'].map((task, i) => (
          <motion.div
            key={task}
            initial={{ width: '0%' }}
            animate={{ width: `${85 - i * 15}%` }}
            transition={{ duration: 1.2, delay: 0.5 + i * 0.15 }}
            className="flex items-center gap-3 rounded-lg border border-white/5 bg-white/5 px-3 py-2"
          >
            <div className="h-2 flex-1 overflow-hidden rounded-full bg-white/10">
              <motion.div
                className="h-full rounded-full bg-gradient-to-r from-[oklch(58%_0.26_285)] to-[oklch(72%_0.16_195)]"
                initial={{ width: 0 }}
                animate={{ width: `${70 - i * 20}%` }}
                transition={{ duration: 1, delay: 0.8 + i * 0.2 }}
              />
            </div>
            <span className="shrink-0 text-xs text-ink-muted">{task}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
