
import { Request, Response } from "express";
import { supabaseAdmin } from "../../../lib/supabaseAdmin";

export default async function sendETA(req: Request, res: Response) {
    try {
        const { dispatch_id, eta, message } = req.body;
        const { data, error } = await supabaseAdmin.from('eta_messages').insert([{ dispatch_id, eta, message }]);
        if (error) throw error;
        res.status(200).json({ message: "ETA message logged", data });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: error.message });
    }
}
