const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const port = 5000;

// Middleware
app.use(cors()); // Allow cross-origin requests
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

// MongoDB Connection
mongoose.connect('mongodb://localhost:27017/studentDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.error('MongoDB connection error:', err));

// Schema and Model
const dataSchema = new mongoose.Schema({
    name: { type: String, required: true },
    roll: { type: Number, required: true },
    department: { type: String, required: true },
    phone: { type: String, required: true },
    email: { type: String, required: true },
});

const Data = mongoose.model('Data', dataSchema);

// Routes
app.post('/submit', async (req, res) => {
    const { name, roll, department, phone, email } = req.body;

    try {
        const newData = new Data({ name, roll, department, phone, email });
        await newData.save();
        res.status(201).json({ message: 'Data saved successfully!' });
    } catch (err) {
        console.error('Error saving data:', err);
        res.status(500).json({ error: 'Failed to save data' });
    }
});

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
