"use client";
import { useState } from "react";
import Link from "next/link";
import useCart from "@/app/hooks/useCart";
import { ShoppingCart } from "lucide-react";
import HeaderCartItem from "./HeaderCartItem";
const HeaderCart = () => {
  const [showCart, setShowCart] = useState(false);

  const showCartHandler = () => {
    setShowCart((prev) => !prev);
  };

  const { productsWithQuantity } = useCart();
  return (
    <div className="relative">
      <button onClick={showCartHandler} className="text-blue-600">
        <ShoppingCart size={30} />
      </button>

      <div
        className={`${
          showCart ? "block" : "hidden"
        } absolute top-full right-0 shadow-lg bg-white py-4 z-[1000] min-w-full rounded-lg w-[300px] sm:w-[400px] max-h-[500px] overflow-auto mt-2`}
      >
        <ul className="divide-y" id="dropdown-cart-container">
          {productsWithQuantity?.map((product) => (
            <HeaderCartItem
              key={product.id}
              img={product.image}
              title={product.title}
              price={product.price}
              quantity={product.quantity}
            />
          ))}
        </ul>
        <Link
          href="/cart"
          className="w-3/4 flex items-center mx-auto justify-center gap-3 mt-6 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-base text-white font-semibold rounded-xl"
        >
          <ShoppingCart />
          Check out
        </Link>
      </div>
    </div>
  );
};

export default HeaderCart;
