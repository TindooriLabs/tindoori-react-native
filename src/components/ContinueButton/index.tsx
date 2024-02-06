import { Pressable, Text } from 'react-native'
import S from './styles'
import { heightPercentageToDP as hp } from 'react-native-responsive-screen'
import type { ContinueButtonProps } from './types'

export const ContinueButton = ({
  marginTop,
  buttonText,
  disabled,
  handleSubmit
}: ContinueButtonProps) => (
  <Pressable
    style={{
      ...S.continueButton,
      marginTop: hp(marginTop),
      backgroundColor: disabled ? '#D9D9D9' : '#94E4B4'
    }}
    onPress={handleSubmit}
    disabled={disabled}
  >
    <Text style={S.continueButtonText}>{buttonText}</Text>
  </Pressable>
)
