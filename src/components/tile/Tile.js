import React from "react";

export const Tile = ({item}) => {
  
  return (
    <div className="tile-container">
      {Object.values(item).map((value, index) => {
        return <p key={value} className={index === 0 ? "tile tile-title" : "tile"}>{value}</p>
      })}
    </div>
  );
};
