import { StyleSheet } from 'react-native'

import T from 'theme'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from 'react-native-responsive-screen'

const styles = StyleSheet.create({
  termsAndPolicyText: {
    fontFamily: T.fonts.familiesWeights.nunito.regular,
    fontSize: hp('1.42%'),
    lineHeight: hp('2.37%'),
    color: '#7D7D7D',
    textAlign:'center',
    width:wp('68.97%')
  },
  termsAndPolicyPhrase: {
    color: '#0167FF'
  }
})

export default styles
