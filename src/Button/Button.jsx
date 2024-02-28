import React, { useContext } from "react";
import "./Button.css";
import { ShopContext } from "../Context/Shop-Context";
import PropTypes from "prop-types";

const Button = ({ className, children, productId }) => {
  const { addToCart, cartItems } = useContext(ShopContext);

  return (
    <>
      <div>
        <button
          id="my-button"
          className={`${className} `}
          onClick={() => addToCart(productId)}
        >
          {children}
        </button>
        {/* <span className="quantity">{cartItems[productId]}</span> */}
      </div>
    </>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  productId: PropTypes.number.isRequired,
};

export default Button;
