const Banner = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src="/src/assets/book_PNG2118.png"
          className="max-w-sm rounded-lg shadow-2xl"
        />
        <div>
          <h1 className="py-9 text-5xl font-bold">
            Access To Thousands Of Free Ebooks Download & Read
          </h1>

          <button className="btn text-white font-semibold bg-[#23BE0A]">
            View The List
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
