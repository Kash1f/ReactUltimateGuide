import React from "react";
import "./Book.css";

const Book = ({image, title, publisher, price}) => {
  

  return (
    <div className="book">
      <div className="book-image">
        <img src={image} />
      </div>
      <div className="book-info">
        <h2>{title}</h2>
        <p className="book-author">by {publisher}</p>
        <p className="book-price">{price}</p>

        <button>Add to cart</button>
      </div>
    </div>
  );
};

export default Book;
