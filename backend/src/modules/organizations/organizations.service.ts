import type { OrganizationsRepository } from './organizations.repository.js';

export class OrganizationsService {
  constructor(private readonly repository: OrganizationsRepository) {}

  async list() {
    return this.repository.findAll();
  }
}
