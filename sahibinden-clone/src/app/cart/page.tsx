'use client'
import { Box, Container, Grid, Typography } from '@mui/material'
import Header from '@/components/Header'
import Sidebar from '@/components/Sidebar'

export default function Cart() {
  return (
    <Box className="min-h-screen bg-[#f8f8f8]">
      <Header />
      <Container maxWidth="xl" className="py-4">
        <Grid container spacing={2}>
          <Grid item xs={12} md={3}>
            <Sidebar />
          </Grid>
          <Grid item xs={12} md={9}>
            <Box className="bg-white border border-[#dfdfdf] p-4">
              <Typography variant="h6">Sepetim</Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
} 