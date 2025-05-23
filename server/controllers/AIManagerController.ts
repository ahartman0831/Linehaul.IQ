import { Request, Response } from 'express';
import { writeWeeklyRouteBrief } from '../services/AIManagerService';

// ...existing code...

export async function getRouteBrief(query: any) {
  // Mock implementation for testing
  return { summary: 'This is a mock route brief.', query };
}

// ...existing code...