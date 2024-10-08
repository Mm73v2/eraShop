import axiosClient from "../axiosClient/axiosClient";
const getCartItems = async (user) => {
  try {
    const response = await axiosClient.get(`/carts?user=${user}`);
    return response.data;
  } catch (error) {
    return error;
  }
};

export default getCartItems;
