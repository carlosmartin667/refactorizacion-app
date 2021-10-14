import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import RestaurantsStack from "./RestaurantsStack";
import AccountStack from "./AccountStack";
import FavoritesStack from "./FavoritesStack";
import SearchStack from "./SearchStack";
import TopRestauransStack from "./TopRestauransStack";

import ScreenOptions from "../components/RouterComponents/ScreenOptions";

const Tab = createBottomTabNavigator();

const Navigations = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Restaurants"
        tabBarOptions={{
          inactiveTintcolor: "#646464",
          activeTintColor: "#00a680",
        }}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color }) => ScreenOptions(route, color),
          headerShown: false,
        })}
      >
        <Tab.Screen
          name="Restaurants"
          component={RestaurantsStack}
          options={{ title: "" }}
        />
        <Tab.Screen
          name="Account"
          component={AccountStack}
          options={{ title: "" }}
        />
        <Tab.Screen
          name="Favorites"
          component={FavoritesStack}
          options={{ title: "" }}
        />
        <Tab.Screen
          name="Search"
          component={SearchStack}
          options={{ title: "" }}
        />
        <Tab.Screen
          name="TopRestaurans"
          component={TopRestauransStack}
          options={{ title: "" }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Navigations;
