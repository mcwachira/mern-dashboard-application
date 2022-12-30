const mongoose = require('mongoose')

const OverallStatSchema = new mongoose.Schema(
    {
        totalCustomers: Number,
        yearlySalesTotal: Number,
        yearlyTotalSoldUnits: Number,
        year: Number,
        monthlyData: [
            {
                month: String,
                totalSales: Number,
                totalUnits: Number,
            },
        ],
        dailyData: [
            {
                date: String,
                totalSales: Number,
                totalUnits: Number,
            },
        ],
        salesByCategory: {
            type: Map, //object
            of: Number,
        },
    },
    { timestamps: true }
);
module.exports = mongoose.model("OverallStat", OverallStatSchema);
