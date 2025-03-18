export const Persons = ({ persons, writeContract, populatePerson }) => {
  return (
    <ul>
      {persons.map((p) => {
        return (
          <li key={p.id}>
            <span>
              {p.name} - {p.age}
            </span>
            <button
              onClick={async () => {
                const response = await writeContract.removePerson(p.id);
                await response.wait();
                await populatePerson();
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
