import { ControllerViewForm } from "../../../Controller/controllerViewForm";
import { Padding } from "../../../Styles/styles";
import { PropsTextFieldCardView } from "../../../Types/types";
import TextAreaComponent from "../../TextArea";

const RenderViewTextLong = ({
  item,
  form,
  setFormResp,
}: PropsTextFieldCardView) => {
  const props = ControllerViewForm();
  return (
    <Padding padding="16px">
      <TextAreaComponent
        placeholder="Resposta longa"
        value={item?.value}
        onChange={(e) =>
          props.RespQuestion(e.target.value, item.id, form, setFormResp)
        }
      />
    </Padding>
  );
};

export default RenderViewTextLong;
