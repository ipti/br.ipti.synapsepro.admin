
// Material UI

// Components
import { useParams } from "react-router-dom";
import Start from "./Steps/Start";
import NotPeriod from "./Steps/NotPeriod";
import Classroom from "./Steps/Classroom";
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

  const {step} = useParams()
  

  // const { isOfLegalAge } = useContext(RegistrationContext);
  
  const componentMapping: {[key: string]: any} = {
    "0": Start,
    "1": Classroom,
    "2": NotPeriod,
    // "2": StepOne,
    // "3": StepThree,
    // "4": isOfLegalAge === '1' ? StepFour : StepSix,
    // "5": Quiz,
    // "6": Finish
  };

  const stepverify: number = parseInt(step!)

  const StepComponent = componentMapping[stepverify!];


  return (
    <div className="col">
      <StepComponent />
    </div>
  );

}



export default Wizard;
