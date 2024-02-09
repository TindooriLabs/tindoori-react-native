const familiesWeights = {
  nunito:{
  regular: 'Nunito_400Regular',
  semiBold: 'Nunito_600SemiBold',
  bold: 'Nunito_700Bold',
  extraBold: 'Nunito_800ExtraBold'
  },
  inter:{
    medium: 'Inter_500Medium',
    regular: 'Inter_400Regular'
  }
} as const

const sizes = {
  xs: 12,
  sm: 14,
  md: 16,
  lg: 18,
  xl: 20,
  xxl: 22
} as const

const fonts = {
  familiesWeights,
  sizes
} as const

export default fonts
