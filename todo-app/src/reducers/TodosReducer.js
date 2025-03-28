import { Todo } from "../models/Todo";

export const TodosReducer = (todos, action) => {
  if (action.type === "ADDED") {
    return [...todos, new Todo(action.payload)];
  }

  if (action.type === "REMOVED") {
    return todos.filter((todo) => todo.id !== action.payload);
  }

  if (action.type === "TOGGLED") {
    return todos.map((t) => {
      if (t.id === action.payload) return { ...t, done: !t.done };
      return t;
    });
  }

  return todos;
};
