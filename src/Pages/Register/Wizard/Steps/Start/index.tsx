import { Button } from "primereact/button";
import { useState } from "react";
import homeImg from "../../../../../Assets/images/Capelo.png";
import { Column, Row } from "../../../../../Styles/styles";
import DropdownComponent from "../../../../../Components/Dropdown";
// import { RegistrationContext } from "../../containers/Registration/Context/context";


const Start = () => {
  const [isValid, setIsValid] = useState()
  // const { setIdEvent, idEvent, setSchool, setYear, schools, school } = useContext(RegistrationContext);


  // const onButton = () => {
  //   if (startDate <= date.getTime() && date.getTime() <= (endDate + 87000000) && idEvent !== '') {
  //     props.setIsActive(true)
  //     props.next('1', { school_identification: school.inep_id, event_pre_registration: idEvent })
  //   } else {
  //     props.setIsActive(false)
  //   }
  // }
  return (
    <>
      <Column
        id="center"
      >
        <div className="col-12">
          <img className="imageRegistration" src={homeImg} alt="" />
        </div>
        <div className="col-12">
          <h1>Matrícula Online</h1>
          <p>
            Bem-vindo ao Matrícula online, para <br /> iniciar escolha o projeto e clique no botão
            abaixo
          </p>
        </div>
        <DropdownComponent />
        <div className="col-12">
          {/* <FormControl
            component="fieldset"
            className={classes.formControl}
          >
            <FormLabel style={{ display: 'flex', flexDirection: 'row', justifyContent: "start" }} >Projeto *</FormLabel>
            <Select
              styles={customStyles}
              className="basic-single"
              classNamePrefix="select"
              placeholder="Digite o nome da projeto"
              options={schools}
              isLoading={!schools}
              onChange={selectedOption => {
                setSchool(selectedOption)
                setIsValid(true)
                const last_event = selectedOption.event_pre_registration.length - 1;
                if (selectedOption.event_pre_registration[last_event]) {
                  setIdEvent(selectedOption.event_pre_registration[last_event].id)
                  setStartDate(new Date(selectedOption.event_pre_registration[last_event].start_date).getTime())
                  setEndDate(new Date(selectedOption.event_pre_registration[last_event].end_date).getTime())
                  setYear(new Date(selectedOption.event_pre_registration[last_event].end_date).getFullYear())
                } else {
                  props.setIsActive(false)
                }
              }}
              getOptionValue={opt => opt.inep_id}
              getOptionLabel={opt => opt.name}
            />
          </FormControl> */}
        </div>
      </Column>
      <Row
        className={"marginTop marginButtom"}
      >
        <div className="col-6">
          <Button
            type="button"
            // onClick={onButton}
            className="t-button-primary"
            label="Iniciar"
          // disabled={!isValid}
          />
        </div>
      </Row>
    </>
  );
};

export default Start;
