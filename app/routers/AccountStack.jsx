import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Account from "../screens/Account/Account";
import Login from "../screens/Account/Login";
import Register from "../screens/Account/Register";


const Stack = createNativeStackNavigator();
const AccountStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="AccountStack"
        component={Account}
        options={{ title: "Account Stack " }}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ title: "iniciar seccion " }}
      />
      <Stack.Screen
        name="Register"
        component={Register}
        options={{ title: "Registrar " }}
      />
    </Stack.Navigator>
  );
};

export default AccountStack;
