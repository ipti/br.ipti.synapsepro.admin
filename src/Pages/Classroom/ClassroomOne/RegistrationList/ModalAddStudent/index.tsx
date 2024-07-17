import { Form, Formik } from "formik";
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import { useContext } from "react";
import { useParams } from "react-router-dom";
import DropdownComponent from "../../../../../Components/Dropdown";
import { RegistrationClassroomContext } from "../../../../../Context/Classroom/RegistrationsList/context";
import { RegistrationClassroomTypes } from "../../../../../Context/Classroom/RegistrationsList/type";
import { useFetchRequestAllRegistration } from "../../../../../Services/Beneficiaries/query";
import { Column, Padding, Row } from "../../../../../Styles/styles";

const ModalAddStudent = ({
  onHide,
  visible,
}: {
  onHide(): void;
  visible?: boolean | undefined;
}) => {
  const { id } = useParams();

  const props = useContext(
    RegistrationClassroomContext
  ) as RegistrationClassroomTypes;


  const { data: registrationsRequests } = useFetchRequestAllRegistration();

  const initialValues = {
    classroom_id: id,
    student_id: "",
  };

  return (
    <Dialog
      onHide={onHide}
      header={"Adicionar aluno"}
      visible={visible}
      style={{ width: "30vw" }}
    >
      <Padding padding="8px" />

      <Formik
        initialValues={initialValues}
        onSubmit={(values) => {
          props.AddStudentClassroom({
            student_id: parseInt(values.student_id),
            classroom_id: parseInt(id!),
          });
          onHide();
        }}
      >
        {({ values, handleChange, errors, touched }) => {
          return (
            <Form>
              <div className="col-12">
                <label>Alunos</label>
                <Padding />
                <DropdownComponent
                  value={values.student_id}
                  placerholder="Selecione o aluno"
                  name="student_id"
                  optionsValue="id"
                  optionsLabel="name"
                  onChange={handleChange}
                  options={registrationsRequests}
                />
                {errors.student_id && touched.student_id ? (
                  <div style={{ color: "red", marginTop: "8px" }}>
                    {errors.student_id}
                  </div>
                ) : null}
              </div>
              <Padding padding="16px" />
              <Column style={{ width: "100%" }}>
                <Row id="end">
                  <Button label="Adicionar" type="submit" />
                </Row>
              </Column>
            </Form>
          );
        }}
      </Formik>
    </Dialog>
  );
};

export default ModalAddStudent;
