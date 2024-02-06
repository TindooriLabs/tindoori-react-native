import { StyleSheet } from 'react-native'

import T from 'theme'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from 'react-native-responsive-screen'

const styles = StyleSheet.create({
 
  continueButton: {
    width: wp('87.69%'),
    height: hp('5.69%'),
    borderRadius: wp('2.05%'),
    backgroundColor: '#94E4B4',
    alignItems: 'center',
    justifyContent: 'center'
  },
  continueButtonText: {
    fontFamily: T.fonts.familiesWeights.nunito.bold,
    fontSize: hp('1.66%'),
    lineHeight: hp('2.61%'),
    color: '#0A5045'
  },
})

export default styles
