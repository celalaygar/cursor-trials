'use client'
import { Box, Typography, Avatar, Tabs, Tab, Button } from '@mui/material'
import { useRouter } from 'next/navigation'
import { messages } from '@/data/messages'

interface MessagesPopoverProps {
  activeTab: number
  onTabChange: (event: React.SyntheticEvent, newValue: number) => void
  onClose: () => void
}

export default function MessagesPopover({ activeTab, onTabChange, onClose }: MessagesPopoverProps) {
  const router = useRouter()

  return (
    <Box className="w-[500px]">
      <Tabs
        value={activeTab}
        onChange={onTabChange}
        variant="fullWidth"
        className="border-b border-gray-200"
      >
        <Tab
          label="Mesajlarım"
          className={`normal-case ${activeTab === 0 ? 'text-blue-600' : ''}`}
        />
        <Tab
          label="Bilgilendirmeler"
          className={`normal-case ${activeTab === 1 ? 'text-blue-600' : ''}`}
        />
        <Tab
          label="Ürün Tekliflerim"
          className={`normal-case ${activeTab === 2 ? 'text-blue-600' : ''}`}
        />
      </Tabs>

      <Box className="p-4">
        {activeTab === 0 && (
          <Box className="divide-y">
            {messages.map((item, index) => (
              <Box key={index} className="py-3 flex gap-3 cursor-pointer hover:bg-gray-50">
                <Avatar className="w-10 h-10" />
                <Box className="flex-grow">
                  <Typography variant="body2" className="text-blue-600 mb-1">
                    {item.sender}
                  </Typography>
                  <Typography variant="body2" className="font-normal">
                    {item.message}
                  </Typography>
                  <Typography variant="caption" className="text-gray-500">
                    {item.date}
                  </Typography>
                </Box>
              </Box>
            ))}
            <Button
              fullWidth
              variant="text"
              className="mt-2 text-sm normal-case text-blue-600"
              onClick={() => {
                router.push('/messages')
                onClose()
              }}
            >
              Tümünü Gör
            </Button>
          </Box>
        )}

        {activeTab === 1 && (
          <Box className="divide-y">
            <Typography variant="body2" className="py-4 text-center text-gray-500">
              Bilgilendirme mesajınız bulunmamaktadır.
            </Typography>
          </Box>
        )}

        {activeTab === 2 && (
          <Box className="divide-y">
            <Typography variant="body2" className="py-4 text-center text-gray-500">
              Ürün teklifi mesajınız bulunmamaktadır.
            </Typography>
          </Box>
        )}
      </Box>
    </Box>
  )
} 