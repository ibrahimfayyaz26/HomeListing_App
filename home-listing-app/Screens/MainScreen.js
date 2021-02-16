import React, { useEffect } from "react";
import { StyleSheet, FlatList } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import PlaceItem from "../components/MainCom";
import * as actions from "../store/Action/AddAction";

const MainScreen = (props) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(actions.collectData());
  }, [dispatch]);
  const Data = useSelector((state) => state.add.places);
  return (
    <FlatList
      data={Data}
      keyExtractor={(item) => item.id}
      renderItem={(itemData) => (
        <PlaceItem
          image={itemData.item.imgUri}
          title={itemData.item.title}
          address={null}
          onSelect={() => {
            props.navigation.navigate("Details", {
              placeTitle: itemData.item.title,
              placeId: itemData.item.id,
            });
          }}
        />
      )}
    />
  );
};

styles = StyleSheet.create({});

export default MainScreen;
