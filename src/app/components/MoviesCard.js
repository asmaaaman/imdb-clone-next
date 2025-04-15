import React from "react";

const MoviesCard = ({ results }) => {
  return (
    <div>
      {results?.map((item) => (
        <h2 key={item.id}>{item?.original_title}</h2>
      ))}
    </div>
  );
};

export default MoviesCard;
