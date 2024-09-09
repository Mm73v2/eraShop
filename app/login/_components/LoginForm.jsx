"use client";
import { CheckCircle, Mail, Eye, EyeOff } from "lucide-react"; // Import necessary icons from lucide-react
import { useState } from "react";

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility

  return (
    <section>
      <div className="space-y-6 px-5">
        <div
          className="items-start hidden mt-10 mx-auto w-full md:w-2/4 max-sm:flex-col bg-green-100 text-green-800 p-4 rounded-lg relative"
          id="login-alert"
          role="alert"
        >
          <div className="flex items-center max-sm:mb-2">
            <CheckCircle className="w-[18px] text-green-500 inline mr-3" />
            <strong className="font-bold text-sm">Success!</strong>
          </div>

          <span className="block sm:inline text-sm ml-4 mr-8 max-sm:ml-0 max-sm:mt-2"></span>
        </div>
      </div>

      <div className="min-h-screen flex flex-col items-center justify-center py-6 px-4">
        <div className="grid md:grid-cols-2 items-center gap-4 max-w-6xl w-full">
          <div className="border border-gray-300 rounded-lg p-6 max-w-md shadow-[0_2px_22px_-4px_rgba(93,96,127,0.2)] max-md:mx-auto">
            <form className="space-y-4" id="login-form">
              <div className="mb-8">
                <h3 className="text-gray-800 text-3xl font-extrabold">
                  Sign in
                </h3>
                <p className="text-gray-500 text-sm mt-4 leading-relaxed">
                  Sign in to your account and explore a world of possibilities.
                  Your journey begins here.
                </p>
              </div>

              <div>
                <label
                  className="text-gray-800 text-sm mb-2 block"
                  htmlFor="email"
                >
                  Email
                </label>
                <div className="relative flex flex-wrap items-center">
                  <input
                    name="email"
                    id="email"
                    type="email"
                    required
                    className="w-full peer text-sm text-gray-800 border border-gray-300 px-4 py-3 rounded-lg outline-blue-600 invalid:[&:not(:placeholder-shown):not(:focus)]:border-red-500"
                    placeholder="Enter Email"
                    pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                  />
                  <Mail className="w-[18px] h-[18px] absolute right-4" />
                  <span className="hidden text-sm text-red-500 peer-[&:not(:placeholder-shown):not(:focus):invalid]:inline-block">
                    Please enter a valid email address
                  </span>
                </div>
              </div>

              <div>
                <label
                  className="text-gray-800 text-sm mb-2 block"
                  htmlFor="password"
                >
                  Password
                </label>
                <div className="relative flex flex-wrap items-center">
                  <input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    required
                    className="w-full peer text-sm text-gray-800 border border-gray-300 px-4 py-3 rounded-lg outline-blue-600 invalid:[&:not(:placeholder-shown):not(:focus)]:border-red-500"
                    placeholder="Enter password"
                    pattern=".{7,}"
                  />
                  {showPassword ? (
                    <EyeOff
                      className="w-[18px] h-[18px] absolute right-4 cursor-pointer"
                      onClick={() => setShowPassword(!showPassword)}
                    />
                  ) : (
                    <Eye
                      className="w-[18px] h-[18px] absolute right-4 cursor-pointer"
                      onClick={() => setShowPassword(!showPassword)}
                    />
                  )}
                  <span className="hidden text-sm text-red-500 peer-[&:not(:placeholder-shown):not(:focus):invalid]:inline-block">
                    The password must be at least 7 characters long
                  </span>
                </div>
              </div>

              <div className="flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    className="h-4 w-4 shrink-0 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  />
                  <label
                    htmlFor="remember-me"
                    className="ml-3 block text-sm text-gray-800"
                  >
                    Remember me
                  </label>
                </div>

                <div className="text-sm">
                  <a
                    href="forgot-password.html"
                    className="text-blue-600 hover:underline font-semibold"
                  >
                    Forgot your password?
                  </a>
                </div>
              </div>

              <div className="!mt-8">
                <span
                  id="wrong-info"
                  className="hidden text-red-500 mb-5 text-center"
                >
                  Email or password is wrong!
                </span>
                <button
                  type="submit"
                  className="w-full shadow-xl py-3 px-4 text-sm tracking-wide rounded-lg text-white bg-blue-600 hover:bg-blue-700 focus:outline-none"
                >
                  Log in
                </button>
              </div>

              <p className="text-sm !mt-8 text-center text-gray-800">
                Don't have an account?
                <a
                  href="signup.html"
                  className="text-blue-600 font-semibold hover:underline ml-1 whitespace-nowrap"
                >
                  Register here
                </a>
              </p>
            </form>
          </div>
          <div className="lg:h-[400px] md:h-[300px] max-md:mt-8">
            <img
              src="https://readymadeui.com/login-image.webp"
              className="w-full h-full max-md:w-4/5 mx-auto block object-cover"
              alt="Dining Experience"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoginForm;
