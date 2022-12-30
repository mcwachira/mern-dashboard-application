const express = require('express')
const { getUserStats } = require('../controllers/affiliateStatsController')

const router = express.Router()

router.get('/performance/:id', getUserStats)


module.exports = router