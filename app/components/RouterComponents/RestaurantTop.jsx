import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { Card, Image, Icon, Rating } from "react-native-elements";
import { ListTopRestaurantsCss } from "../../helpers/estilos/ListTopRestaurantsCss";
import { TopRestauranHelper } from "../../helpers/TopRestaurans/TopRestaurantHelper";

const RestaurantTop = ({ restaurant, navigation }) => {
  const styles = ListTopRestaurantsCss();

  const { id, name, rating, images, description, iconColor } =
    TopRestauranHelper(restaurant);

  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate("Restaurants", {
          screen: "restaurant",
          params: { id },
        })
      }
    >
      <Card containerStyle={styles.containerCard}>
        <Icon
          type="material-community"
          name="chess-queen"
          color={iconColor}
          size={40}
          containerStyle={styles.containerIcon}
        />
        <Image
          style={styles.restaurantImage}
          resizeMode="cover"
          source={
            images[0]
              ? { uri: images[0] }
              : require("../../../assets/img/10.1 no-image.png")
          }
        />
        <View style={styles.titleRating}>
          <Text style={styles.title}>{name}</Text>
          <Rating imageSize={20} startingValue={rating} readonly />
        </View>
        <Text style={styles.description}>{description}</Text>
      </Card>
    </TouchableOpacity>
  );
};
export default RestaurantTop;
