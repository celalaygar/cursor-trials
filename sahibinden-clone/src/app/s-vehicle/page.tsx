'use client'
import { Box, Container, Grid, Typography, Chip } from '@mui/material'
import Header from '@/components/Header'
import Sidebar from '@/components/Sidebar'

export default function SVehicle() {
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
              <Box className="flex items-center gap-2">
                <Typography variant="h6">S-Aracım</Typography>
                <Chip label="yeni" size="small" className="bg-[#e11f21] text-white" />
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
} 