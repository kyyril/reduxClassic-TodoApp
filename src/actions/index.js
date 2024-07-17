import * as type from "../constants/ActionType";
import {
  createTodoApi,
  editTodoApi,
  deleteTodoApi,
  fetchTodosApi,
} from "../api/todos";

const addTodo = (text) => async (dispatch) => {
  const todo = { text: text, completed: false };
};
