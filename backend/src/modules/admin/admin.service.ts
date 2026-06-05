import bcrypt from 'bcrypt';
import type { FastifyInstance } from 'fastify';
import { ROLE_ADMIN } from '../../constants/roles.js';
import type { AdminRepository } from './admin.repository.js';
import { adminLoginSchema } from './admin.schema.js';
import type { AdminJwtPayload, AdminUserDetail, AdminUserListItem } from './admin.types.js';

function toListItem(user: {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  avatarUrl: string | null;
  verified: boolean;
  suspended: boolean;
  createdAt: Date;
  updatedAt: Date;
  role: { id: string; name: string };
  organization: { id: string; name: string };
}): AdminUserListItem {
  return {
    id: user.id,
    email: user.email,
    firstName: user.firstName,
    lastName: user.lastName,
    avatarUrl: user.avatarUrl,
    verified: user.verified,
    suspended: user.suspended,
    role: user.role,
    organization: user.organization,
    createdAt: user.createdAt.toISOString(),
    updatedAt: user.updatedAt.toISOString(),
  };
}

export class AdminService {
  constructor(
    private readonly repository: AdminRepository,
    private readonly app: FastifyInstance,
  ) {}

  async login(body: unknown) {
    const parsed = adminLoginSchema.safeParse(body);
    if (!parsed.success) {
      return { ok: false as const, status: 400, message: 'Invalid credentials payload' };
    }

    const user = await this.repository.findUserByEmail(parsed.data.email);
    if (!user || user.role.name !== ROLE_ADMIN) {
      return { ok: false as const, status: 401, message: 'Invalid email or password' };
    }

    if (user.suspended) {
      return { ok: false as const, status: 403, message: 'Account suspended' };
    }

    const valid = await bcrypt.compare(parsed.data.password, user.passwordHash);
    if (!valid) {
      return { ok: false as const, status: 401, message: 'Invalid email or password' };
    }

    const payload: AdminJwtPayload = {
      sub: user.id,
      email: user.email,
      role: user.role.name,
      organizationId: user.organizationId,
    };

    const accessToken = this.app.jwt.sign(payload);

    return {
      ok: true as const,
      data: {
        accessToken,
        user: {
          id: user.id,
          email: user.email,
          firstName: user.firstName,
          lastName: user.lastName,
          avatarUrl: user.avatarUrl,
          role: user.role.name,
          organizationId: user.organizationId,
        },
      },
    };
  }

  async getStats() {
    return this.repository.getStats();
  }

  async listUsers(): Promise<AdminUserListItem[]> {
    const users = await this.repository.findAllUsers();
    return users.map(toListItem);
  }

  async getUser(id: string): Promise<AdminUserDetail | null> {
    const user = await this.repository.findUserById(id);
    if (!user) return null;
    return {
      ...toListItem(user),
      _count: user._count,
    };
  }

  async deleteUser(id: string) {
    try {
      const deleted = await this.repository.deleteUser(id);
      if (!deleted) return { ok: false as const, status: 404, message: 'User not found' };
      return { ok: true as const, data: { id: deleted.id } };
    } catch (err) {
      if (err instanceof Error && err.message === 'CANNOT_DELETE_LAST_ADMIN') {
        return {
          ok: false as const,
          status: 400,
          message: 'Cannot delete the last admin account',
        };
      }
      throw err;
    }
  }
}
