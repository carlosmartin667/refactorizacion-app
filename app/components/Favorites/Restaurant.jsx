import React from "react";
import { View, Text, ActivityIndicator, TouchableOpacity } from "react-native";
import { Image, Icon } from "react-native-elements";

import { FavoritesCss } from "../../helpers/estilos/FavoritesCss";
import { RestaurantHepers } from "../../helpers/Favorites/RestaurantHepers";

const Restaurant = ({
  restaurant,
  setIsLoading,
  setReloadData,
  navigation,
}) => {
  const { id, name, images } = restaurant.item;

  const styles = FavoritesCss();

  const confirmRemoveFavorite = RestaurantHepers(
    restaurant,
    setIsLoading,
    setReloadData,
    navigation
  );

  return (
    <View style={styles.restaurant}>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate("Restaurants", {
            screen: "restaurant",
            params: { id },
          })
        }
      >
        <Image
          resizeMode="cover"
          style={styles.image}
          PlaceholderContent={<ActivityIndicator color="#fff" />}
          source={
            images[0]
              ? { uri: images[0] }
              : require("../../../assets/img/10.1 no-image.png")
          }
        />
        <View style={styles.info}>
          <Text style={styles.name}>{name}</Text>
          <Icon
            type="material-community"
            name="heart"
            color="#f00"
            containerStyle={styles.favorite}
            onPress={confirmRemoveFavorite}
            underlayColor="transparent"
          />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Restaurant;
