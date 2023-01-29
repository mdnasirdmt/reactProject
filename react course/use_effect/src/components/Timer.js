import { useState, useEffect } from "react";


function Timer() {
  const [count, setCount] = useState(1);

  useEffect(() => {
    setTimeout(() => {
      setCount((count) => count + 1);
    }, 1000);
  });

  return <h1>I've rendered {count} times!</h1>;
}
export default Timer;