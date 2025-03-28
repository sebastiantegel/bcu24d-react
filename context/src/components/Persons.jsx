import { useContext } from "react";
import { PersonContext } from "../contexts/PersonContext";
import { PersonAmount } from "./PersonAmount";

export const Persons = () => {
  const { persons, removePerson } = useContext(PersonContext);

  return (
    <>
      <PersonAmount />
      <ul>
        {persons.map((u) => (
          <li key={u.id}>
            <span>{u.name}</span>
            <button onClick={() => removePerson(u.id)}>Ta bort</button>
          </li>
        ))}
      </ul>
    </>
  );
};
