'use client'
import { Box, Typography } from '@mui/material'
import { useRouter } from 'next/navigation'

interface FavoritesPopoverProps {
  onClose: () => void
}

export default function FavoritesPopover({ onClose }: FavoritesPopoverProps) {
  const router = useRouter()

  const favoriteItems = [
    {
      title: 'Favori İlanlar',
      path: '/favorite-listings'
    },
    {
      title: 'Favori Aramalar',
      path: '/favorite-searches'
    },
    {
      title: 'Favori Satıcılar',
      path: '/favorite-sellers'
    }
  ]

  return (
    <Box className="w-[300px]">
      <Typography className="p-3 font-semibold border-b border-gray-200">
        Favoriler
      </Typography>
      <Box className="divide-y">
        {favoriteItems.map((item, index) => (
          <Box 
            key={index}
            className="p-3 flex justify-between items-center hover:bg-gray-50 cursor-pointer"
            onClick={() => {
              router.push(item.path)
              onClose()
            }}
          >
            <Typography className="text-sm text-[#0066ff] hover:underline">
              {item.title}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  )
} 