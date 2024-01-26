import { Card } from "primereact/card";
import { useContext, useEffect, useState } from "react";
import TextAreaComponent from "../../Components/TextArea";
import TextInput from "../../Components/TextInput";
import { AplicationContext } from "../../Context/Aplication/context";
import { Column, Container, Padding, Row } from "../../Styles/styles";
import { PropsAplicationContext } from "../../Types/types";
import CheckBoxCard from "../../Components/ComponentCheckbox/View";
import RadioButtonCard from "../../Components/ComponentMulti/View";
import { Button } from "primereact/button";
import { Form, Formik } from "formik";
import RenderCheckBoxCard from "../../Components/ComponentCheckbox/View";
import RenderRadioButtonCard from "../../Components/ComponentMulti/View";
import RenderViewTextField from "../../Components/ComponentTextFiled/View";

const ViewForms = () => {
  const { form } = useContext(AplicationContext) as PropsAplicationContext;

  const [formRespo, setFormResp] = useState(form ?? []);


  useEffect(() => {
    setFormResp(form)
  }, [form])




  console.log(formRespo);

  return (
    <Container>
      <Padding padding="4px">
        <Card>
          <Padding padding="16px">
            <h2>{formRespo?.title}</h2>
            {formRespo?.description ? (
              <>
                <Padding padding="8px" />
                <p>{formRespo.description}</p>
              </>
            ) : null}
          </Padding>
        </Card>
      </Padding>
      <Formik initialValues={{}} onSubmit={(values) => { }}>
        {({ values, setFieldValue }) => {
          return (
            <Form>
              {formRespo?.question.map((item, index) => {
                return (
                  <Padding padding="4px" key={index}>

                    <Card>
                      <Row id="end">
                        
                      </Row>
                      <Padding padding="16px">
                        <Row id="space-between">
                          <Column id="center">
                            <p>{item.label}</p>
                          </Column>
                         {item.required ?  <Column id="start"><h3 style={{ color: "red" }}>*</h3></Column> : null}
                        </Row>
                      </Padding>
                      {
                        item?.type === "text" ? (
                          <RenderViewTextField form={form} setFormResp={setFormResp} item={item} />
                        ) : item?.type === "text-long" ? (
                          <Padding padding="16px">
                            {/* <TextAreaComponent placeholder="Resposta longa" value={item?.value} onChange={(e) => RespQuestion(e.target.value, item.id)} /> */}
                          </Padding>
                        ) : item?.type === "mult" ? (
                          <div>
                            <RenderRadioButtonCard options={item.options} item={item} form={formRespo} setFormResp={setFormResp} />
                          </div>
                        ) : item?.type === "select-box" ? (
                          <div>
                            <RenderCheckBoxCard options={item?.options} item={item} form={formRespo} setform={setFormResp} />
                          </div>
                        ) : null
                      }
                    </Card>
                  </Padding >
                );
              })}
              <Padding padding="8px" />
              <Row id="end">
                <Button icon="pi pi-send" label="Enviar" />
              </Row>
            </Form >
          );
        }}
      </Formik >
    </Container >
  );
};

export default ViewForms;
