'use client'
import { Box, Typography, Chip } from '@mui/material'
import { useRouter } from 'next/navigation'

interface UserPopoverProps {
  onClose: () => void
}

export default function UserPopover({ onClose }: UserPopoverProps) {
  const router = useRouter()

  const menuItems = [
    {
      title: 'Bana Özel Özet',
      path: '/dashboard'
    },
    {
      title: 'İlanlarım',
      path: '/my-listings'
    },
    {
      title: 'Favorilerim',
      path: '/favorites'
    },
    {
      title: 'Sepetim',
      path: '/cart'
    },
    {
      title: 'S-Aracım',
      path: '/s-vehicle',
      isNew: true
    },
    {
      title: 'Alım İşlemlerim',
      path: '/purchases'
    },
    {
      title: 'Satış İşlemlerim',
      path: '/sales'
    },
    {
      title: 'Hesabım',
      path: '/account'
    }
  ]

  return (
    <Box className="w-[300px]">
      <Box className="divide-y">
        {menuItems.map((item, index) => (
          <Box 
            key={index}
            className="p-3 flex justify-between items-center hover:bg-gray-50 cursor-pointer"
            onClick={() => {
              router.push(item.path)
              onClose()
            }}
          >
            <Typography className="text-sm text-[#333]">
              {item.title}
            </Typography>
            {item.isNew && (
              <Chip
                label="yeni"
                size="small"
                className="bg-[#e11f21] text-white text-[10px] h-5"
              />
            )}
          </Box>
        ))}
        <Box 
          className="p-3 flex items-center hover:bg-gray-50 cursor-pointer"
          onClick={() => {
            router.push('/logout')
            onClose()
          }}
        >
          <Typography className="text-sm text-[#333]">
            Çıkış Yap
          </Typography>
        </Box>
      </Box>
    </Box>
  )
} 