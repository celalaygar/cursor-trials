'use client'
import { Box, Container, Grid, Typography, TextField, Select, MenuItem, FormControlLabel, Checkbox, Button } from '@mui/material'
import { useState } from 'react'
import Header from '@/components/Header'
import { mainPageItems } from '@/data/mainPage'
import { searchCategories, cities, districts, datePeriods, sortOptions } from '@/data/detailedSearch'

export default function DetailedSearch() {
  const [selectedCity, setSelectedCity] = useState('')
  const [formData, setFormData] = useState({
    category: '',
    city: '',
    district: '',
    datePeriod: '',
    keyword: '',
    includeDescription: false,
    sortBy: 'price-desc',
    showMapOnly: false
  })

  const handleChange = (field: string) => (event: any) => {
    const value = event.target.type === 'checkbox' ? event.target.checked : event.target.value
    setFormData(prev => ({ ...prev, [field]: value }))

    if (field === 'city') {
      setSelectedCity(value)
      setFormData(prev => ({ ...prev, district: '' }))
    }
  }

  const handleSearch = () => {
    console.log('Search with:', formData)
  }

  return (
    <Box>
      <Header />
      <Container maxWidth="xl" className="py-4">
        <Grid container spacing={3}>
          {/* Sol Taraf - İlan Arama Formu */}
          <Grid item xs={12} md={8}>
            <Box className="bg-white border border-[#dfdfdf] p-4">
              <Typography variant="h6" className="text-lg mb-4">
                Detaylı Arama
              </Typography>

              <Box className="space-y-4">
                {/* Kategori Seçimi */}
                <Box>
                  <Typography className="text-sm mb-2">Kategori</Typography>
                  <Select
                    fullWidth
                    size="small"
                    value={formData.category}
                    onChange={handleChange('category')}
                  >
                    {searchCategories.map(category => (
                      <MenuItem key={category.value} value={category.value}>
                        {category.label}
                      </MenuItem>
                    ))}
                  </Select>
                </Box>

                {/* Adres Seçimi */}
                <Box>
                  <Typography className="text-sm mb-2">Adres</Typography>
                  <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                      <Select
                        fullWidth
                        size="small"
                        value={formData.city}
                        onChange={handleChange('city')}
                        displayEmpty
                      >
                        {cities.map(city => (
                          <MenuItem key={city.value} value={city.value}>
                            {city.label}
                          </MenuItem>
                        ))}
                      </Select>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <Select
                        fullWidth
                        size="small"
                        value={formData.district}
                        onChange={handleChange('district')}
                        displayEmpty
                      >
                        {(selectedCity && districts[selectedCity as keyof typeof districts] || [{ value: '', label: 'İlçe' }]).map(district => (
                          <MenuItem key={district.value} value={district.value}>
                            {district.label}
                          </MenuItem>
                        ))}
                      </Select>
                    </Grid>
                  </Grid>
                </Box>

                {/* İlan Tarihi */}
                <Box>
                  <Typography className="text-sm mb-2">İlan Tarihi</Typography>
                  <Select
                    fullWidth
                    size="small"
                    value={formData.datePeriod}
                    onChange={handleChange('datePeriod')}
                    displayEmpty
                  >
                    {datePeriods.map(period => (
                      <MenuItem key={period.value} value={period.value}>
                        {period.label}
                      </MenuItem>
                    ))}
                  </Select>
                </Box>

                {/* Arama Kelimesi */}
                <Box>
                  <Typography className="text-sm mb-2">Arama Kelimesi</Typography>
                  <TextField
                    fullWidth
                    size="small"
                    value={formData.keyword}
                    onChange={handleChange('keyword')}
                    placeholder="Kelime, ilan no veya mağaza adı ile ara"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox 
                        size="small"
                        checked={formData.includeDescription}
                        onChange={handleChange('includeDescription')}
                      />
                    }
                    label={<Typography className="text-sm">İlan açıklamalarını dahil et</Typography>}
                  />
                </Box>

                {/* Sıralama */}
                <Box>
                  <Typography className="text-sm mb-2">Sıralama</Typography>
                  <Select
                    fullWidth
                    size="small"
                    value={formData.sortBy}
                    onChange={handleChange('sortBy')}
                  >
                    {sortOptions.map(option => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </Select>
                </Box>

                {/* Haritali İlanlar */}
                <Box>
                  <FormControlLabel
                    control={
                      <Checkbox 
                        size="small"
                        checked={formData.showMapOnly}
                        onChange={handleChange('showMapOnly')}
                      />
                    }
                    label={<Typography className="text-sm">Haritalı İlanlar</Typography>}
                  />
                </Box>

                {/* Arama Butonu */}
                <Box>
                  <Button
                    variant="contained"
                    fullWidth
                    className="bg-[#489ae9] hover:bg-[#3d83c7]"
                    onClick={handleSearch}
                  >
                    Arama Yap
                  </Button>
                </Box>
              </Box>
            </Box>
          </Grid>

          {/* Sağ Taraf - Vitrin */}
          <Grid item xs={12} md={4}>
            <Box className="bg-white border border-[#dfdfdf]">
              <Box className="flex justify-between items-center p-3 border-b border-[#dfdfdf]">
                <Typography className="text-[#333]">
                  Vitrin
                </Typography>
                <Typography className="text-[#0066ff] text-sm cursor-pointer hover:underline">
                  Tüm vitrin ilanlarını göster
                </Typography>
              </Box>

              <Box className="p-3">
                <Grid container spacing={2}>
                  {mainPageItems.slice(0, 10).map((item, index) => (
                    <Grid item xs={6} key={item.id}>
                      <Box className="border border-[#dfdfdf] hover:shadow-md transition-shadow cursor-pointer h-full">
                        <Box className="relative pt-[75%]"> {/* 4:3 aspect ratio */}
                          <img 
                            src={item.image} 
                            alt={item.title} 
                            className="absolute top-0 left-0 w-full h-full object-cover"
                          />
                        </Box>
                        <Box className="p-2">
                          <Typography 
                            className="text-xs text-[#333] line-clamp-2 min-h-[32px]"
                            title={item.title}
                          >
                            {item.title}
                          </Typography>
                          <Typography className="text-xs font-semibold text-[#333] mt-1">
                            {item.price}
                          </Typography>
                          <Box className="flex flex-col mt-1">
                            <Typography className="text-[10px] text-[#666]">
                              {item.location}
                            </Typography>
                            <Typography className="text-[10px] text-[#666]">
                              {item.date}
                            </Typography>
                          </Box>
                        </Box>
                      </Box>
                    </Grid>
                  ))}
                </Grid>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
} 