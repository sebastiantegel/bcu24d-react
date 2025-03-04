export const ShowPersons = ({ persons, removePerson }) => {
  return (
    <ul>
      {persons.map((p) => {
        return (
          <li key={p.id}>
            <span>
              {p.name} - {p.age} - {p.id}
            </span>
            <input type="checkbox" checked={p.isMarried} disabled />
            <button onClick={() => removePerson(p.id)}>Ta bort</button>
          </li>
        );
      })}
    </ul>
  );
};
