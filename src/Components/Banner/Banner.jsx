import { Link } from "react-router-dom";
const Banner = () => {
  return (
    <div className="hero min-w-screen bg-base-200 rounded-lg">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src="/src/assets/book_PNG2118.png"
          className="max-w-sm rounded-lg shadow-2xl"
        />
        <div>
          <h1 className="py-9 text-5xl font-bold">
            Access To Thousands Of Free Ebooks Download & Read
          </h1>
          <div>
            <Link
              to="/listed books"
              className="px-8 py-3 btn font-semibold rounded-lg bg-[#23BE0A] text-white">
              View The List
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
