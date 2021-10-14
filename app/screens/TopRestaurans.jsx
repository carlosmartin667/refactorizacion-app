import React from "react";
import { View } from "react-native";

import { TopRestauransHelper } from "../helpers/TopRestaurans/TopRestauransHelper";

import ListTopRestaurants from "../components/Ranking/ListTopRestaurants";

export default function TopRestaurants({ navigation }) {
  const restaurants = TopRestauransHelper();
  return (
    <View>
      <ListTopRestaurants restaurants={restaurants} navigation={navigation} />
    </View>
  );
}
