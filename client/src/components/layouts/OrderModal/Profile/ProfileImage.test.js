import React from "react";
import {render, screen} from "@testing-library/react";
import ProfileImageLayout from "./";

it("given layout component, renders image", () => {
  render(<ProfileImageLayout />);
  expect(screen.getByAltText("Default Profile Image")).toBeInTheDocument();
});
