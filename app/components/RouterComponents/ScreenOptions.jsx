import React from "react";
import { Icon } from "react-native-elements/dist/icons/Icon";
import { ScreenOptionsHelper } from "../../helpers/RouterHelper/ScreenOptionsHelper";

const ScreenOptions = (route, color) => {
  const iconName = ScreenOptionsHelper(route);
  return (
    <Icon type="material-community" name={iconName} size={22} color={color} />
  );
};

export default ScreenOptions;
