import CheckboxComponent from "../../Checkbox";
import { Column } from "../../../Styles/styles";
import { PropsCheckBoxCardView } from "../../../Types/types";
import { ControllerViewForm } from "../../../Controller/controllerViewForm";

export default function RenderCheckBoxCard({
  options,
  item,
  form,
  setform,
}: PropsCheckBoxCardView) {
  const props = ControllerViewForm();
  return (
    <div className="card flex justify-content-start">
      <div className="flex flex-column gap-3">
        {options?.map((category) => {
          return (
            <div key={category.key} className="flex align-items-start">
              <Column id="center">
                <CheckboxComponent
                  checked={category.value}
                  onChange={(e) => {
                    props.RespQuestionCheckBox!(
                      e.checked,
                      item.id,
                      category.id,
                      form,
                      setform
                    );
                  }}
                />
              </Column>{" "}
              <Column id="center">
                <label htmlFor={category.key} className="ml-2">
                  {category.label}
                </label>
              </Column>
            </div>
          );
        })}
      </div>
    </div>
  );
}
