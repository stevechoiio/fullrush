import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%"
  },
  bottom: {
    width: "100%",
    height: "90%"
  },
  backgroundBottom: {
    flex: 1,
    justifyContent: "flex-end"
  },
  top: {
    width: "100%",
    height: "90%"
  },
  backgroundTop: {
    flex: 1,
    justifyContent: "flex-start"
  },
  flexContent: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-around"
  },
  text: {
    fontSize: 22,
    fontWeight: "normal",
    alignSelf: "center",
    paddingBottom: 15
  },
  form: {
    minWidth: "85%",
    maxWidth: "85%",
    borderStyle: "solid",
    borderWidth: 3,
    borderRadius: 25,
    padding: 5,
    paddingLeft: 15,
    fontSize: 18
  },
  button: {
    width: "40%",
    alignSelf: "center",
    borderRadius: 13,
    marginTop: 15
  },
  disabled: {
    width: "40%",
    alignSelf: "center",
    borderRadius: 13,
    marginTop: 15
  },
  buttonText: {
    alignSelf: "center",
    fontSize: 18,
    paddingTop: 8,
    paddingBottom: 8
  },
  back: {
    marginTop: 80,
    marginLeft: 30,
    height: 40,
    width: 40
  },
  error: {
    fontSize: 12,
    fontWeight: "normal",
    paddingLeft: 15
  },
  errorMessage: {
    fontSize: 12,
    fontWeight: "normal"
  }
});

export default styles;
