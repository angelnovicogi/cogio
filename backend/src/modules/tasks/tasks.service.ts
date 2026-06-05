import type { TasksRepository } from './tasks.repository.js';

export class TasksService {
  constructor(private readonly repository: TasksRepository) {}

  async list() {
    return this.repository.findAll();
  }
}
