import dbConnect from "../../../../lib/mongodb";
import Lead from "../../../../models/Lead";
import fs from 'fs/promises';
import path from 'path';

import jwt from 'jsonwebtoken';
import { cookies } from 'next/headers';

export async function GET(request) {
    const cookieStore = cookies();
    const token = cookieStore.get('auth_token')?.value;

    if (!token) {
        return new Response(JSON.stringify({ error: "Unauthorized" }), { status: 401 });
    }

    try {
        jwt.verify(token, process.env.JWT_SECRET || 'fallback_secret');
    } catch (err) {
        return new Response(JSON.stringify({ error: "Unauthorized" }), { status: 401 });
    }

    let allLeads = [];

    // 1. Try to get leads from Local File first (most reliable in this environment)
    try {
        const filePath = path.join(process.cwd(), 'leads.json');
        const fileData = await fs.readFile(filePath, 'utf8');
        allLeads = JSON.parse(fileData);
    } catch (e) {
        // File doesn't exist yet, that's fine
    }

    // 2. Try to get leads from MongoDB and merge
    try {
        await dbConnect();
        const dbLeads = await Lead.find({}).sort({ createdAt: -1 });

        // Merge and remove duplicates by ID if necessary (simple concat here as they have different ID formats)
        const dbLeadsPlain = JSON.parse(JSON.stringify(dbLeads));
        allLeads = [...allLeads, ...dbLeadsPlain].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

        return new Response(JSON.stringify(allLeads), { status: 200 });
    } catch (error) {
        console.error('Database unreachable, returning local leads only:', error.message);
        // If DB fails, still return whatever we found locally
        return new Response(JSON.stringify(allLeads), { status: 200 });
    }
}
