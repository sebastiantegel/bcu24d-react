import "./App.css";
import { Person } from "./models/Person";
import { PersonContext } from "./contexts/PersonContext";
import { Persons } from "./components/Persons";
import { useState } from "react";
import { AddPerson } from "./components/AddPerson";

function App() {
  const [persons, setPersons] = useState([new Person("Sebastian", 45)]);

  const addPerson = (user) => {
    setPersons([...persons, new Person(user.name, user.age)]);
  };

  const removePerson = (id) => {
    setPersons(persons.filter((p) => p.id !== id));
  };

  // value = {persons, addPerson, removePerson}
  // value = {
  //   persons: persons,
  //   addPerson: addPerson
  //   removePerson: removePerson
  // }

  return (
    <>
      <PersonContext.Provider value={{ persons, addPerson, removePerson }}>
        <AddPerson />
        <Persons />
      </PersonContext.Provider>
    </>
  );
}

export default App;
