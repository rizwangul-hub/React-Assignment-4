import React, { Children } from "react";
import "../App.css";

const ProductCard = (props) => {
  const {
    title = "Electronic device",
    price = "500$",
    description,
    image,
  } = props;
  return (
    <div className="product-card">
      <img className="product-image" src={image} alt="" />
      <h2 className="product-title">{title}</h2>
      <h3 className="product-price">Price: ${price}</h3>
      <p className="product-description">{description}</p>
      <button className="product-button"> {props.children}</button>
    </div>
  );
};
export default ProductCard;
