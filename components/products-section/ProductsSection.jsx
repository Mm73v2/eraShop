import Link from "next/link";
import axiosClient from "@/utils/axiosClient/axiosClient";
import { ArrowUpRight } from "lucide-react";
import ProductsContainer from "@/components/Prodcuts/ProductsContainer";
const page = async () => {
  // const res = await axiosClient.get("http://localhost:8080/products?_limit=6");
  // const products = res.data;
  // console.log(JSON.parse(localStorage.getItem("auth")));
  return (
    <section className="py-4 mx-auto lg:max-w-[90rem] sm:max-w-full mb-10 px-10">
      <h2 className="text-4xl font-extrabold text-gray-800 mb-12">
        Latest Products
      </h2>

      <ProductsContainer products={[]} />

      <div className="flex justify-center">
        <Link
          href="products.html"
          className="flex mt-10 gap-3 bg-blue-600 text-white rounded-full font-semibold py-3 px-6 transition-colors duration-300 hover:bg-black"
        >
          <span className="text-black p-0.5 bg-white rounded-full">
            <ArrowUpRight size={20} />
          </span>
          Explore All
        </Link>
      </div>
    </section>
  );
};

export default page;
