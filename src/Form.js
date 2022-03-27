import React, { useState } from "react";

//control input -----
// uncontrol input---

export const Form = () => {
  const [str, setStr] = useState("shibin");

  const handleChange = (e) => {
    const { value } = e.target;
    setStr(value);
  };

  return (
    <p>
      <p>
        <form action="">
          <input type="text" name="search" onChange={} />
          <input type="submit" value="Submit" />
        </form>
      </p>
      <p>Real time typed Input:{str}</p>
      <p>You have submitted: </p>
    </p>
  );
};
