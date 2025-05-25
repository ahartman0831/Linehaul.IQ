
import { useEffect, useState } from 'react';
import { supabase } from '../../lib/supabaseClient';

const HookScoreFeedbackBox = ({ photoId }: { photoId: string }) => {
  const [score, setScore] = useState<number | null>(null);
  const [feedback, setFeedback] = useState<string>('');

  useEffect(() => {
    const fetchScore = async () => {
      const { data, error } = await supabase.from('photo_scores').select('*').eq('photo_id', photoId).single();
      if (!error && data) {
        setScore(data.score);
        setFeedback(data.feedback || 'No feedback available');
      }
    };
    fetchScore();
  }, [photoId]);

  return (
    <div>
      <h3>Hook Photo Score Feedback</h3>
      {score !== null ? (
        <div>
          <p>Score: {score}</p>
          <p>Feedback: {feedback}</p>
        </div>
      ) : <p>Loading...</p>}
    </div>
  );
};

export default HookScoreFeedbackBox;
