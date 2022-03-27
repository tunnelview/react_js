// import logo from './logo.svg'; delete this line.
import "./App.css";
import PageTitle from "./Title";
import Section from "./Section";
// import React from "react";
import { Button } from "./Button";
import React, { useState } from "react";
import { Form } from "./Form";

const App = () => {
  // const counter = 15;
  const [counter, functionToUpdatsete] = useState(0);

  // const [counter, functionToUpdate] = useState(15);

  return (
    <div>
      {/* <PageTitle />
      <Section />
      Counter : {counter}
      <button onClick={handleOnIncrease}>Increase</button> */}
      {/* <button> increase</button> */}
      {/* <Button title="Sign up" color="red" />
      <Button title="Login Up" color="blue" />
      <Button title="Logout" color="green" /> */}
      <Form />
    </div>
  );
};

// class App extends React.Component {
//   render() {
//     // const App = () => {
//     return (
//       <div>
//         <Title />
//         <Section />

//         <p>lorem10</p>
//       </div>
//     );
//   }
// }

export default App;
