import { useDispatch, useSelector } from "react-redux";
import { Category, dumyProduct } from "../assets/DumyData";
import hp from "../assets/Images/homePage.jpg";
import CategorySection from "../components/CategorySection";
import InfoSection from "../components/InfoSection";
import { useEffect } from "react";
import { selectAllProduct, setProduct } from "../redux/productSlice";
import ProductCart from "../components/ProductCart";
import Footer from "../components/Footer";

export default function Home() {
  //const products = useSelector((Store) => Store.product);
  const allProduct = useSelector(selectAllProduct);
  const dispatch = useDispatch();
  const allUser = useSelector((store) => store.user);
  console.log(allUser);

  useEffect(() => {
    dispatch(setProduct(dumyProduct));
  }, []);

  console.log(allProduct);
  return (
    <div className="flex flex-col mt-6 gap-10  w-[100%] h-[100vh] ">
      <div className="flex flex-col gap-4 mx-20 md:flex-row h-[60%]">
        <div className="md:w-[20%] w-[100%]">
          <div className="flex flex-col  bg-[#fcf6f5] drop-shadow-md  rounded-[10px] h-[100%]  flex-grow">
            <div className="bg-[#990011] text-[#fcf6f5] font-bold p-2 rounded-t-[10px]">
              SHOP BY CATEGORY
            </div>
            {Category.map((category, index) => {
              return (
                <div
                  key={index}
                  className="px-4  duration-500 hover:bg-[#990011]/20 py-1 text-black flex items-center gap-3"
                >
                  <div className="w-[6px] h-[6px] bg-[#990011] rounded-full"></div>
                  {category}
                </div>
              );
            })}
          </div>
        </div>
        <div className="rounded-[10px] relative md:w-[80%] w-[100%]">
          <img
            src={hp}
            alt="home page image"
            className=" h-[100%] w-[100%] rounded-[10px]"
          />
          <div className="text-[#fcf6f5] absolute top-14 left-16 ">
            <div className="font-bold">WELCOME TO UNITY_MART</div>
            <div className="text-[0.7rem]">MILLIONS + PRODUCT</div>
            <button className="bg-[#fcf6f5] text-[#990011] rounded-[20px] px-3 font-semibold mt-4 hover:scale-110 duration-500">
              SHOP NOW
            </button>
          </div>
        </div>
      </div>
      <div className="mx-20">
        <InfoSection />
      </div>
      <div className="mx-20">
        <CategorySection />
      </div>
      <div className="hidden sm:block">
        <div className="sm:flex justify-center text-[2rem] font-semibold  ">
          Top Product
        </div>
        <div className="flex justify-between mx-20 w-[90%] ">
          {allProduct.slice(0, 5).map((product) => {
            return (
              <div key={product.id}>
                <ProductCart
                  id={product.id}
                  name={product.name}
                  image={product.image}
                  price={product.price}
                />
              </div>
            );
          })}
        </div>
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
}
