import { StyleSheet } from 'react-native'

import T from 'theme'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from 'react-native-responsive-screen'

const styles = StyleSheet.create({
  fieldLabel: {
    lineHeight: hp('2.6%'),
    fontFamily: T.fonts.familiesWeights.nunito.semiBold,
    fontSize: hp('1.66%'),
    color: '#48536A'
  },
  fieldInput: {
    marginTop: hp('1.18%'),
    width: wp('87.69%'),
    height: hp('5.69%'),
    borderWidth: wp('0.26%'),
    borderColor: '#CBD2E0',
    borderRadius: wp('1.03%'),
    paddingLeft: wp('3%')
  },
  passwordContainer: {
    alignItems: 'flex-start',
    marginTop: hp('4.03%')
  },
  emailContainer: {
    alignItems: 'flex-start',
    marginTop: hp('5.21%')
  },
})

export default styles
