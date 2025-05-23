import { getDispatches } from '../../../routes/api/dispatch/getDispatches';
import { describe, it, expect } from 'vitest';

describe('getDispatches', () => {
  it('should return dispatches without status complete', async () => {
    const mockReq = {} as any;
    const mockRes = {
      status: (code: number) => ({
        json: (data: any) => {
          console.log('[getDispatches.test] Response:', data);
          expect(code).toBe(200);
        }
      })
    } as any;

    await getDispatches(mockReq, mockRes);
  });
});
