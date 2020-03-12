import React from "react";
import ProductRadioOptions from "./ProductRadioOptions";

// Clearly this component needs some rethinking
function ItemProfile({content}) {
  const formattedContent = content[0] ? (
    content.map(field => (
      <ProductRadioOptions key={field.field} type={field.field} options={field.options} />
    ))
  ) : (
    <p className="text-center">{content}</p>
  );

  return <>{formattedContent}</>;
}

export default ItemProfile;
