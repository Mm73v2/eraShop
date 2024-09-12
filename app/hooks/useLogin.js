import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { actLogin, clearAuthStatus } from "../store/auth/AuthSlice";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import loginSchema from "../_common/schemas/loginSchema";
import { useRouter } from "next/navigation";
const useLogin = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
    resolver: zodResolver(loginSchema),
  });

  const dispatch = useDispatch();

  const onSubmit = async (userData) => {
    try {
      await dispatch(actLogin(userData)).unwrap();
      // Handle successful signup (e.g., redirect or show a success message)
      router.push("/");
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

  return { register, handleSubmit, onSubmit, errors };
};

export default useLogin;
