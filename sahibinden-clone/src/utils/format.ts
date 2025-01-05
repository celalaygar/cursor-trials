export const formatPrice = (price: number | string): string => {
  const num = typeof price === 'string' ? parseFloat(price.replace(/[^0-9]/g, '')) : price
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'TRY',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(num)
} 