import React from "react";
import {render, fireEvent, screen} from "@testing-library/react";
import OptionRadioButtonLayout from "./OptionRadioButton";

it("given test props including mock refFunction, render with props displayed and function called", () => {
  const mockRefFunction = jest.fn();

  render(
    <OptionRadioButtonLayout
      type={"Test Type!"}
      value={"Test Value!"}
      checked={false}
      refFunction={mockRefFunction}
    />
  );
  expect(screen.getByDisplayValue("Test Value!")).toBeInTheDocument();
  expect(screen.getByTestId("Test Type!-Test Value!")).toBeInTheDocument();
  expect(mockRefFunction).toHaveBeenCalledTimes(1);
});

it("given mock onChange function, onChange called upon button click", () => {
  const mockOnChange = jest.fn();

  render(
    <OptionRadioButtonLayout
      type={"Test Type!"}
      value={"Test Value!"}
      checked={false}
      onChange={mockOnChange}
      refFunction={jest.fn()}
    />
  );
  fireEvent.click(screen.getByTestId("Test Type!-Test Value!"));
  expect(mockOnChange).toHaveBeenCalledTimes(1);
});
