import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

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
