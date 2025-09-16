const Hello = (props) => {
  const { name, age } = props;
  const bornYear = () => new Date().getFullYear() - age;

  console.log(props);
  return (
    <div>
      <p>
        Hello {name}, you are {age} years old!
      </p>
      <p>So you were probably born {bornYear()}</p>
    </div>
  );
};

const App = () => {
  console.log("Hello from component!");
  const now = new Date();
  const a = 10;
  const b = 20;
  const name = "Jarmo";
  const age = 65;
  console.log(now, a + b);
  return (
    <div>
      <p>Hello World! It is {now.toString()}</p>
      <p>
        {a} plus {b} is {a + b}
      </p>
      <Hello name="Aaro" age={20 + 5} />
      <Hello name="Pekka" age={30} />
      <Hello name={name} age={age} />
    </div>
  );
};

export default App;
