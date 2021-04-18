import { combineReducers } from "redux";
import _ from "lodash";
import { reducer as formReducer2 } from "redux-form";
import {
  CREATE_TODO,
  SHOW_TASK,
  EDIT_TASK,
  DELETE_TASK,
} from "../actions/types";

const Tasks = (list = [], action) => {
  switch (action.type) {
    case CREATE_TODO:
      return [...list, action.payload];
    case SHOW_TASK:
      return action.payload;
    // case EDIT_TASK:
    //   return [...list, action.payload];
    // case DELETE_TASK:
    //   return list.filter((id) => id !== action.payload);
    default:
      return list;
  }
};

export default combineReducers({
  Tasks,
  form: formReducer2,
});
