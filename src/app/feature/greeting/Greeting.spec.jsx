import { Greeting } from "./Greeting";

describe("The behaviour of the Greeting component", () => {
  test("the greeting component is a function", () => {
    expect(typeof Greeting).toBe(typeof Function);
  });
});
