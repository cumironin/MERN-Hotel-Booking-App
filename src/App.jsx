import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <h1 className="text-3xl text-center font-bold underline text-red-500">
      Hello world!
    </h1>
  );
}

export default App;