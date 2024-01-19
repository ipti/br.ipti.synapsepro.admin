import { Card } from "primereact/card";
import { useContext } from "react";
import TextAreaComponent from "../../Components/TextArea";
import TextInput from "../../Components/TextInput";
import { AplicationContext } from "../../Context/Aplication/context";
import { Column, Container, Padding, Row } from "../../Styles/styles";
import { PropsAplicationContext } from "../../Types/types";
import CheckBoxCard from "./CheckBoxCard";
import RadioButtonCard from "./RadioButtonCard";

const ViewForms = () => {

    const { form } = useContext(AplicationContext) as PropsAplicationContext


    return (
        <Container>
            {form?.map((item, index) => {
                return (
                    <Padding padding="4px" key={index}>
                        <Card>
                            <Padding padding="32px">
                                <Row id="space-between">
                                    <Column id="center">
                                        <p>
                                            {item.label}
                                        </p>
                                    </Column>
                                    <Column id="start">

                                    </Column>
                                </Row>
                            </Padding>
                            {item?.type === "text" ? (
                                <Padding padding="32px">
                                    <TextInput placeholder="Resposta curta" />
                                </Padding>
                            ) : item?.type === "text-long" ? (
                                <Padding padding="32px">
                                    <TextAreaComponent placeholder="Resposta longa" />
                                </Padding>
                            ) : item?.type === "mult" ? (
                                <div>
                                    <RadioButtonCard
                                        options={item.options}
                                    />
                                </div>
                            ) : item?.type === "select-box" ? (
                                <div>
                                    <CheckBoxCard options={item?.options} />

                                </div>
                            ) : null}
                        </Card>
                    </Padding>
                );
            })}
        </Container>
    )
}

export default ViewForms