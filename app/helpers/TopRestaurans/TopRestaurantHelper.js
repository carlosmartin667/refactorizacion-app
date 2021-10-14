import React, { useState, useEffect } from "react";

export const TopRestauranHelper = (restaurant) => {
  const { id, name, rating, images, description } = restaurant.item;
  const [iconColor, setIconColor] = useState("#000");

  useEffect(() => {
    if (restaurant.index === 0) {
      setIconColor("#efb819");
    } else if (restaurant.index === 1) {
      setIconColor("#e3e4e5");
    } else if (restaurant.index === 2) {
      setIconColor("#cd7f32");
    }
  }, []);
  return { id, name, rating, images, description, iconColor };
};
