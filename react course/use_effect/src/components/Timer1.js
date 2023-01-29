import { useState, useEffect } from "react";


function Timer1() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setCount((count) => count + 1);
    }, 1000);
  },[]);

  return <h1>I've rendered {count} times!</h1>;
}
export default Timer1;