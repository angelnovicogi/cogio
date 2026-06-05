import type { PrismaClient } from '@prisma/client';

export class AiRepository {
  constructor(private readonly _prisma: PrismaClient) {}

  async findAll() {
    void this._prisma;
    return [];
  }
}
