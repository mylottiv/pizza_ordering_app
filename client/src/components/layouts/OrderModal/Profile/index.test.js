import React from "react";
import {render, fireEvent, screen} from "@testing-library/react";
import ProfileLayout from "./";

it("given test children elements and name prop, renders children, default image, and name", () => {
  render(
    <ProfileLayout name={"Test Name!"}>
      <div>Child1</div>
      <div>Child2</div>
    </ProfileLayout>
  );
  expect(screen.getByText("Test Name!")).toBeInTheDocument();
  expect(screen.getByAltText("Default Profile Image")).toBeInTheDocument();
  expect(screen.getByText("Child1")).toBeInTheDocument();
  expect(screen.getByText("Child2")).toBeInTheDocument();
});

it("given mock onClick prop, calls mock function when order button clicked", () => {
  const mockOnClick = jest.fn();
  render(<ProfileLayout onClick={mockOnClick} />);
  fireEvent.click(screen.getByText("X"));
  expect(mockOnClick).toHaveBeenCalledTimes(1);
});
