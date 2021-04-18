import _ from "lodash";
import todo from "../api/todo";
import history from "../history";
import { CREATE_TODO, SHOW_TASK, EDIT_TASK, DELETE_TASK } from "./types";

export const createTodo = (formValue) => async (dispatch) => {
  const response = await todo.post("/todo", formValue);

  dispatch({ type: CREATE_TODO, payload: response.data });
  history.push("/");
};

export const showTodo = () => async (dispatch) => {
  const response = await todo.get("/todo");

  dispatch({ type: SHOW_TASK, payload: response.data });
};

export const fetchTodo = (id) => async (dispatch) => {
  const response = await todo.get(`/todo/${id}`);

  dispatch({ type: SHOW_TASK, payload: response.data });
};

export const editTodo = (id, formValue) => async (dispatch) => {
  const response = await todo.patch(`/todo/${id}`, formValue);

  dispatch({ type: EDIT_TASK, payload: response.data });
  history.push("/");
};

export const deleteTodo = (id) => async (dispatch) => {
  await todo.delete(`/todo/${id}`);

  dispatch({ type: DELETE_TASK, payload: id });
  history.push("/");
};
