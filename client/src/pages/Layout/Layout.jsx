import React, { useState } from 'react'
import { Box, useMediaQuery } from '@mui/material'
import { Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Navbar from '../../components/Navbar'
import SideBar from '../../components/SideBar'
import { useGetUserQuery } from '../../redux/apis/api'



const Layout = () => {
    const isNonMobile = useMediaQuery("(min-width:600px")
    const [isSideBarOpen, setIsSideBarOpen] = useState(true)

    const userId = useSelector((state) => state.global.userId)
    console.log(userId)

    const { data } = useGetUserQuery(userId)
    console.log("🚀 ~ file: Layout.jsx:18 ~ Layout ~ data", data)

    return (
        <Box display={isNonMobile ? 'flex' : 'block'} width='100%' height='100%'>



            <SideBar
                isNonMobile={isNonMobile}
                drawerWidth="250px"
                isSideBarOpen={isSideBarOpen}
                setIsSideBarOpen={setIsSideBarOpen}
                user={data || {}} />
            <Box flexGrow={1}>
                <Navbar
                    isSideBarOpen={isSideBarOpen}
                    setIsSideBarOpen={setIsSideBarOpen}
                    user={data || {}} />
                <Outlet />
            </Box>

        </Box>
    )
}

export default Layout