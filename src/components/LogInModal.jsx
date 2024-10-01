import { useState } from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { login } from "../redux/userSlice";

export default function LogInModal({ setClose, registerOpen }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const onClick = () => {
    dispatch(login({ email, password }));

    setClose(false);
  };
  const dispatch = useDispatch();

  return (
    <div className="bg-[#fcf6f5] p-6  flex flex-col gap-4 rounded-[8px] relative">
      <div
        className="absolute font-semibold cursor-pointer top-1 right-2"
        onClick={() => {
          setClose(false);
        }}
      >
        X
      </div>
      <div className="flex justify-center font-bold text-[1.5rem]">Sign In</div>
      <div className="relative">
        {" "}
        <label className="absolute top-[-13px] font-semiboldt bg-[#fcf6f5] left-2 px-1">
          Email
        </label>
        <input
          type="text"
          placeholder="email"
          className="border-solid border-[1px] border-gray-400 rounded-[10px] p-2 w-[400px] "
          required
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
      </div>

      <div className="relative">
        {" "}
        <label className="absolute top-[-13px] font-semiboldt bg-[#fcf6f5] left-2 px-1">
          Password
        </label>
        <input
          type="password"
          placeholder="xxxxxxxx"
          className="border-solid border-[1px] border-gray-400 rounded-[10px] p-2 w-[400px] "
          required
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
      </div>
      <div className="flex justify-end gap-2">
        <button
          className="px-2 py-1 bg-[#990011] text-[#fcf6f5] rounded-[8px]"
          onClick={onClick}
        >
          sign In
        </button>
      </div>

      <div className="flex justify-center">
        New User/
        <button
          className="font-bold cursor-pointer"
          onClick={() => {
            setClose(false);
            registerOpen(true);
          }}
        >
          Sign Up
        </button>
      </div>
    </div>
  );
}

LogInModal.propTypes = {
  setClose: PropTypes.func.isRequired,
  registerOpen: PropTypes.func.isRequired,
};
