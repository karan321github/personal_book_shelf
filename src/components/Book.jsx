import React, { useState } from "react";

const Book = ({ results, addToFavourite }) => {
  const [isFavourite, setIsFavourites] = useState(false);
  const handleClick = () => {
    setIsFavourites(true);
    addToFavourite(results);
  };
  return (
    <div className="flex flex-col justify-between h-64 w-48 border-2 border-gray-300 rounded-md p-4 bg-white shadow-md">
      <div className="flex flex-col items-center justify-center h-full">
        <h2 className="text-lg font-semibold mb-2">{results.title}</h2>
        <p className="text-sm text-gray-600">{results.author}</p>
      </div>
      <div className="flex items-center justify-center">
        <img src={results.coverUrl} alt={results.title} className="h-40" />
        <button
          onClick={handleClick}
          className={`p-1 bg-green-400 h-auto w-full m-2 rounded-md ${
            isFavourite ? "bg-gray-400" : ""
          }`}
          disabled={isFavourite}
        >
          {isFavourite ? "Added to favourites" : "Add to favourites"}
        </button>
      </div>
    </div>
  );
};

export default Book;
