import React from 'react'
import logo from './logo.png'
import { Currency } from './containers/currency/Currency'
import './App.css'
import Footer from './containers/footer'
import { Box, CssBaseline, Grid } from '@mui/material'

function App() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        minHeight: '100vh',
      }}
    >
      <CssBaseline />
      <Grid item sx={{ display: 'flex' }} xs={12} justifyContent="center">
        <img src={logo} className="App-logo" alt="logo" />
      </Grid>
      <Grid item sx={{ display: 'flex' }} xs={12} justifyContent="center">
        <Currency />
      </Grid>
      <Footer />
    </Box>
  )
}

export default App
