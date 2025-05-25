
import { Request, Response } from 'express';
import { supabaseAdmin } from '../../../lib/supabaseAdmin';

export default async function payrollSummary(req: Request, res: Response) {
  try {
    const { data, error } = await supabaseAdmin.from('payroll_records').select('*');
    if (error) throw error;

    res.status(200).json({ data });
  } catch (error: any) {
    console.error('[payrollSummary] Error:', error.message);
    res.status(500).json({ error: error.message });
  }
}
