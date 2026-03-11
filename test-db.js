const mongoose = require('mongoose');
const uri = "mongodb+srv://naikkoushik4141_db_user:A6ORTfyPjmqhnA2p@cluster0.gh8boxb.mongodb.net/agentforgeai?retryWrites=true&w=majority&appName=Cluster0";

async function test() {
    try {
        console.log("Connecting...");
        await mongoose.connect(uri, { serverSelectionTimeoutMS: 15000 });
        console.log("Connected!");
        const collections = await mongoose.connection.db.listCollections().toArray();
        console.log("Collections:", collections.map(c => c.name));
        process.exit(0);
    } catch (err) {
        console.error("Error:", err.message);
        process.exit(1);
    }
}

test();
