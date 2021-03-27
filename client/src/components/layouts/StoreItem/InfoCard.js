import React from "react";

function InfoCard({name = "", image = "", description = ""}) {
  const loremIpsum =
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.";
  const defaultImage =
    "https://i2.wp.com/lifemadesimplebakes.com/wp-content/uploads/2017/04/Garden-Veggie-Pizza-1.jpg";

  return (
    <>
      <img
        className="w-full h-48"
        src={image === "" ? defaultImage : image}
        alt={image === "" ? "Default Product Image" : "Product Image"}
      ></img>
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{name}</div>
        <p className="text-gray-700 text-base">
          {description === "" ? loremIpsum : description}
        </p>
      </div>
    </>
  );
}

export default InfoCard;
