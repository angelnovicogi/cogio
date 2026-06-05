import { Navigate, Route, Routes } from 'react-router-dom';
import { AuthLayout } from '@/layouts/auth-layout';
import { DashboardLayout } from '@/layouts/dashboard-layout';
import { MarketingLayout } from '@/layouts/marketing-layout';
import { LoginPage } from '@/pages/auth/login-page';
import { SignupPage } from '@/pages/auth/signup-page';
import { DashboardPage } from '@/pages/dashboard/dashboard-page';
import { LandingPage } from '@/pages/landing/landing-page';
import { OrganizationsPage } from '@/pages/organizations/organizations-page';
import { ProjectsPage } from '@/pages/projects/projects-page';
import { ReportsPage } from '@/pages/reports/reports-page';
import { SettingsPage } from '@/pages/settings/settings-page';
import { TasksPage } from '@/pages/tasks/tasks-page';
import { TimeEntriesPage } from '@/pages/time-entries/time-entries-page';
import { TimesheetsPage } from '@/pages/timesheets/timesheets-page';

export function AppRoutes() {
  return (
    <Routes>
      <Route element={<MarketingLayout />}>
        <Route path="/" element={<LandingPage />} />
      </Route>

      <Route element={<AuthLayout />}>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
      </Route>

      <Route element={<DashboardLayout />}>
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/organizations" element={<OrganizationsPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/tasks" element={<TasksPage />} />
        <Route path="/time-entries" element={<TimeEntriesPage />} />
        <Route path="/timesheets" element={<TimesheetsPage />} />
        <Route path="/reports" element={<ReportsPage />} />
        <Route path="/settings" element={<SettingsPage />} />
      </Route>

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
