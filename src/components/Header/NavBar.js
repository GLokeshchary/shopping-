import { InputAdornment, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import "./NavBar.css";
import { Outlet } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";

import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import { Link } from "react-router-dom";

function NavBar() {
  const [state, setstate] = useState(false);
  return (
    <>
      <nav className="nav_container">
        <Link to="/">
          <div className="flex-item1">
            <img
              className="img-item"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_YgGqFggF8X_g74sjRkYTnOc5KIqlM_jQvg&usqp=CAU"
              alt="ShopMe.jpg"
            />
            <h1 className="flex-item1">Stop & Shop</h1>
          </div>
        </Link>
        <div
          className="flex-item2"
          onMouseOver={(e) => setstate(true)}
          onMouseOut={(e) => setstate(false)}
        >
          <h5>MEN</h5>
        </div>
        <div className="flex-item2">
          <h5>WOMEN</h5>
        </div>
        <div className="flex-item2 item-flexgrow">
          <h5>MOBILE COVERS</h5>
        </div>
        <div className="flex-item3">
          <TextField
            label="Search for products,Category"
            variant="filled"
            size="small"
            style={{
              color: "yellow",
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />
        </div>
        <Link to="/login">
          <div className="flex-item4">Login</div>
        </Link>
        <Link to="/ZeroWishlist">
          {" "}
          <div className="flex-item4">
            <FavoriteBorderIcon />
          </div>
        </Link>
        <Link to="/ZeroCartPage">
          <div className="flex-item4">
            <ShoppingBagIcon />
          </div>
        </Link>
        <div className="flex-item4">
          <EmojiEmotionsIcon />
        </div>
      </nav>
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default NavBar;
