"use client";
import { useState } from "react";
import Link from "next/link";
import { X, Menu } from "lucide-react";
import HeaderLink from "./HeaderLink";

const Header = () => {
  const [showNavMenu, setShowNavMenu] = useState(false);

  const displayNavMenu = () => {
    setShowNavMenu((prev) => !prev);
  };

  return (
    <header className="flex shadow-md py-4 px-4 sm:px-10 bg-white min-h-[70px] tracking-wide fixed top-0 left-0 w-full z-50">
      <div className="flex flex-wrap items-center justify-between gap-5 w-full">
        <Link href="/">
          <img
            src="https://readymadeui.com/readymadeui.svg"
            alt="logo"
            className="w-36"
          />
        </Link>

        <div
          id="collapseMenu"
          className={`${
            showNavMenu ? "block" : "hidden"
          } lg:!block max-lg:before:fixed max-lg:before:bg-black max-lg:before:opacity-50 max-lg:before:inset-0 max-lg:before:z-50"`}
        >
          <button
            onClick={displayNavMenu}
            className="lg:hidden fixed top-2 right-4 z-[100] rounded-full bg-white p-3"
          >
            <X />
          </button>

          <ul className="lg:flex gap-x-5 max-lg:space-y-3 max-lg:fixed max-lg:bg-white max-lg:w-1/2 max-lg:min-w-[300px] max-lg:top-0 max-lg:left-0 max-lg:p-6 max-lg:h-full max-lg:shadow-md max-lg:overflow-auto z-50">
            {/* logo */}
            <li className="mb-6 hidden max-lg:block">
              <Link href="/">
                <img
                  src="https://readymadeui.com/readymadeui.svg"
                  alt="logo"
                  className="w-36"
                />
              </Link>
            </li>

            <HeaderLink text="Home" href="/" />
            <HeaderLink text="Team" href="/" />
            <HeaderLink text="Feature" href="/" />
            <HeaderLink text="Blog" href="/" />
            <HeaderLink text="About" href="/" />
            <HeaderLink text="Contact" href="/" />
            <HeaderLink
              text="Login"
              href="/"
              liClasses="hidden max-sm:block"
              linkClasses="auth-link"
            />
            <HeaderLink
              text="Sign up"
              href="/"
              liClasses="hidden max-sm:block"
              linkClasses="auth-link"
            />
          </ul>
        </div>

        <div className="flex max-lg:ml-auto space-x-3">
          <Link href="/login" className="max-sm:hidden auth-link">
            Login
          </Link>
          <Link href="/register" className="max-sm:hidden auth-link">
            Sign Up
          </Link>

          <button onClick={displayNavMenu} className="lg:hidden">
            <Menu />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
