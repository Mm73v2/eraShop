"use client";
import useCart from "../hooks/useCart";
import CartProduct from "../_Cart/CartProduct";
import OrderSummary from "../_Cart/OrderSummary";

const page = () => {
  const { productsWithQuantity, totalOrderPrice, removeProductFromCart } =
    useCart();

  return (
    <section className="mt-20">
      <div className="grid lg:grid-cols-3">
        <div className="lg:col-span-2 p-6 bg-white overflow-x-auto">
          <div className="flex gap-2 border-b pb-4">
            <h2 className="text-2xl font-bold text-gray-800 flex-1">
              Shopping Cart
            </h2>
            <h3 className="text-base text-gray-800" id="total-items">
              {productsWithQuantity?.length} items
            </h3>
          </div>

          <table className="mt-6 w-full border-collapse divide-y">
            <thead className="whitespace-nowrap text-left">
              <tr>
                <th className="text-base text-gray-800 p-4">Description</th>
                <th className="text-base text-gray-800 p-4">Quantity</th>
                <th className="text-base text-gray-800 p-4">Price</th>
              </tr>
            </thead>

            <tbody
              className="whitespace-nowrap divide-y"
              id="cart-items-container"
            >
              {productsWithQuantity?.map((product) => (
                <CartProduct
                  key={product.id}
                  id={product.id}
                  title={product.title}
                  img={product.image}
                  quantity={product.quantity}
                  subtotal={product.price * product.quantity}
                  removeProduct={removeProductFromCart}
                />
              ))}
            </tbody>
          </table>
          {/* Fall back */}
          {/* <h2 className="flex justify-center text-2xl font-semibold mt-32">
            Your cart is empty!
          </h2> */}
        </div>

        <div className="bg-gray-50 p-6 lg:sticky lg:top-0 lg:h-screen">
          <h2 className="text-2xl font-bold text-gray-800 border-b pb-4">
            Order Summary
          </h2>

          <OrderSummary subtotal={totalOrderPrice} tax={31} shipping={25} />
        </div>
      </div>
    </section>
  );
};

export default page;
