import React from "react";
import "./Home.css";
import { useNavigate } from "react-router-dom";
import MoreProduct from "../More-Product/More-Product";
// import Product from "../Product/Product";

const Home = () => {
  const Navigate = useNavigate();

  return (
    <>
      <div className="Home">
        <div className="name">
          <h1>
            <span className="span">w</span>
            <span className="span">e</span>
            <span className="span">l</span>
            <span className="span">c</span>
            <span className="span">o</span>
            <span className="span">m</span>
            <span className="span">e</span>
            <span className="empty">i</span>
            <span className="span">t</span>
            <span className="span">o</span>
            <span className="empty">i</span>
            <span className="span">d</span>
            <span className="span">-</span>
            <span className="span">c</span>
            <span className="span">o</span>
            <span className="span">l</span>
            <span className="span">l</span>
            <span className="span">e</span>
            <span className="span">c</span>
            <span className="span">t</span>
            <span className="span">i</span>
            <span className="span">o</span>
            <span className="span">n</span>
          </h1>
          <p>100% High Fashion Collection For You Here</p>
          <button className="btn" onClick={() => Navigate("/MoreProduct")}>
            Start Shopping
          </button>
        </div>
      </div>
      {/* <Product /> */}
      <MoreProduct />
    </>
  );
};

export default Home;
