import { Outlet } from 'react-router-dom';
import { AdminSidebar } from '@/components/layout/admin-sidebar';

export function AdminLayout() {
  return (
    <div className="flex min-h-screen">
      <AdminSidebar />
      <main className="flex-1 overflow-auto p-6 lg:p-8">
        <Outlet />
      </main>
    </div>
  );
}
