'use client'
import { createTheme } from '@mui/material/styles'

const theme = createTheme({
  palette: {
    primary: {
      main: '#489ae9',
    },
    secondary: {
      main: '#32455d',
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: '#f8f8f8',
        },
      },
    },
  },
})

export default theme 