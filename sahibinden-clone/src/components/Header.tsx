'use client'
import { 
  Box, 
  Container, 
  InputBase, 
  Button, 
  IconButton,
  Popover,
  Typography,
  Avatar,
  Tabs,
  Tab 
} from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useState, useEffect } from 'react'

export default function Header() {
  const router = useRouter()
  const [messagesAnchorEl, setMessagesAnchorEl] = useState<null | HTMLElement>(null)
  const [activeTab, setActiveTab] = useState(0)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null // ya da loading state
  }

  // Örnek mesaj verileri
  const messages = [
    {
      sender: "Segross Gayrimenkul",
      message: "Satılık hisseli mülk 4.5 milyon TL.",
      date: "9 Ağustos / 22:37"
    },
    {
      sender: "Ömer İ.",
      message: "Satılık hisseli mülk 4.5 milyon TL.",
      date: "8 Ağustos / 13:12"
    },
    {
      sender: "Sedat B.",
      message: "Satılık hisseli mülk 4.5 milyon TL.",
      date: "28 Temmuz / 10:41"
    },
    {
      sender: "Galip Ü.",
      message: "Satılık hisseli mülk 4.5 milyon TL.",
      date: "1 Temmuz / 13:36"
    }
  ]

  return (
    <Box className="bg-[#32455d] text-white">
      <Container maxWidth="xl">
        {/* Top Bar */}
        <Box className="flex items-center h-14 gap-4">
          {/* Logo */}
          <Link href="/">
            <Image
              src="/sahibinden-logo.png"
              alt="sahibinden.com"
              width={150}
              height={30}
              className="cursor-pointer"
            />
          </Link>

          {/* Search */}
          <Box className="flex-grow flex gap-2">
            <Box className="flex-grow max-w-2xl flex">
              <InputBase
                placeholder="Kelime, ilan no veya mağaza adı ile ara"
                className="flex-grow bg-[#1c2938] text-white px-3 py-1 text-sm rounded-l"
              />
              <Button
                className="bg-[#1c2938] hover:bg-[#273b54] text-white min-w-[40px] rounded-r"
              >
                <SearchIcon />
              </Button>
            </Box>
            <Button
              variant="text"
              className="text-white text-sm normal-case hover:text-gray-200"
            >
              Detaylı Arama
            </Button>
          </Box>

          {/* Right Menu */}
          <Box className="flex items-center gap-3">
            <Link href="/login" className="text-white text-sm hover:text-gray-200">
              Giriş Yap
            </Link>
            <span className="text-gray-400">|</span>
            <Link href="/register" className="text-white text-sm hover:text-gray-200">
              Hesap Aç
            </Link>
            <Button
              variant="contained"
              className="bg-[#489ae9] hover:bg-[#3d83c7] normal-case ml-2"
              onClick={(e) => setMessagesAnchorEl(e.currentTarget)}
            >
              Mesajlarım
            </Button>
            <Popover
              id="messages-popover"
              open={Boolean(messagesAnchorEl)}
              anchorEl={messagesAnchorEl}
              onClose={() => setMessagesAnchorEl(null)}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
            >
              <Box className="w-[500px]">
                <Tabs 
                  value={activeTab} 
                  onChange={(e, newValue) => setActiveTab(newValue)}
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
            </Popover>
            <Button
              variant="contained"
              className="bg-[#489ae9] hover:bg-[#3d83c7] normal-case"
              onClick={() => router.push('/post-ad')}
            >
              Ücretsiz* İlan Ver
            </Button>
          </Box>
        </Box>

        {/* Navigation Bar */}
        <Box className="flex items-center h-10 border-t border-[#455873]">
          <Box className="flex gap-6">
            <Link href="/real-estate" className="text-white text-sm hover:text-gray-200">
              Emlak
            </Link>
            <Link href="/vehicles" className="text-white text-sm hover:text-gray-200">
              Vasıta
            </Link>
            <Link href="/spare-parts" className="text-white text-sm hover:text-gray-200">
              Yedek Parça, Aksesuar, Donanım & Tuning
            </Link>
            <Link href="/shopping" className="text-white text-sm hover:text-gray-200">
              İkinci El ve Sıfır Alışveriş
            </Link>
            <Link href="/heavy-equipment" className="text-white text-sm hover:text-gray-200">
              İş Makineleri & Sanayi
            </Link>
            <Link href="/services" className="text-white text-sm hover:text-gray-200">
              Ustalar ve Hizmetler
            </Link>
            <Link href="/tutoring" className="text-white text-sm hover:text-gray-200">
              Özel Ders Verenler
            </Link>
            <Link href="/jobs" className="text-white text-sm hover:text-gray-200">
              İş İlanları
            </Link>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}