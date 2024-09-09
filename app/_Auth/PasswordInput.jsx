"use client";

import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

const PasswordInput = ({ label, id, error, register, ...props }) => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <>
      <label htmlFor={id} className="block text-sm text-gray-800 mb-2">
        {label}
      </label>
      <div className="relative flex items-center">
        <input
          id={id}
          name={id}
          type={showPassword ? "text" : "password"}
          {...register}
          {...props}
        />
        <button
          type="button"
          className="absolute right-0"
          onClick={() => setShowPassword(!showPassword)}
        >
          {showPassword ? (
            <EyeOff size={20} className="text-blue-500" />
          ) : (
            <Eye size={20} className="text-blue-500" />
          )}
        </button>
      </div>
      {error && (
        <span className="text-red-500 text-xs leading-normal block">
          {error}
        </span>
      )}
    </>
  );
};
export default PasswordInput;
