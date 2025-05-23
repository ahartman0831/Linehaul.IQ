import { analyzeHookPhoto } from '../../../routes/gpt/reviewHookPhoto';
import { describe, it, expect, jest } from '@jest/globals';

jest.mock('openai', () => ({
  OpenAI: jest.fn().mockImplementation(() => ({
    chat: {
      completions: {
        create: (jest.fn() as any).mockResolvedValue({
          choices: [{ message: { content: 'Mocked GPT feedback' } }]
        })
      }
    }
  }))
}));

describe('analyzeHookPhoto', () => {
  it('should return a string with GPT feedback', async () => {
    const result = await analyzeHookPhoto('photo_url', {});
    expect(typeof result).toBe('string');
  }, 10000);
});
