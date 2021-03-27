import React from "react";
import {render, screen} from "@testing-library/react";
import OrderModalLayout from "./";

it("given three test children elements and name prop, renders children and name", () => {
  render(
    <OrderModalLayout name={"Test Name!"}>
      <div>Child1</div>
      <div>Child2</div>
      <div>Child3</div>
    </OrderModalLayout>
  );
  expect(screen.getByText("Test Name!")).toBeInTheDocument();
  expect(screen.getByText("Child1")).toBeInTheDocument();
  expect(screen.getByText("Child2")).toBeInTheDocument();
  expect(screen.getByText("Child3")).toBeInTheDocument();
});

// Will need a test for the order button, once that separation is sussed out
