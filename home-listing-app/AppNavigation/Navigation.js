import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Ionicons } from "@expo/vector-icons";
import { View } from "react-native";

import MainScreen from "../Screens/MainScreen";
import DetailsScreen from "../Screens/DetailsScreen";
import AddScreen from "../Screens/AddScreen";
import MapScreen from "../Screens/MapScreen";

const stack = createStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <stack.Navigator>
        <stack.Screen
          name="Main"
          component={MainScreen}
          options={(props) => ({
            headerTitleAlign: "center",
            headerRight: () => (
              <View style={{ paddingRight: 10 }}>
                <Ionicons
                  name="add"
                  size={30}
                  color="black"
                  onPress={() => props.navigation.navigate("Add")}
                />
              </View>
            ),
            headerTitle: "All Places",
          })}
        />
        <stack.Screen
          name="Details"
          component={DetailsScreen}
          options={(props) => ({
            headerTitleAlign: "center",
            headerRight: () => (
              <View style={{ paddingRight: 10 }}>
                <Ionicons
                  name="add"
                  size={30}
                  color="black"
                  onPress={() => props.navigation.navigate("Add")}
                />
              </View>
            ),
            headerTitle: props.route.params.placeTitle,
          })}
        />
        <stack.Screen
          name="Add"
          component={AddScreen}
          options={{
            headerTitleAlign: "center",
          }}
        />
        <stack.Screen
          name="Map"
          component={MapScreen}
          options={{
            headerTitleAlign: "center",
          }}
        />
      </stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
