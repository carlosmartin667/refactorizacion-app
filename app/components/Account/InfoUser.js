import React, { useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Avatar, Button } from "react-native-elements";
import * as firebase from "firebase";
import * as Permissions from "expo-permissions";
import * as ImagePicker from "expo-image-picker";
import Picktur from "./Picktur";
import ImagePickerExample from "./ImagePickerExample ";

const InfoUser = (props) => {
  const {
    userInfo: { uid, photoURL, displayName, email },
    toastRef,
    setLoading,
    setLoadingText,
  } = props;
  console.log(photoURL);
  return (
    <View style={styles.viewUserInfo}>
      <Avatar
        rounded
        size="large"
        showEditButton
        showAccessory
        containerStyle={styles.userInfoAvatar}
        source={
          photoURL
            ? photoURL
            : require("../../../assets/img/3.1 avatar-default.jpg")
        }
      />

      <ImagePickerExample />
      <View>
        <Text style={styles.displayName}>
          {displayName ? displayName : "Anónimo"}
        </Text>
        <Text>{email ? email : "Socia Login"}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  viewUserInfo: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    backgroundColor: "#f2f2f2",
    paddingTop: 30,
    paddingBottom: 30,
  },
  userInfoAvatar: {
    marginRight: 20,
  },
  displayName: {
    fontWeight: "bold",
    paddingBottom: 5,
  },
});
export default InfoUser;
