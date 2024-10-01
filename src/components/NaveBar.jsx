import { FaSearch, FaShoppingCart } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { searchProduct } from "../redux/productSlice";
import { useState } from "react";
import Modal from "./Modal";
import LogInModal from "./LogInModal";
import RegisterModal from "./RegisterModal";

export default function NaveBar() {
  const navigate = useNavigate();
  const [searchValue, setSearchValue] = useState("");
  const cartData = useSelector((Store) => Store.cart);
  const productData = useSelector((Store) => Store.product);
  const dispatch = useDispatch();
  const [isLoginModalOpen, SetIsLoginModalOpen] = useState(false);
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);
  const allUser = useSelector((store) => store.user);

  const handleSearch = (e) => {
    dispatch(searchProduct(e));
    navigate("/SearchProduct");
  };

  console.log(productData);
  return (
    <div>
      <nav className="flex flex-col  bg-[#990011] text-[#fcf6f5]">
        <div className="flex items-center ">
          {" "}
          <div className="flex sm:text-[2rem] text-[1rem] font-bold p-4 md:px-8 lg:px-10 ">
            Unity_Mart
          </div>
          <div className="w-full border-[1px] border-black border-solid rounded-[20px]">
            <form className="relative">
              <input
                type="text"
                placeholder="Search Product"
                className="w-full px-4 h-9"
                onChange={(e) => {
                  setSearchValue(e.target.value);
                }}
              />
              <FaSearch
                className="absolute right-2 top-[10px] text-black"
                onClick={() => {
                  handleSearch(searchValue);
                }}
              />
            </form>
          </div>
          <div className="flex items-center mx-4 md:mx-8 lg:mx-11 ">
            <div className="relative">
              {allUser.currentUserId === null ? (
                <></>
              ) : (
                <Link to="/Cart">
                  <FaShoppingCart className="sm:text-[30px] text-[20px]" />
                </Link>
              )}

              <div
                className="absolute right-[-6px] flex items-center justify-center h-5 px-1 bg-black rounded-full top-4"
                style={{
                  display: cartData.totalQuantity > 0 ? "block" : "none",
                }}
              >
                {cartData.totalQuantity}
              </div>
            </div>
            <div
              className="flex gap-2 mx-4 sm:text-[1rem] text-[0.8rem]"
              onClick={() => {
                SetIsLoginModalOpen(true);
              }}
            >
              <div>Login</div>
              <div>|</div>
              <div>Register</div>
            </div>
          </div>
        </div>

        <div className="flex justify-center gap-8 py-2">
          <Link to={"/"} className="font-bold hover:underline">
            Home
          </Link>
          <Link to={"/Shop"} className="font-bold hover:underline">
            Shop
          </Link>
          <Link to={"/"} className="font-bold hover:underline">
            Contact
          </Link>
          <Link to={"/"} className="font-bold hover:underline">
            About
          </Link>
        </div>
      </nav>
      {isLoginModalOpen ? (
        <div className="z-50">
          <Modal>
            <LogInModal
              setClose={SetIsLoginModalOpen}
              registerOpen={setIsRegisterModalOpen}
            />
          </Modal>
        </div>
      ) : (
        <></>
      )}

      {isRegisterModalOpen ? (
        <div className="z-50">
          <Modal>
            <RegisterModal setClose={setIsRegisterModalOpen} />
          </Modal>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}
