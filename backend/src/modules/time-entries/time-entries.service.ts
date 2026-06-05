import type { TimeEntriesRepository } from './time-entries.repository.js';

export class TimeEntriesService {
  constructor(private readonly repository: TimeEntriesRepository) {}

  async list() {
    return this.repository.findAll();
  }
}
