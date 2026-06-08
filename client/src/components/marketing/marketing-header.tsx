import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { CogioLogo } from '@/components/brand/cogio-logo';
import { Button } from '@/components/ui/button';
const navLinks = [
  { href: '#features', label: 'Features' },
  { href: '#how-it-works', label: 'How it works' },
  { href: '#get-started', label: 'Get started' },
];

export function MarketingHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6"
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between rounded-2xl glass-strong px-4 py-3 sm:px-6">
        <CogioLogo href="/" onDark wordmarkClassName="text-white" />

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-ink-muted transition-colors hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <Button variant="ghost" asChild className="text-ink-muted hover:bg-white/10 hover:text-white">
            <Link to="/login">Log in</Link>
          </Button>
          <Button asChild>
            <Link to="/signup">Get started</Link>
          </Button>
        </div>

        <button
          type="button"
          className="rounded-lg p-2 text-white md:hidden"
          onClick={() => setMobileOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <motion.div
        initial={false}
        animate={{ height: mobileOpen ? 'auto' : 0, opacity: mobileOpen ? 1 : 0 }}
        className="mx-auto mt-2 max-w-6xl overflow-hidden rounded-2xl glass-strong md:hidden"
      >
        <nav className="flex flex-col gap-1 p-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="rounded-lg px-3 py-2 text-sm font-medium text-ink-muted hover:bg-white/5 hover:text-white"
            >
              {link.label}
            </a>
          ))}
          <div className="my-2 h-px w-full bg-white/10" />
          <Link
            to="/login"
            onClick={() => setMobileOpen(false)}
            className="rounded-lg px-3 py-2 text-sm font-medium text-white"
          >
            Log in
          </Link>
          <Button asChild className="mt-1 w-full">
            <Link to="/signup" onClick={() => setMobileOpen(false)}>
              Get started
            </Link>
          </Button>
        </nav>
      </motion.div>
    </motion.header>
  );
}
