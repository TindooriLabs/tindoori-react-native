import { StyleSheet } from 'react-native'

import T from 'theme'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from 'react-native-responsive-screen'

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: T.colors.white,
    flex: 1
    // gap: T.spacings.giga,
    // justifyContent: 'center'
  },
  logo: {
    width: wp('63.59%'),
    height: wp('63.59%'),
    marginTop: hp('20%')
  },
  title: {
    marginTop: hp('1.66%'),
    fontFamily: T.fonts.familiesWeights.nunito.extraBold,
    fontSize: hp('3.79%'),
    lineHeight: hp('4.74%'),
    color: '#333333'
  },
  subtitle: {
    marginTop: hp('0.95%'),
    fontFamily: T.fonts.familiesWeights.nunito.regular,
    fontSize: hp('2.37%'),
    lineHeight: hp('3.79%'),
    color: '#0A5045'
  },
  loginButton: {
    marginTop: hp('2.49%'),
    width: wp('87.69%'),
    height: hp('5.69%'),
    borderRadius: wp('2.05%'),
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: wp('0.51%'),
    borderColor: '#94E4B4'
  },
  loginButtonText: {
    fontFamily: T.fonts.familiesWeights.nunito.semiBold,
    fontSize: hp('1.66%'),
    lineHeight: hp('2.61%'),
    color: '#0A5045'
  }
})

export default styles
