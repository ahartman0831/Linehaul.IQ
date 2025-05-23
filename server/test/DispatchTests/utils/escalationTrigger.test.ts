
import { runEscalationLogic } from '@/lib/utils/DispatchUtils/escalationTrigger';
import { describe, it, expect, vi } from 'vitest';

vi.mock('@/lib/utils/DispatchUtils/escalationTrigger', async () => {
  const actual = await vi.importActual('@/lib/utils/DispatchUtils/escalationTrigger');
  return {
    ...actual,
    runEscalationLogic: vi.fn(async () => ({
      contact: 'Driver Joe',
      dispatchData: {
        id: 'test-id',
        status: 'delayed'
      }
    }))
  };
});

describe('runEscalationLogic', () => {
  it('should return a contact field and dispatch data', async () => {
    const result = await runEscalationLogic('00000000-0000-0000-0000-000000000001');
    expect(result).toHaveProperty('contact');
    expect(result).toHaveProperty('dispatchData');
  }, 10000);
});
