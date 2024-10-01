import { useNavigate } from "react-router-dom";

export default function OrderConfirmation(orderData) {
  const navigater = useNavigate();
  console.log(orderData);
  return (
    <div className="flex flex-col gap-6 mx-10 mt-12 md:mx-28 drop-shadow-2xl">
      <div className="p-6 bg-white rounded-3xl drop-shadow-2xl">
        {" "}
        <div className="flex flex-col gap-1">
          <h1 className="text-[1.5rem] font-bold">
            Thank you for your order !
          </h1>
          <h2>Your order has been placed successfuly.</h2>
        </div>
        <div>
          <div className="flex flex-col gap-5">
            <div>
              <div className="font-bold ">Order Summary</div>
              <div className="flex justify-between">
                <h1>Order Number :</h1>
                <h1>{orderData.orderData.orderNumber}</h1>
              </div>
            </div>
            <div>
              {" "}
              <div className="font-bold">Shipping Information</div>
              <div className="px-5 py-2 bg-slate-200 rounded-xl">
                <div className="flex justify-between">
                  <h1>Address:</h1>
                  <h1>{orderData.orderData.shippingInfo.address}</h1>
                </div>
                <div className="flex justify-between">
                  <h1>City:</h1>
                  <h1>{orderData.orderData.shippingInfo.city}</h1>
                </div>
                <div className="flex justify-between">
                  <h1>Zip Cord:</h1>
                  <h1>{orderData.orderData.shippingInfo.zipCord}</h1>
                </div>
              </div>
            </div>
            <div>
              {" "}
              <div className="font-bold">Items Ordered</div>
              <div className="px-5 py-2 bg-slate-200 rounded-xl">
                {orderData.orderData.products.map((product, index) => {
                  return (
                    <>
                      <div className="flex justify-between">
                        {" "}
                        <div className="flex gap-3">
                          <div key={index}>{product.name}</div>
                          <div>{`X(${product.quantity})`}</div>
                        </div>
                        <div>{product.quantity * product.price}</div>
                      </div>
                    </>
                  );
                })}
                <div className="flex justify-between">
                  <div>Total Price</div>
                  <div>{orderData.orderData.allProductsData.totalPrice}</div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-end gap-4 mt-4">
            <button className="p-2 text-white bg-green-600 rounded-lg">
              Track Order
            </button>
            <button
              className="p-2 text-white bg-red-600 rounded-lg"
              onClick={() => navigater("/")}
            >
              Continue Shopping
            </button>
          </div>
        </div>
        <div />
      </div>
    </div>
  );
}
