
import { useEffect, useState } from 'react';
import { supabase } from '../../lib/supabaseClient';

const HookPhotoReview = ({ dispatchId }: { dispatchId: string }) => {
  const [photos, setPhotos] = useState<any[]>([]);

  useEffect(() => {
    const fetchPhotos = async () => {
      const { data, error } = await supabase.from('dispatch_photos').select('*').eq('dispatch_id', dispatchId);
      if (!error) setPhotos(data);
    };
    fetchPhotos();
  }, [dispatchId]);

  return (
    <div>
      <h3>Hook Photo Review</h3>
      {photos.map((photo, idx) => (
        <div key={idx}>
          <img src={photo.photo_url} alt="Hook" style={{ width: '200px' }} />
          <p>Uploaded: {new Date(photo.uploaded_at).toLocaleString()}</p>
        </div>
      ))}
    </div>
  );
};

export default HookPhotoReview;
