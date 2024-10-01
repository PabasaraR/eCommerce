import { useSelector } from "react-redux";
import ProductCart from "../components/ProductCart";
import { selectAllProduct } from "../redux/productSlice";
import { selectAllCart } from "../redux/cartSlice";

export default function Shop() {
  const allProduct = useSelector(selectAllProduct);
  const addcart = useSelector(selectAllCart);
  console.log(addcart);
  return (
    <div className="mb-10">
      {" "}
      <div className="flex justify-center text-[2rem] font-semibold">
        Top Product
      </div>
      <div className="grid grid-cols-2 gap-10 mx-20 sm:grid-cols-4">
        {allProduct.map((product) => {
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
