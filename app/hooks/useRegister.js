import { useDispatch } from "react-redux";
import { actSignup } from "../store/signup/signupSlice";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import signupSchema from "../_common/schemas/signupSchema";
const useRegister = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
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

  return { register, handleSubmit, onSubmit, errors };
};

export default useRegister;
