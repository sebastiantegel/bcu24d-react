export const getPersons = async (readContract) => {
  const indices = await readContract.getIndexList();

  const personsTempArray = [];
  for (let i = 0; i < indices.length; i++) {
    const person = await readContract.persons(indices[i]);

    if (person && person.id > 0) {
      personsTempArray.push(person);
    }
  }

  return personsTempArray;
};

export const createPerson = async (name, age, writeContract) => {
  try {
    const response = await writeContract.createPerson(name, age, false);
    await response.wait();

    return true;
  } catch {
    return false;
  }
};

export const removePerson = async (id, writeContract) => {
  try {
    const response = await writeContract.removePerson(id);
    await response.wait();

    return true;
  } catch {
    return false;
  }
};
