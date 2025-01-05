'use client'
import { Box, Grid, Typography, Divider, Button } from '@mui/material'
import ImageSlider from './ImageSlider'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import CalendarTodayIcon from '@mui/icons-material/CalendarToday'
import SquareFootIcon from '@mui/icons-material/SquareFoot'
import HomeIcon from '@mui/icons-material/Home'
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline'

export default function PropertyDetails({ id }: { id: string }) {
  const propertyData = {
    title: 'Exclusive Design Villa with Sea View in Sahilkent',
    price: '16,500,000 TL',
    location: 'Beykoz / Acarlar / Sahil Kent',
    adNumber: '1218560393',
    publishDate: '22 April 2024',
    details: {
      propertyType: 'Luxury Villa',
      grossArea: '155',
      netArea: '120',
      landArea: '270',
      roomCount: '2+2',
      buildingAge: '3',
      floorCount: '2',
      heatingType: 'Central Heating',
      bathroom: '3',
      balcony: 'Available',
      furnished: 'No',
      useStatus: 'Empty',
      dues: '200 TL',
      eligible: 'Yes',
      onSite: 'Residential Complex',
      facade: 'Open View',
      status: 'Owner'
    },
    images: [
      '/images/villa-1.jpg',
      '/images/villa-2.jpg',
      '/images/villa-3.jpg',
      '/images/villa-4.jpg',
      '/images/villa-5.jpg',
      '/images/villa-6.jpg',
      '/images/villa-7.jpg',
      '/images/villa-8.jpg'
    ],
    features: {
      exterior: [
        'Garden',
        'Natural Gas',
        'South Facing',
        'Sea View'
      ],
      interior: [
        'Steel Door',
        'Shower',
        'Kitchen Appliances',
        'Built-in Oven',
        'Dishwasher',
        'Dressing Room'
      ],
      location: [
        'Seaside',
        'Marina',
        'Market',
        'Pharmacy',
        'Hospital',
        'Public Transport'
      ],
      building: [
        'Elevator',
        'Generator',
        'Security',
        'Open Parking',
        'Smart Home',
        'Video Intercom'
      ]
    },
    description: `
      Located in the prestigious seaside area, this uniquely designed villa offers a 360-degree panoramic view with its special architectural design. The villa, which has been meticulously designed with high-quality materials, has been built with a modern approach.

      Key Features:
      * 155 m² gross, 120 m² net living area
      * Private garden with sea view
      * Smart home system
      * High-end kitchen appliances
      * Underfloor heating system
      * 24/7 security
      * Private parking

      For detailed information and viewing appointments, please contact us.
    `
  }

  return (
    <Box>
      {/* Title and Price Section */}
      <Box className="mb-6">
        <Typography variant="h5" className="mb-2">{propertyData.title}</Typography>
        <Typography variant="h4" className="text-[#333] font-bold mb-2">
          {propertyData.price}
        </Typography>
        <Box className="flex items-center gap-4 text-sm text-[#666]">
          <Box className="flex items-center gap-1">
            <LocationOnIcon fontSize="small" />
            {propertyData.location}
          </Box>
          <Box className="flex items-center gap-1">
            <CalendarTodayIcon fontSize="small" />
            {propertyData.publishDate}
          </Box>
        </Box>
      </Box>

      <Grid container spacing={3}>
        {/* Left Side - Image Slider */}
        <Grid item xs={12} md={8}>
          <ImageSlider images={propertyData.images} />
        </Grid>

        {/* Right Side - Quick Details */}
        <Grid item xs={12} md={4}>
          <Box className="bg-gray-50 p-4 border border-[#dfdfdf]">
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <Typography className="text-sm text-gray-500">Ad Number</Typography>
                <Typography className="text-sm font-medium">{propertyData.adNumber}</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography className="text-sm text-gray-500">Publish Date</Typography>
                <Typography className="text-sm font-medium">{propertyData.publishDate}</Typography>
              </Grid>

              {/* Key Property Features */}
              <Grid item xs={12}>
                <Divider className="my-2" />
                <Box className="flex items-center gap-2 my-2">
                  <HomeIcon className="text-gray-400" />
                  <Typography className="text-sm">
                    {propertyData.details.roomCount} - {propertyData.details.propertyType}
                  </Typography>
                </Box>
                <Box className="flex items-center gap-2 my-2">
                  <SquareFootIcon className="text-gray-400" />
                  <Typography className="text-sm">
                    {propertyData.details.grossArea} m² (gross)
                  </Typography>
                </Box>
              </Grid>

              <Grid item xs={12}>
                <Divider className="my-2" />
              </Grid>

              {/* All Property Details */}
              {Object.entries(propertyData.details).map(([key, value]) => (
                <Grid item xs={6} key={key}>
                  <Typography className="text-sm text-gray-500">
                    {key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, ' $1')}
                  </Typography>
                  <Typography className="text-sm font-medium">{value}</Typography>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Grid>
      </Grid>

      {/* Features Section */}
      <Box className="mt-6">
        <Typography variant="h6" className="mb-4">Features</Typography>
        {Object.entries(propertyData.features).map(([category, items]) => (
          <Box key={category} className="mb-4">
            <Typography className="font-medium mb-2 capitalize">
              {category}
            </Typography>
            <Grid container spacing={1}>
              {items.map((item, index) => (
                <Grid item xs={12} sm={6} md={3} key={index}>
                  <Box className="flex items-center gap-2 p-2 bg-gray-50">
                    <CheckCircleOutlineIcon className="text-gray-400" fontSize="small" />
                    <Typography className="text-sm">{item}</Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Box>
        ))}
      </Box>

      {/* Description */}
      <Box className="mt-6">
        <Typography variant="h6" className="mb-2">Description</Typography>
        <Typography className="text-sm whitespace-pre-line">
          {propertyData.description}
        </Typography>
      </Box>
    </Box>
  )
} 