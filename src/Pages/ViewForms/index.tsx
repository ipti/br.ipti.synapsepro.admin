import { Card } from "primereact/card";
import { useContext, useEffect, useState } from "react";
import TextAreaComponent from "../../Components/TextArea";
import TextInput from "../../Components/TextInput";
import { AplicationContext } from "../../Context/Aplication/context";
import { Column, Container, Padding, Row } from "../../Styles/styles";
import { PropsAplicationContext } from "../../Types/types";
import CheckBoxCard from "./CheckBoxCard";
import RadioButtonCard from "./RadioButtonCard";
import { Button } from "primereact/button";
import { Form, Formik } from "formik";

const ViewForms = () => {
  const { form } = useContext(AplicationContext) as PropsAplicationContext;

  const [formRespo, setFormResp] = useState(form ?? []);

  console.log(formRespo)

  useEffect(() => {
    setFormResp(form)
  }, [form])



  const RespQuestion = (value: any, id: number) => {
    console.log(value)
    const newData = formRespo.map((item: any) =>
      item.id === id ? { ...item, value: value } : item
    );

    setFormResp(newData);
  }

  const RespQuestionCheckBox = (value: any, id: number, idOptions: number) => {
    console.log(idOptions)
    const newData = formRespo.map((item: any) => {
      if (item.id === id) {
        for(const option of item.options) {
          if (option.id === idOptions) {
            option.value = value
          }
        }
      }
      return item
    }
    );
    setFormResp(newData)
  }

  console.log(formRespo);

  return (
    <Container>
      <Formik initialValues={{}} onSubmit={(values) => { }}>
        {({ values, setFieldValue }) => {
          return (
            <Form>
              {formRespo?.map((item, index) => {
                return (
                  <Padding padding="4px" key={index}>
                    {item.type === "title" ? (
                      <Card>
                        <Padding padding="16px">
                          <h2>{item?.label}</h2>
                          {item?.description ? (
                            <>
                              <Padding padding="8px" />
                              <p>{item.description}</p>
                            </>
                          ) : null}
                        </Padding>
                      </Card>
                    ) : (
                      <Card>
                        <Padding padding="16px">
                          <Row id="space-between">
                            <Column id="center">
                              <p>{item.label}</p>
                            </Column>
                            <Column id="start"></Column>
                          </Row>
                        </Padding>
                        {item?.type === "text" ? (
                          <Padding padding="16px">
                            <TextInput placeholder="Resposta curta" value={item?.value} onChange={(e) => RespQuestion(e.target.value, item.id)} />
                          </Padding>
                        ) : item?.type === "text-long" ? (
                          <Padding padding="16px">
                            <TextAreaComponent placeholder="Resposta longa" value={item?.value} onChange={(e) => RespQuestion(e.target.value, item.id)} />
                          </Padding>
                        ) : item?.type === "mult" ? (
                          <div>
                            <RadioButtonCard options={item.options} item={item} handleChange={RespQuestion} />
                          </div>
                        ) : item?.type === "select-box" ? (
                          <div>
                            <CheckBoxCard options={item?.options} item={item} handleChange={RespQuestionCheckBox} />
                          </div>
                        ) : null}
                      </Card>
                    )}
                  </Padding>
                );
              })}
              <Padding padding="8px" />
              <Row id="end">
                <Button icon="pi pi-send" label="Enviar" />
              </Row>
            </Form>
          );
        }}
      </Formik>
    </Container>
  );
};

export default ViewForms;
