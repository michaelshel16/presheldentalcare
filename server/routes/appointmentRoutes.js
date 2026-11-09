const router = require('express').Router();
const c = require('../controllers/appointmentController');
const { requireAdmin } = require('../middleware/authMiddleware');
router.post('/', c.create);
router.get('/status/:id', c.publicStatus);
router.get('/admin', requireAdmin, c.adminList);
router.patch('/admin/:id', requireAdmin, c.adminUpdate);
module.exports = router;
