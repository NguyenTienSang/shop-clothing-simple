import axios from "axios";
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { GlobalState } from "../../GlobalState";
import Cart from "./icon/cart.svg";
import Close from "./icon/close.svg";
import Menu from "./icon/menu.svg";
import TopHeader from "./TopHeader";
import MainHeader from "./MainHeader";
import BottomHeader from "./BottomHeader";

function Header() {
  const state = useContext(GlobalState);
  const [isLogged] = state.userAPI.isLogged; //
  const [isAdmin] = state.userAPI.isAdmin; //
  const [cart] = state.userAPI.cart; //
  const [menu, setMenu] = useState(false);

  const logoutUser = async () => {
    await axios.get("/user/logout");

    localStorage.removeItem("firstLogin");

    window.location.href = "/";
  };

  const adminRouter = () => {
    return (
      <>
        <li>
          <Link to="/create_product">Thêm Sản Phẩm</Link>
        </li>
        <li>
          <Link to="/category">Loại Sản Phẩm</Link>
        </li>
      </>
    );
  };

  const loggedRouter = () => {
    return (
      <>
        <li>
          <Link to="/history">Lịch Sử</Link>
        </li>
        <li>
          <Link to="/" onClick={logoutUser}>
            Đăng Xuất
          </Link>
        </li>
      </>
    );
  };

  const styleMenu = {
    left: menu ? 0 : "-100%",
  };

  return (
    <header>
      <TopHeader />
      <MainHeader />
      {/* <BottomHeader /> */}
    </header>
  );
}

export default Header;
