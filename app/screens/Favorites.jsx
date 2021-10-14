import React, { useState } from "react";
import { View, Text, FlatList, ActivityIndicator } from "react-native";

import Loading from "../components/Account/Loading";

import NotFoundRestaurants from "../components/Favorites/NotFoundRestaurants";
import UserNoLogged from "../components/Favorites/UserNoLogged";
import { FavoritesCss } from "../helpers/estilos/FavoritesCss";
import Restaurant from "../components/Favorites/Restaurant";
import { FavoritesHelper } from "../helpers/Favorites/FavoritesHelper";

export default function Favorites({ navigation }) {
  const [isLoading, setIsLoading] = useState(false);
  const [reloadData, setReloadData] = useState(false);
  const { userLogged, restaurants } = FavoritesHelper();
  const styles = FavoritesCss();

  if (!userLogged) {
    return <UserNoLogged navigation={navigation} />;
  }
  if (restaurants?.length === 0) {
    return <NotFoundRestaurants />;
  }

  return (
    <View style={styles.viewBody}>
      {restaurants ? (
        <FlatList
          data={restaurants}
          renderItem={(restaurant) => (
            <Restaurant
              restaurant={restaurant}
              setIsLoading={setIsLoading}
              setReloadData={setReloadData}
              navigation={navigation}
            />
          )}
          keyExtractor={(item, index) => index.toString()}
        />
      ) : (
        <View style={styles.loaderRestaurants}>
          <ActivityIndicator size="large" />
          <Text style={{ textAlign: "center" }}>Cargando restaurantes</Text>
        </View>
      )}
      <Loading text="Eliinando restaurante" isVisible={isLoading} />
    </View>
  );
}