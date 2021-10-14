import React, { useState, useEffect } from "react";
import { FireSQL } from "firesql";
import firebase from "firebase/app";
const fireSQL = new FireSQL(firebase.firestore(), { includeId: "id" });
export const SearchHelper = () => {
  const [search, setSearch] = useState("");
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    if (search) {
      fireSQL
        .query(`SELECT * FROM restaurants WHERE name LIKE '${search}%'`)
        .then((response) => {
          setRestaurants(response);
        });
    }
  }, [search]);
  return { search, setSearch, restaurants, setRestaurants };
};
