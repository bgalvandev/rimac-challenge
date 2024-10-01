import { envs } from "../../config/envs";
import axios from "axios";

export const fetchPlans = async () => {
  try {
    const response = await axios.get(`${envs.BASE_URL}/plans.json`);
    return response.data.list;
  } catch (error) {
    console.error("Error al cargar los planes:", error);
    throw error;
  }
};
