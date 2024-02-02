import { Button } from "primereact/button";
import { Column, Padding, Row } from "../../../Styles/styles";
import { Card } from "primereact/card";
import TextInput from "../../../Components/TextInput";
import TextAreaComponent from "../../../Components/TextArea";
import DropdownComponent from "../../../Components/Dropdown";
import { InputSwitch } from "primereact/inputswitch";
import { useContext, useState } from "react";
import { CreateOrEditFormContext } from "../../../Context/Form/CreateOrEditForm/context";
import { CreateOrEditFormTypes, PropsComponentForm } from "../../../Types/types";
import { ControllerCreateForm } from "../../../Controller/controllerCreateForm";
import { gerarIdAleatorio } from "../../../Controller/controllerGlobal";
import RenderFormTextField from "../../../Components/ComponentsForm/ComponentTextFiled/Create";
import RenderFormTextLong from "../../../Components/ComponentsForm/ComponentTextLong/Create";
import RenderForm from "../../../Components/ComponentsForm/ComponentMulti/Create";
import RenderFormCheckbox from "../../../Components/ComponentsForm/ComponentCheckbox/Create";

const Form = () => {
    const { form, setform } = useContext(
        CreateOrEditFormContext
    ) as CreateOrEditFormTypes;

    const props = ControllerCreateForm()

    const [openInput, setopenInput] = useState(false);

    const options: Array<PropsComponentForm> = [
        RenderFormTextField, RenderFormTextLong, RenderForm, RenderFormCheckbox
    ];

    const [multSelect, setMultSelect] = useState(options[0]);
    const handleTitleLabel = (e: any) => {
        const newData = { ...form, title: e.target.value };
        setform(newData);
    }; // edit textlabel

    const handleTextDescription = (e: any) => {
        const newData = { ...form, description: e.target.value };
        setform(newData);
    }; // edit description


    const handleTextLabel = (e: any, index: number) => {
        props.editLabelForm(index, e.target.value, form, setform);
    }; // edit textlabel

    return (
        <>
            <Card>
                <Padding padding="16px">
                    {!openInput ? (
                        <h2
                            onClick={() => {
                                setopenInput(true);
                            }}
                        >
                            {form?.title}
                        </h2>
                    ) : (
                        <Column style={{ width: "100%" }}>
                            <TextInput
                                value={form?.title}
                                onChange={(e) => handleTitleLabel(e)}
                                onBlur={() => setopenInput(false)}
                            />
                        </Column>
                    )}
                    <Padding padding="8px" />
                    <Column style={{ width: "100%" }}>
                        <TextAreaComponent
                            placeholder="Descrição do formulário"
                            value={form?.description}
                            onChange={(e) => handleTextDescription(e)}
                            onBlur={() => setopenInput(false)}
                        />
                    </Column>
                </Padding>
            </Card>

            <Padding padding="4px" />
            {form?.question?.map((item, index) => {
                return (
                    <Padding padding="4px" key={index}>
                        <Card>
                            <Padding padding="16px">
                                <Row id="space-between">
                                    <Column id="center">
                                        {!openInput ? (
                                            <p
                                                onClick={() => {
                                                    setopenInput(true);
                                                }}
                                            >
                                                {item.label}
                                            </p>
                                        ) : (
                                            <Column style={{ width: "100%" }}>
                                                <TextAreaComponent
                                                    value={item.label}
                                                    onChange={(e) => handleTextLabel(e, index)}
                                                    onBlur={() => setopenInput(false)}
                                                />
                                            </Column>
                                        )}
                                    </Column>
                                    <Column id="start">
                                        <DropdownComponent
                                            value={multSelect}
                                            placerholder="Selecione o Tipo"
                                            options={options}
                                            onChange={(e) => {
                                                setMultSelect(e.target.value);
                                                props.editType(index, e.value.type, setform, form);
                                            }}
                                        />
                                    </Column>
                                </Row>
                            </Padding>
                            {item?.type === "textfield" ? RenderFormTextField.component({}) : item?.type === "textlong" ? RenderFormTextLong.component({}) : item?.type === "mult" ? RenderForm.component({ form: form, index: index, item: item, setform: setform }) : item?.type === "checklist" ? (
                                RenderFormCheckbox.component({ form: form, index: index, item: item, setform: setform })
                            ) : null}
                            <div className="card flex align-items-center justify-content-end gap-2">
                                <i className="pi pi-trash cursor-pointer" onClick={() => props.deleteQuestion(index, form, setform)} />
                                <span>Obrigatória</span>
                                <InputSwitch checked={item.required} onChange={(e) => props.editIsRequiredForm(index, e.target.value, form, setform)} />
                            </div>
                        </Card>
                    </Padding>
                );
            })}
            <Padding padding="8px" />
            <Row id="end">
                <Button
                    label="Criar"
                    icon="pi pi-plus"
                    onClick={() =>
                        setform((prevForm: any) => ({
                            ...prevForm,
                            question: [
                                ...prevForm.question,
                                {
                                    type: "textfield",
                                    label: "Escreva aqui",
                                    id: gerarIdAleatorio(8),
                                    required: false,
                                },
                            ],
                        }))
                    }
                />
            </Row>
        </>
    )
}

export default Form