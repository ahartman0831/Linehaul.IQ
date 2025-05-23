import { supabase } from '@/lib/supabaseClient';

// Generates a signed URL for a photo in the 'dispatch-photos' bucket
export async function getSignedPhotoUrl(path: string): Promise<string | null> {
  const { data, error } = await supabase
    .storage
    .from('dispatch-photos')
    .createSignedUrl(path, 3600); // 1 hour expiry

  if (error) {
    console.error('[getSignedPhotoUrl] Error generating signed URL:', error.message);
    return null;
  }

  return data.signedUrl;
}
