import { Outlet } from 'react-router-dom';
import { MarketingFooter } from '@/components/marketing/marketing-footer';
import { MarketingHeader } from '@/components/marketing/marketing-header';

export function MarketingLayout() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-mesh text-white">
      <div
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,oklch(100%_0_0/0.05)_1px,transparent_1px),linear-gradient(to_bottom,oklch(100%_0_0/0.05)_1px,transparent_1px)] bg-[size:40px_40px]"
        aria-hidden
      />
      <MarketingHeader />
      <main className="relative z-10">
        <Outlet />
      </main>
      <div className="relative z-10">
        <MarketingFooter />
      </div>
    </div>
  );
}
