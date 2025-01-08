'use client'
import { Box, Container, Grid, Typography } from '@mui/material'
import Header from '@/components/Header'
import Sidebar from '@/components/Sidebar'

export default function Dashboard() {
  return (
    <Box className="min-h-screen bg-[#f8f8f8]">
      <Header />
      <Container maxWidth="xl" className="py-4">
        <Grid container spacing={2}>
          {/* Sidebar */}
          <Grid item xs={12} md={3}>
            <Sidebar />
          </Grid>

          {/* Main Content */}
          <Grid item xs={12} md={9}>
            <Box className="bg-white border border-[#dfdfdf] p-4">
              <Typography variant="h6">Bana Özel Özet</Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
} 