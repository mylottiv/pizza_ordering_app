import React from "react";
import {render, screen} from "@testing-library/react";
import ToppingOptionsLayout from "./";

it("given test children elements and type prop, renders children and type", () => {
  render(
    <ToppingOptionsLayout type={"Test Type!"}>
      <div>Child1</div>
      <div>Child2</div>
      <div>Child3</div>
    </ToppingOptionsLayout>
  );
  expect(screen.getByText("Test Type!")).toBeInTheDocument();
  expect(screen.getByText("Child1")).toBeInTheDocument();
  expect(screen.getByText("Child2")).toBeInTheDocument();
  expect(screen.getByText("Child3")).toBeInTheDocument();
});
