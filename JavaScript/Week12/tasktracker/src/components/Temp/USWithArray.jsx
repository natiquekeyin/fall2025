import { useState } from "react";

const USWithArray = () => {
  let num = [11, 22, 33];
  const [numbers, setNumbers] = useState(num);
  return (
    <div>
      <ul>
        {numbers.map((n, i) => (
          <li key={i}>{n}</li>
        ))}
      </ul>

      <button
        onClick={() => {
          setNumbers((previousState) => {
            return [...previousState, Math.floor(Math.random() * 50)];
          });
        }}
      >
        Add a number
      </button>
    </div>
  );
};

export default USWithArray;
