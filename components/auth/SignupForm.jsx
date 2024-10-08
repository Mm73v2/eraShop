"use client";
import { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useSelector, useDispatch } from "react-redux";
import { clearAuthStatus } from "@/store/auth/AuthSlice";
import { UserRound, Mail, LoaderCircle } from "lucide-react";
import useRegister from "@/hooks/useRegister";
import PasswordInput from "./PasswordInput";
import TextInput from "@/components/auth/TextInput";
import Checkbox from "./Checkbox";
import AuthBtn from "./AuthBtn";
import signupImage from "../../assets/signup.webp";

const signupForm = () => {
  const { register, handleSubmit, onSubmit, errors, setError } = useRegister();
  const { error, status } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const onBLurHandler = (e) => {
    dispatch(clearAuthStatus());
  };

  useEffect(() => {
    if (error) {
      setError("email", {
        type: "manual",
        message: "Email is already registered",
      });
    }
  }, [error]);
  return (
    <div className="bg-white md:h-screen">
      <div className="grid md:grid-cols-2 items-center gap-8 h-full">
        <div className="max-md:order-1 p-4 bg-gray-50 h-full">
          <Image
            width={0}
            height={0}
            src={signupImage}
            className="lg:max-w-[90%] w-full h-full object-contain block mx-auto"
            alt="register-image"
          />
        </div>

        <div className="flex items-center p-6 h-full w-full">
          <form
            className="max-w-lg w-full mx-auto"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="mb-12">
              <h3 className="text-blue-500 md:text-3xl text-2xl font-extrabold max-md:text-center">
                Create an account
              </h3>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              <div>
                <TextInput
                  label="First Name"
                  id="firstName"
                  type="text"
                  className="w-full bg-transparent text-sm border-b border-gray-300 focus:border-blue-500 px-2 py-3 outline-none"
                  icon={
                    <UserRound
                      size={20}
                      className="absolute right-2 text-blue-500"
                    />
                  }
                  register={{ ...register("firstName") }}
                  error={errors.firstName?.message}
                  placeholder="Enter your first name"
                />
              </div>

              <div>
                <TextInput
                  label="Last Name"
                  id="lastName"
                  type="text"
                  className="w-full bg-transparent text-sm border-b border-gray-300 focus:border-blue-500 px-2 py-3 outline-none"
                  icon={
                    <UserRound
                      size={20}
                      className="absolute right-2 text-blue-500"
                    />
                  }
                  register={{ ...register("lastName") }}
                  error={errors.lastName?.message}
                  placeholder="Enter your last name"
                />
              </div>
            </div>

            <div className="mt-6">
              <TextInput
                label="Email"
                id="email"
                type="email"
                className="w-full bg-transparent text-sm border-b border-gray-300 focus:border-blue-500 px-2 py-3 outline-none"
                icon={
                  <Mail size={20} className="absolute right-2 text-blue-500" />
                }
                register={{ ...register("email") }}
                error={errors.email?.message}
                placeholder="Enter your email"
                onBlur={onBLurHandler}
              />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              <div className="mt-6">
                <PasswordInput
                  label="Password"
                  id="password"
                  placeholder="Enter password"
                  className="w-full bg-transparent text-sm border-b border-gray-300 focus:border-blue-500 px-2 py-3 outline-none"
                  register={{ ...register("password") }}
                  error={errors.password?.message}
                />
              </div>

              <div className="mt-6">
                <PasswordInput
                  label="Confirm Password"
                  id="confirmPassword"
                  placeholder="Confirm password"
                  className="w-full bg-transparent text-sm border-b border-gray-300 focus:border-blue-500 px-2 py-3 outline-none"
                  register={{ ...register("confirmPassword") }}
                  error={errors.confirmPassword?.message}
                />
              </div>
            </div>

            <div className="flex items-center mt-6">
              <Checkbox
                label={
                  <>
                    I accept the{" "}
                    <Link href="#" className="text-blue-500 hover:underline">
                      terms and conditions
                    </Link>
                  </>
                }
                id="terms"
                register={{ ...register("terms") }}
                error={errors.terms?.message}
              />
            </div>

            <div className="mt-12">
              <AuthBtn
                text={
                  status === "loading" ? (
                    <div className="flex items-center gap-2 justify-center">
                      loading{" "}
                      <LoaderCircle
                        size={20}
                        className="animate-spin text-white"
                      />
                    </div>
                  ) : (
                    "Create Account"
                  )
                }
                disabled={status === "loading"}
              />
              <p className="text-sm mt-6 text-gray-800">
                Already have an account?
                <Link
                  href="/login"
                  className="text-blue-500 font-semibold hover:underline ml-1"
                >
                  Login here
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default signupForm;
