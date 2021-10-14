import React from "react";
import { View, Text } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import Restaurants from "../screens/Restaurants";
// import TopRestaurans from "../screens/TopRestaurans";
import Search from "../screens/Search";

const Stack = createNativeStackNavigator();
const SearchStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="SearchStack"
        component={Search}
        options={{ title: "Search Stack  " }}
      />
    </Stack.Navigator>
  );
};

export default SearchStack;
