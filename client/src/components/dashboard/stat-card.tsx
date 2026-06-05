import { motion } from 'framer-motion';
import type { LucideIcon } from 'lucide-react';
import { TrendingDown, TrendingUp } from 'lucide-react';
import { cn } from '@/lib/utils';

interface StatCardProps {
  title: string;
  value: string;
  subtitle?: string;
  icon: LucideIcon;
  trend?: { value: string; positive: boolean };
  accent?: 'violet' | 'cyan' | 'fuchsia' | 'amber';
  delay?: number;
}

const accentStyles = {
  violet: 'from-[oklch(58%_0.26_285)] to-[oklch(65%_0.18_285)]',
  cyan: 'from-[oklch(55%_0.14_200)] to-[oklch(65%_0.16_195)]',
  fuchsia: 'from-[oklch(58%_0.22_320)] to-[oklch(65%_0.2_285)]',
  amber: 'from-[oklch(72%_0.16_75)] to-[oklch(68%_0.18_55)]',
};

export function StatCard({
  title,
  value,
  subtitle,
  icon: Icon,
  trend,
  accent = 'violet',
  delay = 0,
}: StatCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay }}
      className="surface-card group relative overflow-hidden rounded-2xl p-5"
    >
      <div
        className={cn(
          'pointer-events-none absolute -right-6 -top-6 h-24 w-24 rounded-full bg-gradient-to-br opacity-[0.12] blur-2xl transition-opacity group-hover:opacity-20',
          accentStyles[accent],
        )}
      />
      <div className="relative flex items-start justify-between gap-3">
        <div className="space-y-3">
          <p className="text-sm font-medium text-muted-foreground">{title}</p>
          <p className="text-3xl font-bold tracking-tight">{value}</p>
          {subtitle ? <p className="text-xs text-muted-foreground">{subtitle}</p> : null}
          {trend ? (
            <div
              className={cn(
                'inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-xs font-medium',
                trend.positive
                  ? 'bg-emerald-500/10 text-emerald-700'
                  : 'bg-red-500/10 text-red-700',
              )}
            >
              {trend.positive ? (
                <TrendingUp className="h-3 w-3" />
              ) : (
                <TrendingDown className="h-3 w-3" />
              )}
              {trend.value}
            </div>
          ) : null}
        </div>
        <div
          className={cn(
            'flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br text-white shadow-md',
            accentStyles[accent],
          )}
        >
          <Icon className="h-5 w-5" />
        </div>
      </div>
    </motion.div>
  );
}
