import { processPhoto } from '../../../lib/utils/DispatchUtils/photoProcessor';
import { describe, it, expect, jest } from '@jest/globals';

describe('processPhoto', () => {
  it('should return empty object on invalid photo url', async () => {
    const result = await processPhoto('invalid_url');
    console.log('[photoProcessor.test] Metadata:', result);
    expect(result).toEqual({});
  });
});
