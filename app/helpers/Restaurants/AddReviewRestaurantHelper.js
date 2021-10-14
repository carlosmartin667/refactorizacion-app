import React, { useState } from "react";

import firebase from "firebase/app";
import "firebase/firestore";
import { firebaseApp } from "../../utils/firebase";

const db = firebase.firestore(firebaseApp);
export const AddReviewRestaurantHelper = (navigation, route) => {
  const { idRestaurant } = route.params;
  const [rating, setRating] = useState(null);
  const [title, setTitle] = useState("");
  const [review, setReview] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const addRevew = () => {
    if (!rating) {
      console.log("No has dado ninguna putuacion");
    } else if (!title) {
      console.log("El titulo es oblogatorio");
    } else if (!review) {
      console.log("El comentatio es obligatorio");
    } else {
      setIsLoading(true);
      const user = firebase.auth().currentUser;
      const paylod = {
        idUser: user.uid,
        avatarUser: user.photoURL,
        idRestaurant: idRestaurant,
        title: title,
        review: review,
        rating: rating,
        createAt: new Date(),
      };

      db.collection("reviews")
        .add(paylod)
        .then(() => {
          updateRestaurant();
        })
        .catch(() => {
          console.log("Error al enviar la review");
          setIsLoading(false);
        });
    }
  };

  const updateRestaurant = () => {
    const restaurantRef = db.collection("restaurants").doc(idRestaurant);

    restaurantRef.get().then((response) => {
      const restaurantData = response.data();
      const ratingTotal = restaurantData.ratingTotal + rating;
      const quantityVoting = restaurantData.quantityVoting + 1;
      const ratingResult = ratingTotal / quantityVoting;

      restaurantRef
        .update({
          rating: ratingResult,
          ratingTotal,
          quantityVoting,
        })
        .then(() => {
          setIsLoading(false);
          navigation.goBack();
        });
    });
  };
  return {
    addRevew,
    isLoading,
    setRating,
    setTitle,
    setReview,
  };
};
