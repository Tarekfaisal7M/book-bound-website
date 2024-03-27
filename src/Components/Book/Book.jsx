import { FaRegStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const Book = ({ book }) => {
  const { bookId, image, bookName, rating, category, author, tags, tags2 } =
    book;
  return (
    <Link to={`/book/${bookId}`}>
      <div className="">
        <div className="max-w-xs p-6 transition border-2 hover:scale-105 border-primary hover:border-secondary border-opacity-30 rounded-md shadow-md  text-slate-950 ">
          <img
            src={image}
            alt=""
            className="object-cover object-center w-full rounded-md h-72 bg-gray-500"
          />
          <div className="mt-6 mb-2">
            <div className="flex flex-wrap justify-between pb-3 space-x-2 text-[#23BE0A]">
              <span>{tags}</span>
              <span>{tags2}</span>
            </div>
            <h2 className="text-2xl font-bold tracking-wide">{bookName}</h2>
          </div>
          <h2>By: {author} </h2>
          <br />
          <hr />
          <div className="flex flex-wrap justify-between pt-3 space-x-2 text-black">
            <span>{category}</span>
            <span className="flex gap-3">
              {rating} <FaRegStar></FaRegStar>
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Book;
