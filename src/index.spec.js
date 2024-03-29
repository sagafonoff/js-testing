const comp = require("./index");

describe("The application behaviour", () => {
  const defaultGreeting = "Hi!";
  test("the main component is a function", () => {
    expect(typeof comp).toBe(typeof Function);
  });

  test("say hello if no name is provided", () => {
    const result = comp();
    expect(result).toBe(defaultGreeting);
  });

  test("say hi to the person when their name is given", () => {
    const result = comp("Fred");
    expect(result).toBe(`${defaultGreeting} Fred`);
  });

  test("what happens when a number is entered", () => {
    const result = comp(100);
    expect(result).toBe(defaultGreeting);
  });

  test("what happens when an object is entered", () => {
    const result = comp({});
    expect(result).toBe(defaultGreeting);
  });

  test("what happens when an array is entered", () => {
    const result = comp([]);
    expect(result).toBe(defaultGreeting);
  });

  test("what happens when an array with an element is entered", () => {
    const result = comp([0]);
    expect(result).toBe(defaultGreeting);
  });
});
