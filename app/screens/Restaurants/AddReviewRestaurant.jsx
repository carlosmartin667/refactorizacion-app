import React from "react";
import { View } from "react-native";
import { AirbnbRating, Button, Input } from "react-native-elements";

import Loading from "../../components/Account/Loading";

import { AddReviewRestaurantCss } from "../../helpers/estilos/AddReviewRestaurantCss";
import { AddReviewRestaurantHelper } from "../../helpers/Restaurants/AddReviewRestaurantHelper";

export default function AddReviewRestaurant({ navigation, route }) {
  const styles = AddReviewRestaurantCss();

  const { addRevew, isLoading, setRating, setTitle, setReview } =
    AddReviewRestaurantHelper(navigation, route);

  return (
    <View style={styles.viewBody}>
      <View style={styles.viewRating}>
        <AirbnbRating
          count={5}
          reviews={["Pésimo", "Deficiente", "Normal", "Muy Bueno", "Excelente"]}
          defaultRating={0}
          size={35}
          onFinishRating={(value) => {
            setRating(value);
          }}
        />
      </View>
      <View style={styles.formReview}>
        <Input
          placeholder="Titulo"
          containerStyle={styles.input}
          onChange={(e) => setTitle(e.nativeEvent.text)}
        />
        <Input
          placeholder="Comentario..."
          multiline={true}
          inputContainerStyle={styles.textArea}
          onChange={(e) => setReview(e.nativeEvent.text)}
        />
        <Button
          title="Enviar Comnetario"
          containerStyle={styles.btnContainer}
          buttonStyle={styles.btn}
          onPress={addRevew}
        />
      </View>
      <Loading isVisible={isLoading} text="Enviando comenario" />
    </View>
  );
}
