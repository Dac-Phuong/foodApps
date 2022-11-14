import {Dimensions, StyleSheet} from 'react-native';
import { colors } from '../../../theme/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1, 
    justifyContent:"flex-end", 
    alignItems: 'center',
    backgroundColor: colors.white,
  },
  loginBG: {
    width: 280,
    height: 355,
    resizeMode: "contain",
    justifyContent: 'flex-start'
  },
  loginLogoText:{
    marginLeft: "auto",
    marginRight: "auto",
    width: "90%",
  },
  oneTagLogo:{
    width: 145,
    height: 60,
    marginTop: 40,
    marginBottom: 70,
    marginLeft: "auto",
    marginRight: "auto"
  },
  loginText:{
    color: colors.black,
    fontFamily: "NunitoSans_400Regular",
    fontSize: 22,
    fontWeight: "600",
    lineHeight: 30,
    textAlign: "center",
  },
  buttonColumn:{
    width: "90%",
    marginTop: 50,
  }, 
  blueButton: {
    width: "100%",
    borderRadius: 8,
    backgroundColor: colors.mainBlue,
    paddingVertical: 10
  }, 
  blueButtonText: {
    color: colors.white,
    fontFamily: "NunitoSans_600SemiBold",
    fontSize: 18,
    textAlign: "center",
  },
  blueBorderButton: {
    width: "100%",
    borderRadius: 8,
    borderColor: colors.mainBlue,
    borderWidth: 1,
    paddingVertical: 10
  }, 
  blueBorderButtonText: {
    color: colors.mainBlue,
    fontFamily: "NunitoSans_600SemiBold",
    fontSize: 18,
    textAlign: "center",
  },
  blankButton: {
    width: "100%",
    paddingVertical: 10
  }, 
  blankButtonText:{
    opacity: 0.5,
    color: colors.black,
    fontFamily: "NunitoSans_600SemiBold",
    fontSize: 18,
    textAlign: "center",
  }
});
