import { useContext, useState } from "react";
import { TodoContext } from "../contexts/TodoContext";

export const AddTodo = () => {
  const { dispatch } = useContext(TodoContext);
  const [todoText, setTodoText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // addTodo(todoText);
    dispatch({
      type: "ADDED",
      payload: todoText,
    });
    setTodoText("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={todoText}
        onChange={(e) => setTodoText(e.target.value)}
      />
      <button>Spara</button>
    </form>
  );
};
