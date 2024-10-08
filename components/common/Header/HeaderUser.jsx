"use client";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "@/store/auth/AuthSlice";
import { UserRound, ArrowDown, Power } from "lucide-react";

const HeaderUser = () => {
  const [showUserMenu, setShowUserMenu] = useState(false);

  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.auth);

  const showUserMenuHandler = () => {
    setShowUserMenu((prev) => !prev);
  };

  const logoutHandler = () => {
    dispatch(logout());
  };

  return (
    <div className="relative w-max mx-auto">
      <button
        onClick={showUserMenuHandler}
        type="button"
        className="px-4 py-2 flex gap-2 items-center rounded-full text-[#333] text-sm border border-gray-300 outline-none hover:bg-gray-100"
      >
        <img
          src="https://readymadeui.com/profile_6.webp"
          className="w-7 h-7 rounded-full shrink-0"
        />
        {user?.firstName}
        <ArrowDown size={15} />
      </button>

      <ul
        className={`absolute ${
          showUserMenu ? "block" : "hidden"
        } shadow-lg bg-white py-2 z-[1000] min-w-full w-max rounded-lg max-h-96 overflow-auto`}
      >
        <li className="py-2.5 px-5 flex gap-2 items-center hover:bg-gray-100 text-[#333] text-sm cursor-pointer">
          <UserRound size={20} />
          View profile
        </li>

        <li className="py-2.5 px-5  hover:bg-gray-100 text-[#333] text-sm cursor-pointer">
          <button onClick={logoutHandler} className="flex gap-2 items-center">
            <Power size={20} />
            Logout
          </button>
        </li>
      </ul>
    </div>
  );
};

export default HeaderUser;
