import { Text, TextInput, View } from 'react-native'
import S from '../Email/styles'
import type { PasswordProps } from './types'

export const Password = ({
  onBlur,
  onKeyPress,
  value,
  onChange,
  onChangePassword,
  label
}: PasswordProps) => (
  <View style={S.passwordContainer}>
    <Text style={S.fieldLabel}>{label}</Text>
    <TextInput
      onBlur={onBlur}
      onChangeText={text => {
        onChange(text)
        if (onChangePassword) {
          onChangePassword(text)
        }
      }}
      onKeyPress={onKeyPress}
      value={value}
      secureTextEntry={true}
      style={S.fieldInput}
    />
  </View>
)
