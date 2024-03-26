const Book = ({ book }) => {
  const { bookName, rating, category, author, tags, tags2 } = book;
  return (
    <div className="">
      <div className="max-w-xs p-6 rounded-md shadow-md  text-slate-950 ">
        <img
          src="https://source.unsplash.com/random/300x300/?1"
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
          <span>{rating}</span>
        </div>
      </div>
    </div>
  );
};

export default Book;
