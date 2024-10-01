import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { selectAllProduct } from "../redux/productSlice";
import { useEffect, useState } from "react";
import { addToCart } from "../redux/cartSlice";

export default function ProductDetail() {
  const [newProduct, setNewProduct] = useState({});
  const { id } = useParams();
  const allProduct = useSelector(selectAllProduct);
  const dispatch = useDispatch();
  useEffect(() => {
    const product = allProduct.find((product) => product.id === parseInt(id));
    setNewProduct(product);
  }, []);
  const addToCartHandle = (product) => {
    dispatch(addToCart(product));
  };

  const allUser = useSelector((store) => store.user);

  return (
    <div>
      <div className="flex flex-col gap-5 mx-8 mt-16 mb-10 sm:mx-20 sm:flex-row">
        <div className="sm:w-[50%] w-[100%]">
          <img
            src={newProduct.image}
            alt={newProduct.name}
            className="w-[400px] h-[400px] rounded-3xl"
          />
        </div>
        <div className="sm:w-[80%] w-[100%] bg-[#fcf6f5] drop-shadow-2xl rounded-3xl px-7 pt-5 flex flex-col gap-3">
          <div className="text-[2rem] font-bold">{newProduct.name}</div>
          <div className="font-semibold">{newProduct.price}</div>
          <div className="mt-4">{newProduct.dic}</div>
          <button
            className="bg-[#990011] text-white flex justify-center py-1 rounded-lg mt-2 mb-6"
            onClick={() => {
              if (allUser.currentUserId === null) {
                alert("Please log in to add items to the cart.");
              } else {
                addToCartHandle({
                  id: newProduct.id,
                  name: newProduct.name,
                  price: newProduct.price,
                  image: newProduct.image,
                });
              }
            }}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
