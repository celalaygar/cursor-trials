'use client'
import { Box, Grid, Typography } from '@mui/material'
import ShowcaseCard from '@/components/ShowcaseCard'

const realEstateShowcase = [
  {
    id: 1,
    title: "Luxury 4+1 Apartment with Sea View",
    price: "12,500,000 TL",
    location: "Istanbul",
    date: "Today",
    image: "https://placehold.co/400x300?text=Luxury+Apartment"
  },
  {
    id: 2,
    title: "Villa with Private Pool in Bodrum",
    price: "18,750,000 TL",
    location: "Muğla",
    date: "Today",
    image: "https://placehold.co/400x300?text=Villa"
  },
  // ... 8 more items
]

export default function RealEstatePage() {
  return (
    <Box>
      <Box className="bg-white border border-[#dfdfdf]">
        <Box className="flex justify-between items-center p-3 border-b border-[#dfdfdf]">
          <Typography>Real Estate Showcase</Typography>
          <Typography className="text-[#0066ff] cursor-pointer">
            Show all real estate listings
          </Typography>
        </Box>
        <Box className="p-3">
          <Grid container spacing={2}>
            {realEstateShowcase.map((item) => (
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