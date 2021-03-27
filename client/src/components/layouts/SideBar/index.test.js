import React from "react";
import {render, screen} from "@testing-library/react";
import SideBarLayout from "./";

it("given test children elements, renders them with text", () => {
  render(
    <SideBarLayout>
      <div>Child1</div>
      <div>Child2</div>
    </SideBarLayout>
  );
  expect(screen.getByText("Child1")).toBeInTheDocument();
  expect(screen.getByText("Child2")).toBeInTheDocument();
});
