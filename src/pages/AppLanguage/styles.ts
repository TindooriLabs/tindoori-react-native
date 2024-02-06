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
  title: {
    marginTop: hp('25.47%'),
    fontFamily: T.fonts.familiesWeights.nunito.bold,
    fontSize: hp('2.84%'),
    lineHeight: hp('3.79%'),
    color: '#333333',
    textAlign: 'center',
    marginBottom:hp('7.94%')
  },
  radioOptionLabel: {
    fontFamily: T.fonts.familiesWeights.nunito.regular,
    fontSize: 16,
    lineHeight: 24
  },
  radioOptionContainer:{
    flexDirection:'row-reverse',
    width:wp('87.44%'),
    height:hp('6.16%'),
    borderColor:'#D9D9D9',
    borderWidth:wp('0.26%'),
    borderRadius:hp('5.92%'),

  }
})

export default styles
