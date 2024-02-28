import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { ShopContext } from "../../Context/Shop-Context";
import "./Navbar.css";
import { BiSolidGrid } from "react-icons/bi";
import { MdCancel } from "react-icons/md";

const Navbar = () => {
  const [addActive, setAddActive] = useState("collapses");
  const Navigate = useNavigate();
  const { cartItems } = useContext(ShopContext);

  const showNav = () => {
    setAddActive("collapses active");
  };
  const removeNav = () => {
    setAddActive("collapses");
  };
  const getTotalCartItems = () => {
    let totalItems = 0;
    for (const item in cartItems) {
      totalItems += cartItems[item];
    }
    return totalItems;
  };

  return (
    <>
      <div>
        <nav className="nav">
          <div className="containers">
            <div>
              <h1 className="navbar">D-COLLECTION</h1>
            </div>
            <BiSolidGrid className="icon" onClick={showNav} />
            <div className={addActive}>
              <MdCancel className="icon" onClick={removeNav} />
              <ul className="navbarnav ">
                <li className="navitem">
                  <Link className="navlink " aria-current="page" to="/">
                    Home
                  </Link>
                </li>
                {/* <li className="nav-item">
                  <Link className="nav-link" to="/product">
                    Product
                  </Link>
                </li> */}
                <li className="navitem">
                  <Link className="navlink" to="/MoreProduct">
                    Products
                  </Link>
                </li>
              </ul>
              {/* <div>test</div>
              <div>testing</div> */}
              <form className="dflex" role="search">
                <button
                  className="btn 
                "
                  onClick={() => Navigate("/login")}
                >
                  Login
                </button>
                <button className="btn ">
                  <Link className="nav-link" to="/cart">
                    <FaShoppingCart className="gap" />
                    Cart ({getTotalCartItems()})
                  </Link>
                </button>
              </form>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
