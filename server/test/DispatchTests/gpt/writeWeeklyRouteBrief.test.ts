import { generateETAMessage } from '@/routes/gpt/writeWeeklyRouteBrief';
import { describe, it, expect, vi } from 'vitest';

vi.mock('openai', () => ({
  OpenAI: vi.fn().mockImplementation(() => ({
    chat: {
      completions: {
        create: vi.fn().mockResolvedValue({
          choices: [{ message: { content: 'Mocked ETA message' } }]
        })
      }
    }
  }))
}));

describe('generateETAMessage', () => {
  it('should generate a professional ETA message', async () => {
    const msg = await generateETAMessage({ eta: '10:30 AM', reason: 'snow delay' });
    expect(typeof msg).toBe('string');
  }, 10000);
});
