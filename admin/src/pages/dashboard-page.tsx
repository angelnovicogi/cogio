import { Building2, TrendingUp, UserPlus, Users } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchAdminStats } from '@/services/admin-api';
import type { AdminStats } from '@/types/admin';
import { cn } from '@/lib/utils';

const statConfig = [
  { key: 'totalUsers' as const, label: 'Total users', icon: Users, accent: 'text-primary' },
  {
    key: 'totalOrganizations' as const,
    label: 'Organizations',
    icon: Building2,
    accent: 'text-emerald-400',
  },
  {
    key: 'newUsersLast7Days' as const,
    label: 'New users (7d)',
    icon: UserPlus,
    accent: 'text-amber-400',
  },
  {
    key: 'newUsersLast30Days' as const,
    label: 'New users (30d)',
    icon: TrendingUp,
    accent: 'text-sky-400',
  },
];

export function DashboardPage() {
  const [stats, setStats] = useState<AdminStats | null>(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchAdminStats()
      .then(setStats)
      .catch(() => setError('Failed to load stats. Is the API running?'))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Dashboard</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          Platform overview and user growth metrics
        </p>
      </div>

      {error ? (
        <div className="rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-300">
          {error}
        </div>
      ) : null}

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {statConfig.map(({ key, label, icon: Icon, accent }) => (
          <div
            key={key}
            className="rounded-xl border border-border bg-card p-5 transition-colors hover:border-primary/30"
          >
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm text-muted-foreground">{label}</p>
                <p className="mt-2 text-3xl font-bold tabular-nums">
                  {loading ? '—' : (stats?.[key] ?? 0)}
                </p>
              </div>
              <Icon className={cn('h-5 w-5', accent)} />
            </div>
          </div>
        ))}
      </div>

      <div className="rounded-xl border border-border bg-card p-6">
        <h2 className="text-lg font-semibold">Quick actions</h2>
        <p className="mt-1 text-sm text-muted-foreground">
          Manage platform users and review account details.
        </p>
        <Link
          to="/users"
          className="mt-4 inline-flex items-center rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:opacity-90"
        >
          View all users
        </Link>
      </div>
    </div>
  );
}
