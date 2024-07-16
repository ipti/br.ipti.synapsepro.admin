import { Form, Formik } from "formik";
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import { useParams } from "react-router-dom";
import DropdownComponent from "../../../../../Components/Dropdown";
import { Column, Padding, Row } from "../../../../../Styles/styles";
import { RadioButton } from "primereact/radiobutton";
import { useState } from "react";
import UsersProvider from "../../../../../Context/Users/context";
import { CreateUserPage } from "../../../../Users/CreateUser";

const ModalAddStudent = ({
  onHide,
  visible,
}: {
  onHide(): void;
  visible?: boolean | undefined;
}) => {
  const { id } = useParams();

  const [isNew, setIsNew] = useState(false);

  return (
    <Dialog
      onHide={onHide}
      header={"Adicionar aluno"}
      visible={visible}
      style={{ width: "30vw" }}
    >
      <Padding padding="8px" />
      <div className="flex justify-content-center">
        <div className="flex flex-wrap gap-3">
          <div className="flex align-items-center">
            <RadioButton
              value={false}
              onChange={(e) => setIsNew(e.value)}
              checked={isNew === false}
            />
            <label htmlFor="ingredient1" className="ml-2">
              Aluno existente
            </label>
          </div>
          <div className="flex align-items-center">
            <RadioButton
              value={true}
              onChange={(e) => setIsNew(e.value)}
              checked={isNew === true}
            />
            <label className="ml-2">Novo aluno</label>
          </div>
        </div>
      </div>
      {isNew ? (
        <UsersProvider>
          <CreateUserPage isStudent />
        </UsersProvider>
      ) : (
        <Formik
          initialValues={{ classroom: "", registration: id, project: "" }}
          onSubmit={(values) => {
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
                    value={values.classroom}
                    placerholder="Selecione o aluno"
                    name="classroom"
                    optionsValue="id"
                    onChange={handleChange}
                    options={[]}
                  />
                  {errors.classroom && touched.classroom ? (
                    <div style={{ color: "red", marginTop: "8px" }}>
                      {errors.classroom}
                    </div>
                  ) : null}
                </div>
                <Padding padding="16px" />
                <Column style={{ width: "100%" }}>
                  <Row id="end">
                    <Button label="Adicionar" />
                  </Row>
                </Column>
              </Form>
            );
          }}
        </Formik>
      )}
    </Dialog>
  );
};

export default ModalAddStudent;
