import React from "react";
import {render, screen} from "@testing-library/react";
import OrderButtonsLayout from "./";

it("given three test children elements, renders children", () => {
  render(
    <OrderButtonsLayout>
      <div>Child1</div>
      <div>Child2</div>
      <div>Child3</div>
    </OrderButtonsLayout>
  );
  expect(screen.getByText("Child1")).toBeInTheDocument();
  expect(screen.getByText("Child2")).toBeInTheDocument();
  expect(screen.getByText("Child3")).toBeInTheDocument();
});
