// Purpose is to add one object to the state in the parent
// Use props to send the addPerson function to this component

import { useState } from "react";

export const AddPerson = ({ createPerson }) => {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [isMarried, setIsMarried] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    createPerson(name, age, isMarried);
    setName("");
    setAge(0);
    setIsMarried(false);
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
      <input
        type="checkbox"
        checked={isMarried}
        onChange={(e) => {
          setIsMarried(e.target.checked);
        }}
      />
      <button>Spara</button>
    </form>
  );
};
