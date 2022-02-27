import axios from "axios";
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { GlobalState } from "../../GlobalState";
import Cart from "./icon/cart.svg";
import Close from "./icon/close.svg";
import Menu from "./icon/menu.svg";

function TopHeader() {
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
    <div className="top-header">
      <ul style={styleMenu}>
        {isAdmin && adminRouter()}
        {isLogged ? (
          loggedRouter()
        ) : (
          <li>
            <Link to="/login">Đăng Nhập ❖ Đăng Ký</Link>
          </li>
        )}

        {/* <li onClick={() => setMenu(!menu)}>
          <img src={Close} alt="" width="30" className="menu" />
        </li> */}
      </ul>
    </div>
  );
}

export default TopHeader;
