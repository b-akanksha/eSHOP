import React from "react";
import Card from "../card";
import { useStateValue } from "../../context/StateProvider";
import "./checkout.css";

const Checkout = () => {
    const [{ basket }, dispatch] = useStateValue();
  const totalPrice = basket.map((i) => i.price).reduce((a, b) => a + b, 0);
  return (
    <div className="checkout">
      <div className="checkout__info">
        <p>{`Subtotal (${basket.length} items):`} <b>${totalPrice}</b></p>
        <p>
          <input type="checkbox" id="gift" name="gift" value="gift" />
          <label htmlFor="gift"> This order contains a gift item</label>
        </p>
        <button className="card__cartbutton">Proceed to checkout</button>
      </div>
      <div className="checkout__list">
        <h1>Your Shopping List</h1>
        <div className="checkout__items">
          {basket &&
            basket.length > 0 &&
            basket.map((item, index) => (
              <Card
                key={`${item.title}-${index}`}
                item={item}
                type="cart"
              />
            ))}
            {!basket.length > 0 && <center><p>Cart is empty</p></center>}
        </div>
      </div>
    </div>
  );
};

export default Checkout;
