import { apiClient } from '@/api/client';
import type { AdminStats, AdminUser, UserDetail, UserListItem } from '@/types/admin';

export async function adminLogin(email: string, password: string) {
  const { data } = await apiClient.post<{
    accessToken: string;
    user: AdminUser;
  }>('/api/admin/auth/login', { email, password });
  return data;
}

export async function fetchAdminStats() {
  const { data } = await apiClient.get<{ data: AdminStats }>('/api/admin/stats');
  return data.data;
}

export async function fetchUsers() {
  const { data } = await apiClient.get<{ data: UserListItem[] }>('/api/admin/users');
  return data.data;
}

export async function fetchUser(id: string) {
  const { data } = await apiClient.get<{ data: UserDetail }>(`/api/admin/users/${id}`);
  return data.data;
}

export async function deleteUser(id: string) {
  const { data } = await apiClient.delete<{ id: string }>(`/api/admin/users/${id}`);
  return data;
}
