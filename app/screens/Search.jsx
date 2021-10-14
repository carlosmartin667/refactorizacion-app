import React, { useState, useEffect } from "react";
import { View, FlatList } from "react-native";
import { SearchBar } from "react-native-elements";
import { FireSQL } from "firesql";
import firebase from "firebase/app";
import NoFoundRestaurants from "../components/Search/NoFoundRestaurants";
import Restaurant from "../components/Search/Restaurant";
import { SearchCss } from "../helpers/estilos/SearchCss";
import { SearchHelper } from "../helpers/Search/SearchHelper";

const fireSQL = new FireSQL(firebase.firestore(), { includeId: "id" });

export default function Search({ navigation }) {
  const { search, setSearch, restaurants, setRestaurants } = SearchHelper();
  const styles = SearchCss();
  return (
    <View>
      <SearchBar
        placeholder="Busca tu restaurante..."
        onChangeText={(e) => setSearch(e)}
        value={search}
        containerStyle={styles.searchBar}
      />
      {restaurants.length === 0 ? (
        <NoFoundRestaurants />
      ) : (
        <FlatList
          data={restaurants}
          renderItem={(restaurant) => (
            <Restaurant restaurant={restaurant} navigation={navigation} />
          )}
          keyExtractor={(item, index) => index.toString()}
        />
      )}
    </View>
  );
}
