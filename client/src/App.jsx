import { useMemo } from "react";
import { CssBaseline, ThemeProvider } from "@mui/material"
import { createTheme, styled } from '@mui/material/styles';
import { useSelector } from "react-redux"
import { themeSettings } from "../theme"
import { Routes, Route, Navigate } from 'react-router-dom'
import Dashboard from './pages/Dashboard/Dashboard'
import Layout from "./pages/Layout/Layout"

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

          </Route>
        </Routes>
      </ThemeProvider>

    </div>
  )
}

export default App
