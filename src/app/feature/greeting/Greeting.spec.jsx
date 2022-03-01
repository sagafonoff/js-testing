import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import { Greeting } from "./Greeting";

describe("The behaviour of the Greeting component", () => {
  test("the greeting component is a function", () => {
    expect(typeof Greeting).toBe(typeof Function);
  });

  // test("the header contains the default greeting with no name provided", () => {
  //   render(<Greeting />);

  //   expect(screen.getByRole("heading")).toHaveTextContent("Hi!");
  // });

  // test("the header contains the greeting", () => {
  //   render(<Greeting personsName="Fred Smith" />);

  //   expect(screen.getByRole("heading")).toHaveTextContent("Hi! Fred");
  // });
});

describe("given the person is on the greeting page, when they enter their name, then", () => {
  it("displays the greeting on the page", () => {
    const component = render(<Greeting />);
    const nameInput = component.getByLabelText("persons-name");
    fireEvent.change(nameInput, { target: { value: "Fred Smith" } });
    expect(screen.getByRole("heading")).toHaveTextContent("Hi! Fred");
  });
});
