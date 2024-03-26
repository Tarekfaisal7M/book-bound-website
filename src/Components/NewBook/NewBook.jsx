const NewBook = ({ newBook }) => {
  const { bookName, author, image } = newBook;
  return (
    <div className="max-w-xs p-6 rounded-md shadow-md  text-black">
      <img
        src={image}
        alt=""
        className="object-cover object-center w-full rounded-md h-72"
      />
      <div className="mt-6 mb-2">
        <span className="block text-xl font-medium tracking-widest uppercase text-red-600">
          By : {author}
        </span>
        <h2 className="text-xl font-semibold tracking-wide">{bookName}</h2>
      </div>
      <div>
        <button
          type="button"
          className="relative px-8 py-4 ml-4 overflow-hidden font-semibold rounded dark:bg-gray-800 dark:text-gray-50">
          Coming Soon
          <span className="absolute top-0 right-0 px-5 py-1 text-xs tracking-wider text-center uppercase whitespace-no-wrap origin-bottom-left transform rotate-45 -translate-y-full translate-x-1/3 dark:bg-lime-400">
            New
          </span>
        </button>
      </div>
    </div>
  );
};

export default NewBook;
