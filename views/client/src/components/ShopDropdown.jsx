// ShopDropdown.js
import React from "react";

function ShopDropdown() {
  return (
    <div className="shop-dropdown">
      <div className="column">
        <a href="/shop-item-1">Shop Item 1</a>
        <a href="/shop-item-2">Shop Item 2</a>
      </div>
      <div className="column">
        <a href="/shop-item-3">Shop Item 3</a>
        <a href="/shop-item-4">Shop Item 4</a>
      </div>
      {/* Add more shop items as needed */}
    </div>
  );
}

export default ShopDropdown;
