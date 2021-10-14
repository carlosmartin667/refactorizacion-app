import React from "react";
import { View, Text } from "react-native";
import { Rating } from "react-native-elements";
import { RestaurantCss } from "../../helpers/estilos/RestaurantCss";

const TitleRestaurant = ({ name, description, rating }) => {
  const styles = RestaurantCss();
  return (
    <View style={styles.viewRestaurantTitle}>
      <View style={{ flexDirection: "row" }}>
        <Text style={styles.nameRestaurant}>{name}</Text>
        <Rating
          style={styles.rating}
          imageSize={20}
          readonly
          startingValue={parseFloat(rating)}
        />
      </View>
      <Text style={styles.descriptionRestaurant}>{description}</Text>
    </View>
  );
};

export default TitleRestaurant;
