import { useEffect, useState } from "react";
import Book from "../Book/Book";

const BooksList = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("books.json")
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, []);

  return (
    <div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-3">
      {books.map((book) => (
        <Book key={book.id} book={book}></Book>
      ))}
    </div>
  );
};

export default BooksList;
