"use client";
import useCart from "@/hooks/useCart";
import CartProduct from "@/components/cart/CartProduct";
import OrderSummary from "@/components/cart/OrderSummary";

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

          {productsWithQuantity.length ? (
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
          ) : (
            <h3 className="text-xl font-semibold text-center mt-4">
              Your Cart is empty!
            </h3>
          )}
        </div>

        <OrderSummary subtotal={totalOrderPrice} tax={31} shipping={25} />
      </div>
    </section>
  );
};

export default page;
