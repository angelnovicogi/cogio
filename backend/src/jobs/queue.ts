import { Queue } from 'bullmq';
import { env } from '../config/env.js';

const connection = { url: env.REDIS_URL };

export const exampleQueue = new Queue('cogio-example', { connection });
