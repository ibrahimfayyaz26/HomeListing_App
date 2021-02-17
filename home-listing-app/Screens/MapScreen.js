import React from "react";
import { View, StyleSheet, Text } from "react-native";
import MapView from "react-native-maps";

const MapScreen = () => {
  const reg = {
    latitude: 31.776685,
    longitude: 35.234491,
    latitudeDelta: 0.04,
    longitudeDelta: 0.05,
  };
  return <MapView style={styles.map} region={reg} />;
};

styles = StyleSheet.create({
  map: {
    flex: 1,
  },
});

export default MapScreen;
