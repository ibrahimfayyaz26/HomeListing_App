import * as FileSystem from "expo-file-system";
import { insertValues, fetchData } from "../../helpers/db";

export const ADD_PLACE = "ADD_PLACE";
export const LOCAL_DATA = "LOCAL_DATA";

export const addPlace = (props) => {
  return async (dispatch) => {
    const filname = props.image.split("/").pop();
    const path = FileSystem.documentDirectory + filname;
    try {
      await FileSystem.moveAsync({ from: props.image, to: path });
      const dbResult = await insertValues(
        props.title,
        path,
        "dummy address",
        15.2,
        19.2
      );
      dispatch({
        type: ADD_PLACE,
        placeData: { title: props.title, imgUri: path, id: dbResult.insertId },
      });
    } catch (e) {
      console.log(e);
      throw e;
    }
  };
};

export const collectData = () => {
  return async (dispatch) => {
    try {
      const result = await fetchData();
      dispatch({ type: LOCAL_DATA, places: result.rows._array });
    } catch (e) {
      console.log(e);
      throw e;
    }
  };
};
