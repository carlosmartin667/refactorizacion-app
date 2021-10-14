import { StyleSheet } from "react-native";

export const RestaurantsCss = () => {
  const styles = StyleSheet.create({
    viewBody: {
      flex: 1,
      backgroundColor: "#fff",
    },
    btnContainer: {
      position: "absolute",
      bottom: 10,
      right: 10,
      shadowColor: "black",
      shadowOffset: { width: 2, height: 2 },
      shadowOpacity: 0.5,
    },
  });
  return styles;
};
