'use client'
import { Box, Container, Typography, TextField, Button, Checkbox, FormControlLabel } from '@mui/material'
import Link from 'next/link'
import Image from 'next/image'
import GoogleIcon from '@mui/icons-material/Google'
import AppleIcon from '@mui/icons-material/Apple'

export default function RegisterPage() {
  return (
    <Box className="min-h-screen bg-[#f8f8f8] py-8">
      <Container maxWidth="sm">
        <Box className="bg-white p-8 rounded-lg shadow-sm">
          {/* Logo */}
          <Box className="flex justify-center mb-8">
            <Link href="/">
              <Image
                src="/sahibinden-logo.png"
                alt="sahibinden.com"
                width={200}
                height={40}
              />
            </Link>
          </Box>

          <Typography variant="h5" className="text-center mb-6">
            Hesap aç
          </Typography>

          {/* Register Form */}
          <Box component="form" className="space-y-4">
            <TextField
              fullWidth
              label="Ad"
              variant="outlined"
              size="small"
            />
            <TextField
              fullWidth
              label="Soyad"
              variant="outlined"
              size="small"
            />
            <TextField
              fullWidth
              label="E-posta adresi"
              variant="outlined"
              size="small"
            />
            <TextField
              fullWidth
              label="Şifre"
              type="password"
              variant="outlined"
              size="small"
              helperText="En az 8 karakter uzunluğunda olmalıdır"
            />

            <FormControlLabel
              control={<Checkbox />}
              label={
                <Typography className="text-sm">
                  Bireysel Hesap Sözleşmesi ve Ekleri'ni kabul ediyorum
                </Typography>
              }
            />

            <Button
              fullWidth
              variant="contained"
              className="bg-[#489ae9] hover:bg-[#3d83c7] normal-case py-3"
            >
              Hesap aç
            </Button>

            <Box className="relative py-4">
              <Box className="absolute inset-0 flex items-center">
                <Box className="w-full border-t border-gray-300" />
              </Box>
              <Box className="relative flex justify-center">
                <Typography className="bg-white px-4 text-sm text-gray-500">
                  VEYA
                </Typography>
              </Box>
            </Box>

            <Button
              fullWidth
              variant="outlined"
              startIcon={<GoogleIcon />}
              className="normal-case py-3 mb-3"
            >
              Google ile hesap aç
            </Button>

            <Button
              fullWidth
              variant="outlined"
              startIcon={<AppleIcon />}
              className="normal-case py-3"
            >
              Apple ile hesap aç
            </Button>

            <Box className="text-center mt-6">
              <Typography className="text-sm text-gray-500">
                Zaten hesabın var mı?{' '}
                <Link href="/login" className="text-[#0066ff] hover:underline">
                  Giriş yap
                </Link>
              </Typography>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  )
} 