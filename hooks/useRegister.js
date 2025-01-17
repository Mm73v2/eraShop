import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { actSignup, clearAuthStatus } from "../store/auth/AuthSlice";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import signupSchema from "@/schemas/signupSchema";
const useRegister = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm({
    mode: "onBlur",
    resolver: zodResolver(signupSchema),
  });

  const dispatch = useDispatch();

  const onSubmit = async (userData) => {
    try {
      await dispatch(actSignup(userData)).unwrap();
      // Handle successful signup (e.g., redirect or show a success message)
    } catch (error) {
      // Handle error if needed
      console.error("Signup failed:", error);
    }
  };

  useEffect(() => {
    return () => {
      dispatch(clearAuthStatus());
    };
  }, []);

  return { register, handleSubmit, onSubmit, errors, setError };
};

export default useRegister;
