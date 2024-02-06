import { StyleSheet } from 'react-native'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from 'react-native-responsive-screen'
import i18n from 'localization/i18n'
import T from 'theme'

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: T.colors.white,
    flex: 1
  },
  emailContainer: {
    alignItems: 'flex-start',
    marginTop: hp('5.21%')
  },
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
    borderRadius: wp('1.03%')
  },
  passwordContainer: {
    alignItems: 'flex-start',
    marginTop: hp('4.03%')
  },
  passwordInputGuidelineBullet: {
    fontSize: wp('2.05%'),
    color: '#718096',
    opacity: 0.5
  },
  passwordInputGuideline: {
    marginTop: hp('1.42%'),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  passwordInputGuidelineText: {
    marginLeft: wp('1.54%'),
    color: '#718096',
    fontSize: wp('2.56%'),
    fontFamily: T.fonts.familiesWeights.nunito.regular,
    lineHeight: hp('1.66%')
  }
})

export default styles
