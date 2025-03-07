import { useEffect } from "react";
import "./App.css";

function App() {
  useEffect(() => {
    const getData = async () => {
      // const response = await fetch(
      //   "https://random-todos.azurewebsites.net/keys/generate",
      //   {
      //     method: "POST",
      //     body: JSON.stringify({ email: "sebastian@email.com" }),
      //     headers: {
      //       "content-type": "application/json",
      //     },
      //   },
      // );
      // const data = await response.json();
      // console.log(data);

      const response = await fetch(
        "https://random-todos.azurewebsites.net/keys?email=sebastian@email.com",
      );
      const data = await response.text();
      console.log(data);
    };

    getData();
  });

  return <></>;
}

export default App;
