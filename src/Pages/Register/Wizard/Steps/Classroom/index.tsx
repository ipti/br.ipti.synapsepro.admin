import { Button } from "primereact/button";
import homeImg from "../../../../../Assets/images/Pessoas.png";
import DropdownComponent from "../../../../../Components/Dropdown";
import { Column, Row } from "../../../../../Styles/styles";
import { useContext } from "react";
import { RegisterContext } from "../../../../../Context/Register/context";
import { RegisterTypes } from "../../../../../Context/Register/type";
import ImageTextSteps from "../../ImageTextStpes";
import { Form, Formik } from "formik";
// import { RegistrationContext } from "../../containers/Registration/Context/context";

const Classroom = () => {
  const props = useContext(RegisterContext) as RegisterTypes;

  return (
    <>
      <Column className="contentStart" id="center">
        <ImageTextSteps img={homeImg} title="Matrícula Online" subTitle={<p>
          Escolha a turma
          <br />
          e clique no botão abaixo
        </p>} />
        <Formik initialValues={{ classroom_fk: {} }} onSubmit={(values) => {
          props.NextStep({classoom_fk: values.classroom_fk})
        }}>
          {({ values, handleChange, }) => {
            console.log({...values, classoom_fk: values.classroom_fk})
            return (
              <Form>
                <Row id="center">
                  <div className="col-12 md:col-4">
                    <DropdownComponent name="classroom_fk"  placerholder="Escolha a turma" options={props.classroom?.classrooms} value={values.classroom_fk} onChange={handleChange} />
                  </div>
                </Row>
                <Row id="center" className={"marginTop marginButtom"}>
                  <div className="col-4">
                    <Button
                      type="submit"
                      className="t-button-primary"
                      label="Continuar"
                    // disabled={!isValid}
                    />
                  </div>
                </Row>
              </Form>
            )
          }}
        </Formik>

        <div className="col-12">
        </div>

      </Column>
    </>
  );
};

export default Classroom;
