import { Formik } from "formik";
import { Button } from "primereact/button";
import { useContext } from "react";
import * as Yup from "yup";
import MaskInput from "../../../../../../Components/InputMask";
import TextInput from "../../../../../../Components/TextInput";
import { RegisterContext } from "../../../../../../Context/Register/context";
import { RegisterTypes } from "../../../../../../Context/Register/type";
import { Column, Padding, Row } from "../../../../../../Styles/styles";
import InputsEquals from "../InputsEquals";


const UnderAge = () => {
  const props = useContext(RegisterContext) as RegisterTypes;

  const initialValue = {
    responsable_cpf: props.dataValues.responsable_cpf ?? "",
    responsable_name: props.dataValues.responsable_name ?? "",
    responsable_telephone: props.dataValues.responsable_telephone ?? "",
    birthday: props.dataValues.birthday ?? "",
    zone: props.dataValues.zone ?? null,
    sex: props.dataValues.sex ?? null
  }

  const schema = Yup.object().shape({
    responsable_cpf: Yup.string().required('CPF do responsável é obrigatório'),
    responsable_name: Yup.string().required('Nome do responsável é obrigatório'),
    responsable_telephone: Yup.string().required('Telefone do responsável é obrigatório'),
    birthday: Yup.string().nullable().required('Data de nascimento é obrigatória'),
    zone: Yup.string().nullable().required('Zona é obrigatória'),
    sex: Yup.string().nullable().required('Sexo é obrigatória')
  });

  return (
    <>
      <Column className="contentStart" id="center">
        <Formik initialValues={initialValue} validationSchema={schema} onSubmit={(values) => { props.NextStep(values) }}>
          {({ values, handleChange, errors, touched }) => {
            return (
              <>
                <Row id="center">
                  <div className="col-12 md:col-4">
                    <Padding />

                    <div>
                      <label>Nome do responsável *</label>
                      <Padding />
                      <TextInput placeholder="Nome do responsável *" value={values.responsable_name} name="responsable_name" onChange={handleChange} />
                    </div>
                    {errors.responsable_name && touched.responsable_name ? (
                      <div style={{ color: "red", marginTop: "8px" }}>{errors.responsable_name}</div>
                    ) : null}
                    <Padding padding={props.padding} />
                    <div>
                      <label>CPF do responvável *</label>
                      <Padding />
                      <MaskInput
                        mask="999.999.999-99" placeholder="CPF do responsável *" value={values.responsable_cpf} name="responsable_cpf" onChange={handleChange} />
                    </div>
                    {errors.responsable_cpf && touched.responsable_cpf ? (
                      <div style={{ color: "red", marginTop: "8px" }}>{errors.responsable_cpf}</div>
                    ) : null}
                    <InputsEquals errors={errors} handleChange={handleChange} touched={touched} values={values} />
                    <Padding padding={props.padding} />
                  </div>
                </Row>
                <Padding padding={props.padding} />
                <Row id="center" className={"marginTop marginButtom"}>
                  <div className="col-4">
                    <Button
                      type="submit"
                      // onClick={onButton}
                      className="t-button-primary"
                      label="Finalizar"
                    // disabled={!isValid}
                    />
                  </div>
                </Row>
              </>
            )
          }}
        </Formik>

        <Padding padding={props.padding} />
      </Column>
    </>
  );
};

export default UnderAge;
