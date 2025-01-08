'use client'
import { Box, Typography } from '@mui/material'
import { useRouter } from 'next/navigation'

interface NotificationsPopoverProps {
  onClose: () => void
}

export default function NotificationsPopover({ onClose }: NotificationsPopoverProps) {
  const router = useRouter()

  return (
    <Box className="w-[300px]">
      <Typography className="p-3 font-semibold border-b border-gray-200">
        Bildirimlerim
      </Typography>
      <Box className="divide-y">
        {/* İlanlar */}
        <Box 
          className="p-3 flex justify-between items-center hover:bg-gray-50 cursor-pointer"
          onClick={() => {
            router.push('/my-listings')
            onClose()
          }}
        >
          <Typography className="text-sm text-[#0066ff] hover:underline">
            İlanlar
          </Typography>
          <Typography className="text-xs px-1.5 py-0.5 bg-[#e11f21] text-white rounded">
            1
          </Typography>
        </Box>

        {/* Yayında Olmayanlar */}
        <Box 
          className="p-3 flex justify-between items-center hover:bg-gray-50 cursor-pointer"
          onClick={() => {
            router.push('/inactive-listings')
            onClose()
          }}
        >
          <Typography className="text-sm text-[#0066ff] hover:underline">
            Yayında Olmayanlar
          </Typography>
          <Typography className="text-xs px-1.5 py-0.5 bg-[#e11f21] text-white rounded">
            1
          </Typography>
        </Box>

        {/* Tümünü Okundu Olarak İşaretle */}
        <Box className="p-3 text-center">
          <Typography 
            className="text-xs text-[#0066ff] hover:underline cursor-pointer"
            onClick={onClose}
          >
            Tümünü Okundu Olarak İşaretle
          </Typography>
        </Box>
      </Box>
    </Box>
  )
} 