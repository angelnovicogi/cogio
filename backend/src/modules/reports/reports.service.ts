import type { ReportsRepository } from './reports.repository.js';

export class ReportsService {
  constructor(private readonly repository: ReportsRepository) {}

  async list() {
    return this.repository.findAll();
  }
}
