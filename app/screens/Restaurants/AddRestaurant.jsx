import React, {  useState } from "react";
import { View } from "react-native";
import Loading from "../../components/Account/Loading";
import AddRestaurantForm from "../../components/Restaurants/AddRestaurantForm";

const AddRestaurant = ({ navigation }) => {
  const [isLoading, setIsLoading] = useState(false);
  return (
    <View>
      <AddRestaurantForm
        setIsLoading={setIsLoading}
        navigation={navigation}
      />
      <Loading isVisible={isLoading} text="Creando restaurante" />
    </View>
  );
};

export default AddRestaurant;
