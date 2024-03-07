import { Button } from "primereact/button";
import homeImg from "../../../../../Assets/images/Pessoas.png";
import DropdownComponent from "../../../../../Components/Dropdown";
import { Column, Row } from "../../../../../Styles/styles";
import { useContext } from "react";
import { RegisterContext } from "../../../../../Context/Register/context";
import { ClassroomTypes, RegisterTypes } from "../../../../../Context/Register/type";
import ImageTextSteps from "../../ImageTextStpes";
import { Form, Formik } from "formik";
// import { RegistrationContext } from "../../containers/Registration/Context/context";

const Classroom = () => {
  const props = useContext(RegisterContext) as RegisterTypes;
  const initialValue: {
    classroom: ClassroomTypes;
  } = {
    classroom: props.dataValues.classroom ?? { id: 0, name: "" } // Defina valores padrão ou vazios conforme necessário
  };
  return (
    <>
      <Column className="contentStart" id="center">
        <ImageTextSteps img={homeImg} title="Matrícula Online" subTitle={<p>
          Escolha a turma
          <br />
          e clique no botão abaixo
        </p>} />
        <Formik initialValues={initialValue} onSubmit={(values) => {
          props.NextStep({classroom: values.classroom.id})
        }}>
          {({ values, handleChange, }) => {
            return (
              <Form>
                <Row id="center">
                  <div className="col-12 md:col-4">
                    <DropdownComponent name="classroom"  placerholder="Escolha a turma" options={props.classroom?.classrooms} value={values.classroom} onChange={handleChange} />
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
