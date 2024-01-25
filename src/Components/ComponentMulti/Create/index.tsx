import { Button } from "primereact/button";
import { ControllerCreateForm } from "../../../Controller/controllerCreateForm";
import RadioButtonCard from "./RadioButtonCard";
import { Padding } from "../../../Styles/styles";
import { PropsComponentForm, PropsComponets } from "../../../Types/types";

const props = ControllerCreateForm()

const Mult = ({form, index, item, setform}: PropsComponets) =>
(
    <div>
        <RadioButtonCard
            index={index!}
            form={form}
            setform={setform}
            options={item.options}
        />
        <Padding padding="0 32px">
            <Button
                icon="pi pi-plus"
                onClick={() => {
                    props.AddRadiosButtonandBoxSelect(index!, setform, form);
                }}
                label="Adicionar"
            />
        </Padding>
    </div>
)


const RenderForm: PropsComponentForm = {
    type: 'mult',
    name: "Multipla Escolha",
    component: Mult
};


export default RenderForm