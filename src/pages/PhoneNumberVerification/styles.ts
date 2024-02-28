import { StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import T from "theme";

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: T.colors.white,
    flex: 1,
  },
  subtext: {
    marginTop: hp("1.9%"),
    alignSelf: "flex-start",
    marginLeft: wp("6.15%"),
    color: "#718096",
    fontFamily: T.fonts.familiesWeights.nunito.regular,
    fontSize: hp("1.66%"),
    lineHeight: hp("2.61%"),
  },
  codeDigit: {
    width: wp("12.05%"),
    height: hp("6.04%"),
    borderColor: "#718096",
    borderWidth: wp("0.26%"),
    marginTop: hp("10.9%"),
    borderRadius: wp("1.03%"),
    textAlign: "center",
  },
  codeView: {
    flexDirection: "row",
    width: wp("87.95%"),
    justifyContent: "space-between",
  },
  resendCodeView: {
    marginTop: hp("91.82%"),
    position:'absolute'
  },
  resendCodeButtonText: {
    color: "#0A5045",
    fontFamily: T.fonts.familiesWeights.nunito.semiBold,
    fontSize: hp("1.66%"),
    lineHeight: hp("2.61%"),
  },
  resendCodeTimerText:{
    color: "#48536A",
    fontFamily: T.fonts.familiesWeights.nunito.semiBold,
    fontSize: hp("1.9%"),
    lineHeight: hp("2.65%"),
    marginTop: hp('2%')
  }
});

export default styles;
