import React from "react";
import {render, screen} from "@testing-library/react";
import ProductItemLayout from "./ProductItemLayout";

it("given test text props and children elements, renders them", () => {
  render(
    <ProductItemLayout>
      <div>Child1</div>
      <div>Child2</div>
    </ProductItemLayout>
  );
  expect(screen.getByText("Child1")).toBeInTheDocument();
  expect(screen.getByText("Child2")).toBeInTheDocument();
});
