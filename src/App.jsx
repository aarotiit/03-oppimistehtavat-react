const Hello = ({ name, age }) => {
  const bornYear = () => new Date().getFullYear() - age;

  return (
    <div>
      <p>
        Hello {name}, you are {age} years old!
      </p>
      <p>So you were probably born {bornYear()}</p>
    </div>
  );
};

import { useState } from "react";

const App = () => {
  const [counter, setCounter] = useState(0);

  setTimeout(() => setCounter(counter + 1), 1000);

  console.log("Hello from component!");
  const now = new Date();
  const a = 10;
  const b = 20;
  const name = "Jarmo";
  const age = 65;
  console.log(now, a + b);
  console.log("rendering...", counter);
  return (
    <div>
      <p>Hello World! It is {now.toString()}</p>
      <p>
        {a} plus {b} is {a + b}
      </p>
      <Hello name="Aaro" age={20 + 5} />
      <Hello name="Pekka" age={30} />
      <Hello name={name} age={age} />
      <div>{counter}</div>
    </div>
  );
};

export default App;
