import logo from "./logo.svg";
import "./App.css";
import User from "./User";

function App() {
  return (
    <div className="App">
      {/* component can be created once and be reused many times i.e the User component that we have */}
      <User userName="Douglas" tweet="Great learning react" />
      <User userName="Basil" tweet="Python Evangelist" />
      <User userName="Ben" tweet="Java Guru" />

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
