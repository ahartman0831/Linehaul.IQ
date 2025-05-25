
import { useState, useEffect } from 'react';
import { supabase } from '../../lib/supabaseClient';

const HookSlipOCRViewer = () => {
  const [slips, setSlips] = useState<any[]>([]);

  useEffect(() => {
    const fetchSlips = async () => {
      const { data, error } = await supabase.from('hook_slips').select('*').order('uploaded_at', { ascending: false });
      if (!error) setSlips(data);
    };
    fetchSlips();
  }, []);

  return (
    <div>
      <h3>Hook Slip OCR Viewer</h3>
      {slips.map((slip, idx) => (
        <div key={idx}>
          <p><strong>Dispatch:</strong> {slip.dispatch_id}</p>
          <pre>{JSON.stringify(slip.extracted_text, null, 2)}</pre>
        </div>
      ))}
    </div>
  );
};

export default HookSlipOCRViewer;
