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
  const {form, setform} = useContext(AplicationContext) as PropsAplicationContext
  const [openInput, setopenInput] = useState(false);
  const [multSelect, setMultSelect] = useState({ name: "Resposta Curta", type: "text" });

  const options = [
    { name: "Resposta Curta", type: "text" },
    { name: "Resposta Longa", type: "text-long" },
    { name: "Multipla Escolha", type: "mult" },
    { name: "Caixa de seleção", type: "select-box" },
  ];

  const editType = (index: number, novoAtributo: any, set: any, form: any) => {
    const newData = [...form];
    if (novoAtributo === "mult" || novoAtributo === "select-box") {
      newData[index] = {
        ...newData[index],
        type: novoAtributo,
        options: [{value: 1, label: "Options 1"},],
      };
      set(newData);
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
    editLabelForm(index, e.target.value)
  } // edit textlabel 

  const deleteOptions = (index: number,
    indexRadioButton: number) => {
    const newData = [...form];
    newData[index].options?.splice(indexRadioButton, 1);
    setform(newData);
  } // delete options 

  const history = useNavigate()

  return (
      <Container>
         {form.length > 0 ? <Button
          label="Preview"
          onClick={() =>
            history("/view")
          }
        /> : null}
        {form?.map((item, index) => {
          return (
            <Padding padding="4px" key={index}>
              <Card>
                <Padding padding="32px">
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
                        <TextAreaComponent
                          value={item.label}
                          onChange={(e) => handleTextLabel(e, index)}
                          onBlur={() => setopenInput(false)}
                        />
                      )}
                    </Column>
                    <Column id="start">
                      <DropdownComponent
                        value={multSelect}
                        placerholder="Selecione o Tipo"
                        options={options}
                        onChange={(e) => { setMultSelect(e.target.value); editType(index, e.target.value.type, setform, form) }
                        }
                      />
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
                    <BoxSelectCard index={index} deleteOptions={deleteOptions} options={item?.options} editLabel={editlabelRadioButtonandBoxSelect} />
                    <div>
                      <Button
                        onClick={() => {
                          AddRadiosButtonandBoxSelect(index, setform, form);
                        }}
                        label="Adicionar"
                      />
                    </div>
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
  );
};

export default CreateForms;
