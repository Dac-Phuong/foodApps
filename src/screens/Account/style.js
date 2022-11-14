import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  Content: {
    alignItems: "center",

    justifyContent: "center",
  },
  text: {
    paddingVertical: 20,
    fontSize: 18,
    color: "#818181",
    fontWeight: "500",
  },
  Images: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: -50,
    position: "relative",
  },
  BtnAdd: {
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
    width: 80,
    borderRadius: 80,
    height: 80,
    backgroundColor: "rgba(52, 52, 52, 0.6)",
  },
  main: {
    backgroundColor: "#F6F6F6",
    paddingTop: 10,
    flex: 1,
    height: 120,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: "100%",
  },
  warp: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  btn: {
    flex: 1,
    flexDirection: "row",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  back:{
    position: "absolute", left: 0 ,
  },
  Textbtn: {
    fontSize: 16,
    fontWeight: "500",
  },
  Button: {
    alignItems: "center",
    justifyContent: "center",
    height: 50,
    borderRadius: 8,
    backgroundColor: "#8997FA",
   
  },
  ButtonText: {
    fontSize: 16,
    fontWeight: "500",
    color: "#fff",
  },
  Account: {
    flex: 1,
    paddingHorizontal: 20,
  },
});
export default styles;
