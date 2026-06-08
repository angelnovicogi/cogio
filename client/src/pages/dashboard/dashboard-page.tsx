import { motion } from 'framer-motion';
import {
  ArrowUpRight,
  Calendar,
  CheckCircle2,
  Clock,
  FolderKanban,
  Play,
  Plus,
  Sparkles,
  Timer,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { StatCard } from '@/components/dashboard/stat-card';
import { WeeklyHoursChart } from '@/components/dashboard/weekly-hours-chart';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { useHealth } from '@/hooks/use-health';
import { cn } from '@/lib/utils';

const recentEntries = [
  { task: 'Website redesign', project: 'Acme Corp', duration: '2h 15m', time: 'Today, 2:40 PM' },
  { task: 'API integration', project: 'Platform', duration: '1h 30m', time: 'Today, 11:00 AM' },
  { task: 'Sprint planning', project: 'Internal', duration: '45m', time: 'Yesterday' },
  { task: 'Client standup', project: 'Acme Corp', duration: '30m', time: 'Yesterday' },
];

const activeProjects = [
  { name: 'Website redesign', progress: 72, hours: '24.5h' },
  { name: 'Mobile app v2', progress: 45, hours: '18h' },
  { name: 'Q2 reporting', progress: 28, hours: '6.5h' },
];

function getGreeting() {
  const hour = new Date().getHours();
  if (hour < 12) return 'Good morning';
  if (hour < 17) return 'Good afternoon';
  return 'Good evening';
}

function formatDate() {
  return new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
  });
}

export function DashboardPage() {
  const { data: health, isError: healthError, isLoading: healthLoading } = useHealth();

  return (
    <div className="space-y-8">
      <motion.header
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between"
      >
        <div>
          <p className="text-sm font-medium text-primary">{formatDate()}</p>
          <h1 className="mt-1 text-3xl font-bold tracking-tight">
            {getGreeting()}
            <span className="text-gradient"> — here&apos;s your week</span>
          </h1>
          <p className="mt-2 max-w-xl text-sm text-muted-foreground">
            Track time, review timesheets, and keep projects on schedule from one place.
          </p>
        </div>
        <div className="flex shrink-0 flex-wrap gap-2">
          <Button
            variant="outline"
            className="h-10 rounded-xl border-border/80 bg-white/80 shadow-sm"
            asChild
          >
            <Link to="/timesheets">
              <Calendar className="mr-2 h-4 w-4" />
              Timesheets
            </Link>
          </Button>
          <Button className="h-10 gap-2 rounded-xl">
            <Play className="h-4 w-4 fill-current" />
            Start timer
          </Button>
        </div>
      </motion.header>

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard
          title="Hours this week"
          value="32.5h"
          subtitle="Goal: 40h"
          icon={Clock}
          trend={{ value: '+12% vs last week', positive: true }}
          accent="violet"
          delay={0.05}
        />
        <StatCard
          title="Billable"
          value="28h"
          subtitle="86% of total"
          icon={CheckCircle2}
          trend={{ value: '+4h', positive: true }}
          accent="cyan"
          delay={0.1}
        />
        <StatCard
          title="Pending approval"
          value="2"
          subtitle="Timesheets"
          icon={Timer}
          accent="amber"
          delay={0.15}
        />
        <StatCard
          title="Active projects"
          value="6"
          subtitle="2 due this week"
          icon={FolderKanban}
          accent="fuchsia"
          delay={0.2}
        />
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <Card className="lg:col-span-2">
          <CardHeader className="flex flex-row items-center justify-between space-y-0">
            <div>
              <CardTitle>Weekly hours</CardTitle>
              <CardDescription>Logged time by day</CardDescription>
            </div>
            <Button variant="ghost" size="sm" className="rounded-lg text-primary" asChild>
              <Link to="/reports">
                View reports
                <ArrowUpRight className="ml-1 h-3.5 w-3.5" />
              </Link>
            </Button>
          </CardHeader>
          <CardContent>
            <WeeklyHoursChart />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-[oklch(58%_0.26_285)] to-[oklch(72%_0.16_195)]">
                <Plus className="h-4 w-4 text-white" />
              </span>
              <div>
                <CardTitle>Quick log</CardTitle>
                <CardDescription>Add a time entry</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="quick-project">Project</Label>
              <Select id="quick-project" defaultValue="">
                <option value="" disabled>
                  Select project
                </option>
                <option value="acme">Acme Corp — Website redesign</option>
                <option value="platform">Platform — API integration</option>
                <option value="internal">Internal — Sprint planning</option>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="quick-task">Task</Label>
              <Input id="quick-task" placeholder="What did you work on?" />
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-2">
                <Label htmlFor="quick-duration">Duration</Label>
                <Input id="quick-duration" placeholder="1h 30m" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="quick-date">Date</Label>
                <Input id="quick-date" type="date" />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="quick-notes">Notes</Label>
              <Textarea id="quick-notes" placeholder="Optional context..." rows={2} />
            </div>
            <Button className="h-10 w-full rounded-xl bg-gradient-to-r from-[oklch(58%_0.26_285)] to-[oklch(65%_0.18_200)] text-white hover:opacity-95">
              Log time
            </Button>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <Card className="lg:col-span-2">
          <CardHeader className="flex flex-row items-center justify-between space-y-0">
            <div>
              <CardTitle>Recent time entries</CardTitle>
              <CardDescription>Your latest logged work</CardDescription>
            </div>
            <Button variant="outline" size="sm" className="rounded-lg bg-white/80" asChild>
              <Link to="/time-entries">View all</Link>
            </Button>
          </CardHeader>
          <CardContent className="p-0">
            <ul className="divide-y divide-border/60">
              {recentEntries.map((entry, i) => (
                <motion.li
                  key={entry.task + entry.time}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.25 + i * 0.05 }}
                  className="flex items-center justify-between gap-4 px-6 py-4 transition-colors hover:bg-surface-subtle/80"
                >
                  <div className="min-w-0">
                    <p className="font-medium truncate">{entry.task}</p>
                    <p className="text-sm text-muted-foreground">{entry.project}</p>
                  </div>
                  <div className="shrink-0 text-right">
                    <p className="font-semibold tabular-nums">{entry.duration}</p>
                    <p className="text-xs text-muted-foreground">{entry.time}</p>
                  </div>
                </motion.li>
              ))}
            </ul>
          </CardContent>
        </Card>

        <div className="space-y-6">
          <Card className="overflow-hidden border-primary/20 bg-gradient-to-br from-[oklch(58%_0.26_285/0.06)] to-[oklch(72%_0.16_195/0.04)]">
            <CardContent className="p-5">
              <div className="flex items-start gap-3">
                <span className="relative flex h-3 w-3 shrink-0 mt-1.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex h-3 w-3 rounded-full bg-emerald-500" />
                </span>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-muted-foreground">Running timer</p>
                  <p className="mt-1 text-2xl font-bold tabular-nums tracking-tight">01:24:08</p>
                  <p className="mt-1 truncate text-sm text-foreground">Website redesign — UI components</p>
                  <div className="mt-4 flex gap-2">
                    <Button size="sm" variant="outline" className="rounded-lg bg-white/90">
                      Pause
                    </Button>
                    <Button size="sm" className="rounded-lg bg-red-500/90 text-white hover:bg-red-600">
                      Stop
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Sparkles className="h-4 w-4 text-primary" />
                AI assistant
              </CardTitle>
              <CardDescription>Timesheet suggestions</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                3 gaps detected in your week. Review AI-drafted entries before submitting.
              </p>
              <Button variant="outline" className="mt-4 w-full rounded-xl bg-white/80" size="sm">
                Review suggestions
              </Button>
            </CardContent>
          </Card>

          <Card variant="subtle">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm">System</CardTitle>
            </CardHeader>
            <CardContent>
              {healthLoading && (
                <p className="text-sm text-muted-foreground">Checking API...</p>
              )}
              {!healthLoading && !healthError && (
                <div className="flex items-center gap-2 text-sm">
                  <span className="h-2 w-2 rounded-full bg-emerald-500" />
                  <span className="font-medium text-emerald-700">API {health?.status}</span>
                </div>
              )}
              {healthError && (
                <p className="text-xs text-muted-foreground">
                  Backend offline — start API for live data.
                </p>
              )}
            </CardContent>
          </Card>
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Project progress</CardTitle>
          <CardDescription>Hours logged against active initiatives</CardDescription>
        </CardHeader>
        <CardContent className="space-y-5">
          {activeProjects.map((project, i) => (
            <div key={project.name} className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span className="font-medium">{project.name}</span>
                <span className="tabular-nums text-muted-foreground">{project.hours}</span>
              </div>
              <div className="h-2 overflow-hidden rounded-full bg-muted">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${project.progress}%` }}
                  transition={{ duration: 0.8, delay: 0.3 + i * 0.1 }}
                  className={cn(
                    'h-full rounded-full bg-gradient-to-r from-[oklch(58%_0.26_285)] to-[oklch(72%_0.16_195)]',
                  )}
                />
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}
