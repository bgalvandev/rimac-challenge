import { envs } from "../../config/envs";
import axios from "axios";

export const fetchUser = async () => {
  try {
    const response = await axios.get(`${envs.BASE_URL}/user.json`);
    return response.data;
  } catch (error) {
    console.error("Error al cargar los datos de usuario::", error);
    throw error;
  }
};
