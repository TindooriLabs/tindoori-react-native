import { Text, TextInput, View } from 'react-native'
import S from './styles'
import type { EmailProps } from './types'

export const Email = ({ onBlur, onKeyPress, value, onChange, label }: EmailProps) => (
  <View style={S.emailContainer}>
    <Text style={S.fieldLabel}>{label}</Text>
    <TextInput
      onBlur={onBlur}
      onChangeText={onChange}
      value={value}
      style={S.fieldInput}
      onKeyPress={onKeyPress}
    />
  </View>
)
