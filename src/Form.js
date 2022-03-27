import React, { useState } from "react";

//control input -----
// uncontrol input---

export const Form = () => {
  const [str, setStr] = useState("shibin");

  const handleChange = (e) => {
    const { value } = e.target;
    setStr(value);
  };

  const handleOnSubmit = (e) => {
    e.preventDefault(); // this command will stop all the default behavior of the form
    console.log(e);
  };

  return (
    <p>
      <p>
        <form action="" onSubmit={handleOnSubmit}>
          <input type="text" name="search" onChange={handleChange} />
          <input type="submit" value="Submit" />
        </form>
      </p>
      <p>Real time typed Input:{str}</p>
      <p>You have submitted: </p>
    </p>
  );
};
