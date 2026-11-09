const router = require('express').Router();
const c = require('../controllers/galleryController');
const { requireAdmin } = require('../middleware/authMiddleware');
router.get('/', c.publicList);
router.get('/admin', requireAdmin, c.adminList);
router.post('/admin', requireAdmin, c.adminCreate);
router.patch('/admin/:id', requireAdmin, c.adminUpdate);
router.delete('/admin/:id', requireAdmin, c.adminDelete);
module.exports = router;
