const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors'); // Already imported
const bodyParser = require('body-parser');
const authRoutes = require('./routes/auth');
require('dotenv').config();

const app = express();

// --- CORS Configuration ---
// Define options for CORS middleware
const corsOptions = {
  origin: 'http://localhost:3000', // Allow requests only from your React frontend
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE", // Specify allowed HTTP methods
  credentials: true, // If you need to handle cookies or authorization headers
  optionsSuccessStatus: 200 // Return 200 for preflight requests (needed for some browsers)
};

// Apply CORS middleware with options *before* any routes
app.use(cors(corsOptions));

// Explicitly handle preflight requests for all routes
app.options('*', cors(corsOptions));
// --- End CORS Configuration ---


// Middleware (Apply *after* CORS)
// app.use(cors()); // Remove or comment out this old default line
app.use(bodyParser.json());

// Routes (Define *after* CORS and bodyParser)
app.use('/api/auth', authRoutes); // Your authentication routes

// API for paraphrasing (Also needs to be after CORS setup)
app.post('/paraphrase', async (req, res) => {
    const { text, tone } = req.body;

    if (!text || !tone) {
        return res.status(400).json({ message: "Text and tone are required." });
    }

    // This formattedInput doesn't seem to be used, can be removed if not needed
    // const formattedInput = `"${text}" "${tone}"`;

    try {
        // Node.js fetches from Flask server (running on port 5000)
        const flaskResponse = await fetch('http://localhost:5003/paraphrase', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ text, tone })
        });

        // Check if Flask response is OK
        if (!flaskResponse.ok) {
             // Log more details from Flask if possible
            const errorText = await flaskResponse.text(); // Try to get error body
            console.error(`Flask server responded with ${flaskResponse.status}: ${errorText}`);
            throw new Error(`Flask Server Error: ${flaskResponse.statusText}`);
        }

        const responseData = await flaskResponse.json();
        res.json({
            paraphrased_text: responseData.paraphrased_text,
            humanization_score: responseData.humanization_score,
            grammar_score: responseData.grammar_score,
            plagiarism_free_score: responseData.plagiarism_free_score
        });
    } catch (err) {
        console.error("Error in paraphrasing fetch/request:", err); // Log the actual error
        // Avoid sending generic message if possible, maybe log err.message
        res.status(500).json({ message: "Error processing paraphrasing request." });
    }
});


// check Flask server check (Keep this as is for now)
setTimeout(() => {
    console.log("Checking Flask Server Health...");
    fetch('http://127.0.0.1:5000')
        .then(res => {
            if (res.ok) {
                console.log("Flask is running (health check successful)");
            } else {
                console.log(`Flask responded to health check with status: ${res.status}`);
            }
         })
        .catch(err => console.error("Flask server not responding to health check: ", err));
}, 5000);


// MongoDB Connection
const mongoUri = process.env.MONGO_URL || 'mongodb://127.0.0.1:27017/plagdb';
console.log('MongoDB URI:', mongoUri);

mongoose.connect(mongoUri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch((err) => {
        console.error('Error connecting to MongoDB:', err);
        process.exit(1);
    });

// Start Express server (Port is hardcoded to 5001, good)
const port = 5001;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});