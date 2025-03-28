import { useContext } from "react";
import { TodoContext } from "../contexts/TodoContext";

export const Todos = () => {
  const { todos, dispatch } = useContext(TodoContext);

  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          <span className={todo.done ? "done" : ""}>{todo.text}</span>
          <button
            onClick={() => dispatch({ type: "REMOVED", payload: todo.id })}
          >
            Ta bort
          </button>
          <button
            onClick={() => dispatch({ type: "TOGGLED", payload: todo.id })}
          >
            Ändra
          </button>
        </li>
      ))}
    </ul>
  );
};
