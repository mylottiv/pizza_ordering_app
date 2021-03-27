import React from "react";
import {render, screen} from "@testing-library/react";
import ContentLayout from "./";

it("given test children elements and name prop, renders children and capitalized name", () => {
  render(
    <ContentLayout name={"test Name!"}>
      <div>Child1</div>
      <div>Child2</div>
    </ContentLayout>
  );
  expect(screen.getByText("Test Name!")).toBeInTheDocument();
  expect(screen.getByText("Child1")).toBeInTheDocument();
  expect(screen.getByText("Child2")).toBeInTheDocument();
});
