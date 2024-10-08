import ProductItem from "@/components/prodcuts/ProductItem";

const ProductsContainer = ({ products }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {products?.map((product) => (
        <ProductItem
          key={product.id}
          img={product.image}
          title={product.title}
          price={product.price}
          category={product.category}
          id={product.id}
        />
      ))}
    </div>
  );
};

export default ProductsContainer;
