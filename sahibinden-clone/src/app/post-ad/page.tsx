'use client'
import { Box, Container, Typography, TextField } from '@mui/material'
import HomeIcon from '@mui/icons-material/Home'
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar'
import BuildIcon from '@mui/icons-material/Build'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import ConstructionIcon from '@mui/icons-material/Construction'
import HandymanIcon from '@mui/icons-material/Handyman'
import SchoolIcon from '@mui/icons-material/School'
import WorkIcon from '@mui/icons-material/Work'
import PetsIcon from '@mui/icons-material/Pets'
import HelpIcon from '@mui/icons-material/Help'
import Header from '@/components/Header'
import ClientProvider from '@/components/ClientProvider'

export default function PostAd() {
  const categories = [
    {
      id: 1,
      name: 'Emlak',
      icon: <HomeIcon className="text-[#ff8a00]" />,
      borderColor: 'border-t-[#ff8a00]'
    },
    {
      id: 2,
      name: 'Vasıta',
      icon: <DirectionsCarIcon className="text-[#ff0034]" />,
      borderColor: 'border-t-[#ff0034]'
    },
    {
      id: 3,
      name: 'Yedek Parça, Aksesuar,\nDonanım & Tuning',
      icon: <BuildIcon className="text-[#00c9d6]" />,
      borderColor: 'border-t-[#00c9d6]'
    },
    {
      id: 4,
      name: 'İkinci El ve\nSıfır Alışveriş',
      icon: <ShoppingCartIcon className="text-[#7040ff]" />,
      borderColor: 'border-t-[#7040ff]'
    },
    {
      id: 5,
      name: 'İş Makineleri\n& Sanayi',
      icon: <ConstructionIcon className="text-[#a600ff]" />,
      borderColor: 'border-t-[#a600ff]'
    },
    {
      id: 6,
      name: 'Ustalar ve\nHizmetler',
      icon: <HandymanIcon className="text-[#00b0ff]" />,
      borderColor: 'border-t-[#00b0ff]'
    },
    {
      id: 7,
      name: 'Özel Ders\nVerenler',
      icon: <SchoolIcon className="text-[#2bb673]" />,
      borderColor: 'border-t-[#2bb673]'
    },
    {
      id: 8,
      name: 'İş\nİlanları',
      icon: <WorkIcon className="text-[#91c504]" />,
      borderColor: 'border-t-[#91c504]'
    },
    {
      id: 9,
      name: 'Hayvanlar\nAlemi',
      icon: <PetsIcon className="text-[#00c9d6]" />,
      borderColor: 'border-t-[#00c9d6]'
    },
    {
      id: 10,
      name: 'Yardımcı\nArayanlar',
      icon: <HelpIcon className="text-[#ff6f00]" />,
      borderColor: 'border-t-[#ff6f00]'
    }
  ]

  return (
    <Box>
      <ClientProvider>
        <Header />
      </ClientProvider>
      <Box className="min-h-screen bg-gray-100 pt-4">
        <Container maxWidth="md" className="py-6">
          <Box className="bg-white rounded-lg shadow-sm p-4 md:p-6">
            {/* Üst Bilgi */}
            <Box className="mb-4 md:mb-6">
              <Typography variant="h6" className="font-semibold mb-2 text-lg md:text-xl">
                Adım Adım Kategori Seç
              </Typography>
              <Typography variant="body2" className="text-gray-500 text-sm md:text-base">
                İlanınızı doğru kategoriye eklemek için lütfen kategori seçin.
              </Typography>
              <Typography variant="caption" className="text-blue-600 cursor-pointer hover:underline block mt-1">
                İlan Vermenin Püf Noktaları
              </Typography>
            </Box>

            {/* Kategoriler Grid */}
            <Box className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-3">
              {categories.map((category) => (
                <Box
                  key={category.id}
                  className={`p-3 md:p-4 border-t-4 ${category.borderColor} bg-white rounded shadow-sm hover:shadow-md transition-shadow cursor-pointer`}
                >
                  <Box className="flex flex-col items-center text-center gap-2">
                    <Box className="text-2xl md:text-3xl">
                      {category.icon}
                    </Box>
                    <Typography 
                      variant="body2" 
                      className="whitespace-pre-line text-xs md:text-sm font-medium"
                    >
                      {category.name}
                    </Typography>
                  </Box>
                </Box>
              ))}
            </Box>

            {/* Alt Arama Bölümü */}
            <Box className="mt-6 md:mt-8">
              <Box className="flex flex-col sm:flex-row items-start sm:items-center gap-1 md:gap-2 mb-3">
                <Typography variant="subtitle2" className="whitespace-nowrap text-sm md:text-base">
                  🔍 Kelime ile Arayarak Kategori Seç
                </Typography>
                <Typography variant="caption" className="text-gray-500">
                  veya
                </Typography>
              </Box>
              <TextField
                fullWidth
                placeholder="Lütfen ilanınızı tanımlayan kelimelerle arama yapınız."
                variant="outlined"
                size="small"
                className="max-w-full text-sm"
              />
            </Box>
          </Box>
        </Container>
      </Box>
    </Box>
  )
} 