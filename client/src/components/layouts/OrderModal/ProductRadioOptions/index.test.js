import React from "react";
import {render, screen} from "@testing-library/react";
import ProductRadioOptionsLayout from "./";

it("given test prop and children, render with type displayed and chidlren", () => {
  render(
    <ProductRadioOptionsLayout type={"Test Type!"}>
      <div>Child1</div>
      <div>Child2</div>
      <div>Child3</div>
    </ProductRadioOptionsLayout>
  );
  expect(screen.getByText("Test Type!")).toBeInTheDocument();
  expect(screen.getByText("Child1")).toBeInTheDocument();
  expect(screen.getByText("Child2")).toBeInTheDocument();
  expect(screen.getByText("Child3")).toBeInTheDocument();
});
