import { Button } from "primereact/button";
import { Card } from "primereact/card";
import { useState } from "react";

import CheckboxComponent from "../../Components/Checkbox";
import DropdownComponent from "../../Components/Dropdown";
import Layout from "../../Components/Layout/layout";
import TextAreaComponent from "../../Components/TextArea";
import TextInput from "../../Components/TextInput";
import { Column, Container, Padding, Row } from "../../Styles/styles";
import RadioButtonCard from "./RadioButtonCard";

const CreateForms = () => {
  const [form, setform] = useState<Array<any>>([]);
  const [openInput, setopenInput] = useState(false);

  const options = [
    { name: "Resposta Curta", type: "text" },
    { name: "Resposta Longa", type: "text-long" },
    { name: "Multipla Escolha", type: "mult" },
    { name: "Caixa de seleção", type: "select-box" },
  ];

  const editType = (index: number, novoAtributo: any, set: any, form: any) => {
    const newData = [...form];
    if (novoAtributo === "mult") {
      newData[index] = {
        ...newData[index],
        type: novoAtributo,
        options: [{ value: 1, label: "Options 1" }],
      };
      set(newData);
    } else {
      newData[index] = { ...newData[index], type: novoAtributo };
      set(newData);
    }
  }; // edita o tipo da questão

  const AddRadiosButton = (index: number, set: any, form: any) => {
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

  const editlabelRadioButton = (
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
  };

  const handleTextLabel = (e: any, index: number) => {
    editLabelForm(index, e.target.value)
  }

  return (
    <Layout>
      <Container>
        {form?.map((item, index) => {
          if (item.type === "mult") {
            // console.log(editlabelRadioButton(index, 1));
          }
          return (
            <Padding padding="4px" key={index}>
              <Card>
                <Padding padding="32px">
                  <Row id="space-between">
                    <Column id="center">
                      {!openInput ? (
                        <h4
                          onClick={() => {
                            setopenInput(true);
                          }}
                        >
                          {item.label}
                        </h4>
                      ) : (
                        <TextAreaComponent
                          value={item.label}
                          onChange={(e) => handleTextLabel(e, index)}
                          onBlur={() => setopenInput(false)}
                        />
                      )}
                    </Column>
                    <Column id="start">
                      <DropdownComponent
                        value={item?.type}
                        placerholder="Selecione o Tipo"
                        options={options}
                        onChange={(e) =>
                          editType(index, e.target.value.type, setform, form)
                        }
                      />
                    </Column>
                  </Row>
                </Padding>
                {item?.type === "text" ? (
                  <Padding padding="32px">
                    <TextInput placeholder="Resposta" />
                  </Padding>
                ) : item?.type === "text-long" ? (
                  <div>
                    <TextAreaComponent />
                  </div>
                ) : item?.type === "mult" ? (
                  <div>
                    <RadioButtonCard
                      index={index}
                      editLabel={editlabelRadioButton}
                      options={item?.options}
                    />
                    <div>
                      <Button
                        onClick={() => {
                          AddRadiosButton(index, setform, form);
                        }}
                        label="Adicionar"
                      />
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
