import { useEffect, useState } from "react";
import { getUserData, saveUserToLocalStorage } from "../services/UserServices";
import { User } from "../types/User";
import { calculateAge } from "../utils/dateUtils";

const useUser = () => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const userData = await getUserData();
        if (userData?.birthDay) {
          const age = calculateAge(userData.birthDay);
          setUser({ ...userData, age });
        } else {
          setUser(userData);
        }
        saveUserToLocalStorage(userData);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();
  }, []);

  return user;
};

export default useUser;
