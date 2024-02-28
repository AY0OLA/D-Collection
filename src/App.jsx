import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./Component/Navbar/Navbar";
import Home from "./Component/Home/Home";
import Login from "./Component/Login/Login";
// import Product from "./Component/Product/Product";
import MoreProduct from "./Component/More-Product/More-Product";
import Cart from "./Component/Cart/Cart";
import { ShopContextProvider } from "./Context/Shop-Context";

function App() {
  return (
    <div>
      <ShopContextProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<Home />} />
            {/* <Route path="/product" element={<Product />} /> */}
            <Route path="/MoreProduct" element={<MoreProduct />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </Router>
      </ShopContextProvider>
    </div>
  );
}

export default App;
