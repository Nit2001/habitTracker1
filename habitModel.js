const mongoose = require('mongoose');

const habitSchema = new mongoose.Schema({
  name: { type: String, required: true },
  status: { type: String, enum: ['Done', 'Not done', 'None'], default: 'None' },
  dates: [{ type: Date, default: Date.now }]
});

const Habit = mongoose.model('Habit', habitSchema);

module.exports = Habit;
