import React from "react";
import Book from "./Book";

const books = [
  {
    image:
      "https://images-na.ssl-images-amazon.com/images/I/41AueBcq1CL._AC_SX184_.jpg",
    title: "Masters of the Air",
    publisher: "Shawn Ashley",
    price: "$100",
  },

  {
    image:
      "https://images-na.ssl-images-amazon.com/images/I/41AueBcq1CL._AC_SX184_.jpg",
    title: "Rich Dad Poor Dad",
    publisher: "Mitchell Darry",
    price: "$300",
  },

  {
    image:
      "https://images-na.ssl-images-amazon.com/images/I/41AueBcq1CL._AC_SX184_.jpg",
    title: "You can Negotiatie Anything",
    publisher: "James Robert",
    price: "$200",
  },
];
const BookList = () => {
  return (
    <>
    {books.map((element)=>{
      return <Book
      image={element.image}
      title={element.title}
      publisher={element.publisher}
      price={element.price}
      />


    })}
      
    

    </>
  );
};

export default BookList;
