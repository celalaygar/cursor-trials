'use client'
import { Box, Container, Grid, Typography, Breadcrumbs } from '@mui/material'
import Header from '@/components/Header'
import ImageSlider from '@/components/ImageSlider'
import PropertyDetails from '@/components/PropertyDetails'
import VehicleDetails from '@/components/VehicleDetails'
import Link from 'next/link'
import { use } from 'react'

export default function DetailPage({ 
  params 
}: { 
  params: Promise<{ category: string; id: string }> 
}) {
  const resolvedParams = use(params)
  const isVehicle = resolvedParams.category === 'vehicles'
  const categories = ['vehicles', 'real-estate', 'other']

  if (!categories.includes(resolvedParams.category)) {
    return null
  }

  return (
    <div className="min-h-screen bg-[#f8f8f8]">
      <Header />
      <Container maxWidth="xl" className="py-4">
        {/* Breadcrumb */}
        <Breadcrumbs className="mb-4">
          <Link href="/" className="text-[#0066ff] hover:underline text-sm">
            Homepage
          </Link>
          <Link href={`/${resolvedParams.category}`} className="text-[#0066ff] hover:underline text-sm">
            {resolvedParams.category === 'vehicles' ? 'Vehicles' : 'Real Estate'}
          </Link>
          <Typography className="text-sm text-gray-500">Listing Details</Typography>
        </Breadcrumbs>

        <Grid container spacing={2}>
          {/* Left Side */}
          <Grid item xs={12} md={9}>
            <div className="bg-white border border-[#dfdfdf] p-4">
              {isVehicle ?
                <VehicleDetails id={resolvedParams.id} /> :
                <PropertyDetails id={resolvedParams.id} />
              }
            </div>
          </Grid>

          {/* Right Side */}
          <Grid item xs={12} md={3}>
            <div className="bg-white border border-[#dfdfdf] p-4">
              {/* Owner Information */}
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  )
} 