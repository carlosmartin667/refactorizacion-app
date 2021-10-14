import React from 'react'
import { View } from 'react-native'
import { Image } from 'react-native-elements';

const NoFoundRestaurants = () => {
    return (
      <View style={{ flex: 1, alignItems: "center" }}>
        <Image
          source={require("../../../assets/img/10.1 no-image.png")}
          resizeMode="cover"
          style={{ width: 200, height: 200 }}
        />
      </View>
    );
}

export default NoFoundRestaurants
