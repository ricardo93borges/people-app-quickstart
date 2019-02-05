import { StyleSheet, Platform } from "react-native"

export default StyleSheet.create({
  menuWrapper: {
    flexDirection: "row"
  },
  menuIcon: {
    marginLeft: 10,
    paddingHorizontal: 5
  },
  menuIconRight: {
    marginRight: 15
  },
  headerTitle: {
    fontSize: 18,
    color: "#FFF",
    fontWeight: "bold",
    marginLeft: 10,
    marginTop: Platform.OS === "ios" ? 6 : 3
  },
  container: {
    paddingVertical: 4
  },
  item: {
    flexDirection: "row",
    alignItems: "center"
  },
  subitem: {
    marginLeft: 35
  },
  icon: {
    width: 25,
    height: 25,
    alignItems: "center",
    marginLeft: 10
  },
  logoutIcon: {
    width: 20,
    height: 20,
    marginRight: 5
  },
  inactiveIcon: {
    opacity: 0.62
  },
  label: {
    margin: 16,
    marginLeft: 10,
    fontWeight: "bold"
  },
  labelActive: {
    color: "#2196f3"
  },
  labelInactive: {
    color: "rgba(0, 0, 0, .87)"
  }
})
