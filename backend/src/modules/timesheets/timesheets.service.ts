import type { TimesheetsRepository } from './timesheets.repository.js';

export class TimesheetsService {
  constructor(private readonly repository: TimesheetsRepository) {}

  async list() {
    return this.repository.findAll();
  }
}
