import React from "react";
import {Tile} from '../tile/Tile'

export const TileList = ({array}) => {

  return (
    <div>
      {array.map((item, index) => (
        <Tile key={index} item={item} />
      ))}
    </div>
  );
};
