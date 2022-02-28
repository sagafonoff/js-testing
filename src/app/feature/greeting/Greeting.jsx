import { greet } from "./greet";

const Greeting = (props) => {
  return <h1>{greet(props.personsName)}</h1>;
};

export { Greeting };
