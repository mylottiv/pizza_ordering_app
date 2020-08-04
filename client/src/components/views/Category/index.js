import React, {useState, useEffect} from "react";
import {ContentLayout, MainLayout, ContentList} from "../..";

function Category({match}) {
  const productType = match.params.type;
  const name = productType.substring(0, 1).toUpperCase() + productType.substring(1);

  const [content, setContent] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`http://localhost:3020/api/menu/${productType}`, {
        method: "GET",
      });
      const categoryList = await response.json();
      console.log("async test", categoryList);
      setContent(categoryList);
    };

    fetchData();
  }, [productType]);

  console.log("useState test", content);

  // Add reference information as needed to itemRef down the render tree
  const subcategories = content ? (
    content.subcategories.map((subcategory, index) => {
      return <ContentList key={subcategory.name} content={subcategory} />;
    })
  ) : (
    <p>Loading</p>
  );

  console.log("TYPE IS", match.params.type);

  return (
    <MainLayout>
      <ContentLayout name={name}>{subcategories}</ContentLayout>
    </MainLayout>
  );
}

export default Category;
