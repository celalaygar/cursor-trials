'use client'
import { Box, Grid, Typography, Divider, Button } from '@mui/material'
import ImageSlider from './ImageSlider'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import CalendarTodayIcon from '@mui/icons-material/CalendarToday'
import SpeedIcon from '@mui/icons-material/Speed'
import LocalGasStationIcon from '@mui/icons-material/LocalGasStation'
import SettingsIcon from '@mui/icons-material/Settings'

export default function VehicleDetails({ id }: { id: string }) {
  const vehicleData = {
    title: 'Original Range Rover',
    price: '5,700,000 TL',
    location: 'Mugla / Bodrum / Torba',
    adNumber: '1220471339',
    publishDate: '03 January 2024',
    details: {
      brand: 'Land Rover',
      model: 'Range Rover Velar',
      series: '2.0 TD4 R-Dynamic S',
      year: '2022',
      fuel: 'Diesel',
      transmission: 'Automatic',
      condition: 'Second Hand',
      mileage: '20,000',
      vehicleType: 'SUV',
      enginePower: '204 hp',
      engineSize: '1,997 cc',
      drivetrain: '4x4',
      doors: 'Not Specified',
      color: 'Gray',
      warranty: 'Yes',
      fromDealer: 'No',
      exchangeable: 'No',
      plate: 'TR Registered'
    },
    images: [
      '/images/range-rover-1.jpg',
      '/images/range-rover-2.jpg',
      '/images/range-rover-3.jpg',
      '/images/range-rover-4.jpg',
      '/images/range-rover-5.jpg',
      '/images/range-rover-6.jpg',
      '/images/range-rover-7.jpg',
      '/images/range-rover-8.jpg'
    ],
    features: {
      safety: [
        'ABS',
        'ESP / VSA',
        'Central Locking',
        'Immobilizer',
        'Child Lock'
      ],
      exterior: [
        'Alloy Wheels',
        'Xenon Headlights',
        'Fog Lights',
        'Roof Rails'
      ],
      comfort: [
        'Digital A/C',
        'Heated Seats',
        'Electric Mirrors',
        'Rain Sensor',
        'Parking Sensor'
      ],
      entertainment: [
        'Bluetooth',
        'USB / AUX',
        'Navigation',
        'Sound System'
      ]
    },
    description: `
      Vehicle received general maintenance in Bodrum on 25.12.2024
      Full service history available
      All original parts
      Winter and summer tire sets included
    `
  }

  return (
    <Box>
      {/* Title and Price Section */}
      <Box className="mb-6">
        <Typography variant="h5" className="mb-2">{vehicleData.title}</Typography>
        <Typography variant="h4" className="text-[#333] font-bold mb-2">
          {vehicleData.price}
        </Typography>
        <Box className="flex items-center gap-4 text-sm text-[#666]">
          <Box className="flex items-center gap-1">
            <LocationOnIcon fontSize="small" />
            {vehicleData.location}
          </Box>
          <Box className="flex items-center gap-1">
            <CalendarTodayIcon fontSize="small" />
            {vehicleData.publishDate}
          </Box>
        </Box>
      </Box>

      <Grid container spacing={3}>
        {/* Left Side - Image Slider */}
        <Grid item xs={12} md={8}>
          <ImageSlider images={vehicleData.images} />
        </Grid>

        {/* Right Side - Quick Details */}
        <Grid item xs={12} md={4}>
          <Box className="bg-gray-50 p-4 border border-[#dfdfdf]">
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <Typography className="text-sm text-gray-500">Ad Number</Typography>
                <Typography className="text-sm font-medium">{vehicleData.adNumber}</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography className="text-sm text-gray-500">Publish Date</Typography>
                <Typography className="text-sm font-medium">{vehicleData.publishDate}</Typography>
              </Grid>
              <Grid item xs={12}>
                <Divider className="my-2" />
              </Grid>
              {Object.entries(vehicleData.details).map(([key, value]) => (
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
        {Object.entries(vehicleData.features).map(([category, items]) => (
          <Box key={category} className="mb-4">
            <Typography className="font-medium mb-2 capitalize">
              {category}
            </Typography>
            <Grid container spacing={1}>
              {items.map((item, index) => (
                <Grid item xs={12} sm={6} md={4} key={index}>
                  <Box className="flex items-center gap-2 p-2 bg-gray-50">
                    <SettingsIcon className="text-gray-400" fontSize="small" />
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
          {vehicleData.description}
        </Typography>
      </Box>
    </Box>
  )
} 