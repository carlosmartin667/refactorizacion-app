import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Button, Overlay } from "react-native-elements";

const Modal = (props) => {
  const [visible, setVisible] = useState(false);
  const { isVisible, setIsVisible, children } = props;
  const toggleOverlay = () => {
    setVisible(!visible);
  };
  const closeModal = () => setIsVisible(false);
  return (
    <View>
      <Overlay
        isVisible={isVisible}
        onBackdropPress={toggleOverlay}
        overlayStyle={styles.overlay}
        windowBackgroundColor="rgba(0,0,0,0.5)"
        overlayBackgroundColor="transparent"
        onBackdropPress={closeModal}
      >
        <Text>{children}</Text>
      </Overlay>
    </View>
  );
};
const styles = StyleSheet.create({
  overlay: {
    height: "auto",
    width: "90%",
    backgroundColor: "#fff",
  },
});
export default Modal;
