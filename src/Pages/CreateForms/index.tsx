import { Button } from "primereact/button";
import { useState } from "react";
import { Card } from "primereact/card";

import Layout from "../../Components/Layout/layout";
import { Column, Container, Padding, Row } from "../../Styles/styles";
import TextInput from "../../Components/TextInput";
import DropdownComponent from "../../Components/Dropdown";
import TextAreaComponent from "../../Components/TextArea";
import RadioButtonComponent from "../../Components/RadioButton";
import CheckboxComponent from "../../Components/Checkbox";

const CreateForms = () => {
    const [form, setform] = useState<Array<any>>([]);


    const options = [
        { name: "Resposta Curta", type: "text" },
        { name: "Resposta Longa", type: "text-long" },
        { name: "Multipla Escolha", type: "mult" },
        { name: "Caixa de seleção", type: "select-box" }
    ]

    const editType = (index: number, novoAtributo: any, set: any, form: any) => {
        const newData = [...form];
        if (novoAtributo === "mult") {
            newData[index] = { ...newData[index], type: novoAtributo, options: [{ value: 1, label: "Options 1" }] };
            set(newData);
        } else {
            newData[index] = { ...newData[index], type: novoAtributo };
            set(newData);
        }
    };

    const AddRadiosButton = (index: number, set: any, form: any) => {
        const newData = [...form];
        const lastposi = form[index]?.options[form[index]?.options.length - 1]?.value;
        form[index]?.options?.push({ value: lastposi + 1, label: `Options ${lastposi + 1}` });
        newData[index] = { ...newData[index], options: form[index]?.options };
        set(newData);
    };



    return (
        <Layout>
            <Container>
                {form?.map((item, index) => {
                    return (
                        <Padding padding="4px" key={index}>
                            <Card>
                                <Padding padding="32px">
                                    <Row id="space-between">
                                        <Column id="center">
                                            <h4>{item.label}</h4>
                                        </Column>
                                        <DropdownComponent value={item?.type} placerholder="Selecione o Tipo" options={options} onChange={(e) => editType(index, e.target.value.type, setform, form)} />
                                    </Row>
                                </Padding>
                                {item?.type === "text" ? (
                                    <div>
                                        <TextInput disabled />
                                    </div>
                                ) : item?.type === "text-long" ? (
                                    <div>
                                        <TextAreaComponent />
                                    </div>
                                ) : item?.type === "mult" ? (
                                    <div>
                                        <RadioButtonComponent options={item?.options} />
                                        <div>
                                            <Button onClick={() => { AddRadiosButton(index, setform, form) }} label="Adicionar" />
                                        </div>
                                    </div>
                                ) : item?.type === "select-box" ? (
                                    <div>
                                        <CheckboxComponent />
                                    </div>
                                ) : null}
                            </Card>

                        </Padding>
                    );
                })}
                <Button
                    label="Criar"
                    onClick={() =>
                        setform([...form, { type: "text", label: "Escreva aqui" }])
                    }
                />
            </Container>
        </Layout>
    );
};

export default CreateForms;
