const User = require('../models/User');
const path = require('path');

module.exports = {
    viewSignin: async (req, res) => {
        try {
            const alertMessage = req.flash('alertMessage');
            const alertStatus = req.flash('alertStatus');
            const alert = { message: alertMessage, status: alertStatus };
            res.render('index', {
                alert,
                title: "Admin | Login"
            });
        } catch (error) {
            res.redirect('/admin/signin')
        }
    },

    viewDashboard: (req, res) => {
        res.render('admin/dashboard/view_dashboard', {
            title: "Admin | Dashboard"
        });
    },
    
    viewUser: async (req, res) => {
        const user = await User.find();
        res.render('admin/user/view_user', { user });
    },

    addUser: async (req, res) => {
        const { fullname } = req.body;
        // console.log(username);
        await User.create({ fullname });
        res.redirect('/admin/user');
    },

    viewReport: (req, res) => {
        res.render('admin/report/view_report');
    }
}