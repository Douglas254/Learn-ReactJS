import "./App.css";
// import Content from "./components/ReadMore";
// import Greeting from "./components/Greeting";
// import Form from "./components/Form";
// import UseState from "./components/reactHooks/UseState";
// import UseReducer from "./components/reactHooks/UseReducer";
// import UseEffect from "./components/reactHooks/UseEffect";
// import UseRef from "./components/reactHooks/UseRef";
// import UseLayoutEffect from "./components/reactHooks/UseLayoutEffect";
import UseImperativeHandle from "./components/reactHooks/useImperativeHandle/UseImperativeHandle";

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
      {/* <UseRef /> */}
      {/* <UseLayoutEffect /> */}
      <UseImperativeHandle />
    </div>
  );
}

export default App;
