import { apiClient } from '@/api/client';

export async function fetchHealth() {
  const { data } = await apiClient.get<{ status: string }>('/health');
  return data;
}
