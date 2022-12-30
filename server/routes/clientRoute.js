const express = require('express')
const { getCustomers } = require('../controllers/clientController')

const router = express.Router()

router.get('/customers', getCustomers)


module.exports = router