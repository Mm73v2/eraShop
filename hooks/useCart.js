import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actGetCartItems, actGetCartProducts } from "../store/cart/CartSlice";

const useCart = () => {
  const dispatch = useDispatch();

  const { cartProducts, cartItems } = useSelector((state) => state.cart);

  const productsWithQuantity = cartProducts?.map((el) => ({
    ...el,
    quantity: cartItems[el.id],
  }));

  const totalOrderPrice = productsWithQuantity?.reduce(
    (total, product) => product.price * product.quantity + total,
    0
  );

  const removeProductFromCart = (id) => {
    dispatch(actGetCartItems({ type: "remove", productId: id }));
  };

  useEffect(() => {
    dispatch(actGetCartProducts());
  }, [dispatch, cartItems]);

  return {
    productsWithQuantity,
    totalOrderPrice,
    removeProductFromCart,
  };
};

export default useCart;
