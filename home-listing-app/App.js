import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Navigation from "./AppNavigation/Navigation";
import { Provider } from "react-redux";

import store from "./store/Store";
import { init } from "./helpers/db";

init()
  .then(() => console.log("initialized database"))
  .catch((er) => {
    console.log("database not initialized");
    console.log(er);
  });

export default function App() {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
}
