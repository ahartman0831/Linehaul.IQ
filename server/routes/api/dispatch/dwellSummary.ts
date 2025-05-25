
import { Request, Response } from "express";
import { supabaseAdmin } from "../../../lib/supabaseAdmin";

export default async function dwellSummary(req: Request, res: Response) {
    try {
        const { data, error } = await supabaseAdmin.from('dwell_time_records').select("*");
        if (error) throw error;
        res.status(200).json({ data });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: error.message });
    }
}
