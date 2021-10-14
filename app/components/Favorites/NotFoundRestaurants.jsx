import React from 'react'
import { View, Text } from 'react-native'
import { Icon } from 'react-native-elements';

const NotFoundRestaurants = () => {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Icon type="material-community" name="alert-outline" size={50} />
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>
          No tienes restaurantes en tu lista
        </Text>
      </View>
    );
}

export default NotFoundRestaurants
