import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import Reducer from "./Reducer/AddReducer";

const root = combineReducers({
  add: Reducer,
});

const Thunk = composeWithDevTools(applyMiddleware(thunk));

export default createStore(root, Thunk);
