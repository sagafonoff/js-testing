import { useState } from "react";
import { greet } from "./greet";

const Greeting = () => {
  // handles the state of the input
  const [personsName, setPersonsName] = useState("");

  // handles the greeting
  const [greeting, setGreeting] = useState("");

  const handleChange = (ev) => {
    ev.preventDefault();
    setPersonsName(ev.currentTarget.value);
  };

  const handleClick = (ev) => {
    ev.preventDefault();
    setGreeting(greet(personsName));
  };

  return (
    <div>
      <h1>{greeting}</h1>
      <input
        value={personsName}
        aria-label="persons-name"
        onChange={handleChange}
      />
      <button aria-label="submit-name" onClick={handleClick} value="Say Hi" />
    </div>
  );
};

export { Greeting };
