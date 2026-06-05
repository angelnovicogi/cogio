import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

const sizeMap = {
  sm: { box: 'h-8 w-8 rounded-lg', img: 'h-5 w-5' },
  md: { box: 'h-9 w-9 rounded-xl', img: 'h-5 w-5' },
  lg: { box: 'h-10 w-10 rounded-xl', img: 'h-6 w-6' },
};

interface CogioLogoProps {
  size?: keyof typeof sizeMap;
  showWordmark?: boolean;
  wordmarkClassName?: string;
  href?: string;
  className?: string;
  /** Subtle backdrop so the mark reads on dark surfaces */
  onDark?: boolean;
}

export function CogioLogo({
  size = 'md',
  showWordmark = true,
  wordmarkClassName,
  href = '/',
  className,
  onDark = false,
}: CogioLogoProps) {
  const s = sizeMap[size];

  const content = (
    <>
      <span
        className={cn(
          'flex shrink-0 items-center justify-center',
          s.box,
          onDark ? 'bg-white/10 ring-1 ring-white/10' : 'bg-white shadow-sm ring-1 ring-border/60',
        )}
      >
        <img src="/favicon.svg" alt="" className={cn(s.img, 'object-contain')} />
      </span>
      {showWordmark ? (
        <span className={cn('text-lg font-semibold tracking-tight', wordmarkClassName)}>Cogio</span>
      ) : null}
    </>
  );

  if (href) {
    return (
      <Link to={href} className={cn('inline-flex items-center gap-2.5', className)}>
        {content}
      </Link>
    );
  }

  return <div className={cn('inline-flex items-center gap-2.5', className)}>{content}</div>;
}
