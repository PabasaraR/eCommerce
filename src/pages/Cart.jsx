import { useDispatch, useSelector } from "react-redux";
import { removeToCart, selectAllCart } from "../redux/cartSlice";
import { FaTrashAlt } from "react-icons/fa";
import { useState } from "react";
import Modal from "../components/Modal";
import AddressChangeModal from "../components/AddressChangeModal";
import { Link } from "react-router-dom";
import emtyCart from "../assets/Images/emptycart.png";

export default function Cart() {
  const diapatch = useDispatch();
  const cartData = useSelector((Stor) => Stor.cart);
  const cartProduct = useSelector(selectAllCart);
  const [address, setAddress] = useState("32/9,/gresland roda,/horana");
  const [isAddresModalOpen, setIsAddresModalOpen] = useState(false);
  return (
    <>
      {cartProduct.length > 0 ? (
        <div className="flex flex-col justify-center gap-5 mt-10 mb-8 sm:flex-row">
          <div className="flex flex-col gap-5 border sm:w-[40%] w-[100%]  ">
            {cartProduct.map((product) => (
              <div
                key={product.id}
                className="flex items-center  justify-between bg-[#fcf6f5] drop-shadow-md py-2 px-4"
              >
                <div className="flex items-center">
                  <img
                    src={product.image}
                    alt={`${product.name} Image`}
                    className="w-[100px] h-[100px]  rounded-[10px]"
                  />
                  <div>{product.name}</div>
                </div>
                <div className="flex gap-10">
                  {" "}
                  <div>Quantity-{product.quantity}</div>
                  <div>Price-{product.price * product.quantity}</div>
                  <div
                    className="cursor-pointer"
                    onClick={() => {
                      diapatch(removeToCart(product.id));
                    }}
                  >
                    <FaTrashAlt />
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className=" flex flex-col gap-4 sm:w-[20%] w-[100%] bg-[#fcf6f5] drop-shadow-xl rounded-[10px] p-4">
            <div className="text-[1.2rem] font-bold">CART TOTAL</div>

            <div className="flex justify-between border-solid border-b-[1px] border-gray-400 border-t-0 border-l-0 border-r-0">
              <div className="font-semibold">Total Items:</div>
              <div className="font-semibold">{cartData.totalQuantity}</div>
            </div>
            <div className="border-solid border-b-[1px] border-gray-400 border-t-0 border-l-0 border-r-0">
              <div className="font-semibold">Shipping:</div>
              <div>{address}</div>
              <div
                className="text-blue-600 cursor-pointer"
                onClick={() => {
                  setIsAddresModalOpen(true);
                }}
              >
                Change Address
              </div>
            </div>
            <div className="flex justify-between border-solid border-b-[1px] border-gray-400 border-t-0 border-l-0 border-r-0 ">
              <div className="font-semibold">Total Price:</div>
              <div className="font-semibold">{cartData.totalPrice}</div>
            </div>

            <Link to="/Checkout">
              {" "}
              <button className="flex items-center justify-center cursor-pointer bg-[#990011] text-[#fcf6f5] p-1 rounded-[20px] mt-3">
                Proceed to Chackout
              </button>
            </Link>
          </div>
          {isAddresModalOpen ? (
            <Modal>
              <AddressChangeModal
                setAddres={setAddress}
                setClose={setIsAddresModalOpen}
              />
            </Modal>
          ) : (
            <></>
          )}
        </div>
      ) : (
        <div className="flex justify-center">
          <img src={emtyCart} />
        </div>
      )}
    </>
  );
}
