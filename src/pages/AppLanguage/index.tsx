import { View, Text } from 'react-native'

import { useForm, Controller } from 'react-hook-form'
import { heightPercentageToDP as hp } from 'react-native-responsive-screen'
import S from './styles'
import { RadioButton } from 'react-native-paper'
import { useEffect, useState } from 'react'
import T from 'theme'
import { ContinueButton } from 'components/ContinueButton'
import i18n from 'localization/i18n'
import type { MainNavigatorProps } from 'routes/MainNavigator/types'
import * as SecureStore from 'expo-secure-store'

export const AppLanguage = ({ navigation }: MainNavigatorProps) => {
  const {
    control,
    handleSubmit,
    formState: { isDirty, isValid }
  } = useForm({
    defaultValues: {
      appLanguage: ''
    }
  })

  const onSubmit = async (data: any) => {
    i18n.changeLanguage(data.appLanguage)
    await SecureStore.setItemAsync('isLanguageSelected', 'true')
    navigation.navigate('Auth')
  }
  const radioOptions = [
    { value: 'en', label: '🇺🇸 English' },
    { value: 'zh', label: '🇨🇳 Mandarin' }
  ]
  const [selected, setSelected] = useState('none')

  return (
    <View style={S.container}>
      <Text style={S.title}>Please select your preferred language:</Text>
      <Controller
        control={control}
        rules={{ required: true }}
        render={({ field: { onChange, value } }) => (
          <RadioButton.Group
            onValueChange={value => {
              onChange(value)
              setSelected(value)
            }}
            value={value}
          >
            {radioOptions.map(option => (
              <RadioButton.Item
                key={option.value}
                label={option.label}
                value={option.value}
                labelStyle={{
                  ...S.radioOptionLabel,
                  fontFamily:
                    selected === option.value
                      ? T.fonts.familiesWeights.nunito.bold
                      : T.fonts.familiesWeights.nunito.regular
                }}
                style={{
                  ...S.radioOptionContainer,
                  backgroundColor:
                    selected === option.value
                      ? 'rgba(148, 228, 180, 0.2)'
                      : '#FFFFFF',
                  marginBottom: option.value === 'en' ? hp('2.84%') : 0
                }}
                uncheckedColor="rgba(113, 128, 150, 0.7)"
                color="#94E4B4"
              />
            ))}
          </RadioButton.Group>
        )}
        name="appLanguage"
      />
      <ContinueButton
        marginTop="27.25%"
        buttonText="Continue"
        disabled={!isDirty || !isValid}
        handleSubmit={handleSubmit(onSubmit)}
      />
    </View>
  )
}
