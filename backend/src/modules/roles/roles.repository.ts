import type { PrismaClient } from '@prisma/client';

export class RolesRepository {
  constructor(private readonly _prisma: PrismaClient) {}

  async findAll() {
    void this._prisma;
    return [];
  }
}
