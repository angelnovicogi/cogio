import { motion } from 'framer-motion';
import type { ReactNode } from 'react';
import { CogioLogo } from '@/components/brand/cogio-logo';
import { cn } from '@/lib/utils';

interface AuthFormCardProps {
  title: string;
  description: string;
  children: ReactNode;
  footer?: ReactNode;
  className?: string;
}

export function AuthFormCard({
  title,
  description,
  children,
  footer,
  className,
}: AuthFormCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      className={cn('relative', className)}
    >
      <div
        className="pointer-events-none absolute -inset-px rounded-[1.125rem] bg-gradient-to-br from-[oklch(58%_0.28_285/0.35)] via-[oklch(72%_0.16_195/0.2)] to-[oklch(68%_0.22_320/0.25)] opacity-60"
        aria-hidden
      />
      <div className="relative rounded-2xl border border-white/60 bg-white/75 p-8 shadow-2xl shadow-[oklch(58%_0.28_285/0.12)] backdrop-blur-xl">
        <div className="mb-8">
          <div className="mb-6 flex justify-center">
            <CogioLogo href="/" size="md" wordmarkClassName="text-foreground" />
          </div>
          <h1 className="text-center text-2xl font-bold tracking-tight text-foreground">
            {title}
          </h1>
          <p className="mt-2 text-center text-sm text-muted-foreground">{description}</p>
        </div>
        {children}
        {footer ? <div className="mt-6 border-t border-border/60 pt-6">{footer}</div> : null}
      </div>
    </motion.div>
  );
}
