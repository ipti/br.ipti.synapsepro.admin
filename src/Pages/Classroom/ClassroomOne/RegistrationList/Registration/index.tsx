import { Form, Formik } from "formik";
import { Button } from "primereact/button";
import { useContext } from "react";
import DropdownComponent from "../../../../../Components/Dropdown";
import TextInput from "../../../../../Components/TextInput";
import RegistartionDetailsProvider, {
  RegistrationDetailsContext,
} from "../../../../../Context/Classroom/Registration/context";
import { RegistrationDetailsTypes } from "../../../../../Context/Classroom/Registration/type";
import { color_race, Status, typesex } from "../../../../../Controller/controllerGlobal";
import { Container, Padding } from "../../../../../Styles/styles";
import { useParams } from "react-router-dom";
import { useFetchRequestClassroomOne } from "../../../../../Services/Classroom/query";
import MaskInput from "../../../../../Components/InputMask";
import Loading from "../../../../../Components/Loading";

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

  const { id } = useParams();
  const { data: classroom } = useFetchRequestClassroomOne(parseInt(id!));

  if (props.isLoading) return <Loading />;

  return (
    <Container>
      <h2>{classroom?.name}</h2>
      <Padding padding="16px" />
      {props.registration ? (
        <Formik
          initialValues={props.initialValue}
          onSubmit={(values) => {
            props.handleUpdateRegistration(
              { ...values },
              props.registration?.registration_fk!
            );
          }}
        >
          {({ values, handleChange }) => {
            return (
              <Form>
                <Button label="Salvar" />
                <Padding padding="8px" />
                <div className="grid">
                  <div className="col-12 md:col-6">
                    <label>Status</label>
                    <Padding />
                    <DropdownComponent
                      value={values.status}
                      onChange={handleChange}
                      name="status"
                      placerholder="Status"
                      optionsLabel="name"
                      options={[
                        { id: Status.APPROVED, name: "Aprovado" },
                        { id: Status.REPROVED, name: "Reprovado" },
                        { id: Status.PENDING, name: "Pedente" },
                      ]}
                    />
                  </div>
                </div>{" "}
                <Padding padding="8px" />
                <h3>Dados basicos</h3>
                <Padding />
                <div className="grid">
                  <div className="col-12 md:col-6">
                    <label>Name</label>
                    <Padding />
                    <TextInput
                      value={values.name}
                      placeholder="name"
                      onChange={handleChange}
                      name="name"
                    />
                  </div>
                  <div className="col-12 md:col-6">
                    <label>Sexo</label>
                    <Padding />
                    <DropdownComponent
                      value={values.sex}
                      optionsLabel="type"
                      options={typesex}
                      name="sex"
                      onChange={handleChange}
                    />
                  </div>
                </div>{" "}
                <div className="grid">
                  <div className="col-12 md:col-6">
                    <label>Data de Nascimento</label>
                    <Padding />
                    <TextInput
                      value={values.birthday?.toString()}
                      disabled
                      placeholder="Data de Nascimento"
                      name="birthday"
                      onChange={handleChange}
                    />
                  </div>
                  <div className="col-12 md:col-6">
                    <label>Cor de raça</label>
                    <Padding />
                    <DropdownComponent
                      value={values.color_race}
                      options={color_race}
                      name="color_race"
                      onChange={handleChange}
                    />{" "}
                  </div>
                </div>{" "}
                <div className="grid">
                  <div className="col-12 md:col-6">
                    <label>CPF</label>
                    <Padding />
                    <MaskInput
                      value={values.cpf}
                      mask="999.999.999-99"
                      placeholder="CPF"
                      onChange={handleChange}
                      name="cpf"
                    />
                  </div>
                  <div className="col-12 md:col-6">
                    <label>Deficiente</label>
                    <Padding />
                    <DropdownComponent
                      value={values.deficiency}
                      placerholder="Deficiente"
                      name="deficiency"
                      onChange={handleChange}
                      options={[
                        { id: true, name: "Sim" },
                        { id: false, name: "Não" },
                      ]}
                    />
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
                      name="responsable_name"
                      onChange={handleChange}
                      placeholder="Nome do Resposável"
                    />
                  </div>
                  <div className="col-12 md:col-6">
                    <label>CPF Responsavel</label>
                    <Padding />
                    <MaskInput
                      value={values.responsable_cpf}
                      mask="999.999.999-99"
                      name="responsable_cpf"
                      placeholder="CPF do Responsável"
                      onChange={handleChange}
                    />
                  </div>
                </div>{" "}
                <div className="grid">
                  <div className="col-12 md:col-6">
                    <label>Telefone </label>
                    <Padding />
                    <MaskInput
                      value={values.responsable_telephone}
                      mask="(99) 9 9999-9999"
                      name="responsable_telephone"
                      onChange={handleChange}
                      placeholder="name"
                    />
                  </div>
                </div>{" "}
                <Padding padding="8px" />
                {/* <h3>Endereço</h3>
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
                </div>{" "} */}
              </Form>
            );
          }}
        </Formik>
      ) : null}
    </Container>
  );
};
export default Registration;
