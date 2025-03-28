import { useReducer } from "react";
import { TodoContext } from "../contexts/TodoContext";
import { AddTodo } from "./AddTodo";
import { Todos } from "./Todos";
import { TodosReducer } from "../reducers/TodosReducer";

export const TodoApp = () => {
  const [todos, dispatch] = useReducer(TodosReducer, []);

  return (
    <TodoContext.Provider value={{ todos, dispatch }}>
      <AddTodo />
      <Todos />
    </TodoContext.Provider>
  );
};
