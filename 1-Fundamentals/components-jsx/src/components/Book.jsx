import React from "react";
import "./Book.css";

const Book = (props) => {
  const image = "https://images-na.ssl-images-amazon.com/images/I/41AueBcq1CL._AC_SX184_.jpg";

    const title = "Masters of the Air";
    const publisher = "Amazing Ahmed"
    const price = "$100"

  return (
    <div className="book">
      {console.log(props)};
      <div className="book-image">
        <img src={image} />
      </div>
      <div className="book-info">
        <h2>{title}</h2>
        <p className="book-author">by{publisher}</p>
        <p className="book-price">{price}</p>

        <button>Add to cart</button>
      </div>
    </div>
  );
};

export default Book;
