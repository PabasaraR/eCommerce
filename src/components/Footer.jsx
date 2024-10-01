import { FaFacebook, FaGithub, FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";

export default function Footer() {
  return (
    <div className="bg-[#1B232E] text-[#fcf6f5] py-10 ">
      {" "}
      <div className="grid grid-cols-3 gap-6 px-11">
        <div className="hidden sm:block">
          <div className="text-[1.5rem] font-semibold">Unity_Mart</div>
          <div>
            Your one-step fot all your needs. Shop with use and experience the
            best online shopping experiences
          </div>
        </div>
        <div>
          <h2 className="text-[1.5rem] font-semibold">Quick Link</h2>
          <ul className="flex flex-col gap-2 pl-3 mt-2">
            <li className="cursor-pointer hover:underline">Home</li>
            <li className="cursor-pointer hover:underline">Shop</li>
            <li className="cursor-pointer hover:underline">Contact</li>
            <li className="cursor-pointer hover:underline">About</li>
          </ul>
        </div>
        <div className="flex flex-col gap-3">
          <div className="text-[1.5rem] font-semibold">Follow us</div>
          <div className="flex gap-3">
            <FaFacebook className="text-[30px] " />
            <FaTwitter className="text-[30px] " />
            <FaGithub className="text-[30px] " />
            <FaLinkedin className="text-[30px] " />
          </div>
          <div className="flex flex-col gap-1 mt-4 sm:flex-row">
            <input
              type="text"
              placeholder="Enter Email"
              className="border-gray-300 border-solid rounded-md w-60 h-9 border-[1px] px-1"
            />
            <button className="h-9 bg-[#990011] rounded-r-lg px-2">
              Subscribe
            </button>
          </div>
        </div>
      </div>
      <div className="px-8 ">
        <div className="border-solid border-t-[1px] border-b-0 border-l-0 border-r-0 border-gray-200 pt-2 flex justify-between border-opacity-20 mt-3">
          <p>&copy; 2024 Unity_Mart All rights reserved</p>
          <div className="hidden gap-2 sm:flex">
            <a href="">Privacy Policy</a>
            <div>|</div>
            <a href="">Terms & Condition</a>
          </div>
        </div>
      </div>
    </div>
  );
}
