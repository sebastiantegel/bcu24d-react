import { useState } from "react";
import { createPerson } from "../services/personService";

export const AddPerson = ({ writeContract, getPersons }) => {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const success = await createPerson(name, age, writeContract);

    if (success) {
      console.log("Person skapad");
      getPersons();
    } else {
      console.error("Person ej skapad");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <input
        type="number"
        value={age}
        onChange={(e) => {
          setAge(+e.target.value);
        }}
      />
      <button>Spara</button>
    </form>
  );
};
