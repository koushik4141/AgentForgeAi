import dbConnect from "../../../lib/mongodb";
import Lead from "../../../models/Lead";
import fs from 'fs/promises';
import path from 'path';

export async function POST(request) {
    const data = await request.json();
    const { name, email, phone, websiteType } = data;

    if (!name || !email) {
        return new Response(JSON.stringify({ error: "Missing name or email" }), { status: 400 });
    }

    try {
        await dbConnect();
        const lead = await Lead.create({ name, email, phone, websiteType });
        return new Response(JSON.stringify({ success: true, lead }), { status: 201 });
    } catch (error) {
        console.error('MongoDB Error, falling back to local file storage:', error.message);

        try {
            const filePath = path.join(process.cwd(), 'leads.json');
            let leads = [];
            try {
                const fileData = await fs.readFile(filePath, 'utf8');
                leads = JSON.parse(fileData);
            } catch (e) {
                // File doesn't exist yet or is invalid
            }

            const newLead = {
                ...data,
                createdAt: new Date().toISOString(),
                _id: 'local_' + Date.now()
            };

            leads.unshift(newLead);
            await fs.writeFile(filePath, JSON.stringify(leads, null, 2));

            return new Response(JSON.stringify({
                success: true,
                message: "Saved locally (Database offline)",
                lead: newLead
            }), { status: 201 });
        } catch (fsError) {
            console.error('Local storage failed:', fsError.message);
            return new Response(JSON.stringify({
                error: "Internal Server Error",
                message: "Both Database and local storage failed"
            }), { status: 500 });
        }
    }
}
