const express = require('express')

const { getOverallStats } = require('../controllers/overallStatsController')

const router = express.Router()

router.get('/data', getOverallStats)



module.exports = router