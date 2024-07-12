import { Form } from "formik";
import { MultiSelect } from "primereact/multiselect";
import { useContext } from "react";
import CalendarComponent from "../../../Components/Calendar";
import DropdownComponent from "../../../Components/Dropdown";
import MaskInput from "../../../Components/InputMask";
import TextInput from "../../../Components/TextInput";
import { AplicationContext } from "../../../Context/Aplication/context";
import {
  color_race,
  ROLE,
  typesex,
} from "../../../Controller/controllerGlobal";
import { useFetchRequestSocialTechnologyLists } from "../../../Services/SocialTechnology/query";
import { Padding } from "../../../Styles/styles";
import { PropsAplicationContext } from "../../../Types/types";

const InputsUser = ({
  values,
  handleChange,
  errors,
  touched,
}: {
  values: any;
  handleChange: any;
  errors: any;
  touched: any;
}) => {
  const { data: projects } = useFetchRequestSocialTechnologyLists();

  const props = useContext(AplicationContext) as PropsAplicationContext;
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
            value={values.username}
            onChange={handleChange}
            name="username"
          />
          <Padding />
          {errors.username && touched.username ? (
            <div style={{ color: "red" }}>
              {errors.username}
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
            name="role"
            placerholder="Tipo de usuário"
            optionsLabel="name"
            value={values.role}
            onChange={handleChange}
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
          {errors.role && touched.role ? (
            <div style={{ color: "red" }}>
              {errors.role}
              <Padding />
            </div>
          ) : null}
        </div>
        <div className="col-12 md:col-6">
          <label>Escolas</label>
          <Padding />
          <MultiSelect
            options={projects}
            optionLabel="name"
            name="project"
            value={values.project}
            onChange={handleChange}
            filter
            placeholder="Projetos"
            maxSelectedLabels={3}
            className="w-full"
          />
          <Padding />
          {errors.project && touched.project ? (
            <div style={{ color: "red" }}>
              {errors.project}
              <Padding />
            </div>
          ) : null}
        </div>
      </div>
    </Form>
  );
};

export default InputsUser;
