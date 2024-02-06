import { StyleSheet } from 'react-native'

import T from 'theme'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from 'react-native-responsive-screen'

const styles = StyleSheet.create({
  title: {
    marginTop: hp('13.15%'),
    fontFamily: T.fonts.familiesWeights.nunito.bold,
    lineHeight: hp('3.79%'),
    fontSize: hp('2.84%'),
    color: '#333333',
    alignSelf:'flex-start',
    marginLeft:wp('6.15%')
  }
})

export default styles
