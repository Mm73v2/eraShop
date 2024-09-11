import Link from "next/link";
import Image from "next/image";
import { Heart, ShoppingCart, LayoutGrid, Star } from "lucide-react";
const ProductItem = ({ id, img, title, price, category }) => {
  console.log(id, img, title, price, category);
  return (
    <div className="bg-gray-50 shadow-md overflow-hidden rounded-lg cursor-pointer hover:-translate-y-2 transition-all relative">
      <div className="bg-gray-100 w-10 h-10 flex items-center justify-center rounded-full cursor-pointer absolute top-3 right-3">
        <Heart />
      </div>

      <Link
        href={"#"}
        className="block w-5/6 h-[260px] p-4 overflow-hidden mx-auto aspect-w-16 aspect-h-8"
      >
        <Image
          width={1000}
          height={1000}
          src={`${img}.jpeg`}
          alt={title}
          className="h-full w-full object-contain"
        />
      </Link>

      <div className="p-6 bg-white">
        <h3 className="text-lg font-bold text-gray-800">{title}</h3>
        <h4 className="text-lg text-gray-800 font-bold mt-2">${price}</h4>
        <p className="text-gray-600 text-sm mt-2 flex items-center gap-2">
          <LayoutGrid />
          {category}
        </p>

        <div className="flex space-x-2 mt-4">
          <Star className="text-[#FFA500]" size={15} />
          <Star className="text-[#FFA500]" size={15} />
          <Star className="text-[#FFA500]" size={15} />
          <Star className="text-[#FFA500]" size={15} />
          <Star className="text-[#FFA500]" size={15} />
        </div>
      </div>

      <div className="p-3 pb-4">
        <button
          type="button"
          className="add-to-cart w-full flex items-center justify-center gap-3 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-base text-white font-semibold rounded-xl"
        >
          <ShoppingCart />
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default ProductItem;
