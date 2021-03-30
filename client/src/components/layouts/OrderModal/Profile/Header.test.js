import React from "react";
import {render, fireEvent, screen} from "@testing-library/react";
import HeaderLayout from "./";

it("given name prop, renders with name", () => {
  render(<HeaderLayout name={"Test Name!"} />);
  expect(screen.getByText("Test Name!")).toBeInTheDocument();
});

it("given mock onClick prop, calls mock function when button clicked", () => {
  const mockOnClick = jest.fn();
  render(<HeaderLayout onClick={mockOnClick} />);
  fireEvent.click(screen.getByText("X"));
  expect(mockOnClick).toHaveBeenCalledTimes(1);
});
