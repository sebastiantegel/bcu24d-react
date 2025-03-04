// Parent - The purpose of this component
// is to hold the state and the modifications for the state.
import { Person } from "./../models/Person";
import { ShowPersons } from "./ShowPersons";
import { AddPerson } from "./AddPerson";

import { useState } from "react";

export const PersonApp = () => {
  const [persons, setPersons] = useState([]);

  const addPerson = (name, age, isMarried) => {
    setPersons([...persons, new Person(name, age, isMarried)]);
  };

  const removePerson = (id) => {
    setPersons(persons.filter((p) => p.id !== id));
  };

  return (
    <>
      <AddPerson createPerson={addPerson} />
      <ShowPersons persons={persons} removePerson={removePerson} />
    </>
  );
};
