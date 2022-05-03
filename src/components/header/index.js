import React from "react";
import LocalGroceryStoreIcon from "@mui/icons-material/LocalGroceryStore";
import StoreMallDirectoryOutlinedIcon from "@mui/icons-material/StoreMallDirectoryOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import "./header.css";
import { Link } from "react-router-dom";
import { useStateValue } from "../../context/StateProvider";

const Header = () => {
  const [{ token, basket }, dispatch] = useStateValue();

  const logout = () => dispatch({type: 'ADD_TOKEN', payload: null})

  return (
    <div className="header">
      <Link to="/" className="header__link">
        <div className="header__logo">
          <StoreMallDirectoryOutlinedIcon
            fontSize="large"
            className="header__logoImage"
          />
          <h2 className="header__logoTitle">eSHOP</h2>
        </div>
      </Link>
      <div className="header__search">
        <input type="text" className="header__searchInput" />
        <span className="header__searchButton">
          <SearchOutlinedIcon className="header__searchIcon" />
        </span>
      </div>
      <div className="header__actions">
        {token ? (
          <button className="header__linkbtn" onClick={logout}>
            Sign out
          </button>
        ) : (
          <Link to="/login" className="header__link">
            <div className="action__item">
              <span className="action__itemLineOne">Hello Guest</span>
              <span className="action__itemLineOne">
                <b>Sign in</b>
              </span>
            </div>
          </Link>
        )}
        <div className="action__item">
          <span className="action__itemLineOne">Your</span>
          <span className="action__itemLineOne">Shop</span>
        </div>
        <Link to="/cart" className="header__link">
          <div className="action__item">
            <LocalGroceryStoreIcon className="action__itemImage" />
            <span className="action__itemLineOne">{basket.length}</span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Header;
