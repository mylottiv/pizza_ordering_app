import React from "react";
import {render, screen} from "@testing-library/react";
import CouponItemLayout from "./CouponItemLayout";

it("given test children elements, renders them", () => {
  render(
    <CouponItemLayout name={"Test Name!"} cartIndex={"Test Index!"}>
      <div>Child1</div>
      <div>Child2</div>
    </CouponItemLayout>
  );
  expect(screen.getByText("Test Name!")).toBeInTheDocument();
  expect(screen.getByText("Test Index!")).toBeInTheDocument();
  expect(screen.getByText("Child1")).toBeInTheDocument();
  expect(screen.getByText("Child2")).toBeInTheDocument();
});
