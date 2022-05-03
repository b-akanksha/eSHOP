import React from "react";
import { useStateValue } from "../../context/StateProvider";
import "./card.css";

const Card = ({ item, type }) => {
  const { img, title, price, originalPrice, discount, rating } = item;

  const [state, dispatch] = useStateValue();

  const addToBasket = () => dispatch({ type: "ADD_TO_BASKET", payload: item });

  const removeFromBasket = () => dispatch({
    type: "REMOVE_FROM_BASKET",
    payload: item,
  });

  return (
    <div className="card">
      <img src={img} alt="product" className="card__image" />
      <h4 className="card__title">{title}</h4>
      {type === "add" && (
        <div className="card__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p key={i}>⭐</p>
            ))}
        </div>
      )}
      <p className="card__price">
        ${price}{" "}
        {type === "add" && (
          <>
            <small className="card__priceStrike">${originalPrice}</small>
            <small className="card__discount">{discount}% OFF</small>
          </>
        )}
      </p>
      {type === "add" ? (
        <button className="card__cartbutton" onClick={addToBasket}>
          Add to cart
        </button>
      ) : (
        <button className="card__cartbutton" onClick={removeFromBasket}>
          Remove from cart
        </button>
      )}
    </div>
  );
};

export default Card;
