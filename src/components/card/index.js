import React from "react";
import "./card.css";

const Card = ({ img, title, price, originalPrice, discount, rating }) => {
  return (
    <div className="card">
      <img src={img} alt="product" className="card__image" />
      <h4 className="card__title">{title}</h4>
      <div className="card__rating">
        {Array(rating)
          .fill()
          .map((_, i) => (
            <p key={i}>⭐</p>
          ))}
      </div>
      <p className="card__price">
        ${price} <small className="card__priceStrike">${originalPrice}</small>{" "}
        <small className="card__discount">{discount}% OFF</small>
      </p>
      <button className="card__cartbutton">Add to cart</button>
    </div>
  );
};

export default Card;
