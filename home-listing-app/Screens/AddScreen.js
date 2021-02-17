import React from "react";
import { View, StyleSheet, Text, TextInput, Button } from "react-native";
import { Formik } from "formik";
import * as yup from "yup";
import { useDispatch } from "react-redux";

import * as Actions from "../store/Action/AddAction";
import Img from "../components/ImagePiker";
import Location from "../components/LocationPiker";

const schema = yup.object().shape({
  title: yup.string().required().min(5).max(25),
  image: yup.string().required(),
});

const AddScreen = (prop) => {
  const dispatch = useDispatch();

  return (
    <Formik
      initialValues={{ title: "", image: "" }}
      validationSchema={schema}
      onSubmit={(values) => {
        dispatch(Actions.addPlace(values));
        prop.navigation.goBack();
      }}
    >
      {(props) => {
        const takeImage = (imgUri) => {
          props.values.image = imgUri;
        };
        return (
          <View style={{ marging: 30 }}>
            <View style={styles.textInput}>
              <TextInput
                placeholder="Title"
                value={props.values.title}
                onChangeText={props.handleChange("title")}
                onBlur={props.handleBlur("title")}
              />
            </View>
            <Text style={{ ...styles.text, ...{ color: "red" } }}>
              {props.touched.title && props.errors.title}
            </Text>
            <Img ImgUri={takeImage} />
            <Location navigation={prop.navigation} />
            <Text style={{ ...styles.text, ...{ color: "red" } }}>
              {props.touched.image && props.errors.image}
            </Text>
            <Button onPress={props.handleSubmit} title="Add" />
          </View>
        );
      }}
    </Formik>
  );
};

styles = StyleSheet.create({
  textInput: {
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
    marginBottom: 15,
    paddingVertical: 4,
    paddingHorizontal: 2,
  },
  text: {
    marginBottom: 10,
  },
});

export default AddScreen;
