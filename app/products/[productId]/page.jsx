"use client";
import { useParams } from "next/navigation";

const page = () => {
  const { productId } = useParams();
  console.log(productId);
  return <div>page</div>;
};

export default page;
