const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const taskRoutes = require('./routes/tasks');

const app = express();
const PORT = process.env.PORT || 5000;

// Используем CORS для разрешения кросс-доменных запросов
app.use(cors());
// Используем body-parser для обработки данных в формате JSON
app.use(bodyParser.json());

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/kanban', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

// Routes
app.use('/api/tasks', taskRoutes);

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

