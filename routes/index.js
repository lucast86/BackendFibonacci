const express = require('express')   
const routes = express.Router()  

const userControllers = require('../controllers/userController')  
const testNumber = require('../middlewares/testNumber')


routes.get('/users', testNumber, userControllers.getUsers) 

module.exports = routes