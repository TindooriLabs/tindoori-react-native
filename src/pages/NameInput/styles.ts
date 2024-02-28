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
  verificationText: {
    marginTop: hp("1.42%"),
    fontFamily: T.fonts.familiesWeights.inter.regular,
    fontSize: hp("1.42%"),
    lineHeight: hp("2.37%"),
    color: "#718096",
    width: wp("87.69%"),
  },
});

export default styles;
