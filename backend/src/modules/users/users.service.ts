import type { UsersRepository } from './users.repository.js';

export class UsersService {
  constructor(private readonly repository: UsersRepository) {}

  async list() {
    return this.repository.findAll();
  }
}
