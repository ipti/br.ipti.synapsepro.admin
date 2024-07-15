import { Form } from "formik";
import DropdownComponent from "../../../Components/Dropdown";
import TextInput from "../../../Components/TextInput";
import { ROLE } from "../../../Controller/controllerGlobal";
import { useFetchRequestSocialTechnologyLists } from "../../../Services/SocialTechnology/query";
import { Padding } from "../../../Styles/styles";

const InputsUser = ({
  values,
  handleChange,
  errors,
  touched,
  isStudent,
}: {
  values: any;
  handleChange: any;
  errors: any;
  touched: any;
  isStudent?: boolean;
}) => {
  const { data: projects } = useFetchRequestSocialTechnologyLists();

  return (
    <Form>
      <div className="grid">
        <div className="col-12 md:col-6">
          <label>Nome</label>
          <Padding />
          <TextInput
            placeholder="Nome"
            value={values.name}
            onChange={handleChange}
            name="name"
          />
          <Padding />
          {errors.name && touched.name ? (
            <div style={{ color: "red" }}>
              {errors.name}
              <Padding />
            </div>
          ) : null}
        </div>

        <div className="col-12 md:col-6">
          <label>Usuário</label>
          <Padding />
          <TextInput
            placeholder="Usuário"
            value={values.user_name}
            onChange={handleChange}
            name="user_name"
          />
          <Padding />
          {errors.user_name && touched.user_name ? (
            <div style={{ color: "red" }}>
              {errors.user_name}
              <Padding />
            </div>
          ) : null}
        </div>
      </div>{" "}
      <div className="grid">
        <div className="col-12 md:col-6">
          <label>Tipo de usuário</label>
          <Padding />
          <DropdownComponent
            name="user_type_id"
            placerholder="Tipo de usuário"
            optionsLabel="name"
            optionsValue="id"
            value={values.user_type_id}
            onChange={handleChange}
            disabled={isStudent}
            options={
              1 === ROLE.ADMIN
                ? [
                    { id: ROLE.ADMIN, name: "Admin" },
                    { id: ROLE.Conteudista, name: "Conteudista" },
                    { id: ROLE.Coordenador, name: "Coordenador" },
                    { id: ROLE.Teacher, name: "Professor" },
                    { id: ROLE.Student, name: "Aluno" },
                  ]
                : [
                    { id: ROLE.Coordenador, name: "Coordenador" },
                    { id: ROLE.Student, name: "Reaplicador" },
                  ]
            }
          />
          <Padding />
          {errors.user_type_id && touched.user_type_id ? (
            <div style={{ color: "red" }}>
              {errors.user_type_id}
              <Padding />
            </div>
          ) : null}
        </div>
        <div className="col-12 md:col-6">
          <label>Escolas</label>
          <Padding />
          <DropdownComponent
            options={projects}
            optionsLabel="name"
            optionsValue="id"
            name="school_id"
            value={values.school_id}
            onChange={handleChange}
            placerholder="Escolha a escola"
          />
          <Padding />
          {errors.school_id && touched.school_id ? (
            <div style={{ color: "red" }}>
              {errors.school_id}
              <Padding />
            </div>
          ) : null}
        </div>
      </div>
    </Form>
  );
};

export default InputsUser;
