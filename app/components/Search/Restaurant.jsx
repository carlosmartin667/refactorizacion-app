import React from "react";

import { Icon, ListItem } from "react-native-elements";

const Restaurant = ({ restaurant, navigation }) => {
  const { id, name, images } = restaurant.item;
  return (
    <ListItem
      title={name}
      leftAvatar={{
        source: images[0]
          ? { uri: images[0] }
          : require("../../../assets/img/10.1 no-image.png"),
      }}
      rightIcon={<Icon type="material-community" name="chevron-right" />}
      onPress={() =>
        navigation.navigate("Restaurants", {
          screen: "restaurant",
          params: { id, name },
        })
      }
    />
  );
};

export default Restaurant;
