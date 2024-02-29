// import { Controller } from "../../../controller/registration";
// import { useFetchRequestQuiz } from "../../../query/quiz";

import { useState } from "react";
import { Registration } from "./type";

export const RegisterState = () => {
  const padding = "16px";
  const [step, setStep] = useState(0);
  const [isOverAge, setIsOverAge] = useState<boolean | undefined>();


  const NextStep = () => {
    setStep(step + 1);
  };

  // const {schoolsList, requestSaveRegistrationMutation} = Controller()

  // const { data: anwsers } = useFetchRequestQuiz({ id: school ? school.inep_id : null })

  // useEffect(() => {
  //     if(schoolsList){
  //         setSchools(schoolsList)
  //     }
  //     if(anwsers){
  //         setQuiz(anwsers)
  //     }
  //   }, [schoolsList, anwsers])

  const initialState: Registration = {
    birthday: "",
    classroom_fk: null,
    color_race: null,
    deficiency: null,
    name: "",
    sex: null,
    zone: null,
    cpf: "",
    deficiency_description: "",
    responsable_cpf: "",
    responsable_name: "",
    responsable_telephone: "",
  };

  return {
    padding,
    NextStep,
    initialState,
    isOverAge,
    setIsOverAge,
    step
  };
};
