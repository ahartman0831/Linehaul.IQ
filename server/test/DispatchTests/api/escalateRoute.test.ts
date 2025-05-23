import { escalateRoute } from '../../../routes/api/dispatch/escalateRoute';
import { describe, it, expect, jest } from '@jest/globals';
import { Request, Response } from 'express';

import type { runEscalationLogic as runEscalationLogicType } from '../../../lib/utils/DispatchUtils/escalationTrigger';

jest.mock('../../../lib/utils/DispatchUtils/escalationTrigger', () => {
  const mockReturn: ReturnType<typeof import('../../../lib/utils/DispatchUtils/escalationTrigger')['runEscalationLogic']> = Promise.resolve({
    contact_name: 'Sam Manager',
    contact_phone: '555-123-4567',
    dispatchData: {
      id: '00000000-0000-0000-0000-000000000001',
      route_name: 'FXG123A',
      trailer_number: 'TR123456',
      team_lead_name: 'John TL',
      team_lead_phone: '555-222-3333',
      assigned_driver: 'Alex Driver',
      expected_hook_time: '2024-05-22T04:00:00Z',
      actual_hook_time: '2024-05-22T04:30:00Z',
      delay_reason: 'gate congestion',
      is_adhoc: false
    }
  } as any);
  return {
    runEscalationLogic: jest.fn().mockReturnValue(mockReturn)
  };
});

describe('escalateRoute', () => {
  it('should log escalation summary', async () => {
    const req = { body: { dispatchId: '00000000-0000-0000-0000-000000000001' } } as Request;
    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn()
    } as unknown as Response;

    await escalateRoute(req, res);
    expect(res.status).toHaveBeenCalledWith(200);
  }, 10000);
});
