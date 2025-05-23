import { generateETAMessage } from '../../../routes/gpt/writeWeeklyRouteBrief';
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

describe('generateETAMessage', () => {
  it('should generate a professional ETA message', async () => {
    const msg = await generateETAMessage({ eta: '10:30 AM', reason: 'snow delay' } as { eta: string; reason: string });
    expect(typeof msg).toBe('string');
  }, 10000);
});
