
import { Request, Response } from "express";
import { supabaseAdmin } from "../../../lib/supabaseAdmin";

export default async function dwellTracker(req: Request, res: Response) {
    try {
        const { dispatch_id, yard, arrival_time } = req.body;
        const { data, error } = await supabaseAdmin.from('dwell_time_records').insert([{ dispatch_id, yard, arrival_time }]);
        if (error) throw error;
        res.status(200).json({ message: "Dwell record added", data });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: error.message });
    }
}
