const Habit = require('../models/habitModel');

exports.getAllHabits = async (req, res) => {
  try {
    const habits = await Habit.find();
    res.render('index', { habits });
  } catch (err) {
    res.status(500).send(err.message);
  }
};

