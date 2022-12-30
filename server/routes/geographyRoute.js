const express = require('express')

const { getGeography } = require('../controllers/geographyController')

const router = express.Router()

router.get('/data', getGeography)



module.exports = router