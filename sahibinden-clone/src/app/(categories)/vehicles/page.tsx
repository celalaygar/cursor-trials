'use client'
import { Box, Grid, Typography } from '@mui/material'
import ShowcaseCard from '@/components/ShowcaseCard'
import { vehiclesShowcase } from '@/data/showcase'

export default function VehiclesPage() {
  return (
    <Box>
      <Box className="bg-white border border-[#dfdfdf]">
        <Box className="flex justify-between items-center p-3 border-b border-[#dfdfdf]">
          <Typography>Vehicles Showcase</Typography>
          <Typography className="text-[#0066ff] cursor-pointer">
            Show all vehicle listings
          </Typography>
        </Box>
        <Box className="p-3">
          <Grid container spacing={2}>
            {vehiclesShowcase.map((item) => (
              <Grid key={item.id} item xs={12} sm={6} md={4} lg={3}>
                <ShowcaseCard {...item} />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </Box>
  )
} 