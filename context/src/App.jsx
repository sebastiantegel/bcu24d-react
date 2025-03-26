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

  // value = {persons, addPerson}
  // value = {
  //   persons: persons,
  //   addPerson: addPerson
  // }

  return (
    <>
      <PersonContext.Provider value={{ persons, addPerson }}>
        <AddPerson />
        <Persons />
      </PersonContext.Provider>
    </>
  );
}

export default App;
