import type { ProjectsRepository } from './projects.repository.js';

export class ProjectsService {
  constructor(private readonly repository: ProjectsRepository) {}

  async list() {
    return this.repository.findAll();
  }
}
