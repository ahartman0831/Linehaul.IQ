import request from 'supertest';
import { app } from '../../../index'; // adjust path based on how you export app
import { logHookPhotoSecure } from '../dispatch/logHookPhotoSecure';
import { server } from 'typescript';

jest.mock('../../../lib/supabaseAdmin', () => ({
  supabaseAdmin: {
    from: () => ({
      insert: async () => ({ data: [{}], error: null })
    })
  }
}));

describe('POST /api/ai/ingestMessage', () => {
  it('should ingest a message and return 200', async () => {
    const res = await request(app)
      .post('/api/ai/ingestMessage')
      .send({ message: "Test message from driver" });

    expect(res.status).toBe(200);
    expect(res.body).toHaveProperty("status");
  });

  it('works', () => {
    expect(true).toBe(true);
  });
});

afterAll(() => server.close());
