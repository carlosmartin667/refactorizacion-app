export const ScreenOptionsHelper = (route) => {
  let iconName;
  switch (route.name) {
    case "Restaurants":
      iconName = "compass-outline";
      break;
    case "Favorites":
      iconName = "heart-outline";
      break;
    case "TopRestaurans":
      iconName = "star-outline";
      break;
    case "Search":
      iconName = "magnify";
      break;
    case "Account":
      iconName = "home-outline";
      break;
    default:
      break;
  }

  return iconName;
};

