import { View } from 'react-native'
import S from './styles'
import { Title } from 'components/Title'
import { useForm, Controller } from 'react-hook-form'
import { ContinueButton } from 'components/ContinueButton'
import { TermsAndPolicy } from 'components/TermsAndPolicy'
import { OAuth } from 'components/OAuth'
import { Email } from 'components/Email'
import { Password } from 'components/Password'
import { useTranslation } from 'react-i18next'
import type { LoginNavigatorProps } from 'routes/LoginNavigator/types'

export const Login = ({ navigation }: LoginNavigatorProps) => {
  const { t } = useTranslation()
  const {
    control,
    handleSubmit,
    formState: { isDirty, isValid }
  } = useForm({
    defaultValues: {
      email: '',
      password: ''
    }
  })
  const onSubmit = (data: any) => console.log(data)
  return (
    <View style={S.container}>
      <Title titleText={t('Login.title')} />
      <Controller
        control={control}
        rules={{
          required: true
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <Email
            onBlur={onBlur}
            onKeyPress={(e: { nativeEvent: { key: string } }) => {
              if (e.nativeEvent.key === ' ') {
                onChange(value.substring(0, value.length - 1))
              }
            }}
            value={value}
            onChange={onChange}
            label={t('Shared.emailLabel')}
          />
        )}
        name="email"
      />
      <Controller
        control={control}
        rules={{
          required: true,
          maxLength: 100
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <Password
            onBlur={onBlur}
            onKeyPress={(e: { nativeEvent: { key: string } }) => {
              if (e.nativeEvent.key === ' ') {
                onChange(value.substring(0, value.length - 1))
              }
            }}
            onChange={onChange}
            value={value}
            label={t('Shared.passwordLabel')}
          />
        )}
        name="password"
      />
      <ContinueButton
        marginTop="23.46%"
        buttonText={t('Shared.conitnueButton')}
        disabled={!isDirty || !isValid}
        handleSubmit={handleSubmit(onSubmit)}
      />
      <TermsAndPolicy marginTop="1.9%" />
      <OAuth ruleText={t('Login.OAuthText')} />
    </View>
  )
}
