import React from "react";
import "./card.css";

const Card = ({img, title, price, originalPrice, discount}) => {
  return (
    <div className="card">
      <img
        src={img}
        alt="phone image"
        className="card__image"
      />
      <h4 className="card__title">
        {title}
      </h4>
      <p className="card__price">
        ${price} <small className="card__priceStrike">${originalPrice}</small> <small className="card__discount">{discount}% OFF</small>
      </p>
      <button className="card__cartbutton">Add to cart</button>
    </div>
  );
};

export default Card;
