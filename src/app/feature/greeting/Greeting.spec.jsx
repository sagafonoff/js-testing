import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import { Greeting } from "./Greeting";

describe("The behaviour of the Greeting component", () => {
  test("the greeting component is a function", () => {
    expect(typeof Greeting).toBe(typeof Function);
  });

  test("the header contains an empty gretting when the component loads", () => {
    render(<Greeting />);

    expect(screen.getByRole("heading")).toHaveTextContent("");
  });
});

describe("given the person is on the greeting page, when they enter their name, then", () => {
  it("displays the greeting on the page", () => {
    const component = render(<Greeting />);
    const nameInput = component.getByLabelText("persons-name");
    const greetButton = component.getByLabelText("submit-name");
    fireEvent.change(nameInput, { target: { value: "Fred Smith" } });
    fireEvent.click(greetButton);
    expect(screen.getByRole("heading")).toHaveTextContent("Hi! Fred");
  });
});

describe("given the person is on the greeting page, when they submit their name without providing one, then", () => {
  it("displays the default greeting on the page", () => {
    const component = render(<Greeting />);
    const greetButton = component.getByLabelText("submit-name");
    fireEvent.click(greetButton);
    expect(screen.getByRole("heading")).toHaveTextContent("Hi!");
  });
});
