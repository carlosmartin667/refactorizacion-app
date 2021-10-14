import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Favorites from "../screens/Favorites";

const Stack = createNativeStackNavigator();
const FavoritesStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="FavoritesStack"
        component={Favorites}
        options={{ title: "Favorites Stack " }}
      />
    </Stack.Navigator>
  );
};

export default FavoritesStack;
