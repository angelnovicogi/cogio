import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

interface CogioLogoProps {
  showWordmark?: boolean;
  href?: string;
  className?: string;
}

export function CogioLogo({
  showWordmark = true,
  href = '/dashboard',
  className,
}: CogioLogoProps) {
  const content = (
    <>
      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white/10 ring-1 ring-white/10">
        <img src="/favicon.svg" alt="" className="h-5 w-5 object-contain" />
      </span>
      {showWordmark ? <span className="text-sm font-semibold">Cogio Admin</span> : null}
    </>
  );

  const wrapperClass = cn('inline-flex items-center gap-2.5', className);

  if (href) {
    return <Link to={href} className={wrapperClass}>{content}</Link>;
  }

  return <div className={wrapperClass}>{content}</div>;
}
