import { Text, Linking } from 'react-native'
import S from './styles'
import { heightPercentageToDP as hp } from 'react-native-responsive-screen'
import type { TermsAndPolicyProps } from './types'
import { useTranslation } from 'react-i18next'

export const TermsAndPolicy = ({ marginTop }: TermsAndPolicyProps) => {
  const { t } = useTranslation()
  const termsAndPolicyElements = t('Shared.termsAndPolicy').split('?')
  return (
    <Text style={{ ...S.termsAndPolicyText, marginTop: hp(marginTop) }}>
     {termsAndPolicyElements[0]}
      <Text
        style={S.termsAndPolicyPhrase}
        onPress={() => {
          return Linking.openURL(
            'https://www.apple.com/legal/internet-services/itunes/dev/stdeula/'
          )
        }}
      >
        {termsAndPolicyElements[1]}
      </Text>
      {termsAndPolicyElements[2]}
      <Text
        style={S.termsAndPolicyPhrase}
        onPress={() => {
          return Linking.openURL('https://www.tindoori.com/privacy')
        }}
      >
         {termsAndPolicyElements[3]}
      </Text>
    </Text>
  )
}
