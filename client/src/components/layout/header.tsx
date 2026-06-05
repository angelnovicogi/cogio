import { Bell, Search } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useAuthStore } from '@/store/auth-store';

export function Header() {
  const user = useAuthStore((s) => s.user);

  return (
    <header className="sticky top-0 z-40 flex h-[4.25rem] items-center justify-between gap-4 border-b border-border/70 bg-white/70 px-6 backdrop-blur-xl lg:px-8">
      <div className="relative w-full max-w-lg">
        <Search className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <Input
          className="h-11 rounded-xl bg-white/90 pl-10 shadow-sm"
          placeholder="Search projects, tasks, time entries..."
        />
      </div>
      <div className="flex items-center gap-2">
        <Button
          variant="ghost"
          size="icon"
          className="h-10 w-10 rounded-xl hover:bg-surface-subtle"
          aria-label="Notifications"
        >
          <Bell className="h-4 w-4" />
        </Button>
        <div className="flex items-center gap-3 rounded-xl border border-border/60 bg-white/80 py-1.5 pl-1.5 pr-4 shadow-sm">
          <Avatar className="h-8 w-8">
            {user?.avatarUrl ? <AvatarImage src={user.avatarUrl} alt="" /> : null}
            <AvatarFallback className="bg-gradient-to-br from-[oklch(58%_0.26_285)] to-[oklch(72%_0.16_195)] text-xs text-white">
              {user ? `${user.firstName[0]}${user.lastName[0]}` : 'CG'}
            </AvatarFallback>
          </Avatar>
          <div className="hidden text-sm sm:block">
            <p className="font-medium leading-none">
              {user ? `${user.firstName} ${user.lastName}` : 'Guest'}
            </p>
            <p className="mt-0.5 text-xs text-muted-foreground">{user?.email ?? 'Not signed in'}</p>
          </div>
        </div>
      </div>
    </header>
  );
}
