const comp = require("./index");

describe("The application behaviour", () => {
  test("the main component is a function", () => {
    expect(typeof comp).toBe(typeof Function);
  });

  test("say hello if no name is provided", () => {
    const result = comp();
    expect(result).toBe("Hi!");
  });

  test("say hi to the person when their name is given", () => {
    const result = comp("Fred");
    expect(result).toBe("Hi! Fred");
  });

  test("what happens when a number is entered", () => {
    const result = comp(100);
    expect(result).toBe("Hi!");
  });

  test("what happens when an object is entered", () => {
    const result = comp({});
    expect(result).toBe("Hi!");
  });

  test("what happens when an object is entered", () => {
    const result = comp([]);
    expect(result).toBe("Hi!");
  });

  test("what happens when an object is entered", () => {
    const result = comp([0]);
    expect(result).toBe("Hi!");
  });
});
