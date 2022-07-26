import React from "react";
import { Card, Form } from "react-bootstrap";
import "./Element.css";
import { Link } from "react-router-dom";
import Rating from "./Rating";

const Element = ({ product }) => {
  return (
    <div className="cards">
      {/* <Link to={`/product/${product.id}`}>
           <Card.Img  src={product.image} variant='top'></Card.Img>
        </Link> */}

      <a href={`/product/${product.id}`}>
        <img src={product.image} className="image" />
      </a>

      <div className="cards-body">
        {/* <Link to={`/product/${product.id}`}>
             <Card.Title as='div'>
                  <strong>{product.title}</strong>
             </Card.Title>
           </Link> */}

        <a href={`/product/${product.id}`} className="title">
          <strong>{product.title}</strong>
        </a>

        <div className="rating">
          <Rating
            value={product?.rating?.rate}
            text={`${product?.rating?.count} reviews`}
            color="#B2FFFF"
          />
        </div>

        {/* <Card.Text as='h3'>${product.price}</Card.Text> */}

        <h3 className="price">${product.price}</h3>
      </div>
    </div>
  );
};

export default Element;
