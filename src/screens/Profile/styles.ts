import { StyleSheet } from "react-native";
import { Fonts } from "../../themes/Fonts";

export const styles = StyleSheet.create({
    fullScreen: {
      flex: 1,
      backgroundColor: 'green',
    },
    title: {
      fontFamily: Fonts.Poppins_Bold,
      fontSize: 20,
      color: 'white',
      textAlign: 'center',
    },
    value: {
      fontFamily: Fonts.Poppins_Medium,
      fontSize: 15,
      color: 'black',
      textAlign: 'center',
    },
  });