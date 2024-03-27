import { BarChart, Bar, XAxis, YAxis, Tooltip } from "recharts";

const ShapeBarChart = () => {
  const booksData = [
    {
      bookId: 1,
      bookName: " Great",
      totalPages: 180,
      yearOfPublishing: 1925,
    },
    {
      bookId: 2,
      bookName: "To Kill a Mockingbird",
      author: "Harper Lee",
      image:
        "https://i.ibb.co/ccz1gpM/to-kill-a-mockingbird-by-harpe-1695899496-db441bc8-progressive.jpg",
      review:
        "A powerful exploration of racial injustice and moral growth in the American South.",
      totalPages: 281,

      yearOfPublishing: 1960,
    },
    {
      bookId: 3,
      bookName: "1984",
      author: "George Orwell",
      image: "https://i.ibb.co/Yc16wzK/1984-by-George-Orwell.jpg",
      review:
        "A dystopian masterpiece that warns of the dangers of totalitarianism.",
      totalPages: 328,

      yearOfPublishing: 1949,
    },
    {
      bookId: 4,
      bookName: "Pride and Prejudice",
      author: "Jane Austen",
      image: "https://i.ibb.co/kxFK365/3425-prod-8733695111.jpg",
      review:
        "A timeless romance that explores themes of class, marriage, and social expectations.",
      totalPages: 279,

      yearOfPublishing: 1813,
    },
    {
      bookId: 5,
      bookName: "the Rye",
      author: "J.D. Salinger",
      image: "https://i.ibb.co/GPVr8Lt/im-173743.jpg",
      review:
        "An iconic coming-of-age novel that captures the disillusionment of youth.",
      totalPages: 224,
      rating: 4.4,
      category: "Modern Fiction",
      tags: "Youth",
      tags2: "Identity",
      publisher: "Little, Brown and Company",
      yearOfPublishing: 1951,
    },
    {
      bookId: 6,
      bookName: "Harry Potter",
      author: "J.K. Rowling",
      image: "https://i.ibb.co/b7kW4w5/10212554014750.jpg",
      review:
        "A magical journey of friendship and bravery in the wizarding world.",
      totalPages: 223,
      rating: 4.9,
      category: "Fantasy",
      tags: "Magic",
      tags2: "Adventure",
      publisher: "Bloomsbury",
      yearOfPublishing: 1997,
    },
  ];

  return (
    <div className="">
      <BarChart width={1100} height={500} data={booksData}>
        <XAxis dataKey="bookName"></XAxis>
        <YAxis dataKey=""></YAxis>
        <Tooltip></Tooltip>

        <Bar dataKey="totalPages" fill="#8884d8"></Bar>
      </BarChart>
    </div>
  );
};

export default ShapeBarChart;
