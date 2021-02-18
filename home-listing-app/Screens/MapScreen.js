import React, { useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import MapView, { Marker } from "react-native-maps";

const MapScreen = () => {
  const [location, setLocation] = useState({
    latitude: 31.776685,
    longitude: 35.234491,
  });
  const reg = {
    latitude: 31.776685,
    longitude: 35.234491,
    latitudeDelta: 0.04,
    longitudeDelta: 0.05,
  };

  const takingLoction = (event) => {
    setLocation({
      latitude: event.nativeEvent.coordinate.latitude,
      longitude: event.nativeEvent.coordinate.longitude,
    });
  };

  return (
    <MapView style={styles.map} region={reg} onPress={takingLoction}>
      <Marker title="Mark" coordinate={location}></Marker>
    </MapView>
  );
};

styles = StyleSheet.create({
  map: {
    flex: 1,
  },
});

export default MapScreen;
