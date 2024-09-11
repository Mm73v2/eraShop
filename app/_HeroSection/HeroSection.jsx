import Link from "next/link";
import Image from "next/image";
import { Store, HandHelping, SquareArrowUpRight } from "lucide-react";
import heroImage from "../../assets/hero.webp";
import HeroStats from "./HeroStats";
import HeroService from "./HeroService";

const HeroSection = () => {
  return (
    <section className="max-w-7xl max-md:max-w-md mx-auto px-10">
      <div className="grid mt-20 md:grid-cols-2 items-center md:gap-8 gap-6">
        <div className="max-md:order-1 max-md:text-center z-20 relative">
          <h2 className="text-gray-800 lg:text-6xl md:text-5xl text-3xl font-extrabold mb-4 md:!leading-[56px]">
            <span className="text-blue-600">Discover</span> Amazing Products
            with
            <span className="text-blue-600">Incredible</span> Deals
          </h2>
          <p className="text-gray-600 mt-6 text-base leading-relaxed">
            Shop the latest trends, find the best deals, and enjoy a seamless
            shopping experience. Whether you're looking for fashion,
            electronics, or home essentials, we have it all.
          </p>

          <Link
            href="#"
            className="inline-block mt-6 bg-blue-600 hover:bg-transparent hover:text-blue-600 border-2 border-blue-600 transition-all text-white font-semibold text-sm tracking-wide rounded-md px-6 py-2.5"
          >
            Shop Now
          </Link>

          <div className="grid sm:grid-cols-3 gap-4 items-center mt-12">
            <HeroStats title="Products Available" num="10,000+" />
            <HeroStats title="Customer Satisfaction" num="99%" />
            <HeroStats title="Global Brands" num="300+" />
          </div>
        </div>

        <div className="lg:h-[550px] md:h-[550px] flex items-center relative max-md:before:hidden before:absolute before:bg-[#DEE2E5] before:h-[120%] before:w-[120%] before:right-0 before:z-0">
          <Image
            width={0}
            height={0}
            src={heroImage}
            className="rounded-md h-[400px] object-cover lg:w-4/5 z-20 relative"
            alt="Dining Experience"
          />
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-4 z-20 relative md:px-4 max-md:mt-12 mb-12">
        <HeroService
          icon={<Store size={20} />}
          title="Product Variety"
          desc="Wide range of products to suit every style and need for everyone."
        />
        <HeroService
          icon={<HandHelping size={20} />}
          title="Support"
          desc="Dedicated customer support to assist you around the clock."
        />
        <HeroService
          icon={<SquareArrowUpRight size={20} />}
          title="Fast & Secure Checkout"
          desc="Enjoy fast and secure shopping with our cutting-edge platform."
        />
      </div>
    </section>
  );
};

export default HeroSection;
