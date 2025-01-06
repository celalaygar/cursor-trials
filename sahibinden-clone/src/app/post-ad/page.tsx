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
import { categories } from '@/data/categories'

export default function PostAd() {
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