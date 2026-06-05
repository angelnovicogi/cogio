import type { RolesRepository } from './roles.repository.js';

export class RolesService {
  constructor(private readonly repository: RolesRepository) {}

  async list() {
    return this.repository.findAll();
  }
}
