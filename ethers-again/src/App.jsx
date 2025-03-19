import { useEffect, useState } from "react";
import "./App.css";
import { ethers } from "ethers";
import { abi, address } from "./config";
import { getPersons } from "./services/personService";
import { Persons } from "./components/Persons";
import { AddPerson } from "./components/AddPerson";

if (!window.ethereum) {
  alert("You must install some extension wallet for web3");
}

function App() {
  const [readContract, setReadContract] = useState();
  const [writeContract, setWriteContract] = useState();
  const [persons, setPersons] = useState([]);

  useEffect(() => {
    if (readContract && writeContract) return;

    const setupContracts = async () => {
      const provider = new ethers.BrowserProvider(window.ethereum);

      const rContract = new ethers.Contract(address, abi, provider);

      const signer = await provider.getSigner();
      const wContract = new ethers.Contract(address, abi, signer);
      setReadContract(rContract);
      setWriteContract(wContract);
    };

    setupContracts();
  }, [readContract, writeContract]);

  const getPersonsFromChain = async () => {
    const persons = await getPersons(readContract);
    setPersons(persons);
  };

  return (
    <>
      <button onClick={getPersonsFromChain}>Hämta personer från kedja</button>

      <AddPerson
        writeContract={writeContract}
        getPersons={getPersonsFromChain}
      />

      <Persons
        persons={persons}
        getPersons={getPersonsFromChain}
        writeContract={writeContract}
      />
    </>
  );
}

export default App;
