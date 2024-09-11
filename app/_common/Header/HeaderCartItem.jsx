import Link from "next/link";
import Image from "next/image";
const HeaderCartItem = ({ img, title, price, quantity }) => {
  return (
    <li className="hover:bg-gray-50 p-4">
      <Link class="flex flex-col sm:flex-row items-center" href="/">
        <img src="${product.image}" class="w-2/4 shrink-0" />

        <div class="ml-6">
          <h3 class="text-xl text-[#333] font-semibold">Test</h3>
          <div class="flex gap-2">
            <p class="text-xs text-blue-600 mt-2">$1290.99</p>
            <p class="text-xs text-gray-500 leading-3 mt-2">quantity: 35</p>
          </div>
        </div>
      </Link>
    </li>
  );
};

export default HeaderCartItem;
