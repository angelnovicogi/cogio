import type { PrismaClient } from '@prisma/client';

export class UsersRepository {
  constructor(private readonly _prisma: PrismaClient) {}

  async findAll() {
    void this._prisma;
    return [];
  }
}
