import { useDispatch, useSelector } from "react-redux";
import { selectAllCart } from "../redux/cartSlice";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import { useState } from "react";
import Modal from "../components/Modal";
import AddressChangeModal from "../components/AddressChangeModal";
import DebitCardData from "../components/DebitCardData";
import { v4 as uuidv4 } from "uuid";
import { useNavigate } from "react-router-dom";

export default function CheckOut({ setData }) {
  const navigate = useNavigate();
  const cartData = useSelector((Stor) => Stor.cart);
  const cartProduct = useSelector(selectAllCart);
  const [isBillingPartOpen, setIsBillingPartOpen] = useState(false);
  const [isShippingPartOpen, setIsShippingPartOpen] = useState(false);
  const [isPaymentPartOpen, setIsPaymentPartOpen] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState("");
  const [shippingInfo, setShippingInfo] = useState({
    address: "",
    city: "",
    zipCord: "",
  });

  const placeOrader = () => {
    const newObj = {
      orderNumber: uuidv4(),
      products: cartProduct,
      allProductsData: cartData,
      shippingInfo,
    };

    setData(newObj);

    navigate("/OrderConfirmation");
  };

  return (
    <>
      <div className="flex flex-col justify-center gap-5 p-5 mt-10 sm:pb-9 sm:flex-row">
        <div className="flex flex-col gap-5 border sm:w-[50%] w-[100%] ">
          <div className="font-bold text-[1.3rem]">CHECKOUT</div>
          <div className="flex flex-col border-[1px] border-solid border-gray-300 rounded-[8px] p-2">
            <div className="flex justify-between w-[100%] items-center h-11  ">
              <div className="font-semibold">Billing Information</div>
              <div
                onClick={() => {
                  setIsBillingPartOpen((prev) => !prev);
                }}
              >
                {isBillingPartOpen ? <FaAngleUp /> : <FaAngleDown />}
              </div>
            </div>
            {isBillingPartOpen ? (
              <div className="flex flex-col gap-4 pl-2 pb-7">
                <div className="flex flex-col gap-1">
                  {" "}
                  <lable>Name</lable>
                  <input
                    type="text"
                    placeholder="name"
                    className=" border-[1px] border-gray-400 border-solid w-[90%] ml-2 pl-2 h-10 rounded-[10px]"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  {" "}
                  <lable>Email</lable>
                  <input
                    type="email"
                    placeholder="email"
                    className=" border-[1px] border-gray-400 border-solid w-[90%] ml-2 pl-2 h-10 rounded-[10px]"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  {" "}
                  <lable>Tell</lable>
                  <input
                    type="text"
                    placeholder="tell"
                    className=" border-[1px] border-gray-400 border-solid w-[90%] ml-2 pl-2 h-10 rounded-[10px]"
                  />
                </div>
              </div>
            ) : (
              <></>
            )}
          </div>
          <div className="flex flex-col border-[1px] border-solid border-gray-300 rounded-[8px] p-2">
            <div className="flex justify-between w-[100%] items-center h-11  ">
              <div className="font-semibold">Shipping Information</div>
              <div
                onClick={() => {
                  setIsShippingPartOpen((prev) => !prev);
                }}
              >
                {isShippingPartOpen ? <FaAngleUp /> : <FaAngleDown />}
              </div>
            </div>
            {isShippingPartOpen ? (
              <div className="flex flex-col gap-4 pl-2 pb-7">
                <div className="flex flex-col gap-1">
                  {" "}
                  <lable>Address</lable>
                  <input
                    type="text"
                    placeholder="Address"
                    className=" border-[1px] border-gray-400 border-solid w-[90%] ml-2 pl-2 h-10 rounded-[10px]"
                    onChange={(e) => {
                      setShippingInfo({
                        ...shippingInfo,
                        address: e.target.value,
                      });
                    }}
                  />
                </div>
                <div className="flex flex-col gap-1">
                  {" "}
                  <lable>City</lable>
                  <input
                    type="text"
                    placeholder="city"
                    className=" border-[1px] border-gray-400 border-solid w-[90%] ml-2 pl-2 h-10 rounded-[10px]"
                    onChange={(e) => {
                      setShippingInfo({
                        ...shippingInfo,
                        city: e.target.value,
                      });
                    }}
                  />
                </div>
                <div className="flex flex-col gap-1">
                  {" "}
                  <lable>Zip Code</lable>
                  <input
                    type="text"
                    placeholder="zip Code"
                    className=" border-[1px] border-gray-400 border-solid w-[90%] ml-2 pl-2 h-10 rounded-[10px]"
                    onChange={(e) => {
                      setShippingInfo({
                        ...shippingInfo,
                        zipCord: e.target.value,
                      });
                    }}
                  />
                </div>
              </div>
            ) : (
              <></>
            )}
          </div>
          <div className="flex flex-col border-[1px] border-solid border-gray-300 rounded-[8px] p-2">
            <div className="flex justify-between w-[100%] items-center h-11  ">
              <div className="font-semibold">Payment Information</div>
              <div
                onClick={() => {
                  setIsPaymentPartOpen((prev) => !prev);
                }}
              >
                {isPaymentPartOpen ? <FaAngleUp /> : <FaAngleDown />}
              </div>
            </div>
            {isPaymentPartOpen ? (
              <div className="flex flex-col gap-4 pl-2 pb-7">
                <div className="flex items-center">
                  <input
                    type="radio"
                    name="payment"
                    value="cod"
                    className="w-5 h-5 mr-2"
                    onChange={(e) => setPaymentMethod(e.target.value)}
                  />
                  <label className="text-lg">Cash on Delivery</label>
                </div>
                <div className="flex items-center">
                  <input
                    type="radio"
                    name="payment"
                    value="dc"
                    className="w-5 h-5 mr-2"
                    onChange={(e) => setPaymentMethod(e.target.value)}
                  />
                  <label className="text-lg">Debit Card</label>
                </div>
                {paymentMethod === "dc" ? (
                  <div>
                    <DebitCardData />
                  </div>
                ) : null}
              </div>
            ) : null}
          </div>
        </div>
        <div className=" flex flex-col gap-4 sm:w-[20%] w-[100%] bg-[#fcf6f5] drop-shadow-xl rounded-[10px] p-4 h-auto">
          {cartProduct.map((product) => {
            return (
              <div
                key={product.id}
                className="flex justify-between text-center border-solid border-[1px] border-t-0 border-l-0 border-r-0 border-gray-400 pb-2"
              >
                <div className="flex gap-2">
                  {" "}
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-[70px] h-[70px] rounded-[10px]"
                  />
                  <div className="flex items-center">
                    <div>
                      <div>{product.name}</div>
                      <div>{`${product.price} X ${product.quantity}`}</div>
                    </div>
                  </div>
                </div>
                <div className="flex items-center">
                  {product.price * product.quantity}
                </div>
              </div>
            );
          })}

          <div className="flex justify-between">
            <div>Total Amount</div>
            <div>{cartData.totalPrice}</div>
          </div>

          <button
            className="flex justify-center bg-[#990011] text-[#fcf6f5] py-1 rounded-[10px]"
            onClick={placeOrader}
          >
            Place Order
          </button>
        </div>
      </div>
      {console.log(shippingInfo)}
    </>
  );
}
