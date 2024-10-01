import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { register } from "../redux/userSlice";
import { v4 as uuidv4 } from "uuid";

export default function RegisterModal({ setClose }) {
  const dispatch = useDispatch();
  const [user, setUser] = useState({
    id: "",
    name: "",
    email: "",
    password: "",
  });
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  const [success, setSuccess] = useState(false);

  const checkPassword = () => {
    if (password === rePassword) {
      setSuccess(true);
    } else {
      setSuccess(false);
    }
  };

  useEffect(() => {
    checkPassword();
  }, [rePassword, password]);

  const handleSignUp = () => {
    const newUser = { ...user, id: uuidv4(), password };

    if (success) {
      dispatch(register(newUser));
      setClose(false);
    } else {
      console.log("Passwords do not match.");
    }
  };

  return (
    <div className="bg-[#fcf6f5] p-6 flex flex-col gap-4 rounded-[8px] relative">
      <div
        className="absolute font-semibold cursor-pointer top-1 right-2"
        onClick={() => setClose(false)}
      >
        X
      </div>
      <div className="flex justify-center font-bold text-[1.5rem]">Sign Up</div>

      <div className="relative">
        <label className="absolute top-[-13px] font-semibold bg-[#fcf6f5] left-2 px-1">
          Name
        </label>
        <input
          type="text"
          placeholder="name"
          className="border-solid border-[1px] border-gray-400 rounded-[10px] p-2 w-[400px]"
          required
          onChange={(e) => setUser({ ...user, name: e.target.value })}
        />
      </div>

      <div className="relative">
        <label className="absolute top-[-13px] font-semibold bg-[#fcf6f5] left-2 px-1">
          Email
        </label>
        <input
          type="text"
          placeholder="email"
          className="border-solid border-[1px] border-gray-400 rounded-[10px] p-2 w-[400px]"
          required
          onChange={(e) => setUser({ ...user, email: e.target.value })}
        />
      </div>

      <div className="relative">
        <label className="absolute top-[-13px] font-semibold bg-[#fcf6f5] left-2 px-1">
          Password
        </label>
        <input
          type="password"
          placeholder="xxxxxxxx"
          className="border-solid border-[1px] border-gray-400 rounded-[10px] p-2 w-[400px]"
          required
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <div className="relative">
        <label className="absolute top-[-13px] font-semibold bg-[#fcf6f5] left-2 px-1">
          Re-enter Password
        </label>
        <input
          type="password"
          placeholder="xxxxxxxx"
          className="border-solid border-[1px] border-gray-400 rounded-[10px] p-2 w-[400px]"
          required
          onChange={(e) => setRePassword(e.target.value)}
        />
      </div>

      <div className="flex justify-end gap-2">
        <button
          className="px-2 py-1 bg-[#990011] text-[#fcf6f5] rounded-[8px]"
          onClick={handleSignUp}
        >
          Sign Up
        </button>
      </div>
    </div>
  );
}

RegisterModal.propTypes = {
  setClose: PropTypes.func.isRequired,
};
