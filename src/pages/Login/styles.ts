import { StyleSheet } from 'react-native'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from 'react-native-responsive-screen'
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
  forgotPassword:{
    marginTop: hp('1.78%'),
    alignSelf:'flex-end',
    marginRight: wp('6.41%'),
    color:'#0167FF',
    textDecorationLine:'underline',
    fontFamily: T.fonts.familiesWeights.nunito.regular,
    fontSize: hp('1.42%'),
    lineHeight: hp('2.37%'),
  }
})

export default styles
