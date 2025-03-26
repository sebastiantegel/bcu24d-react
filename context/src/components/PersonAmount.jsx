import { useContext } from "react";
import { PersonContext } from "../contexts/PersonContext";

export const PersonAmount = () => {
  const { persons } = useContext(PersonContext);

  return <h3>{persons.length}</h3>;
};
