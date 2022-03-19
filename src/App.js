// import logo from './logo.svg'; delete this line.
import "./App.css";
import PageTitle from "./Title";
import Section from "./Section";
import React from "react";
import { Button } from "./Button";

const App = () => {
  return (
    <div>
      <PageTitle />
      <Section />
      <Button title="Sign up" color="red" />
      <Button title="Login Up" color="blue" />
      <Button title="Logout" color="green" />
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
