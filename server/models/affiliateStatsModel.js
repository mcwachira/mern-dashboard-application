const mongoose = require('mongoose')

const AffiliateStatSchema = new mongoose.Schema(
    {
        userId: { type: mongoose.Types.ObjectId, ref: "User" },
        affiliateSales: {
            type: [mongoose.Types.ObjectId],
            ref: "Transaction",
        },
    },
    { timestamps: true }
);

module.exports = mongoose.model("AffiliateStat", AffiliateStatSchema);
