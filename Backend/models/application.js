const mongoose = require('mongoose');

const applicationSchema = new mongoose.Schema({
    clientId: { type: mongoose.Schema.Types.ObjectId, ref: 'Client', required: true },
    visaCategory: { type: String, required: true },
    status: { type: String, enum: ['new', 'incomplete', 'completed'], default: 'new' },
    // Add other fields as needed
});

module.exports = mongoose.model('Application', applicationSchema);
