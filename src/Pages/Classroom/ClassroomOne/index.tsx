import { Form, Formik } from "formik";
import { Button } from "primereact/button";
import { useContext, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import TextInput from "../../../Components/TextInput";
import pessoas from "../../../Assets/images/pessoasgray.svg"
import meeting from "../../../Assets/images/school_teacher.svg"

import ClassroomProvider, {
  ClassroomContext,
} from "../../../Context/Classroom/context";
import { ClassroomTypes } from "../../../Context/Classroom/type";
import { useFetchRequestClassroomOne } from "../../../Services/Classroom/query";
import { Column, Container, Padding, Row } from "../../../Styles/styles";
import CardItensClassrooom from "./CardItensClassroom";
import { AplicationContext } from "../../../Context/Aplication/context";
import { PropsAplicationContext } from "../../../Types/types";
import { ROLE } from "../../../Controller/controllerGlobal";
import Loading from "../../../Components/Loading";

const ClassroomOne = () => {
  return (
    <ClassroomProvider>
      <ClassroomOnePage />
    </ClassroomProvider>
  );
};

const ClassroomOnePage = () => {
  const history = useNavigate();
  const { id } = useParams();
  const props = useContext(ClassroomContext) as ClassroomTypes;
  const { data: classroom } = useFetchRequestClassroomOne(parseInt(id!));
  const [edit, setEdit] = useState(false);

  const propsAplication = useContext(
    AplicationContext
  ) as PropsAplicationContext;

  if (props.isLoading) return <Loading />;


  return (
    <Container>
      {edit ? (
        <>
          {classroom ? (
            <Formik
              initialValues={{ name: classroom?.name }}
              onSubmit={(values) => {
                props.UpdateClassroom(values, parseInt(id!));
                setEdit(false);
              }}
            >
              {({ values, handleChange }) => {
                return (
                  <Form>
                    <Row>
                      <TextInput
                        name="name"
                        onChange={handleChange}
                        value={values.name}
                      />
                      <Padding />
                      <Button label="Salvar" icon={"pi pi-save"} />
                      <Padding />
                      <Button
                        label="Cancelar"
                        severity="secondary"
                        type="button"
                        onClick={() => setEdit(false)}
                      />
                    </Row>
                  </Form>
                );
              }}
            </Formik>
          ) : null}
        </>
      ) : (
        <Row>
          <Column id="center">
            <h2>{classroom?.name}</h2>
          </Column>
          <Padding />
          {propsAplication.user?.role === (ROLE.ADMIN || ROLE.COORDINATORS) && (
            <Button text label="Editar" icon="pi pi-pencil" onClick={() => setEdit(true)} />
          )}
        </Row>
      )}
      <Padding padding="16px" />
      <div className="grid">
        <div
          className="col-12 md:col-6"
          onClick={() => history(`/turma/${id}/alunos`)}
        >
          <CardItensClassrooom
            title="Alunos"
            description="Acesse para gerenciar seus alunos"
            icon={pessoas}
            count={classroom?.registrations?.length}
          />
        </div>
        <div
          className="col-12 md:col-6"
          onClick={() => history(`/turma/${id}/encontros`)}
        >
          <CardItensClassrooom
            title="Encontros"
            description="Acesse para Gerenciar seus encontros"
            icon={meeting}
            count={classroom?.meeting?.length}
          />
        </div>
        {/* <div className="col-12 md:col-6" onClick={() => history(`/turma/${id}/relatorio`)}>
                    <CardItensClassrooom title="Tabela" description="Relatório entre Alunos e Encontros" icon="pi pi-table" />
                </div> */}
      </div>
    </Container>
  );
};

export default ClassroomOne;
