import { useNavigation } from "@react-navigation/core";
import { isEmpty, size } from "lodash";
import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Button, Icon, Input } from "react-native-elements";
import validateEmail from "../../utils/validations";
import * as firebase from "firebase";
import Loading from "./Loading";

const RegisterForm = (props) => {
  const { toastRef } = props;
  const [showPassword, setShowPassword] = useState(false);
  const [showRepeatPassword, setShowRepeatPassword] = useState(false);
  const [formData, setFormData] = useState(defaultFormValue());
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();

  const onSubmit = () => {
    console.log(formData);
    console.log(validateEmail(formData.email));

    if (
      isEmpty(formData.email) ||
      isEmpty(formData.password) ||
      isEmpty(formData.repeatPassword)
    ) {
      console.log("campós obligatorios");
    } else if (!validateEmail(formData.email)) {
      console.log("El email no es correcto");
    } else if (formData.password !== formData.repeatPassword) {
      console.log("Las contraseñas tienen que ser iguales");
    } else if (size(formData.password) < 6) {
      console.log("La contraseña tiene que tener al menos 6 caracteres");
    } else {
      console.log("ok");
      setLoading(true);
      firebase
        .auth()
        .createUserWithEmailAndPassword(formData.email, formData.password)
        .then((response) => {
          setLoading(false);
          navigation.navigate("AccountStack");
          console.log(response);
        })
        .catch(() => {
          setLoading(false);
          console.log("El email ya esta en uso, pruebe con otro");
        });
    }
  };

  const onChange = (e, type) => {
    //...formdata  trae todos los objetos , [type]= este indica q elementos quieres actualizar
    //e.nativeEvent.text = busca el campo
    setFormData({ ...formData, [type]: e.nativeEvent.text });
  };

  return (
    <View style={styles.formContainer}>
      <Input
        placeholder="correo electronico"
        containerStyle={styles.inputForm}
        onChange={(e) => onChange(e, "email")}
        rightIcon={
          <Icon
            type="material-community"
            name="at"
            iconStyle={styles.iconRight}
          />
        }
      />
      <Input
        placeholder="contraseña"
        containerStyle={styles.inputForm}
        password={true}
        secureTextEntry={showPassword ? false : true}
        onChange={(e) => onChange(e, "password")}
        rightIcon={
          <Icon
            type="material-community"
            name={showPassword ? "eye-off-outline" : "eye-outline"}
            iconStyle={styles.iconRight}
            onPress={() => setShowPassword(!showPassword)}
          />
        }
      />
      <Input
        placeholder="reoetir contraseña"
        containerStyle={styles.inputForm}
        password={true}
        secureTextEntry={showRepeatPassword ? false : true}
        onChange={(e) => onChange(e, "repeatPassword")}
        rightIcon={
          <Icon
            type="material-community"
            name={showRepeatPassword ? "eye-off-outline" : "eye-outline"}
            iconStyle={styles.iconRight}
            onPress={() => setShowRepeatPassword(!showRepeatPassword)}
          />
        }
      />
      <Button
        title="Unirse"
        containerStyle={styles.btnContainerRegister}
        buttonStyle={styles.btnRegister}
        onPress={onSubmit}
      />
      {loading ? (
        <Loading isVisible={loading} text="Iniciando sesión" />
      ) : (
        <Text></Text>
      )}
  
    </View>
  );
};

const defaultFormValue = () => {
  return {
    email: "",
    password: "",
    repeatPassword: "",
  };
};

const styles = StyleSheet.create({
  formContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
  },
  inputForm: {
    width: "100%",
    marginTop: 20,
  },
  btnContainerRegister: {
    marginTop: 20,
    width: "95%",
  },
  btnRegister: {
    backgroundColor: "#00a680",
  },
  iconRight: {
    color: "#c1c1c1",
  },
});
export default RegisterForm;
