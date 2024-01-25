import { Button } from "primereact/button";
import { ControllerCreateForm } from "../../../Controller/controllerCreateForm";
import { Padding } from "../../../Styles/styles";
import { PropsComponentForm, PropsComponets } from "../../../Types/types";
import BoxSelectCard from "./BoxSelectCard";

const props = ControllerCreateForm()

const Checkbox = ({ form, index, item, setform }: PropsComponets) =>
(
    <div>
        <BoxSelectCard
            index={index!}
            form={form}
            setform={setform}
            options={item?.options}
        />
        <Padding padding="8px">
            <Button
                onClick={() => {
                    props.AddBoxSelect(index!, setform, form);
                }}
                label="Adicionar"
            />
        </Padding>
    </div>
)


const RenderFormCheckbox: PropsComponentForm = {
    type: 'checklist',
    name: "Caixa de Seleção",
    component: Checkbox
};


export default RenderFormCheckbox