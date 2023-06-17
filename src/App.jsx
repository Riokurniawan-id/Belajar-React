import { useState } from "react";
import "./App.css";
import Button from "./component/button";

function App() {
  const [count, setCount] = useState(0);

  const handlerReset = () => {
    setCount(0);
  };

  const handlerPlus = () => {
    if (count >= 10) {
      handlerReset();
    } else setCount(count + 1);
    console.log(count);
  };

  const handlerMinus = () => {
    if (count <= -10) {
      handlerReset();
    } else setCount(count - 1);
    console.log(count);
  };

  return (
    <>
      <h1>Counter</h1>
      <div className="flex gap-4 mt-2 justify-center">
        <Button onClick={handlerMinus} text="-" />
        <h1>{count}</h1>
        <Button onClick={handlerPlus} text="+" />
      </div>
      <Button className="mt-3" onClick={handlerReset} text="reset" />
    </>
  );
}

export default App;
