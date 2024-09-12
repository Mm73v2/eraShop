import Link from "next/link";
const OrderSummary = ({ subtotal, tax, shipping }) => {
  const total = subtotal + tax + shipping;
  return (
    <>
      <ul className="text-gray-800 divide-y mt-6">
        <li className="flex flex-wrap gap-4 text-base py-3">
          Subtotal
          <span className="ml-auto font-bold" id="subtotal">
            ${subtotal.toFixed(2)}
          </span>
        </li>
        <li className="flex flex-wrap gap-4 text-base py-3">
          Shipping <span className="ml-auto font-bold">${shipping}</span>
        </li>
        <li className="flex flex-wrap gap-4 text-base py-3">
          Tax <span className="ml-auto font-bold">${tax}</span>
        </li>
        <li className="flex flex-wrap gap-4 text-base py-3 font-bold">
          Total{" "}
          <span className="ml-auto" id="total">
            ${total.toFixed(2)}
          </span>
        </li>
      </ul>

      <Link
        href="payment.html"
        className="flex justify-center mt-6 text-base px-5 py-2.5 w-full bg-blue-600 hover:bg-blue-700 text-white rounded-lg"
      >
        Make Payment
      </Link>
    </>
  );
};

export default OrderSummary;
