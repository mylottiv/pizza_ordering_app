import React from "react";
import {render, screen} from "@testing-library/react";
import ProfileLayout from "./";

it("given test children elements and name prop, renders children and name", () => {
  render(
    <ProfileLayout name={"Test Name!"}>
      <div>Child1</div>
      <div>Child2</div>
    </ProfileLayout>
  );
  expect(screen.getByText("Test Name!")).toBeInTheDocument();
  expect(screen.getByText("Child1")).toBeInTheDocument();
  expect(screen.getByText("Child2")).toBeInTheDocument();
});
