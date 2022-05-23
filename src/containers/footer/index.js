import * as React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        py: 3,
        px: 2,
        mt: 'auto',
      }}
    >
      <Container maxWidth="sm">
        <Typography align='center'>{'Конвертер валют 2022. © Все права не защищены'}</Typography>
      </Container>
    </Box>
  )
}

export default Footer
