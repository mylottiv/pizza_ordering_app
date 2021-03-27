import React from "react";
import {render, screen} from "@testing-library/react";
import CartButtonLayout from "./";

it("given test prop, render test string", () => {
  render(<CartButtonLayout size={"Test Size!"} />);
  expect(screen.getByText("Test Size!")).toBeInTheDocument();
});
