
const express = require('express');
const mongoose = require('mongoose');
const { GoogleGenAI } = require('@google/genai');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

// MongoDB Connection (Placeholder URI - typically would be in .env)
const MONGODB_URI = 'mongodb://localhost:27017/uber_replication';
mongoose.connect(MONGODB_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('MongoDB connection error:', err));

// Models
const AdviceSchema = new mongoose.Schema({
  destination: String,
  response: String,
  timestamp: { type: Date, default: Date.now }
});
const Advice = mongoose.model('Advice', AdviceSchema);

const RideSchema = new mongoose.Schema({
  pickup: String,
  dropoff: String,
  timestamp: { type: Date, default: Date.now }
});
const Ride = mongoose.model('Ride', RideSchema);

// Gemini Setup
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

// Routes
app.post('/api/advice', async (req, res) => {
  const { destination } = req.body;
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `You are a helpful Uber travel assistant. Suggest 3 interesting things to do in ${destination} and how Uber can help.`,
    });
    
    const text = response.text;
    
    // Save to MongoDB
    const newAdvice = new Advice({ destination, response: text });
    await newAdvice.save();
    
    res.json({ text });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get('/api/history', async (req, res) => {
  try {
    const history = await Advice.find().sort({ timestamp: -1 }).limit(5);
    res.json(history);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.post('/api/rides', async (req, res) => {
  try {
    const newRide = new Ride(req.body);
    await newRide.save();
    res.status(201).json(newRide);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

const PORT = 3001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
