import React, { useState, useRef, useEffect } from "react";
import * as d3 from "d3";

export const initialBooks = [
  {
    name: "Harry Potter and the Philosophers Stone",
    author: "J. K. Rowling",
    genre: "fantasy",
  },
  {
    name: "The Pedagogy of Freedom",
    author: "Bell hooks",
    genre: "non-fiction",
  },
  {
    name: "Harry Potter and the Chamber of Secrets",
    author: "J. K. Rowling",
    genre: "fantasy",
  },
  {
    name: "Gilgamesh",
    author: "Derrek Hines",
    genre: "poetry",
  },
];

const Graph = () => {
  const [books, setBooks] = useState(initialBooks);
  const refObject = useRef(null);

  useEffect(() => {
    d3.select(refObject.current)
      .selectAll("h2")
      .data(books)
      .enter()
      .append("h2")
      .text((book) => book.name);
  }, [books]);

  return (
    <>
      <div ref={refObject}></div>
      <button
        onClick={() =>
          setBooks(
            books.concat({
              name: "50 vegan dishes",
              author: "Antti Leppänen",
              genre: "non-fiction",
            })
          )
        }
      >
        {" "}
        click to add
      </button>
    </>
  );
};

export default Graph;
