import React, { useEffect, useState } from "react";
import { Button, Image, View, Platform } from "react-native";
import * as ImagePicker from "expo-image-picker";
import * as Permissions from "expo-permissions";
import * as firebase from "firebase";

const Picktur = ({ uid }) => {
  const [stateImg, setStateImg] = useState(null);

  const getPermissionAsync = async () => {
    if (Platform.OS !== "web") {
      const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
      if (status !== "granted") {
        alert("Sorry, we need camera roll permissions to make this work!");
      }
    }
  };

  const _pickImage = async () => {
    try {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });
      if (!result.cancelled) {
        setStateImg(result.uri);
        uploadImage(stateImg);
      }
    } catch (E) {
      console.log(E);
    }
  };
  const uploadImage = async (stateImg) => {
    console.log("Entro");
    const response = await fetch(stateImg);
    console.log("Entro2");
    const blob = await response.blob();
    console.log("Entro3");
    const ref = firebase.storage().ref().child(`avatar/${uid}`);
    console.log("Entro4");
    ref.put(blob);
    updatePhotoUrl();
  };

  const updatePhotoUrl = () => {
    firebase
      .storage()
      .ref(`avatar/${uid}`)
      .getDownloadURL()
      .then(async (response) => {
        const update = {
          photoURL: response,
        };
        console.log(update);
        await firebase.auth().currentUser.updateProfile(update);
     
      })
      .catch(() => {
        console.log("Error al actualizar el avatar.");
      });
  };
  return (
    <View style={{}}>
      <Button title="edit" onPress={_pickImage} />
      {stateImg && (
        <Image source={stateImg} style={{ width: 200, height: 200 }} />
      )}
    </View>
  );
};

export default Picktur;
