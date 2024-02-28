import React, { useMemo, useState } from "react";
import { MORE } from "../../MoreP";
import "./More-Product.css";
import Morepros from "./Pros";

const category = [
  "All",
  "men's clothing",
  "women's clothing",
  "jewelery",
  "electronics",
];
const MoreProduct = () => {
  const [active, setActive] = useState("All");

  const system = useMemo(() => {
    if (active === "All") return MORE;

    return MORE.filter((product) => {
      return product.category.toLowerCase() === active.toLowerCase();
    });
  }, [active]);

  return (
    <>
      <div>
        <div className="shopTitle">
          <div className="title">Lastest Collection</div>
          <hr />
          <div className="buttons">
            {category.map((cat) => (
              <button key={cat} onClick={() => setActive(cat)} className="btn">
                {cat}
              </button>
            ))}
          </div>
          <div className="Products">
            {system.map((product) => {
              return <Morepros data={product} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default MoreProduct;
