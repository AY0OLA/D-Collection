import React, { useContext } from "react";
import { ShopContext } from "../../Context/Shop-Context";
import { FaStar } from "react-icons/fa";

const CartItems = (props) => {
  const { id, image, title, price, category, rating, description } = props.data;

  const { addToCart, cartItems, removeFromCart, updateCartItemCount } =
    useContext(ShopContext);

  const quantity = cartItems[id];
  const total = quantity * price;

  const handleIncrement = () => {
    updateCartItemCount(quantity + 1, id);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      updateCartItemCount(quantity - 1, id);
    } else if (quantity === 1) {
      removeFromCart(id);
    }
  };

  return (
    <div className="con">
      <img src={image} alt={title} />
      <div className="Container">
        <h4>{category}</h4>
        <h1>{title}</h1>
        <p className="Rating">
          <span>Rating {rating && rating.rate}</span>
          <div className="star">
            <FaStar className="icon" />
            <FaStar className="icon" />
            <FaStar className="icon" />
            <FaStar className="icon" />
            <FaStar className="icon" />
          </div>
        </p>
        <div className="table">
          <input
            value={quantity}
            onChange={(e) => updateCartItemCount(Number(e.target.value), id)}
          />
          <span>*</span>
          <p className="Price">${price}</p>
          <p className="equal">=</p>
          <p className="total">${total}</p>
        </div>
        <div className="CountHandler">
          <button
            className="remove"
            onClick={() => removeFromCart(id)}
            disabled={quantity <= 0}
          >
            -
          </button>
          <button className="remove" onClick={() => addToCart(id)}>
            +
          </button>
        </div>
        <p className="Description">{description}</p>
      </div>
    </div>
  );
};

export default CartItems;
