import { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { getStoredBookApplication } from "../../Utility/localstorage";
import { CgProfile } from "react-icons/cg";
import { GiNewspaper } from "react-icons/gi";

const ListedBooks = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const [bookList, setBookList] = useState();

  const books = useLoaderData();
  useEffect(() => {
    const storedBookIds = getStoredBookApplication();
    if (books.length > 0) {
      // const bookListed = books.filter((book) =>
      //   storedBookIds.includes(book.id)
      // );

      const bookListed = [];
      for (const id of storedBookIds) {
        const book = books.find((book) => book.bookId == id);
        if (book) {
          bookListed.push(book);
        }
      }
      setBookList(bookListed);

      // console.log(bookList);
    }
  }, []);

  return (
    <div>
      <h2 className="hero min-w-screen bg-base-200 rounded-lg text-2xl font-bold">
        Books : {ListedBooks.length}
      </h2>
      <br />

      {/* tab */}

      <div className="flex items-center -mx-4 overflow-x-auto overflow-y-hidden sm:justify-start flex-nowrap dark:bg-gray-100 dark:text-gray-800">
        <Link
          to={""}
          onClick={() => setTabIndex(0)}
          rel="noopener noreferrer"
          href="#"
          className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${
            tabIndex === 0 ? "border border-b-0" : "border-b"
          } dark:border-gray-600 dark:text-gray-600`}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-4 h-4">
            <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
          </svg>
          <span>Read Books</span>
        </Link>
        <Link
          to={`wishlist`}
          onClick={() => setTabIndex(1)}
          rel="noopener noreferrer"
          href="#"
          className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${
            tabIndex === 1 ? "border border-b-0" : "border-b"
          } dark:border-gray-600 dark:text-gray-600`}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-4 h-4">
            <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
            <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
          </svg>
          <span>Wishlist</span>
        </Link>
      </div>
      {/* card body */}
      <div>
        <div className="max-w-full p-8 sm:flex sm:space-x-6 border  dark:bg-gray-50 dark:text-gray-800">
          <div className="flex-shrink-0 w-full mb-6 h-44 sm:h-32 sm:w-32 sm:mb-0">
            <img
              src=""
              alt=""
              className="object-cover object-center w-full h-full rounded dark:bg-gray-500"
            />
          </div>

          <div className="flex flex-col space-y-4">
            <div>
              <h2 className="text-2xl font-semibold">Book Name : </h2>
              <span className="text-sm dark:text-gray-600">By :</span>
            </div>
            <div className="space-y-1 flex space-x-16">
              <span className="flex items-center space-x-2">
                <CgProfile></CgProfile>
                <span className="dark:text-gray-600">publisher :</span>
              </span>
              <span className="flex items-center space-x-2">
                <GiNewspaper></GiNewspaper>
                <span className="dark:text-gray-600">Page :</span>
              </span>
            </div>
            <hr />
            <div className="grid grid-cols-3 gap-16">
              <button className="rounded-full border border-cyan-400 text-cyan-400 bg-cyan-100">
                category:
              </button>
              <button className="rounded-full border border-orange-400 text-orange-400 bg-orange-100 ">
                rating:{" "}
              </button>
              <button className="bg-[#23BE0A] btn rounded-full  btn-sm text-white">
                view full
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListedBooks;
