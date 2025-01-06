'use client'
import { Box, Container, Grid, Typography, TextField, IconButton } from '@mui/material'
import Header from '@/components/Header'
import MessagesSidebar from '@/components/MessagesSidebar'
import ClientProvider from '@/components/ClientProvider'
import GridViewIcon from '@mui/icons-material/GridView'
import ListIcon from '@mui/icons-material/List'

export default function MessagesPage() {
  return (
    <Box>
      <ClientProvider>
        <Header />
      </ClientProvider>
      
      <Box className="min-h-screen bg-[#f8f8f8] pt-4">
        <Container maxWidth="xl">
          <Grid container spacing={2}>
            {/* Sol Sidebar */}
            <Grid item xs={12} md={3}>
              <MessagesSidebar />
            </Grid>

            {/* Sağ İçerik */}
            <Grid item xs={12} md={9}>
              <Box className="bg-white border border-[#dfdfdf] rounded">
                {/* Üst Toolbar */}
                <Box className="flex items-center justify-between p-3 border-b border-[#dfdfdf]">
                  <Box className="flex items-center gap-2">
                    <Typography>Mesajlar</Typography>
                    <Typography className="text-gray-500 text-sm">
                      (Son 1 yıl içerisindeki mesajlarınız listelenmektedir.)
                    </Typography>
                  </Box>
                  <Box className="flex items-center gap-2">
                    <Box className="flex border rounded">
                      <IconButton size="small">
                        <ListIcon />
                      </IconButton>
                      <IconButton size="small">
                        <GridViewIcon />
                      </IconButton>
                    </Box>
                  </Box>
                </Box>

                {/* Arama */}
                <Box className="p-3 border-b border-[#dfdfdf]">
                  <TextField
                    fullWidth
                    size="small"
                    placeholder="İlan no veya gönderen adına göre arayabilirsiniz."
                    className="bg-white"
                  />
                </Box>

                {/* Mesaj Listesi */}
                <Box>
                  {messages.map((message) => (
                    <Box
                      key={message.id}
                      className="flex items-start gap-3 p-3 border-b border-[#dfdfdf] hover:bg-gray-50 cursor-pointer"
                    >
                      <Box className="w-10 h-10 bg-gray-200 rounded-full flex-shrink-0" />
                      <Box className="flex-grow">
                        <Box className="flex justify-between">
                          <Typography className="text-blue-600 text-sm">
                            {message.sender}
                          </Typography>
                          <Typography className="text-gray-500 text-sm">
                            {message.date}
                          </Typography>
                        </Box>
                        <Typography className="text-sm mt-1">
                          {message.message}
                        </Typography>
                      </Box>
                    </Box>
                  ))}
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  )
}

const messages = [
  {
    id: 1,
    sender: "Segross Gayrimenkul",
    message: "Satılık hisseli mülk 4.5 milyon TL.",
    date: "9 Ağustos 2024 • 22:37"
  },
  // ... diğer mesajlar
] 