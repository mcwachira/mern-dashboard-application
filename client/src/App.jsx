import { useMemo } from "react";
import { CssBaseline, ThemeProvider } from "@mui/material"
import { createTheme, styled } from '@mui/material/styles';
import { useSelector } from "react-redux"
import { themeSettings } from "./theme"
import { Routes, Route, Navigate } from 'react-router-dom'
import Dashboard from './pages/Dashboard/Dashboard'
import Layout from "./pages/Layout/Layout"
import Products from "./pages/Products/Products";
import Customers from "./pages/Customers/Customers";
import Transactions from "./pages/Transactions/Transactions";
import Geography from "./pages/Geography/Geography";
import Overview from "./pages/OverView/Overview";
import Daily from "./pages/Daily/Daily";
import Monthly from "./pages/Monthly/Monthly";
import Breakdown from "./pages/Breakdown/Breakdown";
import Admin from "./pages/Admin/Admin";
import Performance from "./pages/Performance/Performance";

function App() {

  const mode = useSelector((state) => (state.global.mode))
  console.log(mode)
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode])

  return (
    <div className="app">
      <ThemeProvider theme={theme}>
        <CssBaseline />

        <Routes>
          <Route element={<Layout />}>

            <Route path='/' element={<Navigate to='/dashboard' replace />} />
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/products' element={<Products />} />
            <Route path='/customers' element={<Customers />} />
            <Route path='/transactions' element={<Transactions />} />
            <Route path='/geography' element={<Geography />} />
            <Route path='/overview' element={<Overview />} />
            <Route path='/daily' element={<Daily />} />
            <Route path='/monthly' element={<Monthly />} />
            <Route path='/breakdown' element={<Breakdown />} />
            <Route path='/admin' element={<Admin />} />
            <Route path='/performance' element={<Performance />} />

          </Route>
        </Routes>
      </ThemeProvider>

    </div>
  )
}

export default App
