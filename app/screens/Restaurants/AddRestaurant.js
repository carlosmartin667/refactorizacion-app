import React, { useRef, useState } from "react";
import { View } from "react-native";
// import Toast from "react-native-easy-toast";
import Loading from "../../components/Account/Loading";
import AddRestaurantForm from "../../components/Restaurants/AddRestaurantForm";

const AddRestaurant = (props) => {
  const { navigation } = props;
  const [isLoading, setIsLoading] = useState(false);
  const toastRef = useRef();
  return (
    <View>
      <AddRestaurantForm
        toastRef={toastRef}
        setIsLoading={setIsLoading}
        navigation={navigation}
      />
      <Loading isVisible={isLoading} text="Creando restaurante" />
    </View>
  );
};

export default AddRestaurant;
