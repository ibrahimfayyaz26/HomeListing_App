import { ADD_PLACE, LOCAL_DATA } from "../Action/AddAction";
import Place from "../../Models/ItemModel";

const initialState = {
  places: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOCAL_DATA:
      return {
        places: action.places.map((it) => {
          return new Place(it.id.toString(), it.title, it.imageUri);
        }),
      };
    case ADD_PLACE:
      const newPlace = new Place(
        action.placeData.id.toString(),
        action.placeData.title,
        action.placeData.imgUri
      );
      return {
        places: state.places.concat(newPlace),
      };

    default:
      return state;
  }
};
