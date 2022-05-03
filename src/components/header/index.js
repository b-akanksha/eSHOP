import React from "react";
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import StoreMallDirectoryOutlinedIcon from '@mui/icons-material/StoreMallDirectoryOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import './header.css';

const Header = () => {
  return (
    <div className="header">
      <div className="header__logo">
        <StoreMallDirectoryOutlinedIcon fontSize="large" className="header__logoImage"/>
        <h2 className="header__logoTitle">eSHOP</h2>
      </div>
      <div className="header__search">
        <input type="text" className="header__searchInput" />
        <span className="header__searchButton"><SearchOutlinedIcon className="header__searchIcon" /></span>
      </div>
      <div className="header__actions">
        <div className="action__item">
          <span className="action__itemLineOne">Hello Guest</span>
          <span className="action__itemLineOne"><b>Sign in</b></span>
        </div>
        <div className="action__item">
          <span className="action__itemLineOne">Your</span>
          <span className="action__itemLineOne">Shop</span>
        </div>
        <div className="action__item">
          <LocalGroceryStoreIcon className="action__itemImage"/>
          <span className="action__itemLineOne">0</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
