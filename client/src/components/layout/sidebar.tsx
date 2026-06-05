import { motion } from 'framer-motion';
import {
  Building2,
  CalendarClock,
  ChartColumn,
  FolderKanban,
  LayoutDashboard,
  ListTodo,
  Settings,
  Timer,
} from 'lucide-react';
import { NavLink } from 'react-router-dom';
import { CogioLogo } from '@/components/brand/cogio-logo';
import { cn } from '@/lib/utils';

const navItems = [
  { to: '/dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { to: '/organizations', label: 'Organizations', icon: Building2 },
  { to: '/projects', label: 'Projects', icon: FolderKanban },
  { to: '/tasks', label: 'Tasks', icon: ListTodo },
  { to: '/time-entries', label: 'Time Entries', icon: Timer },
  { to: '/timesheets', label: 'Timesheets', icon: CalendarClock },
  { to: '/reports', label: 'Reports', icon: ChartColumn },
  { to: '/settings', label: 'Settings', icon: Settings },
];

export function Sidebar() {
  return (
    <aside className="hidden h-screen w-64 shrink-0 flex-col border-r border-border/70 bg-white/60 backdrop-blur-xl lg:flex">
      <div className="flex h-[4.25rem] items-center border-b border-border/70 px-5">
        <CogioLogo href="/dashboard" size="md" />
      </div>
      <nav className="min-h-0 flex-1 space-y-1 overflow-y-auto p-3">
        {navItems.map(({ to, label, icon: Icon }) => (
          <NavLink
            key={to}
            to={to}
            className={({ isActive }) =>
              cn(
                'group relative flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-all',
                isActive
                  ? 'bg-gradient-to-r from-[oklch(58%_0.26_285/0.12)] to-[oklch(72%_0.16_195/0.08)] text-foreground shadow-sm'
                  : 'text-muted-foreground hover:bg-surface-subtle hover:text-foreground',
              )
            }
          >
            {({ isActive }) => (
              <>
                {isActive ? (
                  <motion.span
                    layoutId="sidebar-active"
                    className="absolute inset-0 rounded-xl border border-primary/10"
                    transition={{ type: 'spring', bounce: 0.2, duration: 0.5 }}
                  />
                ) : null}
                <Icon
                  className={cn(
                    'relative h-4 w-4 shrink-0',
                    isActive ? 'text-primary' : 'text-muted-foreground group-hover:text-primary',
                  )}
                />
                <span className="relative">{label}</span>
              </>
            )}
          </NavLink>
        ))}
      </nav>
      <div className="border-t border-border/70 p-4">
        <div className="rounded-xl border border-primary/15 bg-gradient-to-br from-[oklch(58%_0.26_285/0.08)] to-[oklch(72%_0.16_195/0.05)] p-3">
          <p className="text-xs font-medium text-foreground">Need help?</p>
          <p className="mt-1 text-xs text-muted-foreground">Explore docs and shortcuts.</p>
        </div>
      </div>
    </aside>
  );
}
