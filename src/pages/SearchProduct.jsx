import ProductCart from "../components/ProductCart";
import { useSelector } from "react-redux";

export default function SearchProduct() {
  const productData = useSelector((Store) => Store.product);
  return (
    <div>
      {" "}
      <div className="flex justify-center text-[2rem] font-semibold py-3">
        Search Products
      </div>
      <div className="grid grid-cols-2 gap-10 mx-20 mt-8 md:grid-cols-4 sm:grid-cols-3">
        {productData.searchProducts.map((product) => {
          return (
            <div key={product.id}>
              <ProductCart
                id={product.id}
                name={product.name}
                image={product.image}
                price={product.price}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
