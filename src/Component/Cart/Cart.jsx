import React from "react";
import { MORE } from "../../MoreP";
import CartItems from "./Cart-item1";
import { ShopContext } from "../../Context/Shop-Context";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import "./Cart.css";

const Cart = () => {
  const { cartItems, getTotalCartAmount } = useContext(ShopContext);

  const totalAmount = getTotalCartAmount();

  const navigate = useNavigate();

  return (
    <div className="PRODUCT">
      <div className="text">
        <h1>Your Cart Items</h1>
      </div>
      <div className="CART">
        {MORE.map((product) => {
          if (cartItems[product.id] !== 0) {
            return (
              <>
                <div>
                  <CartItems data={product} />
                </div>
              </>
            );
          }
        })}
      </div>
      {totalAmount > 0 ? (
        <div className="checkout">
          <p>
            Subtotal:<span>${totalAmount}</span>
          </p>
          <div className="pay">
            <button onClick={() => navigate("/MoreProduct")}>
              Continue Shopping
            </button>
            <button>Checkout</button>
          </div>
        </div>
      ) : (
        <h1 className="emp">
          <span className="srt">Your Cart is Empty</span>
          {/* <span className="srt">Checkout Our Product</span> */}
          {/* <span className="srt">Update Your Wardrobe</span> */}
          {/* <span className="srt">Your Cart is Empty</span> */}
        </h1>
      )}
    </div>
  );
};

export default Cart;
