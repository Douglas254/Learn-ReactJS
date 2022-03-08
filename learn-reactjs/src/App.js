import "./App.css";
import Content from "./components/ReadMore";
import Greeting from "./components/Greeting";

function App() {
  return (
    <div className="App">
      {/* Try changing to isLoggedIn={true}: */}
      <Greeting isLoggedIn={false} />
      <Content />
    </div>
  );
}

export default App;
