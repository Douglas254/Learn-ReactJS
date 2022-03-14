import "./App.css";
// import Content from "./components/ReadMore";
// import Greeting from "./components/Greeting";
// import Form from "./components/Form";
import UseState from "./components/reactHooks/UseState";

function App() {
  return (
    <div className="App">
      {/* <Form /> */}
      {/* Try changing to isLoggedIn={true}: */}
      {/* <Greeting isLoggedIn={false} /> */}
      {/* <Content /> */}
      <UseState />
    </div>
  );
}

export default App;
