import React from "react";
import ProductRadioOptions from "./ProductRadioOptions";

function ItemProfile({content}) {
  console.log(content);
  const formattedContent = Array.isArray(content) ? (
    content.map(field => (
      <ProductRadioOptions key={field.field} type={field.field} options={field.options} />
    ))
  ) : (
    <p className="text-center">{content}</p>
  );

  return <>{formattedContent}</>;
}

export default ItemProfile;
