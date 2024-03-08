import { Button } from "primereact/button";
import homeImg from "../../../../../Assets/images/Pessoas.png";
import DropdownComponent from "../../../../../Components/Dropdown";
import { Column, Padding, Row } from "../../../../../Styles/styles";
import { useContext } from "react";
import { RegisterContext } from "../../../../../Context/Register/context";
import { ClassroomTypes, RegisterTypes } from "../../../../../Context/Register/type";
import ImageTextSteps from "../../ImageTextStpes";
import { Form, Formik } from "formik";
import * as Yup from "yup";

// import { RegistrationContext } from "../../containers/Registration/Context/context";

const Classroom = () => {
  const props = useContext(RegisterContext) as RegisterTypes;
  const initialValue: {
    classroom: ClassroomTypes;
  } = {
    classroom: props.dataValues.classroom ?? { id: 0, name: "" } // Defina valores padrão ou vazios conforme necessário
  };

  
  const schema = Yup.object().shape({
    classroom: Yup.object().required('Turma é obrigatório'),
  });
  return (
    <>
      <Column className="contentStart" id="center">
        <ImageTextSteps img={homeImg} title="Matrícula Online" subTitle={<p>
          Escolha a turma e clique no botão abaixo
        </p>} />
        <Formik initialValues={initialValue} validationSchema={schema} onSubmit={(values) => {
          props.NextStep({classroom: values.classroom.id})
        }}>
          {({ values, handleChange, errors, touched}) => {
            return (
              <Form>
                <Row id="center">
                  <div className="col-12 md:col-4">
                    <DropdownComponent name="classroom"  placerholder="Escolha a turma" options={props.classroom?.classrooms} value={values.classroom} onChange={handleChange} />
                    {errors.classroom && touched.classroom ? (
                      <div style={{ color: "red", marginTop: "8px" }}>Turma é obrigatório</div>
                    ) : null}    
                    <Padding padding={props.padding} />
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
