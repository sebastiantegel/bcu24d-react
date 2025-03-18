import { ethers } from "ethers";
import "./App.css";
import { useState, useCallback } from "react";
import { useEffect } from "react";
import { abi, address } from "./config";
import { Persons } from "./components/Persons";
import { AddPerson } from "./components/AddPerson";

if (window.ethereum) {
  window.provider = new ethers.BrowserProvider(window.ethereum);
} else {
  console.error("No web3 provider detected, please install...");
}

function App() {
  const [readContract, setReadContract] = useState();
  const [writeContract, setWriteContract] = useState();
  const [wallet, setWallet] = useState({
    account: undefined,
    balance: "",
  });
  const [persons, setPersons] = useState([]);

  const updateWallet = async (accounts) => {
    const balance = formatBalance(
      await window.ethereum.request({
        method: "eth_getBalance",
        params: [accounts[0], "latest"],
      }),
    );

    setWallet({ account: accounts[0], balance: balance });
  };

  const formatBalance = (rawBalance) => {
    const balance = (parseInt(rawBalance) / 1000000000000000000).toFixed(5);
    return balance;
  };

  const populatePersons = useCallback(async () => {
    let indexes = [];
    try {
      indexes = await readContract.getIndexList();
    } catch (error) {
      console.error(error);
    }

    const tempArray = [];
    for (let i = 0; i < indexes.length; i++) {
      const person = await readContract.persons(indexes[i]);
      if (person && person.id > 0) {
        tempArray.push(person);
      }
    }

    setPersons(tempArray);
  }, [readContract]);

  useEffect(() => {
    if (readContract && writeContract) return;

    const getProviders = async () => {
      const provider = new ethers.BrowserProvider(window.ethereum);

      // Create read contract - For reading stuff for free
      const rContract = new ethers.Contract(address, abi, provider);
      setReadContract(rContract);

      const signer = await provider.getSigner();
      // Create write contract to be signed by metamask, not free
      const wContract = new ethers.Contract(address, abi, signer);
      setWriteContract(wContract);

      let accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });

      updateWallet(accounts);
    };

    getProviders();
  }, []);

  useEffect(() => {
    if (wallet.account && readContract) {
      populatePersons();
    }
  }, [readContract, wallet.account, populatePersons]);

  return (
    <>
      <p>{wallet.account}</p>
      <p>{wallet.balance}</p>

      <AddPerson
        writeContract={writeContract}
        getAllPersons={populatePersons}
      />

      <Persons
        persons={persons}
        writeContract={writeContract}
        populatePerson={populatePersons}
      />
    </>
  );
}

export default App;
