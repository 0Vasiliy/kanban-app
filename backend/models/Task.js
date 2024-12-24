const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String },
    status: { type: String, default: 'New' } // New, In Progress, Completed
});

module.exports = mongoose.model('Task', taskSchema);