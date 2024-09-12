import Link from "next/link";
import Image from "next/image";
const HeaderCartItem = ({ img, title, price, quantity }) => {
  return (
    <li className="hover:bg-gray-50 p-4">
      <Link className="flex flex-col sm:flex-row items-center" href="/cart">
        <Image
          width={500}
          height={500}
          src={`${img}.jpeg`}
          className="w-2/4 shrink-0"
          alt={title}
        />

        <div className="ml-6">
          <h3 className="text-xl text-[#333] font-semibold">{title}</h3>
          <div className="flex gap-2">
            <p className="text-xs text-blue-600 mt-2">${price}</p>
            <p className="text-xs text-gray-500 leading-3 mt-2">
              quantity: {quantity}
            </p>
          </div>
        </div>
      </Link>
    </li>
  );
};

export default HeaderCartItem;
