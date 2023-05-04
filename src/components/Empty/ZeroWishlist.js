import React from "react";
import "./ZeroWishlist.css"
function ZeroWishlist() {
  return (
    <div className="wish-container">
      <div className="wishimg">
      <img src="https://images.bewakoof.com/web/wishlistEmpty.svg" alt="wishlist logo" />
      </div>
      <div className="wish-content">
        <h4>Hey! Your wishlist is empty. </h4>
      </div>
      <div className="wish-suncontent">
        <h5>Save your favourites Here and make them yours soon!</h5>
      </div>
      <div className="wish-button">
      <button>SHOP NOW</button>
      </div>

    </div>
  );
}

export default ZeroWishlist;
