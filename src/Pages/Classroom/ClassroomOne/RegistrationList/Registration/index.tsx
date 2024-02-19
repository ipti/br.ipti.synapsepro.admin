import { useContext } from "react";
import RegistartionDetailsProvider, {
  RegistrationDetailsContext,
} from "../../../../../Context/Classroom/Registration/context";
import { Container, Padding } from "../../../../../Styles/styles";
import { RegistrationDetailsTypes } from "../../../../../Context/Classroom/Registration/type";
import TextInput from "../../../../../Components/TextInput";
import { Formik } from "formik";
import { Form } from "react-router-dom";
import DropdownComponent from "../../../../../Components/Dropdown";

const Registration = () => {
  return (
    <RegistartionDetailsProvider>
      <RegistrationPage />
    </RegistartionDetailsProvider>
  );
};

const RegistrationPage = () => {
  const props = useContext(
    RegistrationDetailsContext
  ) as RegistrationDetailsTypes;

  console.log(props.registration);
  return (
    <Container>
      <h2>Beneficiarios da Turma A</h2>
      <Padding padding="16px" />
      {props.registration ? (
        <Formik initialValues={props.initialValue} onSubmit={() => {}}>
          {({ values }) => {
            return (
              <div>
                <h3>Dados basicos</h3>
                <Padding />
                <div className="grid">
                  <div className="col-12 md:col-6">
                    <label>Name</label>
                    <Padding />
                    <TextInput value={values.name} placeholder="name" />
                  </div>
                  <div className="col-12 md:col-6">
                    <label>Sexo</label>
                    <Padding />
                    <DropdownComponent
                      value={values.sex}
                      optionsLabel="type"
                      options={props.typesex}
                    />
                  </div>
                </div>{" "}
                <div className="grid">
                  <div className="col-12 md:col-6">
                    <label>Data de Nascimento</label>
                    <Padding />
                    <TextInput
                      value={values.birthday}
                      placeholder="Data de Nascimento"
                    />
                  </div>
                  <div className="col-12 md:col-6">
                    <label>Cor de raça</label>
                    <Padding />
                    <DropdownComponent
                      value={values.color_race}
                      options={props.color}
                    />{" "}
                  </div>
                </div>{" "}
                <div className="grid">
                  <div className="col-12 md:col-6">
                    <label>CPF</label>
                    <Padding />
                    <TextInput value={values.cpf} placeholder="CPF" />
                  </div>
                  <div className="col-12 md:col-6">
                    <label>Deficiente</label>
                    <Padding />
                    <DropdownComponent
                      value={values.deficiency}
                      placerholder="Deficiente"
                      options={[
                        { id: true, name: "Sim" },
                        { id: false, name: "Não" },
                      ]}
                    />
                  </div>
                </div>{" "}
                <div className="grid">
                  <div className="col-12 md:col-6">
                    <label>Name</label>
                    <Padding />
                    <TextInput value={values.name} placeholder="name" />
                  </div>
                  <div className="col-12 md:col-6">
                    <label>CPF</label>
                    <Padding />
                    <TextInput value={values.cpf} placeholder="CPF" />
                  </div>
                </div>{" "}
                <Padding padding="8px" />
                <h3>Dados Responsavel</h3>
                <Padding />
                <div className="grid">
                  <div className="col-12 md:col-6">
                    <label>Nome</label>
                    <Padding />
                    <TextInput
                      value={values.responsable_name}
                      placeholder="name"
                    />
                  </div>
                  <div className="col-12 md:col-6">
                    <label>CPF Responsavel</label>
                    <Padding />
                    <TextInput value={values.responsable_cpf} />
                  </div>
                </div>{" "}
                <div className="grid">
                  <div className="col-12 md:col-6">
                    <label>Telefone </label>
                    <Padding />
                    <TextInput
                      value={values.responsable_telephone}
                      placeholder="name"
                    />
                  </div>
                </div>{" "}
                <Padding padding="8px" />
                <h3>Endereço</h3>
                <Padding />
                <div className="grid">
                  <div className="col-12 md:col-6">
                    <label>CEP</label>
                    <Padding />
                    <TextInput
                      value={values.responsable_name}
                      placeholder="name"
                    />
                  </div>
                  <div className="col-12 md:col-6">
                    <label>Endereço</label>
                    <Padding />
                    <TextInput value={values.responsable_cpf} />
                  </div>
                </div>{" "}
                <div className="grid">
                  <div className="col-12 md:col-6">
                    <label>Complemento</label>
                    <Padding />
                    <TextInput value={values.responsable_cpf} />
                  </div>
                </div>{" "}
                <div className="grid">
                  <div className="col-12 md:col-6">
                    <label>Estado </label>
                    <Padding />
                    <TextInput
                      value={values.responsable_telephone}
                      placeholder="name"
                    />
                  </div>
                  <div className="col-12 md:col-6">
                    <label>Cidade </label>
                    <Padding />
                    <TextInput
                      value={values.responsable_telephone}
                      placeholder="name"
                    />
                  </div>
                </div>{" "}
              </div>
            );
          }}
        </Formik>
      ) : null}
    </Container>
  );
};
export default Registration;
