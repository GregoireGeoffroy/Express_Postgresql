const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.get('/', userController.getUsernames);
router.get('/new', userController.createUsernameGet);
router.post('/new', userController.createUsernamePost);
router.get('/delete', userController.deleteAllUsernames);

module.exports = router;
