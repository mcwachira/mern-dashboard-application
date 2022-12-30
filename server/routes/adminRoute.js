const express = require('express')
const { getAdmin } = require('../controllers/adminController')

const router = express.Router()

router.get('/data', getAdmin)


module.exports = router