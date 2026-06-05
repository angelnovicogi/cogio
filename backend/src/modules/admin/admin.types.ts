export interface AdminJwtPayload {
  sub: string;
  email: string;
  role: string;
  organizationId: string;
}

export interface AdminStats {
  totalUsers: number;
  totalOrganizations: number;
  newUsersLast7Days: number;
  newUsersLast30Days: number;
}

export interface AdminUserListItem {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  avatarUrl: string | null;
  verified: boolean;
  suspended: boolean;
  role: { id: string; name: string };
  organization: { id: string; name: string };
  createdAt: string;
  updatedAt: string;
}

export interface AdminUserDetail extends AdminUserListItem {
  _count: {
    timeEntries: number;
    timesheets: number;
    assignedTasks: number;
  };
}
