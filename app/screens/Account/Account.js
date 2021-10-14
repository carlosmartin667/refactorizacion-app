import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import * as firebase from "firebase";
import UserLogged from "./UserLogged";
import UserGuest from "./UserGuest";
import Loading from "../../components/Account/Loading";

const Account = () => {
  const [login, setLogin] = useState(null);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      console.log(user);
      !user ? setLogin(false) : setLogin(true);
    });
  }, []);

  if (login === null) return <Loading isVisble={true} text="cargando" />;

  return login ? <UserLogged /> : <UserGuest />;
};

export default Account;
