import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

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
