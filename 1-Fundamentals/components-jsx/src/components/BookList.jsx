import React from "react";
import Book from "./Book";

const bookOne = {
  image:
    "https://images-na.ssl-images-amazon.com/images/I/41AueBcq1CL._AC_SX184_.jpg",
  title: "Masters of the Air",
  publisher: "Shawn Ashley",
  price: "$100",
};

const bookTwo = {
  image:
    "https://images-na.ssl-images-amazon.com/images/I/41AueBcq1CL._AC_SX184_.jpg",
  title: "Rich Dad Poor Dad",
  publisher: "Mitchell Darry",
  price: "$300",
};

const bookThree = {
  image:
    "https://images-na.ssl-images-amazon.com/images/I/41AueBcq1CL._AC_SX184_.jpg",
  title: "You can Negotiatie Anything",
  publisher: "James Robert",
  price: "$200",
};

const BookList = () => {
  return (
    <>
      <Book
        image={bookOne.image}
        title={bookOne.title}
        publisher={bookOne.publisher}
        price={bookOne.price}
      />

      <Book
        image={bookTwo.image}
        title={bookTwo.title}
        publisher={bookTwo.publisher}
        price={bookTwo.price}
      />

      <Book
        image={bookThree.image}
        title={bookThree.title}
        publisher={bookThree.publisher}
        price={bookThree.price}
      />
    </>
  );
};

export default BookList;
