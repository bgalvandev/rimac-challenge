import { fetchUser } from "./api/userApi";
import { User } from "../types/User";

export const getUserData = async (): Promise<User> => {
  const userData = await fetchUser();
  return userData;
};

export const saveUserToLocalStorage = (user: User): void => {
  const savedUser = localStorage.getItem("user");
  if (!savedUser) {
    localStorage.setItem("user", JSON.stringify(user));
  }
};

export const savePaymentResponsibleToLocalStorage = (formData: any): void => {
  const paymentResponsible = {
    documentType: formData.documentType,
    documentNumber: formData.documentNumber,
    cellphone: formData.cellphone,
  };

  localStorage.setItem(
    "paymentResponsible",
    JSON.stringify(paymentResponsible)
  );
};
