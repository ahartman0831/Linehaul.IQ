
import { useEffect, useState } from 'react';
import { supabase } from '../../lib/supabaseClient';

const PhotoValidationCard = ({ photoId }: { photoId: string }) => {
  const [score, setScore] = useState<any>(null);

  useEffect(() => {
    const fetchScore = async () => {
      const { data, error } = await supabase.from('photo_scores').select('*').eq('photo_id', photoId).single();
      if (!error) setScore(data);
    };
    fetchScore();
  }, [photoId]);

  if (!score) return <p>Loading...</p>;

  return (
    <div>
      <h3>Hook Photo Score</h3>
      <p>Score: {score.score}</p>
      <pre>{JSON.stringify(score.issues, null, 2)}</pre>
    </div>
  );
};

export default PhotoValidationCard;
