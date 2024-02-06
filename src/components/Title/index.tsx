import { Text } from 'react-native'
import S from './styles'
import type { TitleProps } from './types'

export const Title = ({ titleText }: TitleProps) => (
  <Text style={S.title}>{titleText}</Text>
)
