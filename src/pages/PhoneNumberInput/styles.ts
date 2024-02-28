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
  usaFlag: {
    width: wp("5.38%"),
    height: wp("5.13%"),
  },
  usText: {
    color: "#2D3748",
    fontFamily: T.fonts.familiesWeights.inter.medium,
    fontSize: hp("1.9%"),
    lineHeight: hp("2.75%"),
    marginLeft: wp("2.56%"),
  },
  verificationText: {
    marginTop: hp("2.37%"),
    fontFamily: T.fonts.familiesWeights.inter.regular,
    fontSize: hp("1.42%"),
    lineHeight: hp("2.27%"),
    color: "#718096",
  },
  countryCode: {
    marginLeft: wp("3.08%"),
    fontFamily: T.fonts.familiesWeights.inter.medium,
    fontSize: hp("1.9%"),
    color: "rgba(113, 128, 150, 0.7)",
    lineHeight: hp("2.75%"),
  },
  phoneNumberText: {
    color: "#2D3748",
    fontFamily: T.fonts.familiesWeights.inter.medium,
    fontSize: hp("1.9%"),
    lineHeight: hp("2.75%"),
    width: wp("49.23%"),
    marginLeft: wp("2.75%"),
  },
  phoneNumberInputView: {
    flexDirection: "row",
    marginTop: hp("14.34%"),
  },
  horizontalRuleView: {
    flexDirection: "row",
    marginTop: wp("1.18%"),
    width: wp("74%"),
  },
  horizontalRule: {
    flex: 1,
    height: 1,
    backgroundColor: "#CBD2E0",
  },
  emailContainer: {
    alignItems: "flex-start",
    marginTop: hp("5.21%"),
  },
  fieldLabel: {
    lineHeight: hp("2.6%"),
    fontFamily: T.fonts.familiesWeights.nunito.semiBold,
    fontSize: hp("1.66%"),
    color: "#48536A",
  },
  fieldInput: {
    marginTop: hp("1.18%"),
    width: wp("87.69%"),
    height: hp("5.69%"),
    borderWidth: wp("0.26%"),
    borderColor: "#CBD2E0",
    borderRadius: wp("1.03%"),
  },
  passwordContainer: {
    alignItems: "flex-start",
    marginTop: hp("4.03%"),
  },
});

export default styles;
