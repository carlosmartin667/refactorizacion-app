import React from "react";
import { View, Text } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import Restaurants from "../screens/Restaurants";
import TopRestaurans from "../screens/TopRestaurans";

const Stack = createNativeStackNavigator();
const TopRestauransStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="TopRestauransStack"
        component={TopRestaurans}
        options={{ title: "Top Restaurans  " }}
      />
    </Stack.Navigator>
  );
};

export default TopRestauransStack;
