import { INIT_TODOS } from "./todo-actions";

export const todoReducer = (state = [], action) => {
  switch (action.type) {
    case INIT_TODOS: {
      const items = action.payload;
      return items;
    }
    default:
      return state;
  }
};
