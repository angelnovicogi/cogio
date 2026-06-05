import { CogioLogo } from '@/components/brand/cogio-logo';
import { useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { adminLogin } from '@/services/admin-api';
import { useAuthStore } from '@/store/auth-store';

export function LoginPage() {
  const navigate = useNavigate();
  const accessToken = useAuthStore((s) => s.accessToken);
  const setAuth = useAuthStore((s) => s.setAuth);
  const [email, setEmail] = useState('admin@cogio.app');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  if (accessToken) {
    return <Navigate to="/dashboard" replace />;
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      const data = await adminLogin(email, password);
      setAuth(data.user, data.accessToken);
      navigate('/dashboard');
    } catch {
      setError('Invalid email or password, or insufficient privileges.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-background p-6">
      <div
        className="absolute inset-0 bg-gradient-to-br from-[oklch(20%_0.04_285)] via-background to-[oklch(16%_0.035_270)]"
        aria-hidden
      />
      <div
        className="absolute inset-0 bg-[linear-gradient(to_right,oklch(62%_0.24_285/0.12)_1px,transparent_1px),linear-gradient(to_bottom,oklch(62%_0.24_285/0.12)_1px,transparent_1px)] bg-[size:40px_40px]"
        aria-hidden
      />
      <div
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,oklch(58%_0.28_285/0.18),transparent_55%)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-24 top-[12%] h-[380px] w-[380px] rounded-full bg-[oklch(72%_0.16_195/0.12)] blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -left-20 bottom-[8%] h-[320px] w-[320px] rounded-full bg-[oklch(62%_0.24_285/0.14)] blur-3xl"
        aria-hidden
      />

      <div className="relative z-10 w-full max-w-md rounded-2xl border border-border bg-card/95 p-8 shadow-2xl backdrop-blur-sm">
        <div className="mb-8 flex flex-col items-center text-center">
          <CogioLogo href={undefined} showWordmark={false} className="justify-center" />
          <h1 className="mt-4 text-2xl font-bold">Admin sign in</h1>
          <p className="mt-2 text-sm text-muted-foreground">
            Platform administrators only
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <label className="text-sm font-medium" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="h-10 w-full rounded-lg border border-border bg-input px-3 text-sm focus:border-primary/50 focus:outline-none focus:ring-2 focus:ring-primary/20"
              required
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium" htmlFor="password">
              Password
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="h-10 w-full rounded-lg border border-border bg-input px-3 text-sm focus:border-primary/50 focus:outline-none focus:ring-2 focus:ring-primary/20"
              required
            />
          </div>
          {error ? <p className="text-sm text-red-400">{error}</p> : null}
          <button
            type="submit"
            disabled={loading}
            className="h-10 w-full rounded-lg bg-primary font-medium text-primary-foreground transition-opacity hover:opacity-90 disabled:opacity-50"
          >
            {loading ? 'Signing in...' : 'Sign in'}
          </button>
        </form>
      </div>
    </div>
  );
}
