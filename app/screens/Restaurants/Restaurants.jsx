import React from "react";
import { View } from "react-native";
import { Icon } from "react-native-elements";

import { RestaurantsCss } from "../../helpers/estilos/RestaurantsCss";
import { RestaurantsHelper } from "../../helpers/Restaurants/RestaurantsHelper";

import ListRestaurants from "../../components/Restaurants/ListRestaurants";

const Restaurants = ({ navigation }) => {
  const styles = RestaurantsCss();
  const { handleLoadMore, isLoading, restaurants, user } = RestaurantsHelper();
  return (
    <View style={styles.viewBody}>
      <ListRestaurants
        restaurants={restaurants}
        handleLoadMore={handleLoadMore}
        isLoading={isLoading}
      />
      {user && (
        <Icon
          reverse
          type="material-community"
          name="plus"
          color="#00a680"
          containerStyle={styles.btnContainer}
          onPress={() => navigation.navigate("add-restaurant")}
        />
      )}
    </View>
  );
};

export default Restaurants;
