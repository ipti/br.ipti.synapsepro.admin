// Material UI

// Components
import { useContext } from "react";
import { RegisterContext } from "../../../Context/Register/context";
import { RegisterTypes } from "../../../Context/Register/type";
import Classroom from "./Steps/Classroom";
import NotPeriod from "./Steps/NotPeriod";
import Start from "./Steps/Start";
import StepOne from "./Steps/StepOne";
import StepTwo from "./Steps/StepTwo";
import Finish from "./Steps/Finish";
// import { RegistrationContext } from "../../containers/Registration/Context/context";
// import Classroom from "./ClassRoom";
// import Finish from "./Finish";
// import Quiz from "./Quiz";
// import Start from "./Start";
// import StepFour from "./StepFour";
// import StepOne from "./StepOne";
// import StepSix from "./StepSix";
// import StepThree from "./StepThree";

const Wizard = () => {

  const props = useContext(RegisterContext) as RegisterTypes
  // const { isOfLegalAge } = useContext(RegistrationContext);

  const componentMapping: { [key: string]: any } = {
    "0": Start,
    "1": Classroom,
    "2": StepOne,
    "3": StepTwo,
    "4": Finish,
    "5": NotPeriod,
    // "2": StepOne,
    // "3": StepThree,
    // "4": isOfLegalAge === '1' ? StepFour : StepSix,
    // "5": Quiz,
    // "6": Finish
  };

  const StepComponent = componentMapping[props.step!];

  return (
    <div className="col-12">
      <StepComponent />
    </div>
  );
};

export default Wizard;
