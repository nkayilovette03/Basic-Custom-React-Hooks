import { useEffect, useState } from "react";

function useRandomJoke() {
  const [joke, setJoke] = useState("");

  useEffect(() => {
    const fetchJoke = async () =>
      await fetch(
        `https://matchilling-chuck-norris-jokes-v1.p.rapidapi.com/jokes/random`,
        {
          method: "GET",
          //   mode: "cors",
          headers: {
            accept: "application/json",
            "X-RapidAPI-Key":
              "d9e2e1c409msh994a214f466059bp19b34ejsna1dbf1e90737",
            "X-RapidAPI-Host":
              "matchilling-chuck-norris-jokes-v1.p.rapidapi.com",
          },
        }
      )
        .then((res) => res.json())
        .then((data) => {
          setJoke(data.value);
        });

    fetchJoke();
  }, []);

  return joke;
}

export default useRandomJoke;
