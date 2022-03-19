// import logo from './logo.svg'; delete this line.
import "./App.css";
import Title from "./Title";
import Section from "./Section";
import React from "react";
import { Button, Login } from "./Button";

const App = () => {
  return (
    <div>
      <Title />
      <Section />
      <Button />
      <Login />

      <p>lorem10</p>
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
