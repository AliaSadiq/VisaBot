const mongoose = require('mongoose');

const applicationSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    visaCategory: { type: String, required: true },
    status: { type: String, enum: ['new', 'incomplete', 'completed'], default: 'new' },
   
});

module.exports = mongoose.model('Application', applicationSchema);
