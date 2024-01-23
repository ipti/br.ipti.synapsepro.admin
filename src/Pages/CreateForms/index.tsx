import { Button } from "primereact/button";
import { Card } from "primereact/card";
import { useContext, useState } from "react";

import DropdownComponent from "../../Components/Dropdown";
import TextAreaComponent from "../../Components/TextArea";
import TextInput from "../../Components/TextInput";
import { AplicationContext } from "../../Context/Aplication/context";
import { Column, Container, Padding, Row } from "../../Styles/styles";
import { PropsAplicationContext } from "../../Types/types";
import BoxSelectCard from "./BoxSelectCard";
import RadioButtonCard from "./RadioButtonCard";
import { useNavigate } from "react-router-dom";

const CreateForms = () => {
  const { form, setform } = useContext(
    AplicationContext
  ) as PropsAplicationContext;
  const [openInput, setopenInput] = useState(false);
  const [multSelect, setMultSelect] = useState({
    name: "Resposta Curta",
    type: "text",
  });

  const gerarIdAleatorio = (tamanho: number) => {
    const caracteres =
      "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    let id = "";

    for (let i = 0; i < tamanho; i++) {
      const indiceAleatorio = Math.floor(Math.random() * caracteres.length);
      id += caracteres.charAt(indiceAleatorio);
    }

    return id;
  };


  const options = [
    { name: "Resposta Curta", type: "text" },
    { name: "Resposta Longa", type: "text-long" },
    { name: "Multipla Escolha", type: "mult" },
    { name: "Caixa de seleção", type: "select-box" },
  ];

  const editType = (index: number, novoAtributo: any, set: any, form: any) => {
    const newData = [...form];
    if (novoAtributo === "mult" || novoAtributo === "select-box") {
      if (novoAtributo === "mult") {

        newData[index] = {
          ...newData[index],
          type: novoAtributo,
          options: [{ value: 1, label: "Options 1" }],
        };
        set(newData);
      }
      if (novoAtributo === "select-box") {
        newData[index] = {
          ...newData[index],
          type: novoAtributo,
          options: [{id: gerarIdAleatorio(8), value: false, label: "Options 1" }],
        };
        set(newData);
      }
    } else {
      newData[index] = { ...newData[index], type: novoAtributo };
      set(newData);
    }
  }; // edita o tipo da questão

  const AddRadiosButtonandBoxSelect = (index: number, set: any, form: any) => {
    const newData = [...form];
    const lastposi =
      form[index]?.options[form[index]?.options.length - 1]?.value;
    form[index]?.options?.push({
      value: lastposi + 1,
      label: `Options ${lastposi + 1}`,
    });
    newData[index] = { ...newData[index], options: form[index]?.options };
    set(newData);
  }; // adiciona outra opção em questões objetivas

  const AddBoxSelect = (index: number, set: any, form: any) => {
    const newData = [...form];
    form[index]?.options?.push({
      id: gerarIdAleatorio(8),
      value: false,
      label: `Options ${form[index]?.options.length + 1}`,
    });
    newData[index] = { ...newData[index], options: form[index]?.options };
    set(newData);
  }; // adiciona outra opção em questões objetivas

  const editlabelRadioButtonandBoxSelect = (
    index: number,
    indexRadioButton: number,
    newLabel: string
  ) => {
    const newData = [...form];
    newData[index] = { ...newData[index], options: form[index]?.options };
    newData[index].options[indexRadioButton].label = newLabel;
    setform(newData);
  }; // edita label do radiobutton

  const editLabelForm = (index: number, novoLabel: string) => {
    const newData = [...form];
    newData[index] = { ...newData[index], label: novoLabel };
    setform(newData);
  }; // edit label form

  const handleTextLabel = (e: any, index: number) => {
    editLabelForm(index, e.target.value);
  }; // edit textlabel
  const handleTextDescription = (e: any, index: number) => {
    const newData = [...form];
    newData[index] = { ...newData[index], description: e.target.value };
    setform(newData);
  }; // edit textlabel

  const deleteOptions = (index: number, indexRadioButton: number) => {
    const newData = [...form];
    newData[index].options?.splice(indexRadioButton, 1);
    setform(newData);
  }; // delete options


  const history = useNavigate();

  return (
    <Container>
      {form.length > 0 ? (
        <Row id="end" style={{ gap: "4px" }}>
          <Button label="Preview" icon="pi pi-eye" onClick={() => history("/view")} />{" "}
          <Button label="Salvar" icon="pi pi-save" onClick={() => history("/view")} />{" "}
        </Row>
      ) : null}
      <Padding padding="4px" />
      {form?.map((item, index) => {
        return (
          <Padding padding="4px" key={index}>
            {item?.type === "title" ? (
              <Card>
                <Padding padding="16px">
                  {!openInput ? (
                    <h2
                      onClick={() => {
                        setopenInput(true);
                      }}
                    >
                      {item.label}
                    </h2>
                  ) : (
                    <Column style={{ width: "100%" }}>
                      <TextInput
                        value={item.label}
                        onChange={(e) => handleTextLabel(e, index)}
                        onBlur={() => setopenInput(false)}
                      />
                    </Column>
                  )}

                  <Padding padding="8px" />
                  <Column style={{ width: "100%" }}>
                    <TextAreaComponent
                      placeholder="Descrição do formulário"
                      value={item.description}
                      onChange={(e) => handleTextDescription(e, index)}
                      onBlur={() => setopenInput(false)}
                    />
                  </Column>
                </Padding>
              </Card>
            ) : (
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
                          editType(index, e.target.value.type, setform, form);
                        }}
                      />
                    </Column>
                  </Row>
                </Padding>
                {item?.type === "text" ? (
                  <Padding padding="16px">
                    <TextInput placeholder="Resposta curta" />
                  </Padding>
                ) : item?.type === "text-long" ? (
                  <Padding padding="16px">
                    <TextAreaComponent placeholder="Resposta longa" />
                  </Padding>
                ) : item?.type === "mult" ? (
                  <div>
                    <RadioButtonCard
                      index={index}
                      deleteOptions={deleteOptions}
                      editLabel={editlabelRadioButtonandBoxSelect}
                      options={item.options}
                    />
                    <div>
                      <Button
                        onClick={() => {
                          AddRadiosButtonandBoxSelect(index, setform, form);
                        }}
                        label="Adicionar"
                      />
                    </div>
                  </div>
                ) : item?.type === "select-box" ? (
                  <div>
                    <BoxSelectCard
                      index={index}
                      deleteOptions={deleteOptions}
                      options={item?.options}
                      editLabel={editlabelRadioButtonandBoxSelect}
                    />
                    <div>
                      <Button
                        onClick={() => {
                          AddBoxSelect(index, setform, form);
                        }}
                        label="Adicionar"
                      />
                    </div>
                  </div>
                ) : null}
              </Card>
            )}
          </Padding>
        );
      })}
      <Padding padding="8px" />
      <Row id="end">
        <Button
          label="Criar"
          icon="pi pi-plus"
          onClick={() =>
            setform([
              ...form,
              {
                type: "text",
                label: "Escreva aqui",
                id: gerarIdAleatorio(8),
                required: false,
              },
            ])
          }
        />
      </Row>
    </Container>
  );
};

export default CreateForms;
