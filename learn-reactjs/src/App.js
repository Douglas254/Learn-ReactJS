import "./App.css";
// import Content from "./components/ReadMore";
// import Greeting from "./components/Greeting";
// import Form from "./components/Form";
// import UseState from "./components/reactHooks/UseState";
// import UseReducer from "./components/reactHooks/UseReducer";
// import UseEffect from "./components/reactHooks/UseEffect";
import UseRef from "./components/reactHooks/UseRef";

function App() {
  return (
    <div className="App">
      {/* <Form /> */}
      {/* Try changing to isLoggedIn={true}: */}
      {/* <Greeting isLoggedIn={false} /> */}
      {/* <Content /> */}
      {/* <UseState /> */}
      {/* <UseReducer /> */}
      {/* <UseEffect /> */}
      <UseRef />
    </div>
  );
}

export default App;
