import React from "react";
import {render, fireEvent, screen} from "@testing-library/react";
import ToppingOptionButtonLayout from "./ToppingOptionButton";

it("given test props including mock refFunction, render with props displayed and function called", () => {
  const mockRefFunction = jest.fn();

  render(
    <ToppingOptionButtonLayout
      topping={"Test Topping!"}
      defaultChecked={true}
      refFunction={mockRefFunction}
    />
  );
  expect(screen.getByText("Test Topping!")).toBeInTheDocument();
  expect(screen.getByTestId("Test Topping!-left")).toBeInTheDocument();
  expect(screen.getByTestId("Test Topping!-whole")).toBeInTheDocument();
  expect(screen.getByTestId("Test Topping!-right")).toBeInTheDocument();
  expect(mockRefFunction).toHaveBeenCalledTimes(3);
});

it("given mock onChange functions, called after clicking all buttons", () => {
  const mockOnChange = jest.fn();

  render(
    <ToppingOptionButtonLayout
      topping={"Test Topping!"}
      onChange={mockOnChange}
      refFunction={jest.fn()}
    />
  );
  fireEvent.click(screen.getByTestId("Test Topping!-left"));
  fireEvent.click(screen.getByTestId("Test Topping!-whole"));
  fireEvent.click(screen.getByTestId("Test Topping!-right"));
  expect(mockOnChange).toHaveBeenCalledTimes(3);
});
