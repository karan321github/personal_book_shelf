import React, { useEffect, useState } from "react";
import Book from "./components/Book";
import axios from "axios";

const App = () => {
  const [input, setInput] = useState("");
  const [result, setResults] = useState([]);
  const [favourite, setFavourite] = useState([]);

  const handleOnChange = (e) => {
    setInput(e.target.value);
  };

  const addToFavourite = (book) => {
    setFavourite([...favourite, book]);
    console.log(favourite);
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://openlibrary.org/search.json?q=${input}&limit=10&page=1`
        );
        console.log(response.data);
        setResults(response.data.docs);
      } catch (error) {
        console.log(error.message);
      }
    };
    if (input !== "") {
      fetchData();
    }
  }, [input]);
  return (
    <div className="conatiner flex flex-col items-center  ">
      <input 
        className="border-2 border-solid border-black rounded-lg my-2 p-2"
        placeholder="Search your favourite book"
        type="text"
        onChange={handleOnChange}
        value={input}
      />
      <div className="grid grid-cols-3 gap-4">
        {result.map((result, index) => (
          <>
            <Book
              className="m-2"
              results={result}
              key={index}
              addToFavourite={addToFavourite}
            />
          </>
        ))}
      </div>
    </div>
  );
};

export default App;
