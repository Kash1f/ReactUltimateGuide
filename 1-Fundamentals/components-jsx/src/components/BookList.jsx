import React from "react";
import Book from "./Book";
import books from './../books.json'

const BookList = () => {
  return (
    <>
    {books.map((element)=>{
      return <Book
      key={element.id}
      image={element.image}
      title={element.title}
      publisher={element.publisher}
      price={element.price}
      id={element.id}
      />

    })}
      
    

    </>
  );
};

export default BookList;
