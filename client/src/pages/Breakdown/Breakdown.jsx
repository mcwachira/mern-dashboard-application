import React, { useState, useMemo } from "react";
import { Box, useTheme, FormControl, MenuItem, InputLabel, Select } from "@mui/material";
import { useGetOverallStatsQuery } from "../../redux/apis/api";
import Header from "../../components/Header";
import BreakDownChart from "../../components/BreakDownChart";


const Breakdown = () => {
    return (
        <Box m="1.5rem 2.5rem">
            <Header title="CUSTOM SALES" subtitle="Chart of CUSTOM sales" />
            <Box height="75vh">

                <BreakDownChart />
            </Box>
        </Box>
    )
}

export default Breakdown