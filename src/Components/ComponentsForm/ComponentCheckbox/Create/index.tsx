import { Button } from "primereact/button";
import BoxSelectCard from "./BoxSelectCard";
import { ControllerCreateForm } from "../../../../Controller/controllerCreateForm";
import { PropsComponentForm, PropsComponets } from "../../../../Types/types";
import { Padding } from "../../../../Styles/styles";

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