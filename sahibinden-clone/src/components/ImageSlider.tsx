'use client'
import { useState, useEffect } from 'react'
import { Box, IconButton, Grid } from '@mui/material'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import ZoomInIcon from '@mui/icons-material/ZoomIn'

interface ImageSliderProps {
  images: string[]
  alt?: string
}

export default function ImageSlider({ images }: ImageSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [showThumbnails, setShowThumbnails] = useState(true)

  const handlePrevious = () => {
    setCurrentIndex(prev => (prev === 0 ? images.length - 1 : prev - 1))
  }

  const handleNext = () => {
    setCurrentIndex(prev => (prev === images.length - 1 ? 0 : prev + 1))
  }

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') handlePrevious()
      if (e.key === 'ArrowRight') handleNext()
    }
    
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  return (
    <Box>
      {/* Main Image */}
      <Box className="relative aspect-[4/3] bg-black mb-2">
        <img
          src={images[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          className="w-full h-full object-contain"
        />
        <IconButton
          onClick={handlePrevious}
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 text-white hover:bg-black/70"
        >
          <ArrowBackIcon />
        </IconButton>
        <IconButton
          onClick={handleNext}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 text-white hover:bg-black/70"
        >
          <ArrowForwardIcon />
        </IconButton>
        <IconButton
          className="absolute right-2 top-2 bg-black/50 text-white hover:bg-black/70"
        >
          <ZoomInIcon />
        </IconButton>
      </Box>

      {/* Thumbnails */}
      {showThumbnails && (
        <Grid container spacing={1}>
          {images.map((image, index) => (
            <Grid item xs={3} sm={2} md={1.5} key={index}>
              <Box
                onClick={() => setCurrentIndex(index)}
                className={`
                  cursor-pointer border-2 aspect-square
                  ${index === currentIndex ? 'border-blue-500' : 'border-transparent'}
                `}
              >
                <img
                  src={image}
                  alt={`Thumbnail ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </Box>
            </Grid>
          ))}
        </Grid>
      )}
    </Box>
  )
} 