import React from "react";
import { View, ScrollView, Dimensions } from "react-native";
import { Icon } from "react-native-elements";

import Loading from "../../components/Account/Loading";
import ListReviews from "../../components/Restaurants/ListReviews";

import { RestaurantCss } from "../../helpers/estilos/RestaurantCss";
import RestaurantInfo from "../../components/Restaurants/RestaurantInfo";
import TitleRestaurant from "../../components/Restaurants/TitleRestaurant";
import { RestaurantHelper } from "../../helpers/Restaurants/RestaurantHelper";

const Restaurant=({ navigation, route })=> {
  const styles = RestaurantCss();
  const { removeFavorite, addFavorite, isFavorite, rating, restaurant } =
    RestaurantHelper(navigation, route);

  if (!restaurant) return <Loading isVisible={true} text="Cargando..." />;

  return (
    <ScrollView vertical style={styles.viewBody}>
      <View style={styles.viewFavorite}>
        <Icon
          type="material-community"
          name={isFavorite ? "heart" : "heart-outline"}
          onPress={isFavorite ? removeFavorite : addFavorite}
          color={isFavorite ? "#f00" : "#000"}
          size={35}
          underlayColor="transparent"
        />
      </View>
      {/* <Carousel
        arrayImages={restaurant.images}
        height={250}
        width={screenWidth}
      /> */}
      <TitleRestaurant
        name={restaurant.name}
        description={restaurant.description}
        rating={rating}
      />
      <RestaurantInfo
        location={restaurant.location}
        name={restaurant.name}
        address={restaurant.address}
      />
      <ListReviews navigation={navigation} idRestaurant={restaurant.id} />
    </ScrollView>
  );
}
export default Restaurant;