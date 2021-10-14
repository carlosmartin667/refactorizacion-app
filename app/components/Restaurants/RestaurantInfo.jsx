import React from "react";
import { View, Text } from "react-native";
import { RestaurantCss } from "../../helpers/estilos/RestaurantCss";
import { map } from "lodash";
import { ListItem } from "react-native-elements";
const RestaurantInfo = ({ location, name, address }) => {
  const styles = RestaurantCss();
  const listInfo = [
    {
      text: address,
      iconName: "map-marker",
      iconType: "material-community",
      action: null,
    },
    {
      text: "111 222 333",
      iconName: "phone",
      iconType: "material-community",
      action: null,
    },
    {
      text: "xAgustin93@gmail.com",
      iconName: "at",
      iconType: "material-community",
      action: null,
    },
  ];
  return (
    <View style={styles.viewRestaurantInfo}>
      <Text style={styles.restaurantInfoTitle}>
        Información sobre el restaurante
      </Text>
      {/* <Map location={location} name={name} height={100} /> */}
      {map(listInfo, (item, index) => (
        <ListItem
          key={index}
          title={item.text}
          leftIcon={{
            name: item.iconName,
            type: item.iconType,
            color: "#00a680",
          }}
          containerStyle={styles.containerListItem}
        />
      ))}
    </View>
  );
};

export default RestaurantInfo;
