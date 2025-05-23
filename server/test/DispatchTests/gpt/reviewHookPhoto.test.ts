import { analyzeHookPhoto } from '@/routes/gpt/reviewHookPhoto';
import { describe, it, expect, vi } from 'vitest';

vi.mock('openai', () => ({
  OpenAI: vi.fn().mockImplementation(() => ({
    chat: {
      completions: {
        create: vi.fn().mockResolvedValue({
          choices: [{ message: { content: 'Mocked GPT feedback' } }]
        })
      }
    }
  }))
}));

describe('analyzeHookPhoto', () => {
  it('should return a hook photo analysis object', async () => {
    const result = await analyzeHookPhoto('http://fakeurl.com/photo.jpg', {});
    expect(result).toHaveProperty('clarity');
  }, 10000);
});
