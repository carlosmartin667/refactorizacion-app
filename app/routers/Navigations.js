import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import RestaurantsStack from "./RestaurantsStack";
import AccountStack from "./AccountStack";
import FavoritesStack from "./FavoritesStack";
import SearchStack from "./SearchStack";
import TopRestauransStack from "./TopRestauransStack";
import { Icon } from "react-native-elements/dist/icons/Icon";


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
          tabBarIcon: ({ color }) => screenOptions(route, color),
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
function screenOptions(route, color) {
  let iconName;

  switch (route.name) {
    case "Restaurants":
      iconName = "compass-outline";
      break;
    case "Favorites":
      iconName = "heart-outline";
      break;
    case "TopRestaurans":
      iconName = "star-outline";
      break;
    case "Search":
      iconName = "magnify";
      break;
    case "Account":
      iconName = "home-outline";
      break;
    default:
      break;
  }
  return (
    <Icon type="material-community" name={iconName} size={22} color={color} />
  );
}
export default Navigations;
