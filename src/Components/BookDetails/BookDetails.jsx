import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { saveBookApplication } from "../../Utility/localstorage";

const BookDetails = () => {
  const books = useLoaderData();
  const { id } = useParams();

  const book = books.find((book) => book.bookId == id);
  console.log(book);

  const handleWishList = () => {
    toast("Book added to wishlist");
  };

  const handleReadBook = () => {
    saveBookApplication(id);
    toast("Book added to Read list");
  };

  return (
    <section className="dark:bg-gray-100 dark:text-gray-800">
      <div className="container max-w-xl p-6 py-12 mx-auto space-y-24 lg:px-8 lg:max-w-7xl">
        <div>
          <div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
            <div className="lg:col-start-2">
              <h3 className="text-2xl font-bold tracking-tight sm:text-3xl dark:text-gray-900">
                {book.bookName}
              </h3>
              <p className="mt-3 text-lg dark:text-gray-600">
                By : {book.author}
              </p>
              <br />
              <hr />
              <br />
              <p>{book.category}</p>
              <br />

              <hr />
              <div className="mt-12 space-y-12">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center rounded-md dark:bg-violet-600 dark:text-gray-50"></div>
                  </div>
                  <div className="">
                    <h4 className="text-lg font-semibold leading-6 dark:text-gray-900">
                      Review
                    </h4>
                    <p className="mt-2 dark:text-gray-600">{book.review}</p>
                  </div>
                </div>
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center  rounded-md dark:bg-violet-600 dark:text-gray-50"></div>
                  </div>
                  <div className="">
                    <p>
                      Number Of Page :{" "}
                      <span className="font-bold">{book.totalPages}</span>
                    </p>
                    <p>
                      Publisher:{" "}
                      <span className="font-bold">{book.publisher}</span>
                    </p>
                    <p>
                      Year of Publish :
                      <span className="font-bold">{book.yearOfPublishing}</span>
                    </p>
                    <p>
                      Rating : <span className="font-bold">{book.rating}</span>
                    </p>
                  </div>
                </div>
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-12 h-12 rounded-md dark:bg-violet-600 dark:text-gray-50"></div>
                  </div>
                  <div className="space-x-9">
                    <button onClick={handleReadBook} className="btn ">
                      Read
                    </button>
                    <button
                      onClick={handleWishList}
                      className="btn bg-cyan-500">
                      Wishlist
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-10 lg:mt-0 lg:col-start-1 lg:row-start-1">
              <img
                src={book.image}
                alt=""
                className="mx-auto rounded-lg shadow-lg dark:bg-gray-500"
              />
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </section>
  );
};

export default BookDetails;
