'use client'
import { Box, Container, Grid, Typography } from '@mui/material'
import Header from '@/components/Header'
import Sidebar from '@/components/Sidebar'
import Link from 'next/link'

export default function Home() {
  const showcaseItems = [
    {
      id: 1,
      category: 'vehicles',
      title: "2013 Range Rover Vogue Flawless",
      price: "4,375,000 TL",
      location: "Ankara",
      date: "Today",
      image: "https://placehold.co/400x300?text=Range+Rover"
    },
    {
      id: 2,
      category: 'real-estate',
      title: "Luxury 4+1 Apartment in Cayyolu",
      price: "12,500,000 TL",
      location: "Ankara",
      date: "Today",
      image: "https://placehold.co/400x300?text=Luxury+Apartment"
    },
    {
      id: 3,
      category: 'vehicles',
      title: "Srb Auto Flawless No Paint",
      price: "2,250,000 TL",
      location: "Ankara",
      date: "Today",
      image: "https://placehold.co/400x300?text=Mercedes"
    },
    {
      id: 4,
      category: 'real-estate',
      title: "48 Months, 1.91% Interest Rate",
      price: "3,850,000 TL",
      location: "Izmir",
      date: "Today",
      image: "https://placehold.co/400x300?text=New+Project"
    },
    {
      id: 5,
      category: 'real-estate',
      title: "For Sale by Derin Real Estate",
      price: "8,250,000 TL",
      location: "Istanbul",
      date: "Today",
      image: "https://placehold.co/400x300?text=Apartment"
    },
    {
      id: 6,
      category: 'other',
      title: "One-on-One English Lessons",
      price: "500 TL",
      location: "Ankara",
      date: "Today",
      image: "https://placehold.co/400x300?text=Private+Lessons"
    },
    {
      id: 7,
      category: 'vehicles',
      title: "Fully Loaded Flawless BMW X5",
      price: "3,950,000 TL",
      location: "Istanbul",
      date: "Today",
      image: "https://placehold.co/400x300?text=BMW+X5"
    },
    {
      id: 8,
      category: 'vehicles',
      title: "Flawless 40K km Under Warranty",
      price: "1,850,000 TL",
      location: "Izmir",
      date: "Today",
      image: "https://placehold.co/400x300?text=Vehicle"
    },
    {
      id: 9,
      category: 'vehicles',
      title: "Well Maintained By Owner",
      price: "950,000 TL",
      location: "Bursa",
      date: "Today",
      image: "https://placehold.co/400x300?text=Car"
    },
    {
      id: 10,
      category: 'real-estate',
      title: "60 Months 1.91% Interest Rate",
      price: "2,750,000 TL",
      location: "Antalya",
      date: "Today",
      image: "https://placehold.co/400x300?text=Housing"
    }
  ]

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
            <Box className="bg-white border border-[#dfdfdf]">
              <Box className="flex justify-between items-center p-3 border-b border-[#dfdfdf]">
                <Typography className="text-[#333] text-lg">
                  Homepage Showcase
                </Typography>
                <Typography className="text-[#0066ff] text-sm cursor-pointer hover:underline">
                  Show all showcase listings
                </Typography>
              </Box>

              <Box className="p-3">
                <Grid container spacing={2}>
                  {showcaseItems.map((item) => (
                    <Grid item xs={12} sm={6} md={3} lg={1.714} className="min-w-[200px]" key={item.id}>
                      <Link href={`/${item.category}/${item.id}`}>
                        <Box className="border border-[#dfdfdf] hover:shadow-md transition-shadow cursor-pointer">
                          <img 
                            src={item.image} 
                            alt={item.title} 
                            className="w-full h-[120px] object-cover"
                          />
                          <Box className="p-2">
                            <Typography 
                              className="text-xs text-[#333] line-clamp-2 min-h-[32px]"
                              title={item.title}
                            >
                              {item.title}
                            </Typography>
                            <Typography className="text-xs font-semibold text-[#333] mt-1">
                              {item.price}
                            </Typography>
                            <Box className="flex justify-between mt-1">
                              <Typography className="text-xs text-[#666]">
                                {item.location}
                              </Typography>
                              <Typography className="text-xs text-[#666]">
                                {item.date}
                              </Typography>
                            </Box>
                          </Box>
                        </Box>
                      </Link>
                    </Grid>
                  ))}
                </Grid>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}
