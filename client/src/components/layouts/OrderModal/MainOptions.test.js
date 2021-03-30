import React from "react";
import {render, screen} from "@testing-library/react";
import MainOptionsLayout from "./";

it("given three test children elements, renders children", () => {
  render(
    <MainOptionsLayout>
      <div>Child1</div>
      <div>Child2</div>
      <div>Child3</div>
    </MainOptionsLayout>
  );
  expect(screen.getByText("Child1")).toBeInTheDocument();
  expect(screen.getByText("Child2")).toBeInTheDocument();
  expect(screen.getByText("Child3")).toBeInTheDocument();
});
