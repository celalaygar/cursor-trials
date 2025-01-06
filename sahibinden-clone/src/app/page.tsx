'use client'
import { Box, Container, Grid, Typography } from '@mui/material'
import Header from '@/components/Header'
import Sidebar from '@/components/Sidebar'
import Link from 'next/link'
import { mainPageItems } from '@/data/mainPage'

export default function Home() {
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
                  {mainPageItems.map((item) => (
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
