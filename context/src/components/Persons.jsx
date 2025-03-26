import { useContext } from "react";
import { PersonContext } from "../contexts/PersonContext";
import { PersonAmount } from "./PersonAmount";

export const Persons = () => {
  const { persons } = useContext(PersonContext);

  return (
    <>
      <PersonAmount />
      <ul>
        {persons.map((u) => (
          <li key={u.id}>{u.name}</li>
        ))}
      </ul>
    </>
  );
};
