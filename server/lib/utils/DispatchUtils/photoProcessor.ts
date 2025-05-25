// server/lib/utils/DispatchUtils/photoProcessor.ts

import exifr from 'exifr';

export async function processPhoto(photoUrl: string): Promise<any> {
  try {
    console.log('[photoProcessor] Starting EXIF extraction for:', photoUrl);
    const metadata = await exifr.parse(photoUrl);
    console.log('[photoProcessor] EXIF metadata extracted:', metadata);
    return metadata;
  } catch (err) {
    console.error('[photoProcessor] Failed to extract EXIF metadata:', err);
    return {};
  }
}
