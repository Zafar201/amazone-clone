import React from "react";
import "./Header.css";
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { Link } from "react-router-dom"
import { useStateValue } from "./StateProvider";


function Header() {
  const [{basket},state,dispatch] =useStateValue()
  return (
    <div className="header">
      <Link to="/">
      <img
        className="header__logo"
        src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
      />
      </Link>
      <div className="header__search">
        <input className="header__searchInput" type="text" />
        <SearchIcon className="header__searchIcon"/>
      </div>
      <div className="header__nav">
        <div className="header__option">
          <spam className="header__optionLineOne">Heloo</spam>
          <spam className="header__optionLineTwo">Sign In</spam>
        </div>

        <div className="header__option">
          <spam className="header__optionLineOne">Returns</spam>
          <spam className="header__optionLineTwo">&Order</spam>
        </div>

        <div className="header__option">
          <spam className="header__optionLineOne">Your</spam>
          <spam className="header__optionLineTwo">Prime</spam>
        </div>
        <Link to="/checkout">
      <div class="header_optionBasket">
        <ShoppingBasketIcon/>
        <span className="header__optionLineTwo header__basketCount">{basket?.length}</span>
      </div>
      </Link>
      </div>
    </div>
  );
}

export default Header;
