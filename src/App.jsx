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
  const [counter1, setCounter1] = useState(0);
  setTimeout(() => setCounter(counter + 1), 1000);

  console.log("Hello from component!");
  const now = new Date();
  const a = 10;
  const b = 20;
  const name = "Jarmo";
  const age = 65;
  const increaseByOne = () => setCounter1(counter1 + 1);
  const decreaseByOne = () => setCounter(counter - 1);

  const setToZero = () => setCounter1(0);
  const Display = ({ counter }) => <div>{counter}</div>;
  const Button = ({ onClick, text }) => (
    <button onClick={onClick}>{text}</button>
  );
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
      <Display counter={counter} />
      <Button onClick={increaseByOne} text="plus" />
      <Button onClick={setToZero} text="zero" />
      <Button onClick={decreaseByOne} text="minus" />
      <div>{counter}</div>
      <button onClick={increaseByOne}>plus</button>
      <div>{counter1}</div>
      <button onClick={setToZero}>zero</button>
    </div>
  );
};

export default App;
