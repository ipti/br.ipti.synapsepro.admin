import { Button } from "primereact/button";
import homeImg from "../../../../../Assets/images/Capelo.png";
import DropdownComponent from "../../../../../Components/Dropdown";
import { Column, Row } from "../../../../../Styles/styles";
// import { RegistrationContext } from "../../containers/Registration/Context/context";

const Classroom = () => {
  
  return (
    <>
      <Column className="contentStart" id="center">
        <div className="col-12">
          <img className="imageRegistration" src={homeImg} alt="" />
        </div>
        <div className="col-12">
          <h1>Matrícula Online</h1>
          <p>
            Bem-vindo ao Matrícula online, para <br /> iniciar escolha o projeto
            e clique no botão abaixo
          </p>
        </div>
        <Row id="center">
          <div className="col-12 md:col-4">
            <DropdownComponent placerholder="Escolha o projeto" />
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
              // onClick={onButton}
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
