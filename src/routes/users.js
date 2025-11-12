const express = require('express');
const router = express.Router();
const { createUser, listUsers, getUserById } = require('../controllers/usersController');

router.post('/', createUser);
router.get('/', listUsers);
router.get('/:id', getUserById);

module.exports = router;// Controladores de usuarios listos
