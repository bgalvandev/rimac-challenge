import { fetchPlans } from "./api/plansApi";
import { Plan } from "../types/Plans";

export const getPlans = async (): Promise<Plan[]> => {
  const fetchedPlans = await fetchPlans();
  return fetchedPlans;
};

export const filterPlansByAge = (plans: Plan[], userAge: number): Plan[] => {
  return plans.filter((plan) => plan.age >= userAge);
};

export const applyDiscount = (
  price: number,
  forSomeoneElse: boolean
): number => {
  return forSomeoneElse ? price * 0.95 : price;
};
