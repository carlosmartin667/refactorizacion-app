import React from "react";
import { Alert } from "react-native";
import firebase from "firebase";
import "firebase/firestore";
import { firebaseApp } from "../../utils/firebase";

const db = firebase.firestore(firebaseApp);

export const RestaurantHepers = (restaurant, setIsLoading, setReloadData) => {
  const { id } = restaurant.item;

  const confirmRemoveFavorite = () => {
    Alert.alert(
      "Eliminar Restaurante de Favoritos",
      "¿Estas seguro de que quieres eliminar el restaurante de favoritos?",
      [
        {
          text: "Cancelar",
          style: "cancel",
        },
        {
          text: "Eliminar",
          onPress: removeFavorite,
        },
      ],
      { cancelable: false }
    );
  };

  const removeFavorite = () => {
    setIsLoading(true);
    db.collection("favorites")
      .where("idRestaurant", "==", id)
      .where("idUser", "==", firebase.auth().currentUser.uid)
      .get()
      .then((response) => {
        response.forEach((doc) => {
          const idFavorite = doc.id;
          db.collection("favorites")
            .doc(idFavorite)
            .delete()
            .then(() => {
              setIsLoading(false);
              setReloadData(true);
              console.log("Restaurante eliminado correctamente");
            })
            .catch(() => {
              setIsLoading(false);
              console.log("Error al eliminar el restaurante");
            });
        });
      });
  };
  
  return confirmRemoveFavorite;
};
