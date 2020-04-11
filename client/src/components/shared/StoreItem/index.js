import React from "react";
import {StoreItemLayout} from "../..";
import ClickHandler from "./ClickHandler";

function StoreItem({couponRef, name, selectedItem}) {
  return (
    <StoreItemLayout>
      {{
        name: name,
        onClick: ClickHandler(couponRef, name, selectedItem),
      }}
    </StoreItemLayout>
  );
}

export default StoreItem;
