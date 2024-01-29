import "./App.css";
import useRandomJoke from "./useRandomJoke";

function App() {
  const joke = useRandomJoke();

  const generateJoke = (e) => {
    // e.preventDefault();
    window.location.reload(false);
  };

  // Custom hook

  return (
    <div className="App">
      <center>
        <h1>The Jokes Genrator</h1>
        <h3>{joke}</h3>

        <button onClick={generateJoke}>Generate Joke</button>
      </center>
    </div>
  );
}

export default App;
