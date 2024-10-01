import PropTypes from "prop-types";
export default function AddressChangeModal({ setAddres, setClose }) {
  return (
    <div className="bg-[#fcf6f5] p-6  flex flex-col gap-4 rounded-[8px]">
      <label className="font-semibold">Address</label>
      <input
        type="text"
        placeholder="enter new address"
        className="border-solid border-[1px] border-gray-400 rounded-[10px] p-2 w-[400px]"
        onChange={(e) => {
          setAddres(e.target.value);
        }}
      />
      <div className="flex justify-end gap-2">
        <button
          className="px-2 py-1 bg-gray-300 rounded-[8px] "
          onClick={() => {
            setClose(false);
          }}
        >
          Cancel
        </button>
        <button className="px-2 py-1 bg-blue-500 rounded-[8px]">
          Save Address
        </button>
      </div>
    </div>
  );
}

AddressChangeModal.propTypes = {
  setAddres: PropTypes.func.isRequired,
  setClose: PropTypes.func.isRequired,
};
