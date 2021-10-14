import React, { useState, useEffect } from "react";

import { firebaseApp } from "../../utils/firebase";
import firebase from "firebase/app";
import "firebase/firestore";

const db = firebase.firestore(firebaseApp);

export const TopRestauransHelper = () => {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    db.collection("restaurants")
      .orderBy("rating", "desc")
      .limit(5)
      .get()
      .then((response) => {
        const restaurantArray = [];
        response.forEach((doc) => {
          const data = doc.data();
          data.id = doc.id;
          restaurantArray.push(data);
        });
        setRestaurants(restaurantArray);
      });
  }, []);

  return restaurants;
};
