const express = require('express');
const router = express.Router();
const { createTask, listTasks, listTasksByUser } = require('../controllers/tasksController');

router.post('/', createTask);
router.get('/', listTasks);
router.get('/user/:userId', listTasksByUser);

module.exports = router;