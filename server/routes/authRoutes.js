const router = require('express').Router();
const controller = require('../controllers/authController');
router.post('/login', controller.login);
router.post('/setup', controller.setup);
module.exports = router;
