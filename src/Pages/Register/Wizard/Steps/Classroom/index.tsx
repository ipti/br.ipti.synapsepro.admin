import { Button } from "primereact/button";
import homeImg from "../../../../../Assets/images/Pessoas.png";
import DropdownComponent from "../../../../../Components/Dropdown";
import { Column, Row } from "../../../../../Styles/styles";
import { useContext } from "react";
import { RegisterContext } from "../../../../../Context/Register/context";
import { RegisterTypes } from "../../../../../Context/Register/type";
import ImageTextSteps from "../../ImageTextStpes";
// import { RegistrationContext } from "../../containers/Registration/Context/context";

const Classroom = () => {
  const props = useContext(RegisterContext) as RegisterTypes;
  console.log(props.initialState)

  return (
    <>
      <Column className="contentStart" id="center">
        <ImageTextSteps img={homeImg} title="Matrícula Online" subTitle={<p>
          Escolha a turma
          <br />
          e clique no botão abaixo
        </p>} />
        <Row id="center">
          <div className="col-12 md:col-4">
            <DropdownComponent placerholder="Escolha a turma" />
          </div>
        </Row>
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
        <Row id="center" className={"marginTop marginButtom"}>
          <div className="col-4">
            <Button
              type="button"
              onClick={props.NextStep}
              className="t-button-primary"
              label="Iniciar"
            // disabled={!isValid}
            />
          </div>
        </Row>
      </Column>
    </>
  );
};

export default Classroom;
