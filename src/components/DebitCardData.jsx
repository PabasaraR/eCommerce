export default function DebitCardData() {
  return (
    <div className="p-5 bg-slate-100 rounded-[10px]">
      <div className="font-semibold">Debit Card Information</div>
      <div className="flex flex-col gap-4 pl-2 pb-7">
        <div className="flex flex-col gap-1">
          {" "}
          <lable>Card Number</lable>
          <input
            type="text"
            placeholder="enter card number"
            className=" border-[1px] border-gray-400 border-solid w-[90%] ml-2 pl-2 h-8 rounded-[10px] bg-white"
          />
        </div>
        <div className="flex flex-col gap-1">
          {" "}
          <lable>Card Holder Name</lable>
          <input
            type="text"
            placeholder="enter card holder name"
            className=" border-[1px] border-gray-400 border-solid w-[90%] ml-2 pl-2 h-8 rounded-[10px] bg-white"
          />
        </div>
        <div className="grid grid-cols-2 w-[90%] gap-4">
          <div className="flex flex-col">
            <lable>Expiry Date</lable>
            <input
              type="text"
              placeholder="MM/YY"
              className=" border-[1px] border-gray-400 border-solid w-[100%] ml-2 pl-2 h-8 rounded-[10px] bg-white"
            />
          </div>
          <div className="flex flex-col">
            <lable>CVV</lable>
            <input
              type="text"
              placeholder="CVV"
              className=" border-[1px] border-gray-400 border-solid w-[100%] ml-2 pl-2 h-8 rounded-[10px] bg-white"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
