'use client'
import { Box, Container, Grid, Typography, TextField, Select, MenuItem, FormControlLabel, Checkbox, Button } from '@mui/material'
import Header from '@/components/Header'
import { categories } from '@/data/categories'
import { mainPageItems } from '@/data/mainPage'

export default function DetailedSearch() {
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
                    defaultValue=""
                  >
                    <MenuItem value="">Tümü</MenuItem>
                    <MenuItem value="emlak">Emlak</MenuItem>
                    <MenuItem value="vasita">Vasıta</MenuItem>
                    <MenuItem value="yedek-parca">Yedek Parça, Aksesuar...</MenuItem>
                    <MenuItem value="ikinci-el">İkinci El ve Sıfır Al.</MenuItem>
                    <MenuItem value="is-makineleri">İş Makineleri & Sanayi</MenuItem>
                    <MenuItem value="ustalar">Özel Ders Verenler</MenuItem>
                    <MenuItem value="ozel-ders">İş İlanları</MenuItem>
                    <MenuItem value="is-ilanlari">Hayvanlar Alemi</MenuItem>
                    <MenuItem value="hayvanlar">Yardımcı Arayanlar</MenuItem>
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
                        defaultValue=""
                        displayEmpty
                      >
                        <MenuItem value="">İl</MenuItem>
                        <MenuItem value="istanbul">İstanbul</MenuItem>
                        <MenuItem value="ankara">Ankara</MenuItem>
                        <MenuItem value="izmir">İzmir</MenuItem>
                      </Select>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <Select
                        fullWidth
                        size="small"
                        defaultValue=""
                        displayEmpty
                      >
                        <MenuItem value="">İlçe</MenuItem>
                        <MenuItem value="kadikoy">Kadıköy</MenuItem>
                        <MenuItem value="besiktas">Beşiktaş</MenuItem>
                        <MenuItem value="sisli">Şişli</MenuItem>
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
                    defaultValue=""
                    displayEmpty
                  >
                    <MenuItem value="">Tümü</MenuItem>
                    <MenuItem value="today">Bugün</MenuItem>
                    <MenuItem value="last-week">Son 1 Hafta</MenuItem>
                    <MenuItem value="last-month">Son 1 Ay</MenuItem>
                  </Select>
                </Box>

                {/* Arama Kelimesi */}
                <Box>
                  <Typography className="text-sm mb-2">Arama Kelimesi</Typography>
                  <TextField
                    fullWidth
                    size="small"
                    placeholder="Kelime, ilan no veya mağaza adı ile ara"
                  />
                  <FormControlLabel
                    control={<Checkbox size="small" />}
                    label={<Typography className="text-sm">İlan açıklamalarını dahil et</Typography>}
                  />
                </Box>

                {/* Sıralama */}
                <Box>
                  <Typography className="text-sm mb-2">Sıralama</Typography>
                  <Select
                    fullWidth
                    size="small"
                    defaultValue="price-desc"
                  >
                    <MenuItem value="price-desc">Fiyata göre (Önce en yüksek)</MenuItem>
                    <MenuItem value="price-asc">Fiyata göre (Önce en düşük)</MenuItem>
                    <MenuItem value="date-desc">Tarihe göre (Önce en yeni)</MenuItem>
                    <MenuItem value="date-asc">Tarihe göre (Önce en eski)</MenuItem>
                  </Select>
                </Box>

                {/* Haritali İlanlar */}
                <Box>
                  <FormControlLabel
                    control={<Checkbox size="small" />}
                    label={<Typography className="text-sm">Haritalı İlanlar</Typography>}
                  />
                </Box>

                {/* Arama Butonu */}
                <Box>
                  <Button
                    variant="contained"
                    fullWidth
                    className="bg-[#489ae9] hover:bg-[#3d83c7]"
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
                  {mainPageItems.slice(0, 10).map((item) => (
                    <Grid item xs={12} key={item.id}>
                      <Box className="border border-[#dfdfdf] hover:shadow-md transition-shadow cursor-pointer">
                        <img 
                          src={item.image} 
                          alt={item.title} 
                          className="w-full h-[120px] object-cover"
                        />
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
                          <Box className="flex justify-between mt-1">
                            <Typography className="text-xs text-[#666]">
                              {item.location}
                            </Typography>
                            <Typography className="text-xs text-[#666]">
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