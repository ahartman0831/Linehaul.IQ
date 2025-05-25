
import { useEffect, useState } from 'react';
import { supabase } from '../../lib/supabaseClient';
import { useParams } from 'react-router-dom';

const DispatchDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const [dispatch, setDispatch] = useState<any>(null);

  useEffect(() => {
    const fetchDispatch = async () => {
      const { data, error } = await supabase.from('dispatches').select('*').eq('id', id).single();
      if (!error) setDispatch(data);
    };
    fetchDispatch();
  }, [id]);

  if (!dispatch) return <p>Loading...</p>;

  return (
    <div>
      <h3>Dispatch Details</h3>
      <pre>{JSON.stringify(dispatch, null, 2)}</pre>
    </div>
  );
};

export default DispatchDetailPage;
