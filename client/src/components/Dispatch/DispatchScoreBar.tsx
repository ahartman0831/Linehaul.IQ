
import { useEffect, useState } from 'react';
import { supabase } from '../../lib/supabaseClient';

const DispatchScoreBar = ({ photoId }: { photoId: string }) => {
  const [score, setScore] = useState<number | null>(null);

  useEffect(() => {
    const fetchScore = async () => {
      const { data, error } = await supabase.from('photo_scores').select('score').eq('photo_id', photoId).single();
      if (!error && data) setScore(data.score);
    };
    fetchScore();
  }, [photoId]);

  return (
    <div>
      <h3>Photo Hook Score</h3>
      {score !== null ? (
        <div style={{ width: `${score}%`, backgroundColor: score >= 80 ? 'green' : 'red', height: '20px' }}></div>
      ) : <p>Loading...</p>}
    </div>
  );
};

export default DispatchScoreBar;
