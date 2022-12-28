const express = require('express')
const { getUser } = require('../controllers/generalController')

const router = express.Router()

router.get('/user/:id', getUser)

module.exports = router