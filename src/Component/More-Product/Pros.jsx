import React, { useContext } from "react";
import { ShopContext } from "../../Context/Shop-Context";
import Button from "../../Button/Button";

const Morepros = (props) => {
  const { id, image, title, price } = props.data;

  return (
    <div className="product">
      <img src={image} alt={title} />
      <div className="cards">
        <h1 className="text">{title.substring(0, 12)}...</h1>
        <p className="price">${price}</p>
        <Button className="btn" productId={id}>
          Buy Now
        </Button>
      </div>
    </div>
  );
};

export default Morepros;
