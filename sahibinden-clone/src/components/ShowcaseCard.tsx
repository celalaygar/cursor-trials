'use client'
import { Box, Typography } from '@mui/material'
import Image from 'next/image'

interface ShowcaseCardProps {
  title: string
  price: string
  location: string
  date: string
  image: string
}

export default function ShowcaseCard({
  title,
  price,
  location,
  date,
  image
}: ShowcaseCardProps) {
  return (
    <Box className="border border-[#dfdfdf] hover:border-[#489ae9] cursor-pointer">
      <Box className="relative h-48">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover"
          unoptimized
        />
      </Box>
      <Box className="p-2">
        <Typography className="font-semibold text-sm line-clamp-2" title={title}>
          {title}
        </Typography>
        <Typography className="text-lg font-bold mt-1">
          {price}
        </Typography>
        <Box className="flex justify-between mt-2">
          <Typography className="text-sm text-gray-500">
            {location}
          </Typography>
          <Typography className="text-sm text-gray-500">
            {date}
          </Typography>
        </Box>
      </Box>
    </Box>
  )
} 