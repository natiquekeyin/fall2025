import { useState } from "react";

const USWithObject1 = () => {
  const obj = { name: "Alex", age: 20, height: 5.11, isYoung: true };

  const [person, setPerson] = useState(obj);
  return (
    <div>
      <h1>{person.name}</h1>
      <h2>{person.age}</h2>
      <h2>{person.height}</h2>
      <h2>{person.isYoung}</h2>
      {/* 
      <button onClick={() => setPerson({ name: "Bob" })}>Change</button> */}

      <button
        onClick={() => {
          setPerson((previousState) => {
            return { ...previousState, name: "Bob" };
          });
        }}
      >
        Change
      </button>
    </div>
  );
};

export default USWithObject1;
