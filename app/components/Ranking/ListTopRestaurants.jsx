import React from "react";
import { FlatList } from "react-native";

import RestaurantTop from "../RouterComponents/RestaurantTop";

const ListTopRestaurants = ({ restaurants, navigation }) => {
  return (
    <FlatList
      data={restaurants}
      renderItem={(restaurant) => (
        <RestaurantTop restaurant={restaurant} navigation={navigation} />
      )}
      keyExtractor={(item, index) => index.toString()}
    />
  );
};

export default ListTopRestaurants;
