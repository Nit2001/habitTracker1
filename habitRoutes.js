const express = require('express');
const habitController = require('../controllers/habitController');

const router = express.Router();

router.get('/', habitController.getAllHabits);
router.post('/', habitController.createHabit);
router.get('/:id', habitController.getHabitById);
router.put('/:id', habitController.updateHabit);
router.delete('/:id', habitController.deleteHabit);

module.exports = router;
