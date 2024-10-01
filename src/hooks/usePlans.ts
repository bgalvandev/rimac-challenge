import { useEffect, useState } from "react";
import { getPlans, filterPlansByAge } from "../services/PlanServices";
import { Plan } from "../types/Plans";

const usePlans = (userAge: number | null) => {
  const [plans, setPlans] = useState<Plan[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchPlansData = async () => {
      if (userAge !== null) {
        const fetchedPlans = await getPlans();
        const filteredPlans = filterPlansByAge(fetchedPlans, userAge);
        setPlans(filteredPlans);
        setLoading(false);
      }
    };
    fetchPlansData();
  }, [userAge]);

  return { plans, loading };
};

export default usePlans;
