import { removePerson } from "../services/personService";
import "./../styles/Persons.css";

export const Persons = ({ persons, getPersons, writeContract }) => {
  const handleRemovePerson = async (id) => {
    const success = await removePerson(id, writeContract);

    if (success) {
      await getPersons();
    } else {
      console.error("Kan inte ta bort person med id:", id);
    }
  };

  return (
    <ul id="persons">
      {persons.map((person) => {
        return (
          <li key={person.id}>
            <span>{person.name}</span>
            <button
              onClick={() => {
                handleRemovePerson(person.id);
              }}
            >
              Ta bort
            </button>
          </li>
        );
      })}
    </ul>
  );
};
