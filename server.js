const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 8080;

// Middleware
app.use(express.json());
app.use(express.static(path.join(__dirname))); // Serve static files from root

// MongoDB Connection (Reuse your existing URI)
const MONGODB_URI = process.env.MONGODB_URI;
if (MONGODB_URI) {
    mongoose.connect(MONGODB_URI)
        .then(() => console.log('Connected to MongoDB for Node.js Server'))
        .catch(err => console.error('MongoDB Connection Error:', err));
}

// Lead Schema (Matches your existing model)
const LeadSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: String,
    websiteType: String,
    createdAt: { type: Date, default: Date.now }
});
const Lead = mongoose.models.Lead || mongoose.model('Lead', LeadSchema);

// API Route for Leads (to support the HTML version)
app.post('/api/leads', async (req, res) => {
    try {
        const lead = await Lead.create(req.body);
        res.status(201).json({ success: true, lead });
    } catch (err) {
        console.error('Lead Submission Error:', err);
        res.status(500).json({ error: 'Failed to save lead' });
    }
});

// Serve the index.html for all other routes
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Node.js Server is running on port ${PORT}`);
});
