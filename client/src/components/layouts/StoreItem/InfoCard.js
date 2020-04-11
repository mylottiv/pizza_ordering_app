import React from "react";

function InfoCard({name}) {
  return (
    <>
      <img
        className="w-full h-48"
        src="https://i2.wp.com/lifemadesimplebakes.com/wp-content/uploads/2017/04/Garden-Veggie-Pizza-1.jpg"
        alt="Sunset in the mountains"
      ></img>
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{name}</div>
        <p className="text-gray-700 text-base">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia,
          nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
        </p>
      </div>
    </>
  );
}

export default InfoCard;
