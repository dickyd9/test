const Category = require('../models/Category');
const Bank = require('../models/Bank');
const Item = require('../models/Item');
const Users = require('../models/Users');

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
            res.render('/admin/signin');
        }
    },

    actionSignin: async (req, res) => {
        try {
            const { username, password } = req.body;
            const user = await URLSearchParams.findOne
        } catch (error){

        }
    },

    viewDashboard: (req, res) => {
        res.render('admin/dashboard/view_dashboard');
    },

    viewCategory: async (req, res) => {
        try {
            const category = await Category.find();
            const alertMessage = req.flash('alertMessage');
            const alertStatus = req.flash('alertStatus');
            const alert = {message: alertMessage, status: alertStatus};
            res.render('admin/category/view_category', { 
                category,
                alert 
            });
        } catch (error) {
            res.redirect('/admin/category');
        }
    },

    addCategory: async (req, res) => {
        const { name } = req.body;
        await Category.create({ name });
        res.redirect('/admin/category');
    },

    viewBank: async (req, res) => {
        const bank = await Bank.find();
        res.render('admin/bank/view_bank', { bank });
    },

    addBank: async (req, res) => {
        const { name } = req.body;
        await Bank.create({ naemBank, nomorRekening, name });
        res.redirect('/admin/bank');
    },

    viewItem: async (req, res) => {
        const item = await Item.find();
        res.render('admin/item/view_item', { item });
    },

    addItem: async (req, res) => {
        const { name } = req.body;
        await Item.create({ name });
        res.redirect('/admin/item');
    },
}