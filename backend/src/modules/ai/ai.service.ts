import OpenAI from 'openai';
import { env } from '../../config/env.js';
import type { AiRepository } from './ai.repository.js';

export class AiService {
  private readonly client: OpenAI | null;

  constructor(private readonly _repository: AiRepository) {
    this.client = env.OPENAI_API_KEY
      ? new OpenAI({ apiKey: env.OPENAI_API_KEY })
      : null;
  }

  async list() {
    return this._repository.findAll();
  }

  /** Placeholder for AI Timesheet Assistant — business logic TBD */
  async suggestTimesheetEntries(_input: { userId: string; weekStartDate: string }) {
    if (!this.client) {
      return {
        enabled: false,
        suggestions: [],
        message: 'OpenAI API key not configured',
      };
    }

    return {
      enabled: true,
      suggestions: [],
      message: 'AI Timesheet Assistant placeholder',
    };
  }
}
