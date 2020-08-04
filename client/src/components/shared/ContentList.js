import React from "react";
import {SubCategoryLayout} from "..";
import StoreItem from "./StoreItem";

function ContentList({content = ""}) {
  console.log(content);

  // If no products returns default paragraph
  // Otherwise populates with either Product Listings or Cart Items
  // Is now duplicate of ProductList in Category View
  console.log(content.name);
  const loremIpsum = (
    <p className="text-lg">
      Nunc sed tortor sapien. In id lectus vel risus dignissim condimentum at ut sapien.
      Suspendisse consequat convallis dolor sit amet elementum. Curabitur nec velit non
      urna faucibus feugiat. Duis finibus dictum dolor ut tempus. Curabitur et lectus
      tincidunt, tempus justo sit amet, vulputate elit. Lorem ipsum dolor sit amet,
      consectetur adipiscing elit. Class aptent taciti sociosqu ad litora torquent per
      conubia nostra, per inceptos himenaeos. Proin a fringilla mauris. Aenean pretium,
      metus non suscipit hendrerit, urna est ullamcorper lectus, in hendrerit lacus metus
      nec diam.
    </p>
  );
  const renderContent =
    content === "" || Object.keys(content).length === 1
      ? loremIpsum
      : content.products.map((product, index) => (
          <StoreItem
            key={`${product.name}-${index}`}
            name={product.name}
            description={product.description}
          />
        ));

  return <SubCategoryLayout name={content.name}>{renderContent}</SubCategoryLayout>;
}

export default ContentList;
