const router = require('express').Router();
const adminController = require('../controllers/adminController');

router.get('/signin', adminController.viewSignin);
router.get('/dashboard', adminController.viewDashboard);

router.get('/user', adminController.viewUser);
router.post('/user', adminController.addUser);

router.get('/report', adminController.viewReport);

module.exports = router;