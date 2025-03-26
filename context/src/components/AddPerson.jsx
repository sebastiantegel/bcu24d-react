import { useContext, useState } from "react";
import { PersonContext } from "../contexts/PersonContext";

export const AddPerson = () => {
  const [user, setUser] = useState({
    name: "",
    age: 0,
  });
  const { addPerson } = useContext(PersonContext);

  const handleChange = (e) => {
    if (e.target.type === "text") {
      setUser({ ...user, [e.target.name]: e.target.value });
    }
    if (e.target.type === "number") {
      setUser({ ...user, [e.target.name]: +e.target.value });
    }
  };

  const handleSave = (e) => {
    e.preventDefault();

    // Validering...

    addPerson(user);

    // e.target.reset();
  };

  return (
    <form onSubmit={handleSave}>
      <input
        type="text"
        value={user.name}
        onChange={handleChange}
        name="name"
      />
      <input
        type="number"
        value={user.age}
        onChange={handleChange}
        name="age"
      />
      <button>Spara</button>
      <p>{JSON.stringify(user)}</p>
    </form>
  );
};
