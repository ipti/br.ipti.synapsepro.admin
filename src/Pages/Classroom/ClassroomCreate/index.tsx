import { Form, Formik } from "formik";
import { Button } from "primereact/button";
import { useContext } from "react";
import ContentPage from "../../../Components/ContentPage";
import DropdownComponent from "../../../Components/Dropdown";
import Loading from "../../../Components/Loading";
import TextInput from "../../../Components/TextInput";
import ClassroomProvider, {
    ClassroomContext,
} from "../../../Context/Classroom/context";
import { ClassroomTypes } from "../../../Context/Classroom/type";
import { useFetchRequestAllYear } from "../../../Services/Classroom/query";
import { GetIdTs, GetIdUser } from "../../../Services/localstorage";
import { useFetchRequestUsers } from "../../../Services/Users/query";
import { Padding, Row } from "../../../Styles/styles";

const FormClassroom = () => {
  return (
    <ClassroomProvider>
      <FormClassroomPage />
    </ClassroomProvider>
  );
};

export type YearType = Year[]

export interface Year {
  id: number
  name: string
  year: number
}

export type TeacherType = teacher[]

export interface teacher {
  id: number
  user_id: number
  name: string
}



const FormClassroomPage = () => {

  const initialValues = {
    name: "",
    year_id: undefined,
    teacher_id: GetIdUser().teacher ? GetIdUser().id : undefined
  };

  const {data: yearRequest} = useFetchRequestAllYear()

  const { data: userRequest } = useFetchRequestUsers(undefined);



const year: YearType | undefined = yearRequest

const teacher: TeacherType | undefined = userRequest

  const props = useContext(ClassroomContext) as ClassroomTypes;

  if (props.isLoading) return <Loading />;

  return (
    <ContentPage title="Criar turma" description="Crie uma nova turma.">
      <Padding padding="16px" />
      <Formik
        initialValues={initialValues}
        onSubmit={(values) => {
          props.CreateClassroom({
            ...values,
            school_id: parseInt(GetIdTs()!),
          });
        }}
      >
        {({ values, errors, handleChange, touched }) => {

            console.log(values)
          return (
            <Form>
              <div className="grid">
                <div className="col-12 md:col-6">
                  <label>Nome *</label>
                  <Padding />
                  <TextInput
                    name="name"
                    onChange={handleChange}
                    placeholder="Nome *"
                    value={values.name}
                  />
                  <Padding />
                  {errors.name && touched.name ? (
                    <div style={{ color: "red", marginTop: "8px" }}>
                      {errors.name}
                    </div>
                  ) : null}
                </div>
                <div className="col-12 md:col-6">
                <label>Ano *</label>
                <Padding />
                  <DropdownComponent
                    name="year_id"
                    placerholder="Escolha o ano *"
                    optionsLabel="name"
                    optionsValue="id"
                    value={values.year_id}
                    onChange={handleChange}
                    options={
                        year
                    }
                  />
                </div>
                <div className="col-12 md:col-6">
                <label>Professor *</label>
                <Padding />
                  <DropdownComponent
                    name="teacher_id"
                    placerholder="Escolha o professor da turma *"
                    optionsLabel="name"
                    optionsValue="id"
                    value={values.teacher_id}
                    disabled={GetIdUser().teacher}
                    onChange={handleChange}
                    options={
                        teacher
                    }
                  />
                </div>
              </div>
              <Padding padding="16px" />
              <Row id="end">
                <Button label="Criar" type="submit" />
              </Row>
            </Form>
          );
        }}
      </Formik>
    </ContentPage>
  );
};

export default FormClassroom;
