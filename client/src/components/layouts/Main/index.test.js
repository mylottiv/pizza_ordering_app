import React from "react";
import {render, screen} from "@testing-library/react";
import MainLayout from "./";

it("given test children elements, renders them", () => {
  render(
    <MainLayout>
      <div>Child1</div>
      <div>Child2</div>
    </MainLayout>
  );
  expect(screen.getByText("Child1")).toBeInTheDocument();
  expect(screen.getByText("Child2")).toBeInTheDocument();
});
