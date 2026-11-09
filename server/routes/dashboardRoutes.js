const router = require('express').Router();
const { requireAdmin } = require('../middleware/authMiddleware');
const c = require('../controllers/dashboardController');
router.get('/', requireAdmin, c.summary);
module.exports = router;
