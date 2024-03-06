// import { Controller } from "../../../controller/registration";
// import { useFetchRequestQuiz } from "../../../query/quiz";

import { useEffect, useState } from "react";
import { useFetchRequestProjectList } from "../../Services/PreRegistration/query";
import { Project, Projects, Registration } from "./type";

export const RegisterState = () => {
  const padding = "16px";
  const [step, setStep] = useState(0);
  const [isOverAge, setIsOverAge] = useState<boolean | undefined>();
  const [project, setproject] = useState<Projects | undefined>()
  const { data: projectRequet } = useFetchRequestProjectList();
  const [classroom, setClassroom] = useState<Project | undefined>();
  const [dataValues, setDataValues] = useState<Registration | any>({});

  const NextStep = (values: any) => {
    setStep(step + 1);
    let data = Object.assign(dataValues, values);
    setDataValues(data);
  };

  useEffect(() => {
    if (projectRequet) {
      setproject(projectRequet)
    }
  }, [projectRequet])




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
    step,
    project,
    dataValues,
    classroom, setClassroom
  };
};
