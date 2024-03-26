import Banner from "../Banner/Banner";
import BooksList from "../BooksList/BooksList";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <h2 className="text-5xl font-bold text-center">Books</h2>
      <br />
      <BooksList></BooksList>
    </div>
  );
};

export default Home;
