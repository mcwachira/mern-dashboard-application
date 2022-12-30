const express = require('express')
const mongoose = require('mongoose')
const helmet = require('helmet')
const morgan = require('morgan')
const cookieParser = require('cookie-parser')
const cors = require('cors')
const path = require('path')

const connectDb = require('./config/db')
require('dotenv').config()

const User = require('./models/userModel')
const Product = require('./models/productModel')
const ProductStat = require('./models/productStatsModel')
const Transaction = require('./models/transactionModel')
const OverallStat = require('./models/overallStatsModel')
const AffiliateStat = require('./models/affiliateStatsModel')
const { dataAffiliateStat,
    dataOverallStat,
    dataProduct,
    dataProductStat,
    dataTransaction,
    dataUser, } = require('./data/index')

//initialize express app
const app = express()

//create our port 
const PORT = process.env.PORT || 8001

//connect our database
connectDb()

// for parsing application/json
app.use(express.json({ limit: "30mb", extended: true }))
// for parsing application/x-www-form-urlencoded
app.use(express.urlencoded({ limit: "30mb", extended: true }))

//enabling helmet
app.use(helmet.crossOriginResourcePolicy({ policy: 'cross-origin' }))

//enabling cors
app.use(cors())

//enables us to se logs in our terminal
app.use(morgan('tiny')) //used to log request from the frontend
//get cookies
app.use(cookieParser())

/*enabling express to locate static files
app.use(express.static('public')) */

//enabling express to locate static files using virtual path /
app.use('/', express.static(path.join(__dirname, '/public')))



//routes

const clientRouter = require('./routes/clientRoute')
const generalRouter = require('./routes/generalRoute')
const productRouter = require('./routes/ProductRoute')
const transactionsRouter = require('./routes/transactionsRoute')
const geographyRouter = require('./routes/geographyRoute')
const overallStatsRouter = require('./routes/overallStatsRoute')
const adminRouter = require('./routes/adminRoute')
const affiliateRouter = require('./routes/affiliateRoutes')







app.use('/client', clientRouter)
app.use('/general', generalRouter)
app.use('/client', productRouter)
app.use('/transactions', transactionsRouter)
app.use('/geography', geographyRouter)
app.use('/stats', overallStatsRouter)
app.use('/admin', adminRouter)
app.use('/', affiliateRouter)


app.listen(PORT, (req, res) => {

    //only add data ones
    // AffiliateStat.insertMany(dataAffiliateStat)
    console.log(`app running on port ${PORT}`)
})