import { useState } from "react";

export const AddPerson = ({ writeContract, getAllPersons }) => {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [isMarried, setIsMarried] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const receipt = await writeContract.createPerson(name, age, isMarried);
    await receipt.wait();

    console.log(receipt);
    await getAllPersons();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="number"
        value={age}
        onChange={(e) => setAge(+e.target.value)}
      />
      <input
        type="checkbox"
        checked={isMarried}
        onChange={(e) => setIsMarried(e.target.checked)}
      />
      <button>Spara</button>
    </form>
  );
};
