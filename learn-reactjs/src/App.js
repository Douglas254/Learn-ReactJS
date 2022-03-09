import "./App.css";
import Content from "./components/ReadMore";
import Greeting from "./components/Greeting";
import Form from "./components/Form";

function App() {
  return (
    <div className="App">
      {/* Try changing to isLoggedIn={true}: */}
      <Form />
      <Greeting isLoggedIn={false} />
      <Content />
    </div>
  );
}

export default App;
