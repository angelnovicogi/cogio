import type { PrismaClient } from '@prisma/client';
import { ROLE_ADMIN } from '../../constants/roles.js';

export class AdminRepository {
  constructor(private readonly prisma: PrismaClient) {}

  async findUserByEmail(email: string) {
    return this.prisma.user.findUnique({
      where: { email },
      include: { role: true },
    });
  }

  async getStats() {
    const now = new Date();
    const sevenDaysAgo = new Date(now);
    sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);
    const thirtyDaysAgo = new Date(now);
    thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);

    const [totalUsers, totalOrganizations, newUsersLast7Days, newUsersLast30Days] =
      await Promise.all([
        this.prisma.user.count(),
        this.prisma.organization.count(),
        this.prisma.user.count({ where: { createdAt: { gte: sevenDaysAgo } } }),
        this.prisma.user.count({ where: { createdAt: { gte: thirtyDaysAgo } } }),
      ]);

    return { totalUsers, totalOrganizations, newUsersLast7Days, newUsersLast30Days };
  }

  async findAllUsers() {
    return this.prisma.user.findMany({
      orderBy: { createdAt: 'desc' },
      include: {
        role: { select: { id: true, name: true } },
        organization: { select: { id: true, name: true } },
      },
    });
  }

  async findUserById(id: string) {
    return this.prisma.user.findUnique({
      where: { id },
      include: {
        role: { select: { id: true, name: true } },
        organization: { select: { id: true, name: true } },
        _count: {
          select: { timeEntries: true, timesheets: true, assignedTasks: true },
        },
      },
    });
  }

  async deleteUser(id: string) {
    const user = await this.prisma.user.findUnique({
      where: { id },
      include: { role: true },
    });
    if (!user) return null;
    if (user.role.name === ROLE_ADMIN) {
      const adminCount = await this.prisma.user.count({
        where: { role: { name: ROLE_ADMIN } },
      });
      if (adminCount <= 1) {
        throw new Error('CANNOT_DELETE_LAST_ADMIN');
      }
    }

    await this.prisma.$transaction([
      this.prisma.timeEntry.deleteMany({ where: { userId: id } }),
      this.prisma.timesheet.deleteMany({ where: { userId: id } }),
      this.prisma.task.updateMany({ where: { assigneeId: id }, data: { assigneeId: null } }),
      this.prisma.user.delete({ where: { id } }),
    ]);

    return user;
  }
}
