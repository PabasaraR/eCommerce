import { FaHeadset, FaLock, FaShippingFast, FaTag } from "react-icons/fa";

export default function InfoSection() {
  const info = [
    {
      icon: <FaShippingFast className="text-[30px] text-[#990011]" />,
      title: "Free Shiping",
      description: "get your orders delivered with no extra cost",
    },
    {
      icon: <FaHeadset className="text-[30px] text-[#990011]" />,
      title: "Support 24/7",
      description: "We are here to assist you anytime",
    },
    {
      icon: <FaShippingFast className="text-[30px] text-[#990011]" />,
      title: "100% Money Back",
      description: "Full refund if you are not satisfied",
    },
    {
      icon: <FaLock className="text-[30px] text-[#990011]" />,
      title: "Payment Secure",
      description: "Your payment information is safe with us",
    },
    {
      icon: <FaTag className="text-[30px] text-[#990011]" />,
      title: "Discount",
      description: "Enjoy the best price on our product",
    },
  ];
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-5">
      {info.map((info, index) => {
        return (
          <div
            key={index}
            className="flex flex-col gap-2 items-center justify-center bg-[#fcf6f5] p-5 rounded-[10px] drop-shadow-2xl hover:scale-105 duration-500 w-[100%]"
          >
            <div>{info.icon}</div>
            <div className="font-semibold">{info.title}</div>
            <div className="text-center">{info.description}</div>
          </div>
        );
      })}
    </div>
  );
}
