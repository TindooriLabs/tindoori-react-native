import { StyleSheet } from 'react-native'

import T from 'theme'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from 'react-native-responsive-screen'

const horizonalRule = {
  flex: 1,
  height: 1,
  backgroundColor: '#D9D9D9'
}
const styles = StyleSheet.create({
  horizontalRuleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop:hp('86.73%'),
    position:'absolute'
    
  },
  horizontalRuleLeft: {
    ...horizonalRule,
    marginLeft: wp('6.15%')
  },
  horizontalRuleText: {
    paddingHorizontal: wp('6.15%'),
    textAlign: 'center',
    color: '#718096',
    fontFamily: T.fonts.familiesWeights.nunito.regular,
    fontSize: hp('1.42%'),
    lineHeight: hp('2.37%')
  },
  horizontalRuleRight: {
    ...horizonalRule,
    marginRight: wp('6.15%')
  },
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    position:'absolute',
    marginTop: hp('91%')
  },
  iconButton: {
    width: wp('11.03%'),
    height: wp('11.03%'),
    borderColor: '#DADADA',
    borderWidth: wp('0.26%'),
    borderRadius: wp('5.51%'),
    alignItems: 'center',
    justifyContent: 'center'
  },
  iconImage: {
    width: wp('6.15%'),
    height: wp('6.15%')
  }
})

export default styles
