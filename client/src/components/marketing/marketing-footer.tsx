import { Globe, Mail, MessageCircle, Share2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { CogioLogo } from '@/components/brand/cogio-logo';

const footerLinks = {
  product: [
    { label: 'Features', href: '#features' },
    { label: 'Get started', href: '#get-started' },
    { label: 'Integrations', href: '#how-it-works' },
    { label: 'Changelog', href: '#' },
  ],
  company: [
    { label: 'About', href: '#' },
    { label: 'Careers', href: '#' },
    { label: 'Blog', href: '#' },
    { label: 'Contact', href: 'mailto:hello@cogio.app' },
  ],
  legal: [
    { label: 'Privacy', href: '#' },
    { label: 'Terms', href: '#' },
    { label: 'Security', href: '#' },
    { label: 'GDPR', href: '#' },
  ],
};

const social = [
  { icon: MessageCircle, href: '#', label: 'Community' },
  { icon: Share2, href: '#', label: 'Share' },
  { icon: Globe, href: '#', label: 'Website' },
  { icon: Mail, href: 'mailto:hello@cogio.app', label: 'Email' },
];

export function MarketingFooter() {
  return (
    <footer className="relative border-t border-white/10 bg-[oklch(8%_0.04_270)]">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[oklch(68%_0.26_285/0.5)] to-transparent" />
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <CogioLogo href="/" onDark wordmarkClassName="text-white" />
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-ink-muted">
              AI-powered time tracking and workforce management. Track projects, approve timesheets,
              and let intelligence handle the busywork.
            </p>
            <div className="mt-6 flex gap-3">
              {social.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 text-ink-muted transition-colors hover:border-white/20 hover:bg-white/5 hover:text-white"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <FooterColumn title="Product" links={footerLinks.product} />
          <FooterColumn title="Company" links={footerLinks.company} />
          <FooterColumn title="Legal" links={footerLinks.legal} />
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
          <p className="text-sm text-ink-muted">
            © {new Date().getFullYear()} Cogio. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-ink-muted">
            <Link to="/login" className="transition-colors hover:text-white">
              Log in
            </Link>
            <Link to="/signup" className="transition-colors hover:text-white">
              Sign up
            </Link>
            <span className="hidden sm:inline">·</span>
            <span>Built for modern teams</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[];
}) {
  return (
    <div>
      <h3 className="text-sm font-semibold uppercase tracking-wider text-white/90">{title}</h3>
      <ul className="mt-4 space-y-3">
        {links.map((link) => (
          <li key={link.label}>
            <a
              href={link.href}
              className="text-sm text-ink-muted transition-colors hover:text-white"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
