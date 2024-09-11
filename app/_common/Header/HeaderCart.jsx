"use client";
import { useState } from "react";
import { ShoppingCart } from "lucide-react";
import HeaderCartItem from "./HeaderCartItem";
const HeaderCart = () => {
  const [showCart, setShowCart] = useState(false);

  const showCartHandler = () => {
    setShowCart((prev) => !prev);
  };
  return (
    <div className="relative">
      <button onClick={showCartHandler} className="text-blue-600">
        <ShoppingCart />
      </button>

      <div
        className={`${
          showCart ? "block" : "hidden"
        } absolute top-full right-0 shadow-lg bg-white py-4 z-[1000] min-w-full rounded-lg w-[300px] sm:w-[400px] max-h-[500px] overflow-auto mt-2`}
      >
        <ul className="divide-y" id="dropdown-cart-container">
          <HeaderCartItem />
          <HeaderCartItem />
          <HeaderCartItem />
        </ul>
        <a
          href="cart.html"
          className="w-3/4 flex items-center mx-auto justify-center gap-3 mt-6 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-base text-white font-semibold rounded-xl"
        >
          <ShoppingCart />
          Check out
        </a>
      </div>
    </div>
  );
};

export default HeaderCart;
