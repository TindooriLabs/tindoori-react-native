import { Pressable, Text, View, Image } from 'react-native'
import S from './styles'
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp
} from 'react-native-responsive-screen'
import type { OAuthProps } from './types'

export const OAuth = ({ ruleText }: OAuthProps) => (
  <>
    <View style={S.horizontalRuleContainer}>
      <View style={S.horizontalRuleLeft} />
      <View>
        <Text style={S.horizontalRuleText}>{ruleText}</Text>
      </View>
      <View style={S.horizontalRuleRight} />
    </View>
    <View style={S.iconContainer}>
      <Pressable style={S.iconButton}>
        <Image
          source={require('../../../assets/googleIcon.png')}
          style={S.iconImage}
        />
      </Pressable>
      <Pressable
        style={{
          ...S.iconButton,
          marginHorizontal: wp('10.77%')
        }}
      >
        <Image
          source={require('../../../assets/appleIcon.png')}
          style={S.iconImage}
        />
      </Pressable>
      <Pressable style={S.iconButton}>
        <Image
          source={require('../../../assets/facebookIcon.png')}
          style={S.iconImage}
        />
      </Pressable>
    </View>
  </>
)
