import { greet } from "./greet";

describe("The behaviour of the Greeting sayHelloonent", () => {
  const defaultGreeting = "Hi!";

  function expectDefaultGreeting(result) {
    expect(result).toBe(defaultGreeting);
  }

  function expectGreetingWithValue(result, value) {
    expect(result).toBe(`${defaultGreeting} ${value}`);
  }

  test("default greeting if no name is provided", () => {
    expectDefaultGreeting(greet());
  });

  test("the greeting is correct when a single first name is given", () => {
    expectGreetingWithValue(greet("Fred"), "Fred");
  });

  test("default greeting occurs when a number is entered", () => {
    expectDefaultGreeting(greet(100));
  });

  test("default greeting occurs when a number is entered as a string", () => {
    expectDefaultGreeting(greet("100"));
  });

  test("default greeting occurs when an object is entered", () => {
    expectDefaultGreeting(greet({}));
  });

  test("default greeting occurs when an array is entered", () => {
    expectDefaultGreeting(greet([]));
  });

  test("default greeting occurs when an array with an element is entered", () => {
    expectDefaultGreeting(greet([0]));
  });

  // now, what if you want to make sure we only give their first name?
  test("the greeting only contains the first name when two names are provided", () => {
    expectGreetingWithValue(greet("Fred Smith"), "Fred");
  });

  // also, do we want to make sure the first name is capatalized?
  test("the first name of the greeting is capitalized", () => {
    expectGreetingWithValue(greet("fred smith"), "Fred");
  });

  test("greeting works with a single initial", () => {
    expectGreetingWithValue(greet("f"), "F");
  });

  test("gretting works with initials", () => {
    expectGreetingWithValue(greet("f s"), "F");
  });

  test("greeting captures initials with period", () => {
    expectGreetingWithValue(greet("f. s."), "F.");
  });

  test("greeting captures capitalized initials with period", () => {
    expectGreetingWithValue(greet("F. S."), "F.");
  });

  test("default greeting when empty string is provided", () => {
    expectDefaultGreeting(greet(""));
  });

  test("default greeting when empty spaces are provided", () => {
    expectDefaultGreeting(greet("       "));
  });
});
