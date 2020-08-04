import React from "react";
import {StoreItemLayout} from "../..";
// import ClickHandler from "./ClickHandler";

function StoreItem({name, imageUrl, description}) {
  return (
    <StoreItemLayout name={name} image={imageUrl} onClick={() => console.log("clicked")}>
      {description !== ""
        ? description
        : "Nunc sed tortor sapien. In id lectus vel risus dignissim condimentum at ut sapien. Suspendisse consequat convallis dolor sit amet elementum."}
    </StoreItemLayout>
  );
}

export default StoreItem;
