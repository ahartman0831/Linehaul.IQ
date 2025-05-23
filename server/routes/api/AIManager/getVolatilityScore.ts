
import { Request, Response } from 'express';
import { supabaseAdmin } from '../../../lib/supabaseAdmin';

export async function getVolatilityScore(req: Request, res: Response): Promise<void> {
  try {
    const { route_id } = req.query;
    const { data, error } = await supabaseAdmin
      .from('route_volatility_scores')
      .select('*')
      .eq('route_id', route_id)
      .single();

    if (error) throw error;

    res.status(200).json(data);
  } catch (err) {
    console.error("Volatility score fetch error:", err);
    res.status(500).json({ error: err.message });
  }
}
