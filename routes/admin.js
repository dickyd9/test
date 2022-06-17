const router = require('express').Router();
const adminController = require('../controllers/adminController');

router.get('/dashboard', adminController.viewDashboard);

router.get('/category', adminController.viewCategory);
router.post('/category', adminController.viewCategory);

router.get('/bank', adminController.viewBank);
router.post('/bank', adminController.addBank);

router.get('/item', adminController.viewItem);
router.post('/item', adminController.addItem);


module.exports = router;