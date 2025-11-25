import { useEffect, useState } from "react";

const Ueffect = () => {
  const [num, setNum] = useState(0);
  const [x, setX] = useState(10);
  useEffect(() => {
    console.log(" use effect running");
    document.title = `${num} - XYZ`;
  }, [num]);
  // [] makes useEffect to run only once in the beginning .. not after that...
  //   [num] it means whenever num changes.. run the useEffect hook...

  return (
    <div>
      <h1>UseEffect Hook</h1>
      <p>{num}</p>
      <p>{x}</p>
      <button onClick={() => setX(x + 1)}>Change X</button>
      <button onClick={() => setNum(num + 1)}>Change num</button>
    </div>
  );
};

export default Ueffect;
