import { useState } from "react";

const USComponent = () => {
  const [x, setX] = useState(10);
  const [name, setName] = useState("Diana");
  return (
    <div>
      <h1>The useState hook in action</h1>
      {x} <br />
      {name}
      <br />
      <button
        onClick={() => {
          setX(x + 1);
          setName("Christa");
        }}
      >
        Change x
      </button>
      <br />
      {x}
      <h2>{x}</h2>
    </div>
  );
};

export default USComponent;
