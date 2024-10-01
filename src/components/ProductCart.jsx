import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/cartSlice";
import { Link } from "react-router-dom";

export default function ProductCart({ name, image, price, id }) {
  const dispatch = useDispatch();
  const allUser = useSelector((store) => store.user);

  const addToCartHandle = (product) => {
    dispatch(addToCart(product));
  };
  return (
    <div className="flex flex-col duration-300 cursor-pointer  drop-shadow-2xl hover:scale-105 w-[100px] md:w-[150px] lg:w-[200px] bg-white  rounded-xl">
      <Link to={`/ProductDetail/${id}`}>
        {" "}
        <div>
          <img
            src={image}
            alt={`${name} image`}
            className="w-[100px] h-[100px] lg:w-[200px] lg:h-[200px] rounded-[10px] border-2 border-gray-300 shadow-lg md:w-[150px] md:h-[150px]"
          />
        </div>
      </Link>

      <div className="relative flex justify-between px-2 pb-2 mt-2 ">
        <div>
          <div className="font-semibold">{name}</div>
          <div>{`${price} Rs`}</div>
        </div>
        <div
          onClick={() => {
            if (allUser.currentUserId === null) {
              alert("Please log in to add items to the cart.");
            } else {
              addToCartHandle({
                id: id,
                name: name,
                price: price,
                image: image,
                userId: allUser.currentUserId,
              });
            }
          }}
          className="flex group bg-[#990011] sm:h-8 sm:w-8 w-5 h-5 sm:hover:w-32 hover:w-24 rounded-full justify-center items-center text-white transition-all absolute right-2"
        >
          <div className="group-hover:hidden">+</div>
          <div className="hidden group-hover:block sm:text-[1rem] text-[0.7rem]">
            Add to Cart
          </div>
        </div>
      </div>
    </div>
  );
}

ProductCart.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
};
