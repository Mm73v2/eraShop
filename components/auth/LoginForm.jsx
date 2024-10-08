"use client";
import Link from "next/link";
import Image from "next/image";
import { useSelector } from "react-redux";
import useLogin from "../hooks/useLogin";
import { Mail, LoaderCircle } from "lucide-react";
import TextInput from "./TextInput";
import PasswordInput from "./PasswordInput";
import Checkbox from "./Checkbox";
import AuthBtn from "./AuthBtn";
import loginImage from "../../assets/login.webp";

const LoginForm = () => {
  const { register, handleSubmit, onSubmit, errors } = useLogin();

  const { error, status } = useSelector((state) => state.auth);

  return (
    <div className="min-h-screen flex fle-col items-center justify-center py-6 px-4">
      <div className="grid md:grid-cols-2 items-center gap-4 max-w-6xl w-full">
        <div className="border border-gray-300 rounded-lg p-6 max-w-md shadow-[0_2px_22px_-4px_rgba(93,96,127,0.2)] max-md:mx-auto">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div className="mb-8">
              <h3 className="text-gray-800 text-3xl font-extrabold">Login</h3>
              <p className="text-gray-500 text-sm mt-4 leading-relaxed">
                Login to your account and explore a world of possibilities. Your
                journey begins here.
              </p>
            </div>

            <div>
              <TextInput
                label="Email"
                id="email"
                icon={
                  <Mail
                    size={20}
                    type="email"
                    className="absolute right-2 text-blue-500"
                  />
                }
                placeholder="Enter your email"
                register={{ ...register("email") }}
                error={errors.email?.message}
                className="w-full text-sm text-gray-800 border border-gray-300 px-4 py-3 rounded-lg outline-blue-600"
              />
            </div>

            <div>
              <PasswordInput
                label="Password"
                id="password"
                placeholder="Enter password"
                register={{ ...register("password") }}
                error={errors.password?.message}
                className="w-full text-sm text-gray-800 border border-gray-300 px-4 py-3 rounded-lg outline-blue-600"
              />
            </div>

            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center">
                <Checkbox
                  label="Remember me"
                  id="rememberMe"
                  register={{ ...register("rememberMe") }}
                />
              </div>

              <div className="text-sm">
                <Link
                  href="#"
                  className="text-blue-600 hover:underline font-semibold"
                >
                  Forgot your password?
                </Link>
              </div>
            </div>

            {error && (
              <span className="text-red-500 text-center block font-semibold">
                {error}
              </span>
            )}

            <div className="!mt-8">
              <AuthBtn
                text={
                  status === "loading" ? (
                    <div className="flex items-center gap-2 justify-center">
                      submitting{" "}
                      <LoaderCircle
                        size={20}
                        className="animate-spin text-white"
                      />
                    </div>
                  ) : (
                    "Submit"
                  )
                }
                disabled={status === "loading"}
              />
            </div>

            <p className="text-sm !mt-8 text-center text-gray-800">
              Don't have an account{" "}
              <Link
                href="/register"
                className="text-blue-600 font-semibold hover:underline ml-1 whitespace-nowrap"
              >
                Register here
              </Link>
            </p>
          </form>
        </div>

        <div className="lg:h-[400px] md:h-[300px] max-md:mt-8">
          <Image
            width={0}
            height={0}
            src={loginImage}
            className="w-full h-full max-md:w-4/5 mx-auto block object-cover"
            alt="Dining Experience"
          />
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
