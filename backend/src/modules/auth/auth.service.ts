import type { AuthRepository } from './auth.repository.js';

export class AuthService {
  constructor(private readonly repository: AuthRepository) {}

  async list() {
    return this.repository.findAll();
  }
}
