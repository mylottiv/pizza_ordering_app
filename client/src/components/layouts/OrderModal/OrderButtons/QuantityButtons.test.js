import React from "react";
import {render, fireEvent, screen} from "@testing-library/react";
import QuantityButtonsLayout from "./QuantityButtons";

it("given test props including mock refFunction, render with props displayed and function called", () => {
  const mockRefFunction = jest.fn();

  render(<QuantityButtonsLayout defaultQuantity={42} refFunction={mockRefFunction} />);
  expect(screen.getByDisplayValue("42")).toBeInTheDocument();
  expect(mockRefFunction).toHaveBeenCalledTimes(1);
});

it("given mock addHandler and subtractHandler functions, mock functions called after button clicks", () => {
  const mockAddHandler = jest.fn();
  const mockSubtractHandler = jest.fn();

  render(
    <QuantityButtonsLayout
      addHandler={mockAddHandler}
      subtractHandler={mockSubtractHandler}
      refFunction={jest.fn()}
    />
  );
  fireEvent.click(screen.getByText("+"));
  fireEvent.click(screen.getByText("-"));
  expect(mockAddHandler).toHaveBeenCalledTimes(1);
  expect(mockSubtractHandler).toHaveBeenCalledTimes(1);
});
