"use client";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { updateQuantity } from "@/store/cart/CartSlice";
import { actGetCartItems } from "@/store/cart/CartSlice";
import Image from "next/image";
import { Plus, Minus, CircleX } from "lucide-react";

const CartProduct = ({ id, title, img, quantity, subtotal, removeProduct }) => {
  const [productQuantity, setProductQuantity] = useState(quantity);

  const dispatch = useDispatch();

  const quantityChangeHandler = (e) => {
    const newQuantity = +e.target.value;
    setProductQuantity(newQuantity);
  };

  const incrementOrDecrementQuantityByOne = (opr) => {
    setProductQuantity((prev) => {
      const updatedQuantity =
        opr === "add" ? Math.min(prev + 1, 20) : Math.max(prev - 1, 1);
      return updatedQuantity;
    });
  };

  useEffect(() => {
    dispatch(
      actGetCartItems({ type: "add", productId: id, quantity: productQuantity })
    );
  }, [productQuantity, id, dispatch]);

  return (
    <tr>
      <td className="p-4">
        <div className="flex items-center gap-4 w-max">
          <div className="h-32 shrink-0">
            <Image
              width={500}
              height={500}
              src={`${img}.jpeg`}
              className="w-[140px] h-full object-contain rounded-lg"
              alt={title}
            />
          </div>
          <div>
            <p className="text-base font-bold text-gray-800">{title}</p>
            <button
              type="button"
              onClick={() => removeProduct(id)}
              className="flex items-center gap-0.5 mt-2 font-semibold text-red-400 text-sm"
            >
              <CircleX size={20} />
              Remove
            </button>
          </div>
        </div>
      </td>

      <td className="p-4">
        <form className="flex divide-x border w-max rounded-lg overflow-hidden">
          <button
            type="button"
            onClick={() => incrementOrDecrementQuantityByOne("decrease")}
            className="decrease-btn flex items-center justify-center bg-gray-100 w-10 h-10 font-semibold"
          >
            <Minus />
          </button>
          <input
            type="number"
            onChange={quantityChangeHandler}
            min={1}
            max={20}
            value={productQuantity}
            className="bg-transparent w-fit px-4 flex items-center text-center font-semibold text-gray-800 text-base"
            style={{
              appearance: "textField", // Firefox
              MozAppearance: "textField", // Older versions of Firefox
              WebkitAppearance: "none", // Chrome, Safari
            }}
          />

          <button
            type="button"
            onClick={() => incrementOrDecrementQuantityByOne("add")}
            className="increase-btn flex justify-center items-center bg-gray-800 text-white w-10 h-10 font-semibold"
          >
            <Plus />
          </button>
        </form>
      </td>

      <td className="p-4">
        <h4 className="text-base font-bold text-gray-800">
          ${subtotal.toFixed(2)}
        </h4>
      </td>
    </tr>
  );
};

export default CartProduct;
