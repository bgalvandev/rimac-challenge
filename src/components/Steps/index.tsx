import { DesktopSteps } from "./components/DesktopSteps";
import { MobileSteps } from "./components/MobileSteps";
import "./Steps.scss";

type Step = "one" | "two";

export interface StepsProps {
  step: Step;
}

export const Steps = ({ step }: StepsProps) => {
  return (
    <div className="steps-container">
      <DesktopSteps step={step} />
      <MobileSteps step={step} />
    </div>
  );
};
