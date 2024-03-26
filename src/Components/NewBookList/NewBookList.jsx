import { useEffect, useState } from "react";
import NewBook from "../NewBook/NewBook";

const NewBookList = () => {
  const [newBooks, SetNewBooks] = useState([]);

  useEffect(() => {
    fetch("upcoming.json")
      .then((res) => res.json())
      .then((data) => SetNewBooks(data));
  }, []);
  return (
    <div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-3">
      {newBooks.map((newBook) => (
        <NewBook key={newBook.id} newBook={newBook}></NewBook>
      ))}
    </div>
  );
};

export default NewBookList;
