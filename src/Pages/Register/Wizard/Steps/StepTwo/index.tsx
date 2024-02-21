import { useContext } from "react";
import OverAge from "./OverAge";
import UnderAge from "./UnderAge";
import { RegisterContext } from "../../../../../Context/Register/context";
import { RegisterTypes } from "../../../../../Context/Register/type";

const StepTwo = () => {
  const props = useContext(RegisterContext) as RegisterTypes;
  return <>{props.isOverAge ? <OverAge /> : <UnderAge />}</>;
};

export default StepTwo;
