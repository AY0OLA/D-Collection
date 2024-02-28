import React, { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import Button from "../../Button/Button";
import { ShopContext } from "../../Context/Shop-Context";
import { useContext } from "react";

const Product = () => {
  const { cartItems } = useContext(ShopContext);

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [filter, setFilter] = useState(data);
  let componentMounted = true;

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      const response = await fetch("https://fakestoreapi.com/products");
      if (componentMounted) {
        const products = await response.json();
        setData(products);
        setFilter(products);
        setLoading(false);
        console.log(filter);
      }
      return () => {
        componentMounted = false;
      };
    };
    getProducts();
  }, []);

  // Define the Loading component
  const Loading = () => {
    return (
      <>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
      </>
    );
  };

  const ShowProducts = () => {
    return (
      <>
        {filter.map((product) => {
          if (cartItems[product.id] !== 0) {
            return (
              <>
                <div className="col-md-3 mb-4" key={product.id}>
                  <div className="card h-100 text-center p-4 ">
                    <img
                      src={product.image}
                      className="card-img-top"
                      alt={product.title}
                      height="250px"
                    />
                    <div className="card-body lead fw-bold">
                      <h5 className="card-title mb-0">
                        {product.title.substring(0, 12)}...
                      </h5>
                      <p className="card-text">${product.price}</p>
                      <Button onClick={() => addToCart(product)}>
                        Buy Now
                      </Button>
                    </div>
                  </div>
                </div>
              </>
            );
          }
        })}
      </>
    );
  };

  return (
    <>
      <div>
        <div className="container my-5 py-5">
          <div className="row justify-content-center">
            {loading ? <Loading /> : <ShowProducts />}
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
