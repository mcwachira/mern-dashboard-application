const express = require('express')
const { getUser, getDashBoard } = require('../controllers/generalController')

const router = express.Router()

router.get('/user/:id', getUser)
router.get('/dashboard', getDashBoard)

module.exports = router