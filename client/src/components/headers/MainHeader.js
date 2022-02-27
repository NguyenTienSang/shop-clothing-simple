import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { GlobalState } from "../../GlobalState";
import Cart from "./icon/cart.svg";
// import Search from "./icon/search.svg";
import { FaShoppingCart } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";

function BottomHeader(props) {
  const state = useContext(GlobalState);
  const [isLogged] = state.userAPI.isLogged; //
  const [isAdmin] = state.userAPI.isAdmin; //
  const [cart] = state.userAPI.cart; //
  const [menu, setMenu] = useState(false);
  const [search, setSearch] = state.productsAPI.search;

  return (
    <div className="main-header">
      <div className="logo">
        <Link to="/">
          <img
            src="https://thumbs.dreamstime.com/b/shop-logo-vector-template-design-illustration-shop-logo-vector-template-design-illustration-142203178.jpg"
            alt=""
          ></img>
        </Link>
      </div>

      <div className="search-input">
        <input
          type="text"
          value={search}
          placeholder="Nhập để tìm kiếm"
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
        />
        <i className="search-icon">
          <FaSearch />
        </i>
      </div>

      {isAdmin ? (
        ""
      ) : (
        <div className="cart-icon">
          <span>{cart.length}</span>
          <Link to="/cart">
            <FaShoppingCart />
          </Link>
          <p>Giỏ Hàng</p>
        </div>
      )}
    </div>
  );
}

export default BottomHeader;
