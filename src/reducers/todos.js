import {
  GET_TODOS,
  ADD_TODOS,
  DELETE_TODOS,
  EDIT_TODOS,
} from "../constants/ActionType";

const initialState = [];

export default function todos(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case GET_TODOS:
      return payload;
    case ADD_TODOS:
      return { ...state, payload };
    case DELETE_TODOS:
      return state.filter((todo) => todo.id !== payload.id);
    case EDIT_TODOS:
      return state.map((todo) =>
        todo.id === payload.id ? { ...todo, ...payload } : todo
      );
    default:
      return state;
  }
}
