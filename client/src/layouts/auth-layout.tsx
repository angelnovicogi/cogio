import { motion } from 'framer-motion';
import { Outlet } from 'react-router-dom';
import { AuthBrandPanel } from '@/components/auth/auth-brand-panel';
import { AuthFormPanel } from '@/components/auth/auth-form-panel';

export function AuthLayout() {
  return (
    <div className="flex min-h-screen">
      <AuthBrandPanel />

      <AuthFormPanel>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="w-full max-w-[420px]"
        >
          <Outlet />
        </motion.div>
      </AuthFormPanel>
    </div>
  );
}
